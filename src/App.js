import './App.css';
import Navbar from "./components/Navbar"
import TextForm from "./components/TextForm"
import About from "./components/About"
import React, { useState } from 'react';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Link
// } from "react-router-dom";


function App() {
  const [mode, setMode] = useState("light")

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark")
      document.body.style.backgroundColor = "#343a40"
      document.body.style.color = "white"
    } else {
      setMode("light")
      document.body.style.backgroundColor = "white"
      document.body.style.color = "black"
    }
  }

  return (
    <>



      {/* <Router>
        <Routes>
          <Route exact path="/" element={
            <>
              <Navbar title="Textutils" mode={mode} toggleMode={toggleMode} />

              <div className="container my-5">
                <TextForm heading="Enter your Text to analyze" mode={mode} />
              </div>

            </>
          } />
          <Route path='/about' element={
            <>
              <Navbar title="Textutils" mode={mode} toggleMode={toggleMode} />
              <About/>
            </>} />
        </Routes>
      </Router> */}


      {/* <About/> */}
      <Navbar title="Textutils" mode={mode} toggleMode={toggleMode} />

<div className="container my-5">
  <TextForm heading="Enter your Text to analyze" mode={mode} />
</div>

    </>
  );
}

export default App;
