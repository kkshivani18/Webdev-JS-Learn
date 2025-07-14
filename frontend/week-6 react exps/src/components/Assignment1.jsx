import React, { useState, useEffect, useMemo, useCallback, useRef } from "react"; 

// In this assignment, your task is to create a component that performs an expensive calculation
// (finding the factorial) based on a user input.
// Use useMemo to ensure that the calculation is only recomputed when the input changes, not on every
// render.

// for useMemo assignment 
/*
export function Assignment1() {
    const [input, setInput] = useState(0);

    const fact = (num) => {
        if(num <= 1) return 1
        return num * fact(num - 1);
    }

    const expensiveCalc = useMemo(() => {
        return fact(input);
    }, [input])

    return (
        <div>
        <input
            type="number"
            value={input}
            onChange={(e) => setInput(Number(e.target.value))}
        />
        <p>Calculated Value: {expensiveCalc}</p>
    </div>
    );
}
*/

//----------------------------------------------------------------------------------------------------------------

// for useCallback Assignment
// Create a counter component with increment and decrement functions. Pass these functions to a child
// component which has buttons to perform the increment and decrement actions. Use useCallback to ensure
// that these functions are not recreated on every render

/*
export function Assignment1() {
    const [count, setCount] = useState(0);

    // const handleIncrement = useCallback(() => {
    //     setCount(count + 1);    
    // }, [count])      // If count were added as a dependency, 
                        // the function would be recreated every time count changes.

    const handleIncrement = useCallback(() => {
        setCount((prev) => prev + 1);
    }, [])

    const handleDecrement = useCallback(() => {
        setCount((prev) => prev - 1);
    }, [])

    return (
        <div>
            <p>Count: {count}</p>
            <CounterButtons onIncrement={handleIncrement} onDecrement={handleDecrement} />
        </div>
    )
}

// child component
const CounterButtons = ({ onIncrement, onDecrement}) => (
    <div>
        <button onClick={onIncrement}>Increment</button>
        <button onClick={onDecrement}>Decrement</button>
    </div>
)
*/

//-------------------------------------------------------------------------------------------------------------------

// useRef() assignment 1
// useRef() - It's a React hook that provides a way to interact with and store references 
//            to DOM elements or mutable values without causing re-renders when the referenced value changes

// Create a component with a text input field and a button. When the component mounts or the button is 
// clicked, automatically focus the text input using useRef. 

export function Assignment1() {
    const inputRef = useRef();

    useEffect(() => {
        inputRef.current.focus();
    }, [inputRef])
    
    const handleButtonClick = () => {
        inputRef.current.focus();
    }
    
    return (
        <div>
            <input ref={inputRef} type="text" placeholder="Enter text" />
            <button onClick={handleButtonClick}>Focus Input</button>
        </div>
    )
}
