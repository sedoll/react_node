import { array } from 'prop-types';
import {useState, useEffect} from 'react';

function App() {
  const [todo, setTodo] = useState("")
  const [todos, setTodos] = useState([])
  const onChange = (event) => {setTodo(event.target.value)}
  const onSubmit = (event) => {
    event.preventDefault()
    if (!todo) { // input 값이 없는 경우
      alert('값을 입력 해주세요')
      return false
    }
    setTodos((array)=>[todo, ...array]) // todos에 todo의 값을 집어넣음
    setTodo("")
    console.log(todos)
  }
  return (
    <div className="App">
      <h2>todo list length: {todos.length}</h2>
      <form onSubmit={onSubmit}> {/* button을 누르는 경우 */}
        <input type='text' placeholder='to do' value={todo} onChange={onChange}/>
        <button>Add to do</button>
      </form>
      <hr/>
      {todos.map((item, idx)=><li key={idx}>{item}</li>)}
    </div>
  );
}

export default App;
