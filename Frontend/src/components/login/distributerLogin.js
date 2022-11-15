import React, { useState } from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Button } from "reactstrap";
 import "./styles.css";


const Distributerlogin = () => {
  
  // React States
  const navigate=useNavigate()
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  // User Login info
  const database = [
    {
      username: "dist",
      password: "dist123"
    },
    {
      username: "user2",
      password: "pass2"
    }
  ];

  const errors = {
    uname: "invalid username",
    pass: "invalid password"
  };

  const handleSubmit = (event) => {
    //Prevent page reload
    event.preventDefault();

    var { uname, pass } = document.forms[0];
  console.log(document.forms[0]);
    // Find user login info
    const userData = database.find((user) => user.username === uname.value);
console.log(pass.value);
    // Compare user info
    if (userData) {
      if (userData.password !== pass.value) {
        // Invalid password
        setErrorMessages({ name: "pass", message: errors.pass });
      } else {
        setIsSubmitted(true);
      }
    } else {
      // Username not found
      setErrorMessages({ name: "uname", message: errors.uname });
    }
  };

  // Generate JSX code for error message
  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );

  // JSX code for login form
  const renderForm = (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label>Username </label>
          <input type="text" name="uname" required />
          {renderErrorMessage("uname")}
        </div>
        <div className="input-container">
          <label>Password </label>
          <input type="password" name="pass" required />
          {renderErrorMessage("pass")}
        </div>
        <div className="button-container">
          <input type="submit" />
        </div>
      </form>
    </div>
  );
function handleClick()
{
  navigate("/Distributer")
}
  return (
    <div className="app">
      <div className="login-form">
        <div className="title" style={{justifyContent: "center"}}  ><h1>Distributer<br/>Sign In</h1></div>
        {isSubmitted ? <div>Login is Successful <br/>
        <Button type="button" class="btn btn-success" onClick={handleClick}> Click here toContinue</Button>
           </div>
                         : renderForm
                         }
      
        
      </div>
    </div>
  );
}

export default Distributerlogin;