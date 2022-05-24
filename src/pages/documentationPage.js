import React from 'react'
import { useEffect, useState } from 'react';
import { homeObjOne } from '../components/InfoSection/Data';
import NavbarUser from '../components/Navbar_user';
import SidebarUser from '../components/Sidebar-user';
import InfoSectionUser from '../components/InfoUser';
import Footer from '../components/Footer'
import InfoAppUser from '../components/InfoUserApp';
import { doc, getDoc } from "firebase/firestore";
import { db } from '../App';
import { FormButton } from '../components/Signup/SignupElements';
import { useNavigate } from 'react-router-dom';


function Documentation() {

    let navigate = useNavigate();
    const[isOpen, setIsOpen] = useState(false);
    const[data,setData] = useState({});

    //  useEffect(async () => {
    //     const docRef = doc(db, "avramdenis58", "JDFApplication");
    //     const docSnap = await getDoc(docRef);

    //     if (docSnap.exists()) {
    //         //console.log("Document data:", docSnap.data().jsonContent);
    //         const test = docSnap.data();
    //         const json = test["TestareaMea"].jsonContent;
    //         setData(JSON.parse(json));
    //         //console.log(data);
    //     } else {
    //         console.log("No such document!");
    //     }
    // },[data])

    const toggle = () =>{
        setIsOpen(!isOpen);
    }

        return (
            <>
                <SidebarUser isOpen={isOpen} toggle={toggle} />
                <NavbarUser toggle={toggle}/>
                <Footer />
            </>
        )
}

export default Documentation