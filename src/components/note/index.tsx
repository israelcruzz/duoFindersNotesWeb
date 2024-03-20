import { ButtonHTMLAttributes } from "react";
import { Tag } from "../tag";

interface NoteProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  id: string;
  title: string;
  description: string;
  tags: any[];
}

export const Note = ({ id, title, description, tags, ...rest }: NoteProps) => {
  return (
    <button {...rest} className="w-full h-[112px] overflow-auto bg-[#3E3B47] rounded-[10px] p-4 flex flex-col gap-4">
      <h2 className="text-2xl text-[#F4EDE8] font-bold">{title}</h2>

      {tags.length > 0 && (
        <footer className="flex gap-4">
          {tags.map((tag, index) => {
            return <Tag key={index} title={tag.name} />;
          })}
        </footer>
      )}
    </button>
  );
};
