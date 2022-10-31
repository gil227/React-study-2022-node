import {useState,useEffect} from "react";
// import Btn from "./button";
import styles from "./App.module.css";

function App() {
    const [counter, setValue] = useState(0);
    const [keyword, setKeyword] = useState("");
    const onClick = () => setValue((prev) => prev + 1);
    const onChangeValue = (e) => {
        setKeyword(e.target.value);
    }

    /*console.log("init");
    //로딩시 1번 실행
    useEffect(() => {
        console.log('init once!');
    },[]);

    //키워드값의 변화가 있을때만 실행
    useEffect(()=>{
        console.log("search keyword",keyword);
    },[keyword]);*/

    function CleanUp(){
        //없어질때 반환할 컴포넌트(함수)
        function destroyFn(){
            console.log('destroy');
        }

        function createFn(){
            console.log('create');
            return destroyFn();
        }

        useEffect(createFn, []);
        return <h3>Create!</h3>
    }

    const [show, setShowing] = useState(false);
    const onVisibility = () => {setShowing((value)=> !value)}

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
      <br/><br/><br/>
          {show ? <CleanUp/> : null}
        <button onClick={onVisibility}>{show ? "create!":"destroy!!"}</button>
      </div>
    );
}

export default App;
