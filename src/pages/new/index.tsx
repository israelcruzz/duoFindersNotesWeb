import { useNavigate } from "react-router-dom";
import Button from "../../components/button";
import { ButtonText } from "../../components/buttonText";
import { Header } from "../../components/header";
import { Input } from "../../components/input";
import { NoteItem } from "../../components/noteItem";
import { Section } from "../../components/section";
import { Textarea } from "../../components/textarea";

function New() {
  const navigate = useNavigate()

  return (
    <>
      <Header />

      <main className="max-w-[600px] mx-auto mt-6">
        <div className="w-full flex justify-between items-center mb-6">
          <h1 className="text-4xl font-medium text-[#F4EDE8]">Criar Nota</h1>
          <ButtonText title="Voltar" onClick={() => navigate('/')} />
        </div>

        <form>
          <div className="flex flex-col gap-4 mb-6">
            <Input placeholder="Título" />
            <Textarea placeholder="Observações" />
          </div>

          <Section title="Links úteis">
            <div className="flex flex-col gap-4 mb-6">
              <NoteItem value="https://www.rocketseat.com.br/" />
              <NoteItem isNew placeholder="Novo link" />
            </div>
          </Section>

          <Section title="Marcadores">
            <div className="w-full grid grid-cols-4 gap-2 mb-6">
              <NoteItem value="React" />
              <NoteItem value="Nodejs" />
              <NoteItem value="Fullstack" />
              <NoteItem isNew placeholder="Novo link" />
            </div>
          </Section>

          <div className="mb-8">
            <Button title="Salvar" />
          </div>
        </form>
      </main>
    </>
  );
}

export default New;
