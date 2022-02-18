import './App.css';
import Navbar from "./components/Navbar"
import TextForm from "./components/TextForm"


function App() {  
  return (
    <>
      <Navbar title="Textutils"/>

      <div className="container my-5">
      <TextForm heading="Enter your Text to analyze"/>
      </div>
      
    </>
  );
}

export default App;
