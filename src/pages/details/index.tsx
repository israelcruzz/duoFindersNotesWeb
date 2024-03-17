import { useNavigate } from "react-router-dom";
import Button from "../../components/button";
import { ButtonText } from "../../components/buttonText";
import { Header } from "../../components/header";
import { Section } from "../../components/section";
import { Tag } from "../../components/tag";

export const Details = () => {
  const navigate = useNavigate()

  return (
    <>
      <Header />

      <section className="max-w-[600px] mx-auto mt-6 relative">
        <div className="w-full flex justify-between items-center">
          <h1 className="text-4xl font-bold text-[#F4EDE8] mb-4">Título</h1>
          <ButtonText title="Excluir Nota" isActive />
        </div>

        <p className="text-base text-[#F4EDE8] mb-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
          neque molestias officia consequuntur beatae, illum modi libero nisi
          laudantium vitae quasi.
        </p>

        <Section title="Links úteis">
          <li className="list-none text-white flex flex-col mb-2">
            <a href="/" target="_blank">
              http://www.israel.dev
            </a>
            <a href="/" target="_blank">
              https://www.rocketseat.com
            </a>
          </li>
        </Section>

        <Section title="Marcadores">
          <div className="flex gap-2">
            <Tag title="reactjs" />
            <Tag title="reactjs" />
            <Tag title="reactjs" />
          </div>
        </Section>

        <div className="mt-4">
          <Button title="Voltar" onClick={() => navigate('/')} />
        </div>
      </section>
    </>
  );
};
