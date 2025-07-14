import { useRecoilState } from "recoil";
import { titleAtom,  desAtom, todoListAtom } from "../store/atoms/count";

function TodoInput() {
    const [title, setTitle] = useRecoilState(titleAtom);
    const [description, setDescription] = useRecoilState(desAtom);
    const [todos, setTodos] = useRecoilState(todoListAtom);

    const addTodo = () => {
        if(!title || !description) return;
        const newTodo = {
            id: Date.now(),
            title,
            description,
            completed: false
        };

        setTodos([...todos, newTodo]);
        setTitle('');
        setDescription('');
    };

    return (
        <div>
            <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Title"
            />

                <input
                type="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Description"
            />

            <button onClick={addTodo}> Add Todo </button>
        </div>
    )
}

export default TodoInput;