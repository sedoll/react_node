import Button from "./Button";
import styles from "./App.module.css";

function App() {
  return (
    <div className="App">
      <h1 className={styles.title}>Wellcome!</h1>
      <Button text={'안녕하'}/>
      <Button text={1234}/>
    </div>
  );
}

export default App;
