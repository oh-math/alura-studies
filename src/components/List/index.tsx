import React from "react";

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
    <aside>
      <h2></h2>
      <ul>
        {tarefas.map((item, index) => (
            <li key={index}>
                <h3>{item.tarefa}</h3>
                <h3>{item.tempo}</h3>
            </li>
        ))}
      </ul>
    </aside>
  );
}

export default List;
