import React from  'react';
import { useState } from 'react';
    
const UserForm = (props) => {
    const { setInputs,setInputsemail,setInputspassword,setInputspasswordconfirm} = props;
    
  
    const [inputsError, setInputsError] = useState("");
    const [inputsErroremail, setInputsErroremail] = useState("");
    const [inputsErrorpassword, setInputsErrorpassword] = useState("");
    const [inputsErrorpasswordconfirm, setInputsErrorpasswordconfirm] = useState("");
    const handleTitle = (e) => {
        setInputs(e.target.value);
        if(e.target.value.length < 1) {
            setInputsError(" Name  is required!");
        } else if(e.target.value.length < 2) {
            setInputsError(" Name  must be 2 characters or longer!");
        }
    }
    const handleTitleEmail = (e) => {
        setInputsemail(e.target.value);
        if(e.target.value.length < 1) {
            setInputsErroremail("email is required!");
        } else if(e.target.value.length < 5) {
            setInputsErroremail("Email must be 5 characters or longer!");
        }
    }
    const handleTitlePassword = (e) => {
        setInputspassword(e.target.value);
        if(e.target.value.length < 1) {
            setInputsErrorpassword("Password is required!");
        } else if(e.target.value.length < 8) {
            setInputsErrorpassword("Password must be 8 characters or longer!");
        }
    }
    const handleTitlePasswordconfirm = (e) => {
            setInputspasswordconfirm(e.target.value);
            if(e.target.value.length < 1) {
                setInputsErrorpasswordconfirm("Password is required!");
            } else if(e.target.value!== setInputspassword(e.target.value)) {
                setInputsErrorpasswordconfirm("Password confirm must be the same password");
            }

    }

    
    return(
        <form >
            <div>
                <label for="firstName">First Name: </label> 
                <input type="text" onChange={handleTitle} name="firstName" />
                {
                    inputsError ?
                    <p style={{color:'red'}}>{ inputsError }</p> :
                    ''
                }
            </div>
            <div>
                <label>Last Name: </label> 
                <input type="text" onChange={handleTitle} name="lastName"/>
                {
                    inputsError ?
                    <p >{ inputsError }</p> :
                    ''
                }
            </div>
            <div>
                <label>Email : </label> 
                <input type="text" onChange={handleTitleEmail} name="email" />
                {
                    inputsErroremail ?
                    <p style={{color:'red'}}>{ inputsErroremail }</p> :
                    ''
                }
            </div>
            <div>
                <label>Password: </label>
                <input type="Password" onChange={handleTitlePassword} name="password" />
                {
                    inputsErrorpassword ?
                    <p style={{color:'red'}}>{ inputsErrorpassword }</p> :
                    ''
                }
            </div>
              <div>
                <label> Confirm Password: </label>
                <input type="Password" onChange={handleTitlePasswordconfirm} name="confirmPassword"/>
                {
                    inputsErrorpasswordconfirm ?
                    <p style={{color:'red'}}>{ inputsErrorpasswordconfirm }</p> :
                    ''
                }
            </div>
           
        </form>
    );
};

export default UserForm;