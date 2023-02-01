import React,{useState} from "react";

function App() {

  const [inputValue,setInputValue]=useState("Pedro");

  let onChange=(event)=>{
    const newValue=event.target.value;
    setInputValue(newValue);
  };

  return (

    <div className="App">
      <input placeholder="enter something..." onChange={onChange} />
      {inputValue}
    </div>

  );
}

export default App;
