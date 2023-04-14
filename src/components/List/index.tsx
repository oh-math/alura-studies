import style from './List.module.scss'
import Item from './item';

function List() {
  const tarefas = [
    {
      tarefa: "JavaScript",
      tempo: "02:00:00",
    },
    {
      tarefa: "Node",
      tempo: "01:00:00",
    },
  ];
  return (
    <aside className={style.listaTarefas}>
      <h2>Estudos do dia</h2>
      <ul>
        {tarefas.map((item, index) => (
         <Item item={item} key={index}/>
        ))}
      </ul>
    </aside>
  );
}

export default List;
