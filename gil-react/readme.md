# 📌 useState()
useState는 값을 변경하여 반환후 **모든 코드를 다시 렌더** 하는(리렌더) React Hook 이다. <br>
cdn으로 쓰는 것과 다르게 노드에서는 React는 생략해서 사용한다.
그리고 파일 내에 import 해준다. 

```jsx
import {useState} from "react";
const [counter, setValus] = useState(0);
```

<br>

# 📌 useEffect()
useState를 쓰면 한번만 실행 되어도 되는 코드도 다같이 리렌터를 하기때문에 효율이 좋지 않다.
따라서 useEffect를 사용하여 한번만 실행될 코드를 설정해준다.

<br> 

useState와 같이 import 해준 뒤 첫번째 인수로 한번만 실행시킬 함수를 전달한다.

```jsx
import {useEffect} from "react";
useEffect(()=> console.log('only once!'),[]);

//두번째 인수로 useState 값을 넣으면 값이 변경 될때 렌더링 되도록 처리해 줄수 있다.
const [value, setValue] = useState(0);
useEffect(()=> console.log('hi!'),[value]);
```

> useEffect를 사용할때 return에 반환할 함수나 코드를 작성하면 destroy 시 return이 실행된다.
```js
useEffect(()=>{
    //create
    console.log('hi!');

    //destroy
    return console.log('bye');
},[]);
```
