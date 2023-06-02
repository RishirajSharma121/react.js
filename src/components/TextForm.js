import React, {useState} from 'react'
export default function TextForm(props) {
  const handleUpClick=()=>{
    console.log('Clicked');
    setText("clicked on "+text);
  }
  const bgChange =() =>{
    console.log("BG changed into yellow")
  }
  const handleOnChange=(event)=>{
    console.log("on Change");
    setText(event.target.value)
  }
  const [text ,setText] = useState(' TEXT ');
  
  return (
    <><div style={{backgroundColor:'pink',animationName: 'example',
    animationDuration: '4s',animationDelay: '2s'}}>Counting
    <div style={{backgroundColor:'yellow'}}
    ><button className="btn btn"style={{backgroundColor:'black,',shapeMargin:'1px',color:'white'}} onClick={bgChange}  >yellow BG</button></div>
      <div>
        <div className="container" style={{backgroundColor:'#61fbca65',color:'greenyellow'}}>
       <h1>{props.heading}</h1>
      <div className="mb-3" style={{backgroundColor:'purple'}}>
        <label htmlFor="text" className="form-label"></label>
        <textarea className="form-control" value={text} onChange={handleOnChange} id="text" rows="9"style={{backgroundColor:'blue',Color:'greenyellow'}}></textarea>
        </div>
        <button className="button btn btn.primary" value={text} onClick={handleUpClick}style={{border:'2px',backgroundColor:'red'}}>check</button></div>
      </div>
    <div className="container my-5" style={{backgroundColor:'black',color:'red',margin:'2px' }}>
        <h1>text summery</h1><p>
            {text.split("").length} words, {text.length} characters
        </p>
    </div></div>
     </>)

}
