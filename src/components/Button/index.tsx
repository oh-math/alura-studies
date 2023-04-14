import React from "react";
import style from "./Button.module.scss";

type Props = {
  children?: React.ReactNode;
};

export default function Button({children}: Props) {
  return <button className={style.botao}>{children}</button>;
}
