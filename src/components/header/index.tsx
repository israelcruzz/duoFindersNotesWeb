import { useContext } from "react";
import { RiShutDownLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import { AuthContext, Context } from "../../context/authContext";
import { api } from "../../services/api";
import avatarPlaceholder from "../../assets/avatar_placeholder.svg";

export const Header = () => {
  const { data, logout } = useContext(AuthContext) as Context;

  const avatarImg = data?.user.avatar
    ? `${api.defaults.baseURL}/files/${data?.user.avatar}`
    : avatarPlaceholder;

  const handleLogout = () => {
    logout();
  };

  return (
    <header className="h-[105px] w-full bg-notes flex justify-between items-center px-[45px] border-b border-[#3E3B47]">
      <section className="flex items-center justify-center gap-4">
        <Link to="/profile">
          <img
            src={avatarImg}
            alt="Foto de Perfil"
            className="w-[70px] h-[70px] rounded-full"
          />
        </Link>

        <div className="flex flex-col">
          <span className="text-sm font-normal text-[#999591]">Bem vindo,</span>
          <strong className="text-[#F4EDE8] font-bold text-lg">
            {data?.user.name}
          </strong>
        </div>
      </section>

      <section>
        <button className="text-[#999591]" onClick={handleLogout}>
          <RiShutDownLine size={24} />
        </button>
      </section>
    </header>
  );
};
