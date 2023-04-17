import { ITasks } from "../../types/tasks";
import style from "./List.module.scss";
import Item from "./item";

interface ListProps {
  tarefas: ITasks[];
  selecionaTarefa: (tarefa: ITasks) => void;
}

function List({ tarefas, selecionaTarefa }: ListProps) {
  // função useState desestruturada pegando o estado a função para mudar o msm

  return (
    <aside className={style.listaTarefas}>
      <h2>Estudos do dia</h2>
      <ul>
        {tarefas.map((item) => (
          <Item selecionaTarefa={selecionaTarefa} key={item.id} {...item} />
        ))}
      </ul>
    </aside>
  );
}

export default List;
