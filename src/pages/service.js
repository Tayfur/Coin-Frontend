import React, {useState} from 'react'
import {
    Sidebar,
    Navbar,
    Footer,
    ServiceData,
} from '../components'
import {DataS}  from '../components/ServiceData/Data'
function Service() {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen)
    };

    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navbar toggle={toggle} />
            <ServiceData {...DataS}/>
            <Footer/>
        </>
    )
}

export default Service;