import React from 'react'
import NavbarUser from '../components/Navbar_user';
import SidebarUser from '../components/Sidebar-user';
import Footer from '../components/Footer'
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ProjectUser from '../components/ProjectUser';
import { collection, query, getDocs, doc, setDoc, getDoc } from "firebase/firestore";
import { auth, db } from '../App';

function ProjectPage(){

    let navigate = useNavigate();
    const[isOpen, setIsOpen] = useState(false);
    const [user, setUser] = useState("");
    const [userName, setUserName] = useState("");
    const [userProjects, setUserProjects] = useState([]);
    const [userFiles, setUserFiles] = useState([]);
    const [isLoading, setLoading] = useState(true)

    useEffect(async () => {
        const result = localStorage.getItem("user");
        setUser(result);
        try{
                const docRef = doc(db, "users", result);
                const docSnap = await getDoc(docRef);
                const test = docSnap.data();
                setUserName(test["firstName"]);
                localStorage.setItem("userFirstName",test["firstName"]);
                const q = query(collection(db, result));
                const querySnapshot = await getDocs(q);
                querySnapshot.forEach(async (docum) => {
                    userProjects.push(docum.id);
                    const object = {
                        projectName: docum.id,
                        projectDocument: docum.data()
                    }
                    userFiles.push(object);
                });
                setLoading(false) //stop loading when data is fetched
            }catch(error){

            }
    }, [])

    const toggle = () =>{
        setIsOpen(!isOpen);
    }

    return(
        <>
            <SidebarUser isOpen={isOpen} toggle={toggle}/>
            <NavbarUser toggle={toggle}/>
            <ProjectUser isLoading ={isLoading} userFiles = {userFiles} userName = {userName} />
            <Footer />
        </>
    )
}
export default ProjectPage