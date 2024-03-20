import { FiArrowLeft, FiUser, FiMail, FiLock, FiCamera } from "react-icons/fi";
import { Input } from "../../components/input";
import Button from "../../components/button";
import { useNavigate } from "react-router-dom";
import { ChangeEvent, useContext, useState } from "react";
import { AuthContext, Context } from "../../context/authContext";
import { toast } from "sonner";
import { api } from "../../services/api";
import avatarPlaceholder from "../../assets/avatar_placeholder.svg";

function Profile() {
  const navigate = useNavigate();
  const { data, update } = useContext(AuthContext) as Context;

  const avatarImg = data?.user.avatar
    ? `${api.defaults.baseURL}/files/${data?.user.avatar}`
    : avatarPlaceholder;

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const [avatarFile, setAvatarFile] = useState<any | null>(null);
  const [avatar, setAvatar] = useState<any>(avatarImg);

  const handleUpdateUser = () => {
    if (!name || !email || !currentPassword || !newPassword) {
      toast.message("Coloque todos seus dados!");
      return;
    }

    update({ name, email, currentPassword, newPassword, avatar: avatarFile });
  };

  const handleAvatarFile = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const file = e.target.files[0];
      setAvatarFile(file);

      const avatarPreview = URL.createObjectURL(file);
      setAvatar(avatarPreview);
    }
  };

  return (
    <>
      <header className="w-full h-[144px] bg-[#232129] flex items-center px-24">
        <button className="text-white" onClick={() => navigate("/")}>
          <FiArrowLeft size={24} />
        </button>
      </header>

      <form className="max-w-[400px] mx-auto flex flex-col items-center justify-center -mt-24">
        <div className="mb-6 relative">
          <img
            src={avatar}
            alt="Profile Photo"
            className="rounded-full w-[186px] h-[186px]"
          />

          <label
            htmlFor="avatar"
            className="absolute w-12 h-12 bg-[#FF9000] rounded-full flex items-center justify-center cursor-pointer bottom-0 right-0"
          >
            <FiCamera size={24} />
            <input
              type="file"
              id="avatar"
              className="hidden"
              onChange={handleAvatarFile}
            />
          </label>
        </div>

        <div className="w-full flex gap-4 flex-col mb-6">
          <Input
            type="text"
            icon={FiUser}
            placeholder={data?.user.name}
            onChange={(e) => setName(e.target.value)}
          />
          <Input
            type="text"
            icon={FiMail}
            placeholder={data?.user.email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            type="password"
            icon={FiLock}
            placeholder="Senha atual"
            onChange={(e) => setCurrentPassword(e.target.value)}
          />
          <Input
            type="password"
            icon={FiLock}
            placeholder="Nova senha"
            onChange={(e) => setNewPassword(e.target.value)}
          />
        </div>

        <Button title="Salvar" onClick={handleUpdateUser} />
      </form>
    </>
  );
}

export default Profile;
