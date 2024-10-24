import Button from "./Button";
import Input from "./Input";
import styles from "./App.module.css";
import {useState, useEffect} from 'react';

function App() {
  const [counter, setCounter] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onClick = () => {setCounter((value)=>++value)};
  const onChange = (event) => {setKeyword(event.target.value)}
  console.log('계속 실행')

  useEffect(()=>{
    console.log('한 번만 실행')
  }, []) // 한 번만 실행하고 싶을 때는 빈 값 사용

  useEffect(()=> {
    if (keyword !== '' && keyword.length >= 5) {
      console.log('keyword가 바뀔 때 마다 실행', keyword)
    }
  }, [keyword]) // keyword의 값이 변할때만 동작

  useEffect(()=> {
      console.log('counter가 바뀔 때 마다 실행', counter)
  }, [counter]) // keyword의 값이 변할때만 동작

  useEffect(()=> {
    console.log(`keyword or counter가 바뀔 때 마다 실행 \n${keyword} \n${counter}`)
  }, [keyword, counter]) // keyword or counter의 값이 변할때만 동작
  return (
    <div className="App">
      <h1 className={styles.title}>Wellcome!</h1>
      <p>{keyword}</p>
      <Input func={onChange}/>
      <p>{counter}</p>
      <Button text={'클릭'} func={onClick}/>
    </div>
  );
}

export default App;
