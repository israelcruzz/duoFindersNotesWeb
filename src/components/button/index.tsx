import { ButtonHTMLAttributes } from "react";
import { Loading } from "../loading";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
  loading?: boolean;
}

const Button = ({ title, loading = false, ...rest }: ButtonProps) => {
  return (
    <button
      type="button"
      disabled={loading}
      {...rest}
      className="w-full h-[56px] rounded-xl bg-[#FF9000] color-[#312E38] font-medium text-base flex items-center justify-center disabled:bg-[#ff910085] disabled:cursor-not-allowed hover:bg-[#FF9600]"
    >
      {loading ? <Loading /> : title}
    </button>
  );
};

export default Button;
