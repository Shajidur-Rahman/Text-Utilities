import './App.css';
import Navbar from "./components/Navbar"
import TextForm from "./components/TextForm"
import About from "./components/About"
import React, {useState} from 'react';


function App() {  
  const [mode, setMode] = useState("light")

  const toggleMode = ()=>{
    if(mode === "light"){
      setMode("dark")
      document.body.style.backgroundColor = "#343a40"
      document.body.style.color = "white"
    } else{
      setMode("light")
      document.body.style.backgroundColor = "white"
      document.body.style.color = "black"
    }
  }

  return (
    <>
      <Navbar title="Textutils" mode={mode} toggleMode={toggleMode}/>
      <div className="container my-5">
      <TextForm heading="Enter your Text to analyze" mode={mode}/>
      </div>

      <About mode={mode} toggleMode={toggleMode}/>

    </>
  );
}

export default App;
