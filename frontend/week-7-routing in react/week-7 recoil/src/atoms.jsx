// import { axios } from "axios";
import { atom, selector, atomFamily} from "recoil";
import TODOS from './todos';

/*
export const networkAtom = atom({
    key: "networkAtom",
    default: 102
})

export const jobsAtom = atom({
    key: "jobsAtom",
    default: 0
})

export const notifAtom = atom({
    key: "notifAtom",
    default: 12
})

export const mesgAtom = atom({
    key: "mesgAtom",
    default: 2
})

export const totalNotifSelector = selector({
    key: "totalNotifSelector",
    value: ({get}) => {
        const networkAtomCount = get(networkAtom);
        const jobsAtomCount = get(jobsAtom);
        const msgAtomCount = get(mesgAtom);
        const notifAtomCount = get(notifAtom);
        return networkAtomCount + jobsAtomCount + msgAtomCount + notifAtomCount;
    }
})
*/

//----------------------------------------------------------------------------------------------------------------------

// Asynchronous data queries 
/*
export const notifications = atom({
    key: "networkAtom",
    default: selector({
        key: "networkAtomSelector",
        get: async () => {
            await new Promise(r => setTimeout(r, 5000)) // sleeps for 5 sec. This shows the render of blank screen 
            const res = await axios.get("https://localhost:3000/notifications");
            return res.data
        }
    })
});
*/

//----------------------------------------------------------------------------------------------------------------------

// atomFamily

export const todosFamily = atomFamily({
    key: 'todosAtomFamily',
    default: id => {
        return TODOS.find(x => x.id === id)
    },    
});




