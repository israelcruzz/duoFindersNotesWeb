import { RiShutDownLine } from "react-icons/ri";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header className="h-[105px] w-full bg-notes flex justify-between items-center px-[45px] border-b border-[#3E3B47]">
      <section className="flex items-center justify-center gap-4">
        <Link to="/profile">
          <img
            src="https://avatars.githubusercontent.com/u/128995099?v=4"
            alt="Foto de Perfil"
            className="w-[70px] h-[70px] rounded-full"
          />
        </Link>

        <div className="flex flex-col">
          <span className="text-sm font-normal text-[#999591]">Bem vindo,</span>
          <strong className="text-[#F4EDE8] font-bold text-lg">Israel</strong>
        </div>
      </section>

      <section>
        <button className="text-[#999591]">
          <RiShutDownLine size={24} />
        </button>
      </section>
    </header>
  );
};
