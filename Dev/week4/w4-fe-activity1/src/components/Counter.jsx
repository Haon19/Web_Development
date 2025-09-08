import './Counter.css';
import { useState } from 'react';

const Counter = () => {

  const [theme, setTheme] = useState('dark');
  const [counter, setCounter] = useState(0);
  const previousTheme = () => setTheme(previousTheme => previousTheme === 'light' ? 'dark': 'light');
  
  //console.log(theme)

  return (
    <div className={`state ${theme}`}>
      <h1>Now in {theme} mode</h1>
      <button onClick={()=>setTheme('dark')}>Dark</button>
      <button onClick={()=>setTheme('light')}>Light</button>
      <button onClick={previousTheme}>Toggle</button>
      <h2>{counter}</h2>
      <button onClick={()=>setCounter(counter+1)}>
        Increment
      </button>
      <button onClick={()=>setCounter(counter-1)}>
        Decrement
      </button>
    </div>
  );
};

export default Counter;
