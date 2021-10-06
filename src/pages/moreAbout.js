import React, {useState} from 'react'
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'
import AboutMe from '../components/AboutMe'
import Footer from '../components/Footer'
import Collapsible from '../components/Collapsible'

const MoreAboutPage = () => {

    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navbar toggle={toggle} />
            <AboutMe />
            <Collapsible />
            <Footer />
        </>
    )
}

export default MoreAboutPage
