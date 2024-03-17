import { TextareaHTMLAttributes } from "react";

export const Textarea = ({ ...rest }: TextareaHTMLAttributes<HTMLTextAreaElement>) => {
  return (
    <textarea
      {...rest}
      className="w-full h-[150px] bg-[#232129] text-white resize-none border-none rounded-[10px] p-4 mb-2 placeholder:text-[#666360] outline-none overflow-auto"
    />
  );
};
