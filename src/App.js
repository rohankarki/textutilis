
import './App.css';
import Navbar from './component/Navbar';
import TextForm from './component/TextForm';
import About from './component/About';
import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');//wheather darkmode is enable or not 

  const toggleMode = ()=>{
    if(mode === 'light'){
    setMode('dark');
    document.body.style.backgroundColor = '#042743';
    document.title='TextUtils - Dark Mode';
  //   setInterval(() => {
  //       document.title = "TextUtils is amazing  mode";
  //   }, 2000);
  //   setInterval(() => {
  //     document.title = " install TextUtils is amazing  mode";
  // }, 1500);
  }else {
    setMode('light');
    document.body.style.backgroundColor = 'white';
    document.title='TextUtils - Light Mode';
  }
 }
  return (
    <>
    <Router>
      <Navbar title="Rohan" mode={mode} toggleMode={toggleMode} />
        <div className="container ">
        <Switch>
            <Route exact path="/about">
              <About mode={mode} />
            </Route>
            <Route exact path="/">
            <TextForm heading="Enter the text" mode={mode} />
            </Route>
        </Switch>       
        </div>
        </Router>
    </>
  );
}

export default App;
