import React,{useState} from "react";

function App() {

  const [counter,setCounter]=useState(0);

  const increment=()=>{
    setCounter(counter+1);
  }

  return (
    <div className="App">
      {counter}
      <button onClick={increment}>+</button>    
    </div>
  );
}

export default App;
