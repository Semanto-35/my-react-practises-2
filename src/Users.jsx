import { useEffect, useState } from "react"
import User from "./User"
import './Users.css'

function Users() {
  const [users, setUsers] = useState([])
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(responce => responce.json())
      .then(data => setUsers(data))
  }, [])
  return (
    <div className="box">
      <h3>Users: {users.length}</h3>
      {
        users.map((user, id) => <User key={id} user={user}></User>)
      }
    </div>
  )
}
export default Users