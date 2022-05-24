import React from 'react'
import { useEffect, useState } from 'react';
import SidebarUser from '../components/Sidebar-user';
import Footer from '../components/Footer'
import NavbarAdmin from '../components/Navbar_admin';
import InfoAppAdmin from '../components/InfoAdmin';


function AdminMainPage() {
    const[isOpen, setIsOpen] = useState(false);

    const toggle = () =>{
        setIsOpen(!isOpen);
    }

        return (
            <>
                <SidebarUser isOpen={isOpen} toggle={toggle} />
                <NavbarAdmin toggle={toggle}/>
                <InfoAppAdmin />
                <Footer />
            </>
        )
}

export default AdminMainPage