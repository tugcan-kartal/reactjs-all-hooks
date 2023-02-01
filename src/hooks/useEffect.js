import React,{useEffect, useState} from "react";
import axios from "axios";

function App() {

  const [data,setData]=useState("");
  const [count,setCount]=useState(0);

  useEffect(()=>{
    axios
      .get("https://jsonplaceholder.typicode.com/comments")
      .then((response)=>{
        console.log(response.data[0].email);
        console.log("API WAS CALLED")
      });
  }); //  herhangi bir state değişiminde bile çalışır

  useEffect(()=>{
    axios
      .get("https://jsonplaceholder.typicode.com/comments")
      .then((response)=>{
        console.log(response.data[0].email);
        console.log("API WAS CALLED")
      });
  },[]); // Sadece bir kere çalışır

  useEffect(()=>{
    axios
      .get("https://jsonplaceholder.typicode.com/comments")
      .then((response)=>{
        console.log(response.data[0].email);
        console.log("API WAS CALLED")
      });
  },[count]); //count değişkeni değiştikçe çalışır

  return (

    <div className="App"> 

      Hello World 

      <h1>{data}</h1>
      <h1>{count}</h1>

      <button onClick={()=>{setCount(count+1)}}>
        Click
      </button>

    </div>

  );
}

export default App;