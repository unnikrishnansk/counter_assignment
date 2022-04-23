
import './App.css';
import Counter from "./components/Counter";
import {useState} from 'react';

function App() {

  let [count,setCount] = useState(0);

  let addCount = () => {
    setCount(count+1);
  }

  let subCount = () => {
    setCount(count-1);
  }

  let doubleCount = () => {
    setCount(count*2);
  }

  return (
    <div className="App">
      <Counter count={count}/>

      <button onClick={addCount}>Add</button>
      <button onClick={subCount}>Subtract</button>
      <button onClick={doubleCount}>Double</button>
    </div>
  );
}

export default App;
