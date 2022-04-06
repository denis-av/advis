import './App.css';
import React, {useEffect} from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages/index';
import Signup from './pages/signup';
import './fonts/Gilmer-Font/GilmerRegular.otf';
import { initializeApp } from "firebase/app";

export const firebaseConfig = {
  apiKey: "AIzaSyAiIcMgbswZMZ8up2cQi-JtO7TtkhmDIXQ",
  authDomain: "advis-production.firebaseapp.com",
  databaseURL: "https://advis-production-default-rtdb.firebaseio.com",
  projectId: "advis-production",
  storageBucket: "advis-production.appspot.com",
  messagingSenderId: "933304960587",
  appId: "1:933304960587:web:2ca563fefbf89aab956fce"
};


export default class App extends React.Component {

  async componentDidMount(){
    initializeApp(firebaseConfig);
  }

  render(){
    return (
      <Router>
          <Routes>
            <Route exact path="/" element={<Home/>}/>
            <Route exact path="/signup" element={<Signup/>}/>
          </Routes>
      </Router>
    );
  }
}
