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
import ProtectedRoutesForUser from './ProtectedRoutesForUser';
import ResetPassword from './pages/resetPassword';
import AdminMainPage from './pages/adminMainPage';
import ProtectedRoutesForAdmin from './ProtectedRoutesForAdmin';
import StatisticsPage from './pages/statisticsPage';
import Documentation from './pages/documentationPage';
import Contact from './pages/contact';

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
            <Route exact path="/signin/resetPassword" element={<ResetPassword/>}/>
            <Route exact path="/contact" element={<Contact/>}/>
            <Route element={<ProtectedRoutesForUser />}>
              <Route exact path="/mainpage" element={<MainPage/>}/>
              <Route exact path="/diagramPage" element={<DiagramPage/>}/>
              <Route exact path="/createDiagram" element={<CreateDiagram/>} />
              <Route exact path="/projects" element={<ProjectPage/>} />
              <Route exact path="/documentation" element={<Documentation/>} />
            </Route>
            <Route element={<ProtectedRoutesForAdmin />}>
              <Route exact path="/adminMainPage" element={<AdminMainPage/>} />
              <Route exact path="/statistics" element={<StatisticsPage/>} />
            </Route>
          </Routes>
      </Router>
    );
  }
}
