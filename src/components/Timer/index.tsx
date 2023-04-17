import { useEffect, useState } from "react";
import { tempoParaSegundos } from "../../common/utils/time";
import { ITasks } from "../../types/tasks";
import Button from "../Button";
import Clock from "./Clock";
import style from "./Timer.module.scss";

interface Props {
  selecionado: ITasks | undefined;
  finalizarTarefa: () => void;
}

export default function Timer({ selecionado, finalizarTarefa }: Props) {
  const [tempo, setTempo] = useState<number>();

  // função que "observa" se um estado mudou (estado reside entre os colchetes) e
  // executa uma determinada função  assim o react não entrará em loop.
  // Muito usado para fazer chamadas ao servidor
  useEffect(() => {
    const isSelecionado = selecionado?.tempo;

    isSelecionado && setTempo(tempoParaSegundos(selecionado.tempo));
  }, [selecionado]);

  const regressiva = (contador: number = 0) => {
    setTimeout(() => {
      if (contador > 0) {
        setTempo(contador - 1);

        return regressiva(contador - 1);
      }
      finalizarTarefa();
    }, 1000);
  };

  return (
    <div className={style.cronometro}>
      <p className={style.titulo}>Escolha um card e inicie o cronômetro</p>
      <div className={style.relogioWrapper}>
        <Clock tempo={tempo} />
      </div>
      <Button onClick={() => regressiva(tempo)}>Começar</Button>
    </div>
  );
}
