// eslint-disable-next-line
import "./FormStyles.css";
import React,{useState} from 'react'
import {database} from '../firebase'
import {ref,push,child,update} from "firebase/database";
const Form = () => {
  const [name,setName]=useState("");
  const [email,setEmail]=useState("");
  const [message,setMessage]=useState("");
    const handelInputChange=(e)=>{
      const {id,value}=e.target;
      if(id==="name"){
        setName(value);
      }
      if(id==="email"){
        setEmail(value);
      }
      if(id==="message"){
        setMessage(value);
      }
    }
    const handelSubmit=()=>{
      let obj={
        name:name,
        email:email,
        message:message
      }
      const newPostKey = push(child(ref(database), 'posts')).key;
      const updates = {};
      updates['/' + newPostKey] = obj
      return update(ref(database), updates);
    }
  return (
    <div className="form">
      <div className="form-container">
      <div className="left-side">
          <img src="https://imgs.search.brave.com/uphn_B0Xq6hfHGFYMZTgFYaTd4-J_w3I3UbodlG6cwU/rs:fit:759:225:1/g:ce/aHR0cHM6Ly90c2Uy/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC55/VnhndFhES2lHYnpz/QkRIeHdTcEV3SGFF/byZwaWQ9QXBp" className="left-img"/>
      </div>
      <div className="right-side">
        <center>
          <h2>Contact us for any queries😺</h2>
        </center>
      <center>
        <form>
        <label className="h1">Your Name
        <input className="name" type="text" value={name} onChange = {(e) => handelInputChange(e)} id="name" placeholder="Name......."/> 
        </label>
        <label className="h2">Email
        <input className="email" type="email" value={email} onChange = {(e) => handelInputChange(e)} id="email" placeholder="Email......."/> 
        </label>
        <label className="h3">Message
        <textarea rows="6" value={message} onChange={(e)=>handelInputChange(e)}  id="message" placeholder="Type your message here......."/>
        <center><button onClick={()=>handelSubmit()} type="submit" className="btn">Submit</button></center>
        </label>
      </form>
      </center>
      </div>
      
      </div>
    </div>
  )
}

export default Form
