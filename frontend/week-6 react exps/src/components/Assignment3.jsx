import React, {useState, useMemo, useCallback} from 'react'

// you have been given a list of items you shopped from grocery store
// you need to calculate the total amount of money spent 

// export function Assignment3() { }
//     const [items, setItems] = useState([
//         {name: 'Chocolates', val: 10},
//         {name: 'Chips', val: 50},
//         {name: 'Onion', val: 30},
//         {name: 'Tomato', val: 40},
//         {name: 'Taco', val: 30}
//     ]);

//     const totalVal = useMemo(() => {
//         let totalVal = 0;
//         for(let i=0; i<items.length; i++){
//             totalVal = totalVal + items[i].val;
//         }
//         return totalVal
//     }, [items])

//     // read about useReduce

//     return (
//         <div>
//             <ul>
//                 {items.map((item, index) => (
//                     <li key={index}>{item.name} - Price: ${item.val}</li>
//                 ))}
//             </ul>
//             <p>Total Value: {totalVal}</p>
//         </div>
//     );
// }

