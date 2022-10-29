import Btn from "./button";
import styles from "./App.module.css";

function App() {
  return (
      <div>
        <h1 className={styles.title}>Welcome</h1>
        <Btn text={"CONTINUE"}/>
      </div>
  );
}

export default App;
