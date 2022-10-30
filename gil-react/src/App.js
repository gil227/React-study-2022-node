import {useState,useEffect} from "react";
import Btn from "./button";
import styles from "./App.module.css";

function App() {
    const [counter, setValue] = useState(0);
    const [keyword, setKeyword] = useState("");
    const onClick = () => setValue((prev) => prev + 1);
    const onChangeValue = (e) => {
        setKeyword(e.target.value);
    }

    console.log("init");
    useEffect(() => {
        console.log('init once!');
    },[]);
    useEffect(()=>{

    });

    return (
      <div>
        <h1 className={styles.title}>{counter}</h1>
        <input
            type="text"
            value={keyword}
            onChange={onChangeValue}
        />
        {/*<Btn text={"CONTINUE"} onClick={onClick}/>*/}
        <button onClick={onClick}>click</button>
      </div>
    );
}

export default App;
