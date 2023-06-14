import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Home() {
  const [inputValue, setInputValue] = useState('');
  const [inputAge, setInputAge] = useState('');
  const [inputGender, setInputGender] = useState('');
  const [inputHobbie, setSelectedValue] = useState('');

  const handleChangeHobbies = (event) => {
    setSelectedValue(event.target.value);
  };

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };
  const handleChangeAge = (event) => {
    setInputAge(event.target.value);
  };

  const handleChangeGender = (event) => {
    setInputGender(event.target.value);
  };
  return (
    <div>
    <div>
      <label for="fname">Username</label><br></br>
      <input type="text" value={inputValue} onChange={handleChange} /><br></br>
      <label for="fname">Age</label><br></br>
      <input type="number" value={inputAge} onChange={handleChangeAge} />

    </div>
     <div>
     <label for="fname">Gender:</label><br></br>
     <input type="radio" value="Male" checked={inputGender === 'Male'} onChange={handleChangeGender} />
     <label for="fname">Male</label><br></br>
     <input type="radio" value="Female" checked={inputGender === 'Female'} onChange={handleChangeGender} />
     <label for="fname">Female</label>

   </div>
   <div>
 <label for="fname"> hobbies</label><br></br>
    <input className="userName" type='checkbox'value="Football" checked={inputHobbie === 'Football'} onChange={handleChangeHobbies}/>
    <label for="fname"> Football</label><br></br>
    <input className="userName" type='checkbox' value="Basketball" checked={inputHobbie === 'Basketball'} onChange={handleChangeHobbies}/>
    <label for="fname" > Basketball</label><br></br>
    <input className="userName" type='checkbox' value="Tennis" checked={inputHobbie === 'Tennis'} onChange={handleChangeHobbies}/>
    <label for="fname"> Tennis</label><br></br>
    <input className="userName" type='checkbox' value="Running" checked={inputHobbie === 'Running'} onChange={handleChangeHobbies}/>
    <label for="fname"> Running </label><br></br>
    <input className="userName" type='checkbox' value="Drawing" checked={inputHobbie === 'Drawing'} onChange={handleChangeHobbies}/>
    <label for="fname"> Drawing </label><br></br>
    </div>
    <div>
    <p>Username: {inputValue}</p>
    <p>Age: {inputAge}</p>
    <p>Selected value: {inputGender}</p>
    <p>Selected value: {inputHobbie}</p>
    </div>
   </div>
  );
}


export default Home
