import { ComponentType, InputHTMLAttributes } from "react";
import { IconBaseProps } from "react-icons/lib";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  icon?: ComponentType<IconBaseProps>;
}

export const Input = ({ icon: Icon, ...rest }: InputProps) => {
  return (
    <div className="w-full h-[56px] flex items-center rounded-[10px] bg-[#232129] text-[#666360] p-4 gap-4">
      {Icon && <Icon size={24} />}
      <input
        type="text"
        {...rest}
        className="w-full flex-1 bg-[#232129] outline-none placeholder:text-base placeholder:font-medium placeholder:text-[#666360] text-white"
      />
    </div>
  );
};
