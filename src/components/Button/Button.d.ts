import { ComponentPropsWithoutRef } from "react";

interface ButtonProps extends ComponentPropsWithoutRef<"button"> {
  text: string;
  onClick: () => void;
  disabled: boolean;
  label?: string;
}

export { ButtonProps };
