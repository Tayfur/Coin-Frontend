import React, {useState} from 'react'
import { homeObjOne } from '../components/InfoSection/Data';
import {
    Sidebar,
    Navbar,
    HeroSection,
    InfoSection,
    Services,
    Footer
} from '../components'

function Home() {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen)
    };

    return (
        <>
        
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navbar toggle={toggle} />
            <HeroSection />
            <InfoSection {...homeObjOne} />
            <Services />
            <Footer/>
        </>
    )
}

export default Home
