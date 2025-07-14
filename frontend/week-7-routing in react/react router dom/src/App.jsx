// import React, { lazy, Suspense, useContext, useState } from 'react';
import React from 'react';
// import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import './App.css';
// import { CountContext } from './context';
import { RecoilRoot, useRecoilValue, useSetRecoilState } from 'recoil';
import { countAtom, evenSelector, titleAtom, desAtom, filterAtom, filterTodoSelector } from './store/atoms/count';
import TodoInput from './asscompo/TodoInput'
import TodoList from './asscompo/TodoList';
import Filter from './asscompo/filter';

// Routing 
/*
const Dashboard = lazy(() => import('./components/Dashboard'));
const Landing = lazy(() => import('./components/Landing'));

function App() {
  return (
    <div>
      <BrowserRouter>
        <Appbar />
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/landing" element={<Landing />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </div>
  );
}

function Appbar() {
  const navigate = useNavigate();

  return (
    <div>
      <button onClick={() => navigate("/dashboard")}>Dashboard</button>
      <button onClick={() => navigate("/landing")}>Landing</button>
    </div>
  );
}
*/

//---------------------------------------------------------------------------------------------------------------------------------------

// Context API 

/*
function App() {
  const [count, setCount] = useState(0);

  // to teleport the count directly to the CountRender, it should be wrapped inside a provider (in this case, CountContext)
  // Context API must be wrapped inside a Provider component because the Provider is responsible for 
  // supplying the context value to the component tree.

  return (
    <div>
      <CountContext.Provider value={{count, setCount}}>
        <Count count ={count} setCount={setCount} />
      </CountContext.Provider>
    </div>
  )
}

function Count({setCount}) {
    return <div>
      <CountRender />
      <Buttons setCount={setCount}/>
    </div>
}

function CountRender(){
    const count = useContext(CountContext);
    return <div>
      {count}
    </div>
}

function Buttons() {
    const {count, setCount} = useContext(CountContext);
    return <div>
        <button onClick={ () => {
          setCount(count + 1)
        }}>Increase</button>

        <button onClick={ () => {
          setCount(count - 1)
        }}>Decrease</button>
    </div>
}
*/

//-------------------------------------------------------------------------------------------------

// Recoil with State management 
/*
function App() {

  return (
    <div>
        <RecoilRoot>
          <Count />
        </RecoilRoot>
    </div>
  );
}

function Count() {
    return (
      <div>
        <CountRender />
        <Buttons />
      </div>
    );
}

function CountRender(){
    const count = useRecoilValue(countAtom);
    return <div>
      <b>
        {count}
      </b> 
      <EventCountRender />
    </div>
}

function EventCountRender() {
  const isEven = useRecoilValue(evenSelector);
  return <div>
    {isEven ? "It is even" : null}
  </div>
}

function Buttons() {
    const setCount = useSetRecoilState(countAtom);
    return <div>
        <button onClick={ () => {
          setCount((prevCount) => prevCount + 1); // Use callback for updating
        }}>Increase</button>

        <button onClick={ () => {
          setCount((prevCount) => prevCount - 1);
        }}>Decrease</button>
    </div>
}
*/

//------------------------------------------------------------------------------------------------------------

// Assignment Todo with selector
/*
    2 input boxes {title, description} => atom
    button
    todos => atom
    filter {gym} => atom
    selector (the current set of todos) 
*/
/*
function App() {
  return (
    <RecoilRoot>
      <div>
        <h1> ToDo App</h1>
        <Filter />
        <TodoInput />
        <TodoList />
      </div>
    </RecoilRoot>
  )
}
*/

//-----------------------------------------------------------------------------------------------------------

export default App;
