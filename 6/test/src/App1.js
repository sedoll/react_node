import Button from "./1/Button";
import styles from "./App.module.css";
import {useState, useEffect} from 'react';

function App() {
  const [counter, setCounter] = useState(0);
  const cntClick = () => {setCounter((value)=>++value)};
  console.log('run all time')
  const runOne = () => {
    console.log('run one')
  }
  useEffect(runOne, []) // 한 번만 실행하고 싶을 때 사용
  return (
    <div className="App">
      <h1 className={styles.title}>Wellcome!</h1>
      <p>{counter}</p>
      <Button text={'클릭'} func={cntClick}/>
    </div>
  );
}

export default App;
