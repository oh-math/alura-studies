import React from "react";
import style from "./Clock.module.scss";
import { segundosParaHoras } from "../../../common/utils/time";

export default function Clock({ tempo }: { tempo: number | undefined }) {
  const segundoConvertido = segundosParaHoras({ tempo });
  
  return (
    <React.Fragment>
      <span className={style.relogioNumero}>{segundoConvertido[0]}</span>
      <span className={style.relogioNumero}>{segundoConvertido[1]}</span>
      <span className={style.relogioDivisao}>:</span>
      <span className={style.relogioNumero}>{segundoConvertido[3]}</span>
      <span className={style.relogioNumero}>{segundoConvertido[4]}</span>
      <span className={style.relogioDivisao}>:</span>
      <span className={style.relogioNumero}>{segundoConvertido[6]}</span>
      <span className={style.relogioNumero}>{segundoConvertido[7]}</span>
    </React.Fragment>
  );
}
