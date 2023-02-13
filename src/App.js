import { useEffect,useState } from "react";

function App() {
const [users,setUsers]= useState([]);

  useEffect(()=>{
        fetch("https:jsonplaceholder.typicode.com/users")
        .then((response)=>response.json())
        .then((json)=>setUsers(json));
  },[]);
  return (
    <div>
      <h1>Users</h1>

      {users.map((user) => (
        <div>
          <p>{user.name}</p>
          <p>{user.username}</p>
        </div>
      ))}
     
    </div>
  );
}

export default App;
