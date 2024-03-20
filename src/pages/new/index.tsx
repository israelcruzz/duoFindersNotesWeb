import { useNavigate } from "react-router-dom";
import Button from "../../components/button";
import { ButtonText } from "../../components/buttonText";
import { Header } from "../../components/header";
import { Input } from "../../components/input";
import { NoteItem } from "../../components/noteItem";
import { Section } from "../../components/section";
import { Textarea } from "../../components/textarea";
import { useState } from "react";
import { api } from "../../services/api";
import { toast } from "sonner";

function New() {
  const [links, setLinks] = useState<string[]>([]);
  const [newLink, setNewLink] = useState<string>("");
  const [tags, setTags] = useState<string[]>([]);
  const [newTag, setNewTag] = useState("");

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleNewLink = () => {
    if (!newLink) return;

    setLinks((prevState) => [...prevState, newLink]);
    setNewLink("");
  };

  const handleDeleteLink = (deleted: string) => {
    const filteredLinks = links.filter((link) => link !== deleted);
    setLinks(filteredLinks);
  };

  const handleNewTag = () => {
    if (!newTag) return;

    setTags((prevState) => [...prevState, newTag]);
    setNewTag("");
  };

  const handleDeleteTag = (deleted: string) => {
    const filteredTags = tags.filter((tag) => tag !== deleted);
    setTags(filteredTags);
  };

  const handleNewNote = async () => {
    try {
      await api.post("/notes", {
        title,
        description,
        tags,
        links,
      });

      toast.message("Nota Criada");
    } catch (error) {
      toast.error('Erro Interno')
    }
  };

  const navigate = useNavigate();

  return (
    <>
      <Header />

      <main className="max-w-[600px] mx-auto mt-6">
        <div className="w-full flex justify-between items-center mb-6">
          <h1 className="text-4xl font-medium text-[#F4EDE8]">Criar Nota</h1>
          <ButtonText title="Voltar" onClick={() => navigate("/")} />
        </div>

        <form>
          <div className="flex flex-col gap-4 mb-6">
            <Input
              placeholder="Título"
              type="text"
              onChange={(e) => setTitle(e.target.value)}
            />
            <Textarea
              placeholder="Observações"
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>

          <Section title="Links úteis">
            <div className="flex flex-col gap-4 mb-6">
              {links &&
                links.map((link) => {
                  return (
                    <NoteItem
                      value={link}
                      onClick={() => handleDeleteLink(link)}
                    />
                  );
                })}
              <NoteItem
                isNew
                placeholder="Novo link"
                onChange={(e) => setNewLink(e.target.value)}
                onClick={handleNewLink}
                value={newLink}
              />
            </div>
          </Section>

          <Section title="Marcadores">
            <div className="w-full grid grid-cols-4 gap-2 mb-6">
              {tags &&
                tags.map((tag) => {
                  return (
                    <NoteItem
                      value={tag}
                      onClick={() => handleDeleteTag(tag)}
                    />
                  );
                })}
              <NoteItem
                isNew
                placeholder="Nova tag"
                onChange={(e) => setNewTag(e.target.value)}
                onClick={handleNewTag}
                value={newTag}
              />
            </div>
          </Section>

          <div className="mb-8">
            <Button title="Salvar" onClick={handleNewNote} />
          </div>
        </form>
      </main>
    </>
  );
}

export default New;
