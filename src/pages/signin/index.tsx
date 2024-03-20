import { useNavigate } from "react-router-dom";
import backgroundImage from "../../assets/signup-image.png";
import Button from "../../components/button";
import { ButtonText } from "../../components/buttonText";
import { Input } from "../../components/input";
import { FiMail, FiLock } from "react-icons/fi";
import { useContext, useState } from "react";
import { err } from "../signup";
import { AuthContext, Context } from "../../context/authContext";

function SignIn() {
  const navigate = useNavigate();

  const { sign } = useContext(AuthContext) as Context;

  

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [errorForm, setErrorForm] = useState<err>({
    email: "",
    password: "",
  });
  console.log(form)
  const handleLogin = () => {
    let formValid = true;

    if (form.email.length === 0) {
      setErrorForm((prev) => ({ ...prev, email: "E-mail Obrigatório" }));
      formValid = false;
    } else {
      setErrorForm((prev) => ({ ...prev, email: null }));
    }

    if (form.password.length === 0) {
      setErrorForm((prev) => ({ ...prev, password: "Senha Obrigatória" }));
      formValid = false;
    } else {
      setErrorForm((prev) => ({ ...prev, password: null }));
    }

    if (!formValid) return;

    sign({ email: form.email, password: form.password });
  };

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
            <Input
              type="text"
              icon={FiMail}
              placeholder="E-mail"
              onChange={(e) =>
                setForm((prev) => ({ ...prev, email: e.target.value }))
              }
            />

            {errorForm.email && (
              <span className="mt-1 text-red-600">{errorForm.email}</span>
            )}

            <Input
              type="password"
              icon={FiLock}
              placeholder="Senha"
              onChange={(e) =>
                setForm((prev) => ({ ...prev, password: e.target.value }))
              }
            />

            {errorForm.password && (
              <span className="mt-1 text-red-600">{errorForm.password}</span>
            )}
          </div>

          <div className="w-full mb-6">
            <Button title="Entrar" onClick={handleLogin} />
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
