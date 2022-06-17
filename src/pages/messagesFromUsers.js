import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { collection, query, getDocs, doc, setDoc, getDoc } from "firebase/firestore";
import { auth, db } from '../App';
import "../styles/style_static.css"
import styled from "styled-components";
import NavbarAdmin from '../components/Navbar_admin';
import SidebarUser from '../components/Sidebar-user';
import Footer from '../components/Footer'
import {AgGridReact} from "ag-grid-react"
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';
import { BoxForTabel, NavBtn, NavBtnLink } from '../components/MessagesFormUser/MessagesElements';
import Icon from '../images/loading.png';

const ServicesIcon = styled.img`
    height: 250px;
    width: 250px;
    margin-bottom: 10px;
`

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    padding: 0 0px;
    height: 90vh;
    width: 100%;
    position: relative;
    z-index: 1;
    background: #ffffff;
`
const gridOptions = {
    columnDefs : [
        {headerName: "Nume", field:"lastName", sortable:true, filter:true , width:150},
        {headerName: "Prenume", field:"firstName", sortable:true, filter:true, width:150 },
        {headerName: "Email", field:"email", sortable:true, filter:true, width:200 ,resizable: true},
        {headerName: "Telefon", field:"phone", sortable:true, filter:true, width:150 },
        {headerName: "Message", field:"message", sortable:true, filter:true, width:550, resizable: true, wrapText: true},
    ]
}

let rowData = [];

function MessagesFromUsers(){
    let navigate = useNavigate();
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([]);
    const [isLoading, setLoading] = useState(true);
    const [emailSelected, setEmailSelected] = useState("");
    const [gridApi, setGridApi] = useState([]);

    useEffect(async () => {
        setMessages([]);
        const docRef = doc(db, "admin", "contact");
        const docSnap = await getDoc(docRef);
        docSnap.data().allMessages.forEach(element => {
            const obj = {
                lastName: element.lastName,
                firstName: element.firstName,
                email: element.email,
                phone: element.phone,
                message: element.message
            }
            messages.push(obj);
        });
        console.log(messages);
        console.log(rowData);
        rowData = messages;
        setLoading(false);
    }, [])

    const toggle = () =>{
        setIsOpen(!isOpen);
    }

    const onButtonClick = () => {
        const selectedNode = gridApi.getSelectedNodes();
        const selectedDate = selectedNode.map(node => node.data);
        const selectedDataStringPresentation = selectedDate.map(node => node.email);
        console.log(selectedDataStringPresentation);
    }
        return (
            isLoading ? (
                <Container>
                    <ServicesIcon src={Icon} />
                </Container>
            ) : (
                <>
                <SidebarUser isOpen={isOpen} toggle={toggle}/>
                <NavbarAdmin toggle={toggle}/>
                <Container>
                    <BoxForTabel className='ag-theme-balham'>
                        <AgGridReact rowData={rowData} onGridReady={params => setGridApi(params.api)} gridOptions={gridOptions} rowHeight={100}/>
                    </BoxForTabel>
                </Container>
                <Footer />
                </>
            )
        )
}
export default MessagesFromUsers