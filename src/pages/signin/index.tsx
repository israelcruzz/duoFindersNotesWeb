import { useNavigate } from "react-router-dom";
import backgroundImage from "../../assets/signup-image.png";
import Button from "../../components/button";
import { ButtonText } from "../../components/buttonText";
import { Input } from "../../components/input";
import { FiMail, FiLock } from "react-icons/fi";

function SignIn() {
  const navigate = useNavigate();

  return (
    <section className="flex justify-between">
      <div className="w-[637px] p-28 flex flex-col items-center justify-center">
        <h1 className="text-5xl text-[#FF9000] font-bold">Notes</h1>
        <span className="text-[#999591] mb-6">
          Aplicação para salvar e gerenciar seus links úteis.
        </span>

        <h1 className="font-medium text-2xl text-[#F4EDE8] mb-6">Faça Login</h1>

        <form className="flex flex-col items-center justify-center">
          <div className="w-full flex flex-col gap-2 mb-6">
            <Input icon={FiMail} placeholder="E-mail" />
            <Input icon={FiLock} placeholder="Senha" />
          </div>

          <div className="w-full mb-6">
            <Button title="Entrar" />
          </div>

          <ButtonText
            isActive
            title="Criar Conta"
            onClick={() => navigate("/new")}
          />
        </form>
      </div>
      <div>
        <img
          src={backgroundImage}
          alt="Background Image"
          className="w-[803px] h-[627px] object-cover"
        />
      </div>
    </section>
  );
}

export default SignIn;
