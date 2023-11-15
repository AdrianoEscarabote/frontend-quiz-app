import { ButtonProps } from "./Button";
import style from "./style.module.css";

const Button = ({ text, onClick, disabled }: ButtonProps) => {
  return (
    <button
      className={`${
        style.button
      } HeadingS rounded-3xl w-full max-w-[564px] h-[92px] bg-pink hover:opacity-60 ${
        disabled ? "pointer-events-none" : ""
      }`}
      onClick={onClick}
      disabled={disabled}
    >
      {text}
    </button>
  );
};

export default Button;
