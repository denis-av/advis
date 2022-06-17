import React from 'react'
import SidebarUser from '../components/Sidebar-user';
import Footer from '../components/Footer'
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { collection, query, getDocs, doc, setDoc, getDoc } from "firebase/firestore";
import { auth, db } from '../App';


import NavbarAdmin from '../components/Navbar_admin';
import Icon from '../images/loading.png';
import styled from "styled-components";
import BarChartAdmin from './barchartAdmin';
import { BoxForCharts, BoxForStatistic, TopLine} from '../components/BarchartAdmin/Elements';

const ServicesIcon = styled.img`
    height: 250px;
    width: 250px;
    margin-bottom: 10px;
`

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 0px;
    height: 90vh;
    width: 100%;
    position: relative;
    z-index: 1;
    background: #ffffff;
`

const datas = [
    {name:"Treemap Static", value:35},
    {name:"Treemap Zoomable", value:15},
    {name:"Bubble Chart", value:50},
    {name:"Bar Chart", value:10}
]

const datasUser = [
    {name:"SoftwareDeveloper", value:153},
    {name:"Analist", value:76},
    {name:"Profesor", value:40},
    {name:"Student", value:60},
    {name:"Elev", value:78},
    {name:"Altele", value:10}
]

let treemapStaticFound = 0;
let treemapZoomableFound = 0;
let bubblechartFound = 0;
let barchartFound = 0;

function StatisticsPage(){
    let navigate = useNavigate();
    const [isOpen, setIsOpen] = useState(false);
    const [userName, setUserName] = useState("admin");
    const [isLoading, setLoading] = useState(true);
    const [dataDiagram, setDataDiagram] = useState([]);
    const [dataUser, setDataUser] = useState([]);

    useEffect(async () => {
        treemapStaticFound = 0;
        treemapZoomableFound = 0;
        bubblechartFound = 0;
        barchartFound = 0;
        const docRef = doc(db, "admin", "statistics");
        const docSnap = await getDoc(docRef);
        docSnap.data().children.forEach(element => {
            element.children.forEach(diagram =>{
                if(diagram.name === "treemapStatic") treemapStaticFound = treemapStaticFound + parseInt(diagram.value);
                if(diagram.name === "treemapZoomable") treemapZoomableFound = treemapZoomableFound + parseInt(diagram.value);
                if(diagram.name === "bubbleChart") bubblechartFound = bubblechartFound + parseInt(diagram.value);
                if(diagram.name === "barchart") barchartFound = barchartFound + parseInt(diagram.value);
            })
        });

        const diagramFound = [
            {name:"Treemap Static", value:treemapStaticFound},
            {name:"Treemap Zoomable", value:treemapZoomableFound},
            {name:"Bubble Chart", value:bubblechartFound},
            {name:"Bar Chart", value:barchartFound}
        ];
        setDataDiagram(diagramFound);
        setDataUser(datasUser);
    }, [])

    const toggle = () =>{
        setIsOpen(!isOpen);
    }

        return (
            <>
                <SidebarUser isOpen={isOpen} toggle={toggle}/>
                <NavbarAdmin toggle={toggle}/>
                <BoxForCharts>
                    <BoxForStatistic>
                        <BarChartAdmin width={600} height={500} data={dataDiagram} margin={60} range={[treemapStaticFound,treemapZoomableFound,bubblechartFound,barchartFound]} />
                        <TopLine lightText={false}>Diagrame create folosind site-ul ADVIS</TopLine>
                    </BoxForStatistic>
                    <BoxForStatistic>
                        <BarChartAdmin width={600} height={500} data={dataUser} margin={60} range={[33,150,90,42,78]}/>
                        <TopLine lightText={false} style={{marginLeft:"5%"}}>Numărul de utilizatori în funcție de ocupație</TopLine>
                    </BoxForStatistic>
                </BoxForCharts>
                <Footer />
            </>
        )
}
export default StatisticsPage