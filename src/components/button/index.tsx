import { ButtonHTMLAttributes, useContext } from "react";
import { Loading } from "../loading";
import { AuthContext, Context } from "../../context/authContext";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
}

const Button = ({ title, ...rest }: ButtonProps) => {
  const { loading } = useContext(AuthContext) as Context

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
