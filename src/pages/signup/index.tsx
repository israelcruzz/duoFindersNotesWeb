import { useNavigate } from "react-router-dom";
import backgroundImage from "../../assets/signup-image.png";
import Button from "../../components/button";
import { ButtonText } from "../../components/buttonText";
import { Input } from "../../components/input";
import { FiMail, FiLock, FiUser } from "react-icons/fi";
import { useContext, useState } from "react";
import { api } from "../../services/api";
import { toast } from "sonner";
import { AuthContext, Context } from "../../context/authContext";

export type err = {
  name?: string | null;
  email: string | null;
  password: string | null;
};

function SignUp() {
  const { setLoading } = useContext(AuthContext) as Context;

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [errorsForm, setErrorsForm] = useState<err>({
    name: "",
    email: "",
    password: "",
  });

  console.log(form);

  const navigate = useNavigate();

  const handleSubmitForm = async () => {
    let formValid = true;

    if (form.name.length === 0) {
      setErrorsForm((prev) => ({ ...prev, name: "Nome Obrigatorio" }));
      formValid = false;
    } else {
      setErrorsForm((prev) => ({ ...prev, name: null }));
    }

    if (form.email.length === 0) {
      setErrorsForm((prev) => ({ ...prev, email: "Email Obrigatorio" }));
      formValid = false;
    } else {
      setErrorsForm((prev) => ({ ...prev, email: null }));
    }

    if (form.password.length === 0) {
      setErrorsForm((prev) => ({ ...prev, password: "Senha Obrigatoria" }));
      formValid = false;
    } else {
      setErrorsForm((prev) => ({ ...prev, password: null }));
    }

    if (!formValid) return;

    try {
      setLoading(true);

      const response = await api.post("/users", {
        name: form.name,
        email: form.email,
        password: form.password,
      });

      toast.message(response.data.message);

      setLoading(false);
    } catch (error) {
      toast.message("Erro Interno");
    }
  };

  return (
    <section className="flex justify-between">
      <div>
        <img
          src={backgroundImage}
          alt="Background Image"
          className="w-[803px] h-[627px] object-cover"
        />
      </div>
      <div className="w-[637px] max-h-[620px] overflow-hidden p-28 flex flex-col items-center justify-center">
        <h1 className="text-5xl text-[#FF9000] font-bold">Notes</h1>
        <span className="text-[#999591] mb-6">
          Aplicação para salvar e gerenciar seus links úteis.
        </span>

        <h1 className="font-medium text-2xl text-[#F4EDE8] mb-6">
          Crie sua conta
        </h1>

        <form className="flex flex-col items-center justify-center">
          <div className="w-full flex flex-col gap-2 mb-6">
            <Input
              type="text"
              icon={FiUser}
              placeholder="Nome"
              onChange={(e) =>
                setForm((prev) => ({ ...prev, name: e.target.value }))
              }
            />

            {errorsForm.name && (
              <span className="mt-1 text-red-600">{errorsForm.name}</span>
            )}

            <Input
              type="text"
              icon={FiMail}
              placeholder="E-mail"
              onChange={(e) =>
                setForm((prev) => ({ ...prev, email: e.target.value }))
              }
            />

            {errorsForm.email && (
              <span className="mt-1 text-red-600">{errorsForm.email}</span>
            )}

            <Input
              type="password"
              icon={FiLock}
              placeholder="Senha"
              onChange={(e) =>
                setForm((prev) => ({ ...prev, password: e.target.value }))
              }
            />

            {errorsForm.password && (
              <span className="mt-1 text-red-600">{errorsForm.password}</span>
            )}
          </div>

          <div className="w-full mb-6">
            <Button title="Cadastrar" onClick={handleSubmitForm} />
          </div>

          <ButtonText
            isActive
            title="Voltar para o login"
            onClick={() => navigate("/")}
          />
        </form>
      </div>
    </section>
  );
}

export default SignUp;
