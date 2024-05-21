import React, {useState} from 'react';
import './App.css';

function App() {

    let [alpha, setAlpha] = useState(0)

    const onClickHandlerPlus = () => {
        setAlpha(++alpha)
        console.log(alpha)
    }

    const onClickHandlerMinus = () => {
        setAlpha(--alpha)
        console.log(alpha)
    }

    const onClickHandlerReset = () => {
        setAlpha(0)
    }

    return (
        <div className="App">
            <h1>{alpha}</h1>
            <button onClick={onClickHandlerPlus}>NUMBER +</button>
            <button onClick={onClickHandlerMinus}>NUMBER -</button>
            <button onClick={onClickHandlerReset}>RESET</button>
        </div>
    );
}

export default App;
