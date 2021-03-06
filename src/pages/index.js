import React, {useState, useEffect} from 'react'
import HeroSection from '../components/HeroSection';
import InfoSection from '../components/InfoSection';
import SignUpSection from '../components/SignUpSection';
import { homeObjOne, homeObjThree} from '../components/InfoSection/Data';
import Navbar from '../components/Navbar'
import Services from '../components/Services';
import Sidebar from '../components/Sidebar'
import Footer from '../components/Footer';

function Home (){

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () =>{
        this.setState({isOpen: !this.state.isOpen});
        setIsOpen(!isOpen);
    }

    useEffect(() => {
        localStorage.setItem("UserLogged", "false");
    }, [])

    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navbar toggle={toggle}/>
            <HeroSection />
            <InfoSection {...homeObjOne}/>
            <Services />
            <SignUpSection {...homeObjThree} />
            <Footer />
        </>
    )
}

export default Home;