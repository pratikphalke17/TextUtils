import React,{useState} from 'react'


export default function Textform(props) {
  const [text,setText]=useState("");
  const handleUpclick=()=>{
    // console.log("Uppercase was clicked"+text);
    let newtext=text.toUpperCase();
    setText(newtext);
    props.showAlert("Uppercase","success")
  }
  const handleLowclick=()=>{
    // console.log("Uppercase was clicked"+text);
    let newtext=text.toLowerCase();
    setText(newtext);
    props.showAlert("Lowercase","success")
  }
  const handleClearclick=()=>{
    // console.log("Uppercase was clicked"+text);
    let newtext='';
    setText(newtext);
    props.showAlert("Clear","success");
  }
  const handleOnchange=(event)=>{
    // console.log("On change");
    setText(event.target.value)
  }
  return (
    <>
   <div className="container my-3" style={{color: props.mode === 'dark' ? 'white' : 'black'}}>
    <h1>{props.heading}</h1>
    <div className="mb-3">
        <textarea className="form-control" id="myBox" value={text} onChange={handleOnchange}  
            style={{backgroundColor : props.mode === 'dark' ? 'grey' : 'white', color: props.mode === 'dark' ? 'white' : 'black'}}  
            rows="10"
        ></textarea>
    </div>
    <button className="btn btn-primary mx-1" onClick={handleUpclick}>Convert to Uppercase</button>
    <button className="btn btn-primary mx-1" onClick={handleLowclick}>Convert to Lowercase</button>
    <button className="btn btn-primary mx-1" onClick={handleClearclick}>Clear Text</button>
</div>


    <div className="container" style={{color:props.mode==='dark'?'white':'black'}}>
    <h2>Text summary</h2>
    <p> You entered {text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
    <p>Time required to read = {0.008*text.split(" ").length} minutes</p>
    <h3>Preview</h3>
    <p>{text.length>0?text:"Enter something to preview"}</p>


    </div>
    </>
 

  )
}
