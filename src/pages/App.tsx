import { useState } from "react";
import Form from "../components/Form";
import List from "../components/List";
import Timer from "../components/Timer";
// uso do css modules permite importar o estilo como se fosse um objeto
import { ITasks } from "../types/tasks";
import style from "./App.module.scss";

function App() {
  const [tarefas, setTarefas] = useState<ITasks[]>([]);
  const [selecionado, setSelecionado] = useState<ITasks>();
  const [cronometro, setCronometro] = useState<string>();

  const selecionaTarefa = (tarefaSelecionada: ITasks) => {
    setSelecionado(tarefaSelecionada);
    setTarefas((prevTarefas) =>
      prevTarefas.map((tarefa) => ({
        ...tarefa,
        selecionado: tarefa.id === tarefaSelecionada.id ? true : false,
      }))
    );
  };

  const finalizarTarefa = () => {
    if (selecionado) {
      setTarefas((prevTarefas) =>
        prevTarefas.map((tarefa) => {
          if (tarefa.id === selecionado.id) {
            return {
              ...tarefa,
              selecionado: false,
              completado: true,
            };
          }

          return tarefa;
        })
      );
    }
  };

  return (
    // selecionar o style como componente css é preciso acessar com dot notation
    <div className={style.AppStyle}>
      <Form setTarefas={setTarefas} />
      <List tarefas={tarefas} selecionaTarefa={selecionaTarefa} />
      <Timer selecionado={selecionado} finalizarTarefa={finalizarTarefa} />
    </div>
  );
}

export default App;
