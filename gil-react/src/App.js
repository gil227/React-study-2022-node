import {useState,useEffect} from "react";
import Btn from "./button";
import styles from "./App.module.css";

function App() {
    const [counter, setValue] = useState(0);
    const onClick = () => setValue((prev) => prev + 1);

    console.log("init");
    useEffect(() => {
        console.log('init once!');
    },[]);

    return (
      <div>
        <h1 className={styles.title}>{counter}</h1>
        {/*<Btn text={"CONTINUE"} onClick={onClick}/>*/}
        <button onClick={onClick}>click</button>
      </div>
    );
}

export default App;
