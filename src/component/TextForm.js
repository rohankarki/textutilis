import React, { useState } from 'react'

export default function TextForm(props) {
  
  const handleUpClick = ()=>{
    let newText = text.toUpperCase();
    setText(newText);
  }

  const handleOnChange = (event)=>{
    setText(event.target.value);
  }

  const handleDownClick = ()=>{
    let newText = text.toLowerCase();
    setText(newText);
  }

  const handleClearClick= ()=>{
    let newText = '';
    setText(newText);
  }

  const [text, setText] = useState("");
  return (
    <>
    <div className="container" style={{color : props.mode==='dark'?'white':'#042743'}}>
            <h1 >{props.heading}</h1>
            <div className="mb-3">
            <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor : props.mode==='dark'?'grey':'white', color: props.mode==='dark'?'white':'#042743'}} id="myBox"  rows="8"></textarea>
            </div>
            <button  disabled={text.length===0}  className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to uppercase</button>
            <button disabled={text.length===0}  className="btn btn-danger mx-1 my-1" onClick={handleDownClick}>Convert to lowercase</button>
            <button disabled={text.length===0}  className="btn btn-danger mx-1 my-1" onClick={handleClearClick}>Clear</button>
    </div>
    <div className="container my-2" style={{color : props.mode==='dark'?'white':'#042743'}}>
      <h1>Your Text Summary</h1>
      <p>{text.split(" ").filter((element)=>{return element.length!==0}).length } words and {text.length} characters </p>
      <p>{0.008 * text.split(" ").length} minutes to read </p>
      <h2>Preview</h2>
      <p>{text.length>0?text:"Enter something in the text to preview"} </p>

    </div>
    </>
  )
}
