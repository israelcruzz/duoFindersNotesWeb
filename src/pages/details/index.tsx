import { useNavigate, useParams } from "react-router-dom";
import Button from "../../components/button";
import { ButtonText } from "../../components/buttonText";
import { Header } from "../../components/header";
import { Section } from "../../components/section";
import { Tag } from "../../components/tag";
import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { toast } from "sonner";
import { Loading } from "../../components/loading";

type IData = {
  id: string;
  title: string;
  description: string;
  tags: any[];
  links: any[];
};

export const Details = () => {
  const navigate = useNavigate();
  const params = useParams();
  const [data, setData] = useState<IData>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getDetails() {
      setLoading(true);
      const response = await api.get(`/notes/${params.id}`);
      setData(response.data);
      setLoading(false);
    }
    getDetails();
  }, []);

  const handleDeleteNote = async () => {
    await api.delete(`/notes/${data?.id}`);
    toast.success("Nota Deletada");
    navigate("/");
  };

  return (
    <>
      <Header />

      {loading ? (
        <Loading />
      ) : (
        <section className="max-w-[600px] mx-auto mt-6 relative">
          <div className="w-full flex justify-between items-center">
            <h1 className="text-4xl font-bold text-[#F4EDE8] mb-4">
              {data?.title}
            </h1>
            <ButtonText
              title="Excluir Nota"
              isActive
              onClick={handleDeleteNote}
            />
          </div>

          <p className="text-base text-[#F4EDE8] mb-4">{data?.description}</p>

          <Section title="Links úteis">
            {data?.links && (
              <li className="list-none text-white flex flex-col mb-2">
                {data.links.map((link) => {
                  return (
                    <a href="/" target="_blank">
                      {link.url}
                    </a>
                  );
                })}
              </li>
            )}
          </Section>

          {data?.tags && (
            <Section title="Marcadores">
              <div className="flex gap-2">
                {data.tags.map((tag) => {
                  return <Tag title={tag.name} />;
                })}
              </div>
            </Section>
          )}

          <div className="mt-4">
            <Button title="Voltar" onClick={() => navigate("/")} />
          </div>
        </section>
      )}
    </>
  );
};
