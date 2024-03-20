import { useContext, useEffect, useState } from "react";
import { ButtonText } from "../../components/buttonText";
import { Header } from "../../components/header";
import { Input } from "../../components/input";
import { Note } from "../../components/note";
import { Section } from "../../components/section";
import { FiPlus } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { api } from "../../services/api";

interface INote {
  title: string;
  description: string;
  id: string;
  tags: any[];
  links: any[];
}

interface ITag {
  name: string;
}

function Home() {
  const navigate = useNavigate();
  const [notes, setNotes] = useState<INote[]>([]);
  const [tags, setTags] = useState<ITag[]>([]);
  const [title, setTitle] = useState("");
  const [tagsSelected, setTagsSelected] = useState<string[]>([]);

  useEffect(() => {
    const handleNotes = async () => {
      const response = await api.get(`/notes?title=${title}&tags=${tagsSelected}`);
      setNotes(response.data);
    };

    handleNotes();
  }, [tags, title]);

  useEffect(() => {
    const handleTags = async () => {
      const response = await api.get("/tags");
      setTags(response.data);
    };

    handleTags();
  });

  const handleTagsSelected = (tag: string) => {
    if (tag === "all") {
      return setTagsSelected([]);
    }

    if (tagsSelected.includes(tag)) {
      const filteredTags = tagsSelected.filter((tags) => tags !== tag);
      return setTagsSelected(filteredTags);
    }

    setTagsSelected((prevState) => [...prevState, tag]);
  };

  console.log(tagsSelected);
  console.log(notes);

  return (
    <main className="w-full h-[100vh] flex">
      <section className="max-w-full w-[250px] h-full flex flex-col justify-between bg-[#232129]">
        <div className="w-full flex flex-col gap-6">
          <h1 className="font-bold text-2xl text-[#FF9000] border-b border-[#3E3B47] py-[36px] text-center">
            Notes
          </h1>

          <li className="w-full list-none flex flex-col justify-center items-center gap-2">
            <ButtonText
              key={"all"}
              title="Todos"
              isActive={tagsSelected.length === 0}
              onClick={() => handleTagsSelected("all")}
            />

            {tags.map((tag, index) => {
              return (
                <ButtonText
                  key={index}
                  title={tag.name}
                  isActive={tagsSelected.includes(tag.name)}
                  onClick={() => handleTagsSelected(tag.name)}
                />
              );
            })}
          </li>
        </div>

        <button
          className="h-[80px] bg-[#FF9000] flex items-center justify-center gap-2 text-xl"
          onClick={() => navigate("/new")}
        >
          <FiPlus size={24} />
        </button>
      </section>
      <section className="w-full flex-1 flex flex-col gap-6 bg-notes">
        <Header />

        <div className="p-8 flex flex-col gap-6">
          <Input
            placeholder="Pesquisar pelo título"
            onChange={(e) => setTitle(e.target.value)}
          />

          <Section title="Minhas notas">
            <Section.Column>
              {notes &&
                notes.map((note, index) => {
                  return (
                    <Note
                      key={index}
                      id={note.id}
                      description={note.description}
                      title={note.title}
                      tags={note.tags}
                      onClick={() => navigate(`/details/${note.id}`)}
                    />
                  );
                })}
            </Section.Column>
          </Section>
        </div>
      </section>
    </main>
  );
}

export default Home;
