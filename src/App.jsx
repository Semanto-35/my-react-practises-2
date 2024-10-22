
import './App.css'
import Counter from './counter'
import Users from './Users'

function App() {
  function handleClick() {
    alert('Click')
  }
  function handleClickhere() {
    alert('Click here')
  }
  function handleClickme() {
    alert('Click Me')
  }
  return (
    <>
      <h1>Vite + React</h1>
      <Users></Users>
      <Counter></Counter>
      <button onClick={handleClick}>Click</button>
      <button onClick={handleClickhere}>Click here</button>
      <button onClick={handleClickme}>Click Me</button>
    </>
  )
}

export default App
