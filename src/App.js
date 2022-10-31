import React, {FormEvent, useState} from 'react';
import {
  Link,
  Route,
  Routes
} from 'react-router-dom';
import  './App.css'
import LoginForm from "./Components/LoginForm/LoginForm";
import RegistrationForm from "./Components/RegistrationForm/RegistrationForm";
import Home from "./Components/views/Home";
import Task from "./Components/views/Task";


function App() {
  const [views, setViews] = useState([true,false, false]);
  return <>
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="registration">Registr</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
      </ul>
    </nav>
    <Routes>
      <Route path='/login' element={<LoginForm/>}/>
      <Route path='/registration' element={<RegistrationForm/>}/>
      <Route path='/task/:id' element={<Task/>}/>
      <Route path='/' element={<Home/>}/>
    </Routes>
    </>;
}

export default App;
