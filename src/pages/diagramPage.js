import React from 'react'
import NavbarUser from '../components/Navbar_user';
import SidebarUser from '../components/Sidebar-user';
import Footer from '../components/Footer'
import Treemap from './staticTreemap';
import "./style_static.css"
import { doc, getDoc } from "firebase/firestore";
import { db } from '../App';
import {useEffect, useState} from 'react';

function DiagramPage(){

    const[isOpen, setIsOpen] = useState(false);
    const[d3,setD3] = useState("");
    const[data,setData] = useState({});

    useEffect(async () => {
        async function getData(){
            const docRef = doc(db, "avramdenis58", "JDFApplication");
            const docSnap = await getDoc(docRef);

            if (docSnap.exists()) {
                //console.log("Document data:", docSnap.data().jsonContent);
                const test = docSnap.data();
                const json = test["TestareaMea"].jsonContent;
                return json;
            } else {
                console.log("No such document!");
            }
        }
        const posts = await getData();
        localStorage.setItem('data', posts);
        //console.log(JSON.parse(posts));
    },[]);

    const toggle = () =>{
        setIsOpen(!isOpen);
    }

        return (
            <>
                <SidebarUser isOpen={isOpen} toggle={toggle}/>
                <NavbarUser toggle={toggle}/>
                <Treemap width={1100} height={600} />;
                <Footer />
            </>
        )
}

export default DiagramPage