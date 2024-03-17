import { ButtonHTMLAttributes } from "react"

interface ButtonTextProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    title: string
    isActive?: boolean
}

export const ButtonText = ({ title, isActive = false, ...rest }: ButtonTextProps) => {
    return (
        <button
          type="button"
          {...rest}
          className={`font-normal text-base flex items-center justify-center`}
          style={{ color: `${isActive ? '#FF9000' : '#999591'}` }}
        >
            {title}
        </button>
    )
}