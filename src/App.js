import './App.css';
import React from 'react'
import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom';
import Home from './pages/index';
import Signup from './pages/signup';
import './fonts/Gilmer-Font/GilmerRegular.otf';
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from "firebase/firestore";
import MainPage from './pages/mainPage';
import DiagramPage from './pages/diagramPage';
import Registration from './pages/registration';
import Login from './pages/login';
import CreateDiagram from './pages/createDiagram';
import ProjectPage from './pages/projectPage';

export const firebaseConfig = {
  apiKey: "AIzaSyAiIcMgbswZMZ8up2cQi-JtO7TtkhmDIXQ",
  authDomain: "advis-production.firebaseapp.com",
  databaseURL: "https://advis-production-default-rtdb.firebaseio.com",
  projectId: "advis-production",
  storageBucket: "advis-production.appspot.com",
  messagingSenderId: "933304960587",
  appId: "1:933304960587:web:2ca563fefbf89aab956fce"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore(app);
export const create = false;


export default class App extends React.Component {

  render(){
    return (
      <Router>
          <Routes>
            <Route exact path="/home" element={<Home/>}/>
            <Route exact path="/signup" element={<Registration/>}/>
            <Route exact path="/signin" element={<Login/>}/>
            <Route exact path="/mainpage" element={<MainPage/>}/>
            <Route exact path="/diagramPage" element={<DiagramPage/>}/>
            <Route exact path="/createDiagram" element={<CreateDiagram/>} />
            <Route exact path="/projects" element={<ProjectPage/>} />
          </Routes>
      </Router>
    );
  }
}
