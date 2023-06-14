import React, { useState } from 'react';

function Home() {
  const[name,setName]=useState("");
  const[age,setAge]=useState("");
  const [list,setList]=useState([]);

  const handleSubmit=(e)=> {
    e.preventDefault();
    const date={name,age}
    if(name&&age) {
       setList((ls)=>[...ls,date])
       setName("")
       setAge("")
    }
  }
  return (
   <>
    <h1>Form</h1>
    <form onSubmit={handleSubmit}>
    <label for="fname">First name:</label><br></br>
    <input className="userName" type='text' value={name} placeholder='User Name' onChange={(e)=>setName(e.target.value)}/><br></br>
    <label for="fname">Age:</label><br></br>
    <input className="userName" type='number' value={age} placeholder='age' onChange={(e)=>setAge(e.target.value)}/><br></br>
    <button type="submit">Submit</button>
    </form>

    {

      list.map((a)=><div>
        <li>{a.name}</li>
        <li>{a.age}</li>
      </div>)
    }
    
   
    {/* <label for="fname">Gender:</label><br></br>
    <input className="userName" type='radio'/>
    <label for="fname">Male</label><br></br>
    <input className="userName" type='radio'/>
    <label for="fname">Female</label><br></br>
    <label for="fname"> hobbies</label><br></br>
    <input className="userName" type='checkbox'/>
    <label for="fname"> Football</label><br></br>
    <input className="userName" type='checkbox'/>
    <label for="fname"> Basketball</label><br></br>
    <input className="userName" type='checkbox'/>
    <label for="fname"> Tennis</label><br></br>
    <input className="userName" type='checkbox'/>
    <label for="fname"> Running </label><br></br>
    <input className="userName" type='checkbox'/>
    <label for="fname"> Drawing </label><br></br>
    <button type="submit">Submit</button> */}
    </>
  ) 

}

export default Home
