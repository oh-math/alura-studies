import Form from "../components/Form";
import List from "../components/List";
import Timer from "../components/Timer";
// uso do css modules permite importar o estilo como se fosse um objeto
import style from "./App.module.scss";

function App() {
  return (
    // selecionar o style como componente css é preciso acessar com dot notation
    <div className={style.AppStyle}>
      <Form />
      <List />
      <Timer />
    </div>
  );
}

export default App;
