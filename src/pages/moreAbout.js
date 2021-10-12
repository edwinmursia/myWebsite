import React, {useState} from 'react'
import Sidebar from '../components/Sidebar'
import AboutMe from '../components/AboutMe'
import Footer from '../components/Footer'
import Collapsible from '../components/Collapsible'
import GoBack from '../components/GoBack'

const MoreAboutPage = () => {

    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <GoBack />
            <AboutMe />
            <Collapsible />
            <Footer />
        </>
    )
}

export default MoreAboutPage
