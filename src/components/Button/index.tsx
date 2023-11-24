import { twMerge } from "tailwind-merge";
import { ButtonProps } from "./Button";
import style from "./style.module.css";

const Button = ({ text, onClick, disabled, className, label }: ButtonProps) => {
  const buttonClassName = twMerge(
    className,
    `${
      style.button
    } HeadingS text-white rounded-3xl w-full max-w-[564px] h-[92px] bg-pink hover:opacity-60 ${
      disabled ? "pointer-events-none opacity-50" : ""
    }`
  );
  return (
    <button
      aria-label={label}
      className={buttonClassName}
      onClick={onClick}
      disabled={disabled}
    >
      {text}
    </button>
  );
};

export default Button;
