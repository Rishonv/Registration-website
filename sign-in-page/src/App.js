import React, { useState } from "react";
import logo from './logo.svg';
import './App.css';
import { Login } from "./Login";
import { Register } from "./Register";

function App() {
//  try{
  //const [currentForm, setCurrentForm] = useState('login');
  const [currentForm, setCurrentForm] = useState(false);

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  }

  return (
    <div className="App">
      {
        currentForm === "login" ? <Login onFormSwitch={toggleForm} /> : <Register onFormSwitch={toggleForm} />
      }
    </div>
  );
    // }catch (e){
    //   console.error(e);
    // }
}

export default App;