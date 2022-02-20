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
    } else{
      setMode("light")
    }
  }

  return (
    <>
      <Navbar title="Textutils" mode={mode} toggleMode={toggleMode}/>
      <div className="container my-5">
      <TextForm heading="Enter your Text to analyze"/>
      </div>

      <About mode={mode}/>

    </>
  );
}

export default App;
