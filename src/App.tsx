import React, {useState} from 'react';
import './App.css';

function App() {

    let [alpha, setAlpha] = useState(1)

    const onClickHandlerPlus = () => {
        setAlpha(++alpha)
        console.log(alpha)
    }

    const onClickHandlerMinus = () => {
        setAlpha(--alpha)
        console.log(alpha)
    }

    return (
        <div className="App">
            <h1>{alpha}</h1>
            <button onClick={onClickHandlerPlus}>NUMBER +</button>
            <button onClick={onClickHandlerMinus}>NUMBER -</button>
        </div>
    );
}

export default App;
