import { ReactNode, useEffect, useState } from "react";
import { AuthContext, IUpdate, SignProps } from "./authContext";
import { api } from "../services/api";

interface AuthProviderProps {
  children: ReactNode;
}

export type IData = {
  user: any;
  token: string | undefined;
};

export type IResponse = {
  data: {
    user: any;
    token: string;
  };
};

export type IUpdateReturn = {
  data: {
    message: string;
    userUpdate: any;
  };
};

export type IUpdateAvatarReturn = {
  data: {
    userAvatarUpdate: any;
  };
};

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [data, setData] = useState<IData | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const sign = async ({ email, password }: SignProps) => {
    try {
      const response = (await api.post("/session", {
        email,
        password,
      })) as IResponse;

      const { user, token } = response.data;

      localStorage.setItem("@notes:user", JSON.stringify(user));
      localStorage.setItem("@notes:token", token);

      api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      setData({ user, token });
    } catch (error) {
      console.log(error);
    }
  };

  const update = async ({
    name,
    email,
    currentPassword,
    newPassword,
    avatar,
  }: IUpdate) => {
    try {
      if (avatar) {
        const fileUploadForm = new FormData();
        fileUploadForm.append("avatar", avatar);

        const response = (await api.patch(
          "/users/avatar",
          fileUploadForm
        )) as IUpdateAvatarReturn;

        const { userAvatarUpdate } = response.data;

        const updateUser = {
          ...data?.user,
          ...userAvatarUpdate,
        };

        localStorage.setItem("@notes:user", JSON.stringify(updateUser));

        setData({ token: data?.token, user: updateUser });
      }
      
      const response = (await api.put("/users", {
        name,
        email,
        currentPassword,
        newPassword,
      })) as IUpdateReturn;

      const { userUpdate } = response.data;

      localStorage.setItem("@notes:user", JSON.stringify(userUpdate));

      setData({ token: data?.token, user: userUpdate });
    } catch (error) {
      console.log(error);
    }
  };

  const logout = () => {
    localStorage.removeItem("@notes:user");
    localStorage.removeItem("@notes:token");

    setData(null);
  };

  useEffect(() => {
    const user = localStorage.getItem("@notes:user");
    const token = localStorage.getItem("@notes:token");

    if (user && token) {
      api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      setData({ user: JSON.parse(user), token });
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{ sign, logout, data, loading, setLoading, update }}
    >
      {children}
    </AuthContext.Provider>
  );
};
