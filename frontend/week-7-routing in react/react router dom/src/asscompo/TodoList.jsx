import { useRecoilState, useRecoilValue } from "recoil";
import { todoListAtom, filterTodoSelector } from "../store/atoms/count";

function TodoList() {
    const [todos, setTodos] = useRecoilState(todoListAtom);
    const filterTodos = useRecoilState(filterTodoSelector);

    const toggleCompletion = (id) => {
        setTodos(
            todos.map(todo =>
                todo.id === id ? {...todo, completed: !todo.completed} : todo
            )
        );
    };

    return (
        <div>
            <ul>
                {filterTodos.map(todo => (
                    <li key={todo.id} style={{ textDecoration: todo.completed ? 'line-through' : 'none'}}>
                        <h4>{todo.title}</h4>
                        <p>{todo.description}</p>
                        <button onClick={() => toggleCompletion(todo.id)}>
                            {todo.completed ? 'Mark as Incomplete' : 'Mark as Completed'}
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default TodoList;

