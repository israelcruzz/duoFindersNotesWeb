import { InputHTMLAttributes } from "react";
import { FiPlus, FiX } from "react-icons/fi";

interface NoteItemProps extends InputHTMLAttributes<HTMLInputElement> {
  isNew?: boolean;
  value?: string;
  onClick?: () => void;
}

export const NoteItem = ({
  isNew = false,
  value,
  onClick,
  ...rest
}: NoteItemProps) => {
  return (
    <div
      className={`w-full h-[56px] flex items-center p-4 rounded-[10px] ${
        isNew
          ? "bg-transparent border-dashed border-white border outline-none text-white p-2"
          : "bg-[#232129]"
      }`}
    >
      <input
        type="text"
        {...rest}
        value={value}
        readOnly={!isNew}
        className={`w-full flex-1 placeholder:text-[#666360] text-base ${
          isNew
            ? "bg-transparent outline-none"
            : "bg-transparent text-white outline-none"
        }`}
      />

      <button
        onClick={onClick}
        type="button"
        className={`${isNew ? "text-[#FF9000]" : "text-[#FF002E]"}`}
      >
        {isNew ? <FiPlus size={24} /> : <FiX size={24} />}
      </button>
    </div>
  );
};
