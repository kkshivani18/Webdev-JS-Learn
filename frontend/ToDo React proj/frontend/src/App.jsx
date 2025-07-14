import { useState, useEffect } from 'react';
import './App.css';
import { CreateToDo } from './components/CreateToDo';
import { Todos } from './components/Todos';

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/todos")
      .then(async (res) => {
        if (res.ok) {
          const json = await res.json();
          setTodos(json.todos || []); // Ensure `todos` is an array
        } else {
          console.log("recieved ", req.body);
          console.error("Failed to fetch todos");
        }
      })
      .catch((err) => console.error("Error fetching todos:", err));
  }, []); // Empty dependency array ensures this runs only once on mount

  return (
    <div>
      <CreateToDo />
      <Todos todos={todos} />
    </div>
  );
}

export default App;
