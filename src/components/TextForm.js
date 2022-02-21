import React, {useState} from 'react'


export default function TextForm(props) {

  const handelUpClick = ()=> {
    setText(text.toUpperCase())
  }

  const handelLoClick = ()=> {
    setText(text.toLowerCase())
  }
  const handelOnChange = (event)=> {
    setText(event.target.value)
  }
  const handelClClick = ()=>{
    setText("")
  }
  const handelCpClick = ()=>{
    // text.select();
    // text.setSelectionRange(0, 99999); 
    navigator.clipboard.writeText(text);
  }

  const [text, setText] = useState("");
  return (
    <>
      <div className="mb-3">
        <label htmlFor="myBox" className="form-label"><h4>{props.heading}</h4></label>
        <textarea className="form-control" placeholder='Enter your text' id="myBox" value={text} style={{backgroundColor: props.mode=== "light"?"white":"gray", color:props.mode=== "light"?"black":"white"}} onChange={handelOnChange} rows="8"></textarea>
        <button className="btn btn-primary my-3" onClick={handelUpClick}>Convert to Uppercase</button>
        <button className="btn btn-primary my-3 mx-4" onClick={handelLoClick}>Convert to LowerCase</button>
        <button className="btn btn-primary my-3 mx-0" onClick={handelCpClick}>Copy Text</button>
        <button className="btn btn-primary my-3 mx-4" onClick={handelClClick}>Clear</button>


        
      </div>
      <div className="container">
        <h3>Your text summary</h3>
        <p>{text.split(" ").length} words and {text.replace(" ", "").length} letters</p>
        <h3>Preview </h3>
        <p>{text}</p>
      </div>
    </>
  )
}
