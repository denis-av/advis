import React, {useState} from 'react'
import HeroSection from '../components/HeroSection';
import InfoSection from '../components/InfoSection';
import SignUpSection from '../components/SignUpSection';
import { homeObjOne, homeObjThree} from '../components/InfoSection/Data';
import Navbar from '../components/Navbar'
import Services from '../components/Services';
import Sidebar from '../components/Sidebar'
import Footer from '../components/Footer';

export default class Home extends React.Component {

    constructor(){
        super();
        this.state = {
            isOpen: false,
        }

        this.toggle = this.toggle.bind(this);
    }

    toggle = () =>{
        this.setState({isOpen: !this.state.isOpen});
    }

    render(){
        return (
            <>
                <Sidebar isOpen={this.state.isOpen} toggle={this.toggle} />
                <Navbar toggle={this.toggle}/>
                <HeroSection />
                <InfoSection {...homeObjOne}/>
                <Services />
                <SignUpSection {...homeObjThree} />
                <Footer />
            </>
        )
    }
}