import { useRef } from "react"
export default function Form(){
    const nameRef=useRef(null)
    const emailRef=useRef(null)
    const msgRef=useRef(null)
  let handleSubmit=(e)=>{
    e.preventDefault();
    console.log("SUBMITTED")
    console.log("Name:", nameRef.current.value)
    console.log("Email:", emailRef.current.value)
    console.log("Message:", msgRef.current.value)
    nameRef.current.value=""
    nameRef.current.value=""
    nameRef.current.value=""
  }
  let handleChange=(e)=>
  {
    console.log(e.target.value);
  }

  return(
    <>
    <h1>CONTACT US</h1>
    <form onSubmit={handleSubmit}>
    <label>NAME:</label>
    <input onChange={handleChange} type="text" name="name" ref={nameRef}></input><br></br>
    <label>EMAIL:</label>
    <input type="text" name="email"ref={emailRef}></input><br></br>
    <label>MESSAGE:</label>
    <input type="text" name="message" ref={msgRef}></input><br></br>
    <input type="submit"></input>
    </form>
    </>
  )
}