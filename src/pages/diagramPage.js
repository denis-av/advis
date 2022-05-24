import React from 'react'
import NavbarUser from '../components/Navbar_user';
import SidebarUser from '../components/Sidebar-user';
import Footer from '../components/Footer'
import Treemap from './staticTreemap';
import { doc, getDoc } from "firebase/firestore";
import { db } from '../App';
import {useEffect, useState} from 'react';
import { DiagramWrap, Heading, TextArea, Subtitle,TopLine } from '../components/Diagram/DiagramElements';
import ZoomableTreemap from "./zoomableTreemap";
import "../styles/style_static.css"
import "../styles/style_zoomable.css"
import "../pages/style_bubblechart.css"
import BubbleChart from './bubbleChart';
import CollapsibleTree from './collapsibleTree';


function DiagramPage(){

    const[isOpen, setIsOpen] = useState(false);
    const[d3,setD3] = useState("");
    const[data,setData] = useState({});

    const toggle = () =>{
        setIsOpen(!isOpen);
    }

    const handleDiagram = () => {
        const value = localStorage.getItem("type");
        if(value === "treemapStatic") return <Treemap width={parseInt(localStorage.getItem("width"))} height={parseInt(localStorage.getItem("height"))} />;
        else if(value === "treemapZoomable" ) return <ZoomableTreemap width={parseInt(localStorage.getItem("width"))} height={parseInt(localStorage.getItem("height"))} />;
            else if(value === "bubbleChart" ) return <BubbleChart width={parseInt(localStorage.getItem("width"))} height={parseInt(localStorage.getItem("height"))} />;
    }

        return (
            <>
                <SidebarUser isOpen={isOpen} toggle={toggle}/>
                <NavbarUser toggle={toggle}/>
                <DiagramWrap>
                    {handleDiagram()}
                </DiagramWrap>
                <Footer />
            </>
        )
}

export default DiagramPage