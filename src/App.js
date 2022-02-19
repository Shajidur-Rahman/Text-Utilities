import './App.css';
import Navbar from "./components/Navbar"
import TextForm from "./components/TextForm"
import About from "./components/About"



function App() {  
  return (
    <>
      <Navbar title="Textutils"/>
      {/* <div className="container my-5">
      <TextForm heading="Enter your Text to analyze"/>
      </div> */}

      <About/>

    </>
  );
}

export default App;
