import React, {useState} from 'react'
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'
import AboutMe from '../components/AboutMe'
import Footer from '../components/Footer'

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
            <Footer />
        </>
    )
}

export default MoreAboutPage
