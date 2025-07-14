import React, {Fragment, useMemo} from "react"
import { useState, useCallback } from "react"
import { useEffect } from 'react'
import axios from "axios"
import './App.css'
// import { Assignment1 } from './components/Assignment1'
import { Assignment2 } from './components/Assignment2'
// import { Assignment3 } from './components/Assignment3'

/*
function App() {

  const [title, setTitle] = useState("My name is sejal");

  function updateTitle(){
    // let vari = "kumari"
    // setTitle("My name is " + vari);
    setTitle("My name is " + Math.random());
  }

  return (
    // <>
    //   <Header title="Welcome to My App!" />
    //   <Header title="React is Fun!" />
    //   <Header title="React can only return single parent, it can have multiple chils in it" />
    // </>
    // <> better than <div> as <> doesn't introduce an extra DOM element
  
  // re-render
    // <Fragment>
    // <button onClick={updateTitle}>Update title</button>
    // <Header title={title}></Header>
    // <Header title="sejal2"></Header>
    // </Fragment>

    <div>
    <button onClick={updateTitle}>Update title</button>
    <Header title={title}></Header>
    <Header title="sejal1"></Header>
    <Header title="sejal2"></Header>
    <Header title="sejal3"></Header>
    <Header title="sejal4"></Header>
    </div>
  )
}

function Header({ title }){
  return <div>
    {title}
    </div>;
    // props.title or {title} is same. {title} is cleaner as it destructures props into {title}
}
*/

// in react, we push down the state as much as we can. Parent will have their different props in diff children
/*
function App() {
  return (
    <div>
      <HeaderWithButton />
      <Header title="sejal1"></Header>
      <Header title="sejal2"></Header>
    </div>
  )
}

function HeaderWithButton() {
  const [title, setTitle] = useState("My name is sejal");
  function updateTitle() {
    setTitle("My name is " + Math.random());
  }

  return <div>
    <button onClick={updateTitle}>Update title</button>
    <Header title={title}></Header>
  </div>
}

// function Header({ title }) {
//   return <div>{title}</div>;
// }

// memo - skips the re-rendering a component when its props are unchanged
const Header = React.memo(function Header ({ title }) {
  return <div>{title}</div>;
})
*/

//-----------------------------------------------------------------------------------------------------------------------------------------

/*
Assignment

Lets create a simple todo app that renders 3 todos
Create a Todo component that accepts title, description as input
Initialise a state array that has 3 todos
Iterate over the array to render all the TODOs
A button in the top level App component to add a new TODO
*/

/*
let counter = 4;

function Todo({title, description}){
  return (
    <div>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  )
}

function App() {
  const [todos, setTodos] = useState([{
    id: 1,
    title: "Buy Groceries",
    description: "Milk, Bread, Eggs, and Fruits"
  },
  {
    id: 2,
    title: "Finish Assignment",
    description: "Complete the React assignment by tomorrow"
  },
  {
    id: 3,
    title: "Workout",
    description: "Go for a 30-minute run"
  }])

  function addTodo() {
    // first it spreads the existing todos then inserts the new ones
    setTodos([...todos, {
      id: counter++,
      title: Math.random(),
      description: Math.random()
    }])
  }
*/
//   return (
//     // when to use map is, key value pair is present, use map. 
//     <div>
//       <button onClick={addTodo}>Add ToDo</button>
//       {/* every child should have a key, to identify it uniquely */}
//       {todos.map(todo => <Todo key={todo.id} title={todo.title} description={todo.description} />)}
//     </div>
//   )
// }

//-------------------------------------------------------------------------------------------------------------------------------------------

// Wrapper Components

// function App(){
//     return <div>
//     <CardWrapper>
//       {/* cardwrapper ke ander jo bhi hai voh children hai */}
//       hi there
//     </CardWrapper>
//     <CardWrapper>
//       hi there 2
//     </CardWrapper>
//     <CardWrapper>
//       hi there 3
//     </CardWrapper>
//     </div>
// }

// function CardWrapper({children}){
//   // create a div which has a border 
//   // and inside the div, renders the props 

//   return <div style={{border: "2px solid black"}}>
//     {children}
//     </div>
// }

//-----------------------------------------------------------------------------------------------------------

// useEffect try 
/*
function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() =>{
    axios.get("http://127.0.0.1:3000/todos")
      .then(function(response) {
        setTodos(response.data.todos)
      })
  }, []);

  return (
    <>
      {todos.map(todo => <Todo title={todo.title} description={todo.description} />)}
    </>
  )
}

function Todo({title, description}) {
  return <div>
    <h1>{title}</h1>
    <p>{description}</p>
  </div>
}
*/

