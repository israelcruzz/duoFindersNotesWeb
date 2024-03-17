import { ButtonHTMLAttributes } from "react";
import { Tag } from "../tag";

type INote = {
  id: string;
  title: string;
  description: string;
  tags: string[];
};

interface NoteProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  data: INote;
}

export const Note = ({ data, ...rest }: NoteProps) => {
  return (
    <button {...rest} className="w-full h-[112px] overflow-auto bg-[#3E3B47] rounded-[10px] p-4 flex flex-col gap-4">
      <h2 className="text-2xl text-[#F4EDE8] font-bold">{data.title}</h2>

      {data.tags.length > 0 && (
        <footer className="flex gap-4">
          {data.tags.map((tag, index) => {
            return <Tag key={index} title={tag} />;
          })}
        </footer>
      )}
    </button>
  );
};
