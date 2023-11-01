import { useEffect, useState } from "react";

export default function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <div>
      {users.map((user) => (
        <div key={user.id}>
          <h3>{user.name}</h3>
          <p>{user.email}</p>
        </div>
      ))}
    </div>
  );
}

/*
 *1. declare a state to hold the data
 *2. useEffect with call back and dependency array
 *3. fetch data
 */
