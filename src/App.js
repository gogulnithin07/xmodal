import { useState,useRef } from 'react';
import './App.css';

function App() {
  const [showModal,setShowModal]=useState(false)
  return (
    <div className="App">
    <h1 
    className='text-[40px] text-black
    '
    >User Details Modal</h1>
    <button
    className='bg-blue-600 text-white rounded w-[120px] h-[40px]'
    onClick={(e)=>setShowModal(true)}
    >Open Form</button>
    {showModal && <Form showModal={showModal} setShowModal={setShowModal}/>}
    </div>
  );
}







function Form({showModal,setShowModal}){
  const [phoneNumber,setPhoneNumber]=useState("");
  const [date,setDate]=useState("")
  const className=showModal?"modalContainer block":"modalContainer"
  const formRef = useRef(null);
  function handleClick(e){
    if(e.target.className.includes("uno"))setShowModal(false)
  }
  function handleSubmit(e){
    e.preventDefault();
      if(!(phoneNumber.length>=10)) {
        alert("Invalid phone number. Please enter a 10-digit phone number.")
     return;
      }
      if(! (new Date(date) > new Date())){
        alert("invalid date of birth.Date of birth cannot be in the future.")
      return;
      }
      console.log("correct")
      formRef.current.reset();
setDate("")
setPhoneNumber("")
  }
  return <div
  onClick={(e)=>handleClick(e)}
  className={`uno modal flex justify-center items-center ${className}`} >
    <div className="uno modal-content w-[100%] h-[100%] modal flex justify-center items-center">
    <form
    ref={formRef}
    onSubmit={(e)=>handleSubmit(e)}
    className={`bg-white  rounded-sm border-[1px] flex flex-col justify-center gap-2  items-center w-[50%] h-[auto] p-8`}>
      <h className="font-bold text-[30px]">Fill Details</h>
      <label htmlFor='username'>Username:</label>
      <input type='text' name='username' id="username" required />
      <label>Email Address:</label>
      <input type='email' name='mail' id="email" required/>
      <label>Phone Number:</label>
      <input
      onChange={(e)=>setPhoneNumber(e.target.value)}
      value={phoneNumber}
      type='text' name='number' id="phone"/>
      <label>Date Of Birth:</label>
      <input
      onChange={(e)=>setDate(e.target.value)}
      value={date}
      type="date" name='dob' id="dob"/>
      <button
    className='submit-button bg-blue-600 text-white rounded w-[120px] h-[40px]'
      type='submit'>Submit</button>
    </form>
    </div>
  </div>
}



export default App;
