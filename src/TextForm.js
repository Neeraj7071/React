import React, { useState } from 'react'

export default function TextForm(props) {
  const handleUpClick = () => {
    console.log("click upper case");
    setText(text.toUpperCase());
  }
  const handleOnChange = (event) => {
    console.log("click on change");
    setText(event.target.value);
  }

  const [text, setText] = useState('Enter the text');
  return (
    <div className={`container text-${props.mode}`}>
      <h1 className={`mb-3 text-${props.mode}`}>{props.title}</h1>
      <div className="mb-3">
        <textarea className="form-control" value={text} id="exampleFormControlTextarea1" style={{ backgroundColor: props.mode === 'dark' ? 'grey' : 'white', color:props.mode=== 'dark' ? 'white' : 'black' }} rows="3" onChange={handleOnChange}></textarea>
      </div>
      <button className="btn btn-primary" onClick={handleUpClick}>update upper case</button>
    </div>
  )
}
