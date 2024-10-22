import { useState } from "react"

function Counter() {
  const [count, setCount] = useState(0);
  const handleAdd = () => {
    const newCount = count + 1
    setCount(newCount)
  }
  const handleReduce = () => {
    const newCount = count - 1
    setCount(newCount)
  }

  return (
    <div style={{border: '2px solid blue'}}>
      <h3>Counter: {count}</h3>
      <button onClick={handleAdd}>Increase</button>
      <button onClick={handleReduce}>Decrease</button>
    </div>
  )
}
export default Counter