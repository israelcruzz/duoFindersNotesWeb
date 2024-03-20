import { createContext } from "react";
import { IData } from "./authProvider";

export type SignProps = {
  name?: string;
  email: string;
  password: string;
};

export type IUpdate = {
  name: string,
  email: string,
  currentPassword: string,
  newPassword: string
  avatar?: any
}

export interface Context {
  sign: ({ email, password }: SignProps) => void;
  update: ({ name, email, currentPassword, newPassword, avatar }: IUpdate) => void
  logout: () => void;
  data: IData | null;
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

export const AuthContext = createContext<Context | null>(null);
