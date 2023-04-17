import { SetStateAction, useState } from "react";
import { ITasks } from "../../types/tasks";
import Button from "../Button";
import style from "./Form.module.scss";
import { v4 as uuid } from "uuid";

// classes é uma maneira não mais tão usual de criar componentes e considerada Deprecated

export default function Form({
  setTarefas,
}: {
  setTarefas: React.Dispatch<SetStateAction<ITasks[]>>;
}) {
  const [form, setForm] = useState({
    tarefa: "",
    tempo: "00:00",
  });

  function addTask(event: React.FormEvent<HTMLFormElement>) {
    setTarefas((prevTarefas) => [
      ...prevTarefas,
      { ...form, selecionado: false, completado: false, id: uuid() },
    ]);
    event.preventDefault();
    setForm({
      tarefa: "",
      tempo: "00:00",
    });
  }

  return (
    <form className={style.novaTarefa} onSubmit={addTask}>
      <div className={style.inputContainer}>
        <label htmlFor="task">Adicione um novo estudo</label>
        <input
          type="text"
          name="task"
          value={form.tarefa}
          onChange={(event) => setForm({ ...form, tarefa: event.target.value })}
          id="task"
          placeholder="O que você quer estudar"
          required
        />
      </div>
      <div className={style.inputContainer}>
        <label htmlFor="time"></label>
        <input
          type="time"
          step="1"
          name="time"
          value={form.tempo}
          onChange={(event) => setForm({ ...form, tempo: event.target.value })}
          id="time"
          min="00:00:00"
          max="01:30:00"
          required
        />
      </div>
      {/* é boa prática do TS tipar os componentes dos botões */}
      <Button type="submit">Adicionar</Button>
    </form>
  );
}
