import style from "../List.module.scss";

type Item = {
  item: {
    tarefa: string;
    tempo: string;
  };
};

export default function Item({ item }: Item) {
  const { tarefa, tempo } = item;
  return (
    <li className={style.item}>
      <h3>{tarefa}</h3>
      <span>{tempo}</span>
    </li>
  );
}
