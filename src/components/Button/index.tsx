import React, { ButtonHTMLAttributes } from "react";
import style from "./Button.module.scss";
interface IButtonProps {
  children?: React.ReactNode;
  type?: ButtonHTMLAttributes<HTMLButtonElement>["type"];
  onClick?: () => void;
}

export default function Button({ children, type, onClick }: IButtonProps) {
  return (
    <button onClick={onClick} className={style.botao} type={type}>
      {children}
    </button>
  );
}
