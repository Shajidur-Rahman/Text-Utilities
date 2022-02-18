import React, {useState} from 'react'


export default function TextForm(props) {

  const handelUpClick = ()=> {
    console.log("clicked")
  }

  const [text, setText] = useState("Enter your text");
  return (
    <>
      <div className="mb-3">
        <label htmlFor="myBox" className="form-label"><h4>{props.heading}</h4></label>
        <textarea className="form-control" id="myBox" value={text} rows="8"></textarea>
        <button className="btn btn-primary my-3" onClick={handelUpClick}>Convert to Uppercase</button>
      </div>
    </>
  )
}
