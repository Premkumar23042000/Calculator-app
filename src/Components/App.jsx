import './App.css';
import { useState } from 'react';
import Buttons from './Buttons';
import Input from './Input';

function App() {
    const [input, setInput] = useState(''); 

    function handleChange(event) {
        const changeEvent = event.target.value;
        console.log("changeEvent:", changeEvent);
        setInput(changeEvent); 
    }

    function handleClick(value) {
        if (value === "C") {
            setInput(''); 
        } else if (value === "=") {
                const equalValue = eval(input); 
                setInput(equalValue.toString()); 
        } else if (value === "D") {
            setInput((prevValue) => prevValue.slice(0, -1)); 
        } else {
            setInput((prevValue) => prevValue + value); 
        }
    }

    return (
        <div className='app-cont'>
            <h1>Calculator</h1>
            <Input 
                value={input} 
                change={handleChange} 
            />
            <Buttons handleClick={handleClick} />
        </div>
    );  
}

export default App;
