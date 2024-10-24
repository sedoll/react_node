import {useState, useEffect} from 'react';

function Hello() {
  const deleteFn = () => {
    console.log('delete')
  }
  const createFn = () => {
    console.log('create')
    return deleteFn
  }
  useEffect(createFn, [])
  return (
    <h1>Hello</h1>
  )
}

function App() {
  const [showing, setShowing] = useState(false);
  const onChange = () => {
    setShowing((val)=>!val)
  }
  return (
    <div className="App">
      {showing ? <Hello/> : null}
      <button onClick={onChange}>{showing ? "Hide" : "Show"}</button>
    </div>
  );
}

export default App;