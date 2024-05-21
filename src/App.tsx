import React from 'react';
import './App.css';

function App() {

    let alpha = 1
    const onClickHandler = () => {
        console.log(alpha)
    }
    return (
        <div className="App">
            <h1>{alpha}</h1>
            <button onClick={onClickHandler}>NUMBER</button>
        </div>
    );
}

export default App;
