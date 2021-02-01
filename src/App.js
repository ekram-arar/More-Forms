import { useState } from 'react';
import './App.css';
import React from 'react';
import UserForm from './components/Form.js';

function App() {
  const [state, setState]=useState({
    firstName:"",
    lastName:"",
    email:"",
    password:"",
    confirmPassword:""
  });
  return (
    <div className="App">
      <UserForm inputs={state} setInputs={setState} setInputsemail={setState} setInputspassword={setState} setInputspasswordconfirm={setState}/>
      
    </div>
  );
}

export default App;