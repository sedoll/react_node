import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './routes/Home';
import Detail from './routes/Detail';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/> {/* react-router-dom 6 이상에서 이런 방식으로 라우팅을 설정 */}
        <Route path='/movie/:id' element={<Detail/>}/>
      </Routes>
    </Router>
  )
}

export default App;