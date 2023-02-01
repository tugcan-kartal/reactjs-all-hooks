import React,{useState,useEffect,useMemo} from "react";
import axios from "axios";

function App() {

  const [data,setData]=useState(null);
  const [toggle,setToggle]=useState(false);

  useEffect(()=>{
    axios
      .get("https://jsonplaceholder.typicode.com/comments")
      .then((response)=>{
        setData(response.data);
      });
  },[]);

  const findLongestName = (comments) => {
    if (!comments) return null;

    let longestName = "";
    for (let i = 0; i < comments.length; i++) {
      let currentName = comments[i].name;
      if (currentName.length > longestName.length) {
        longestName = currentName;
      }
    }

    console.log("THIS WAS COMPUTED");

    return longestName;
  };

  const getLongestName=useMemo(()=>findLongestName(data),[toggle]);     //ilk parametre fonksiyon olan ikincisi ise dependecy array değişince toggle çalışcak fonksiyon yani

  return (

    <div className="App"> 

      <div>{getLongestName}</div>
      
      <button
        onClick={() => {
          setToggle(!toggle);
        }}
      >
        {" "}
        Toggle
      </button>

      {toggle && <h1>toggle</h1>}

    </div>

  );
}

export default App;