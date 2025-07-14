import { atom, selector } from 'recoil';

export const countAtom = atom({
    key: "countAtom",
    default: 0 
});

export const evenSelector = selector({
    key: "evenSelector",
    get: ({get}) => {
        const count = get(countAtom);
        return count % 2 == 0;
    }
});

//---------------------------------------------------------------------

// Assignment ToDo with selectors
export const titleAtom = atom({
    key: "titleAtom",
    default: ''
})

export const desAtom = atom({
    key: "desAtom",
    default: ''
})

export const todoListAtom = atom({
    key: "todoListAtom", 
    default: []
})

export const filterAtom = atom({
    key: "filterAtom", 
    default: ''
})

export const filterTodoSelector = selector({
    key: 'filterTodoSelector',
    get: ({ get }) => {
        const todos = get(todoListAtom);
        const filter = get(filterAtom);
        return todos.filter(todo =>     
            todo.title.includes(filter) || todo.description.includes(filter)
        );
    }
});

//------------------------------------------------------------------------------

