import React,{useRef} from "react";

function App() {

  const inputRef=useRef(null);

  const onClick=()=>{
    inputRef.current.focus();
    inputRef.current.value="";
  }
  
  return (

    <div className="App"> 

      <h1>Pedro</h1>
      <input type="text" placeholder="Ex..." ref={inputRef} />
      <button onClick={onClick}>Change Name</button>

    </div>

  );
}

export default App;