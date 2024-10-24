import Button from "./Button";
import styles from "./App.module.css";
import {useState} from 'react';

function App() {
  const [counter, setCounter] = useState(0);
  const cntClick = () => setCounter((value)=>++value);
  return (
    <div className="App">
      <h1 className={styles.title}>Wellcome!</h1>
      <p>{counter}</p>
      <Button text={'클릭'} func={cntClick}/>
    </div>
  );
}

export default App;
