import { useState } from 'react'
import Hello from './Hello'
import Bye from './Bye'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    
      <div>
        <Hello />
        <Bye />
      </div>
      
    
  );
}

export default App;
