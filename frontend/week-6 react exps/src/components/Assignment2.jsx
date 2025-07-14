import React, { useEffect, useState, useMemo, useCallback, useRef } from 'react'

// In this assignment, you will create a component that renders a large list of sentences and includes
// an input field for filtering these items.
// The goal is to use useMemo to optimize the filtering process, ensuring the list is only re-calculated
// when necessary (e.g., when the filter criteria changes).
// You will learn something new here, specifically how you have to pass more than one value in the
// dependency array
/*
const words = ['hi', 'my', 'name', 'is', 'for', 'to', 'random', 'word'];
const TOTAL_LINES = 1000;
const ALL_WORDS = [];

for(let i=0; i<TOTAL_LINES; i++){
    let sentence = []
    for (let j = 0; j < words.length; j++) {
        const randomWord = words[Math.floor(Math.random() * words.length)];
        sentence.push(randomWord); 
      }
      ALL_WORDS.push(sentence.join(" "));
}

export function Assignment2() {
    const [sentences, setSentences] = useState("");
    const [filter, setFilter] = useState("");

    const filterSentences = useMemo(() => {
        sentences.filter(x => x.includes(filter))
    }, [sentences, filter])

    return <div> 
        <input type="text" onChange={(e) => {
            setFilter(e.target.value)
        }}></input>
        {filterSentences.map(word => <div>
            {word}
            </div>)}
    </div>
}
*/

//-----------------------------------------------------------------------------------------------------

// useCallback() assignment 2 
// Create a component with a text input field and a button. The goal is to display an alert with the
// text entered when the button is clicked. Use useCallback to memoize the event handler function that
// triggers the alert, ensuring it's not recreated on every render.
// Currently we only have inputText as a state variable and hence you might not see the benefits of
// useCallback. We're also not passing it down to another component as a prop which is another reason
// for you to not see it's benefits immedietely.

/*
export function Assignment2() {
    const [inputtxt, setInputtxt] = useState('');

    const showAlert = useCallback(() => {
            alert(inputtxt);
    }, [inputtxt])

    return (
        <div>
            <input
                type="text"
                value={inputtxt}
                onChange={(e) => setInputtxt(e.target.value)}
                placeholder="Enter some text"
                />
                <Alert showAlert={showAlert}></Alert>
        </div>
    )
}

function Alert({ showAlert }) {
    return (
        <button onClick={showAlert}>Show Alert</button>
    );
}
*/

//-------------------------------------------------------------------------------------------------------------

// useRef Assignment 2
// Create a component that tracks and displays the number of times it has been rendered. Use useRef to
// create a variable that persists across renders without causing additional renders when it changes.

// useRef is used in 2 cases:
// 1) while trying to access DOM elements
// 2) trying to access to variables, across render which isn't state variable

export function Assignment2() {
    const [count, setCount] = useState(0);
    const numTimesRerender = useRef(0);

    const handleRender = () => {
        setCount(count + 1);
    };

    numTimesRerender.current++;

    return (
        <div>
            <p>This component is rendered {numTimesRerender.current} times.</p>
            <button onClick={handleRender}>Force Re-render</button>
        </div>
    )
}

