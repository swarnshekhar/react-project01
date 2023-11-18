import React, { useState } from 'react'



const TextForm = (props) => {
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText)
  }
  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText)
  }

  const handleOnChange = (e) => {
    setText(e.target.value)

  }
  const handleDeleteClick = ()=>{
    let newText =" "

    setText(newText)
  }
  
  const handleSpace = () => {
    console.log(text.trim)
    setText(text.trim());

  }
  

  const [text, setText] = useState('enter your text here')
  return (
    <> 
    <div className="body text-light">
      <div className='container' >
        <h1 style={{color:'green'}}>{props.heading}</h1>
        <form>
          <div className="form-floating">
            <textarea className="form-control rounded mt-4 mb-4"  style={{backgroundColor:"pink"}} value={text} onChange={handleOnChange} id='myBox' rows="8"></textarea>
          </div>


          <button type="button" className="btn btn-primary text mx-2" onClick={handleUpClick}>Convert To Uppercase</button>
          <button type="button" className="btn btn-primary text mx-2" onClick={handleLoClick}>Convert To Lowercase</button>
          <button type="button" className="btn btn-primary text mx-2" onClick={handleDeleteClick}>Delete All Text</button>
          <button type="button" className="btn btn-primary text mx-2" onClick={handleSpace}>Clear Extra Space</button>
           <h2 className='mt-4 mb-3'  style={{color:'blue'}}>Change Background Color</h2>
           <div>
           <button type="button" class="btn btn-primary mx-2 btn-lg">blue</button>
<button type="button" class="btn btn-secondary mx-2 btn-lg ">grey</button>
<button type="button" class="btn btn-danger mx-2 btn-lg">red</button>
<button type="button" class="btn btn-warning mx-2 btn-lg">yellow</button>
<button type="button" class="btn btn-info mx-2 btn-lg">sky</button>
<button type="button" class="btn btn-light mx-2 btn-lg">white</button>
<button type="button" class="btn btn-dark mx-2 btn-lg">black</button>
           </div>

        </form>
      </div>
      <div className="container my-5">
        <h2 style={{color:'blue'}}>your text summary</h2>
        <p className='text-success'>{(text.split(" ").length) - 1} words and {text.length} characters</p>
        <p className='text-success'>{0.008 * ((text.split(" ").length) - 1)}minutes read</p>
        <h2 style={{color:'blue'}}>Preview</h2>
        <p className='text-warning'>{text}</p>
      </div>
    </div>
    </>


  )
}

export default TextForm