//-----------------------------------------------------------------------------------------------------------------------------

// useEffect assignment
// Write component that takes todo id as an input and fetches the 
// data for that todo from the given endpoint and renders it. 
// How would the dependency array change
// Add bunch of buttons too
/*
function App() {
  const [number, setNumber] = useState(1);

  return <div>
    <button onClick={function() {
        setNumber(1);
    }}>1</button>

    <button onClick={function() {
        setNumber(2);
    }}>2</button>

    <button onClick={function() {
        setNumber(3);
    }}>3</button>

    <button onClick={function() {
        setNumber(4);
    }}>4</button>

    <Todo id={number} />
  </div>
}

function Todo({id}){
  const [todo, setTodos] = useState({});

  // useEffect mein async not allowed, use axios. useEffect is used for side effect. 

  useEffect(() => {
    axios.get(`https://sum-server.100xdevs.com/todos?id=${id}`)
      .then(response => {
        setTodos(response.data.todo)  // data is use din axios 
      })
  }, [id]); // use effect - dependency on condition

  return <div>
    Id: {id}
    <h1> {todo.title} </h1>
    <h4> {todo.description} </h4>
  </div>
}
*/

//---------------------------------------------------------------------------------------------------------------------------------------

// useMemo - optimize performance by memoizing values that are computationally expensive to calculate (dynamic programming)
// Q) The page should increase counter by one
//    Let's user put a value in an input box(n) and you need to show sum from 1-n

/*
function App() { 
    const [inputVal, setInputVal] = useState('');
    const [n, setN] = useState(0);
    const [counter, setCounter] = useState(0);

    const sum = useMemo(() => {
    const num = parseInt(n, 10);
      
      if(isNaN(num) || num < 1) return 0;                     // accumulator          
      return Array.from({ length: num }, (_, i) => i+1).reduce((acc, curr) => acc + curr, 0);
    }, [n]);

    const handleChange = (e) => {
      setInputVal(e.target.value);  // Access the input's current value
      setN(parseInt(e.target.value, 10)); // Update n when input changes
    };

    return (
      <div>
        <input 
        type="number"
        value={inputVal}
        onChange={handleChange}
        placeholder="Enter number"
        />
        <p>Sum is: {sum}</p>
        <button onClick={() => {
          setCounter(counter + 1)
        }}>Counter ({counter})</button>
      </div>
    )
}
*/

//----------------------------------------------------------------------------------------------------------------------------------------

// useCallback : memoizes a function, ensuring the same function instance is reused across renders unless its dependencies change.

/*
const Child = React.memo(({ onClick }) => {
  console.log("child rendered");
  return <button onClick={onClick}>Click me</button>
});

function App() {
  const  [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    console.log("Button clicked");
  }, []);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <Child onClick={handleClick} />
    </div>
  );
}
*/

//----------------------------------------------------------------------------------------------------------------------------------

// Custom hooks

// If one wants to use default hooks, you can use it inside a hook or component

/*
function useTodos() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    axios.get("")
      .then((res) => {
        setTodos(res.data.todos)
      })
  }, [])

  return todos;
}

function App() {
  const todos = useTodos();

  return <div>
    {todos}
  </div>
}
*/

//----------------------------------------------------------------------------------------------------------------------------------

// crypto banking - useEffect, useState, useMemo
/*
function App() {
  const [exchangeData1, setExchangeData1] = useState({});
  const [exchangeData2, setExchangeData2] = useState({});
  const [bankData, setBankData] = useState({});

  useEffect(() => {
    // some operation to get data
    setExchangeData1({
      returns: 100
    })
  }, [])

  useEffect(() => {
      setExchangeData2({
        returns: 100
      })
  }, [])

  useEffect(() => {
    setTimeout(() => {
      setBankData({
        income: 100
      });
    }, 5000)
  }, []);

  const crytoReturns = useMemo(() => {
    console.log("Before")
    return exchangeData1.returns + exchangeData2.returns;
  }, [exchangeData1, exchangeData2])

  const incomeTax = (crytoReturns + bankData.income) * 0.3

  return (
    <div>
      hi there, there is income tax returns are {incomeTax}
    </div>
  )
}
*/

//-------------------------------------------------------------------------------------------------------------------------------

function App() {
  return (
    <>
      {/* <Assignment1 /> */}
      <Assignment2 />
      {/* <Assignment3 /> */}
    </>
  );
}

export default App;

