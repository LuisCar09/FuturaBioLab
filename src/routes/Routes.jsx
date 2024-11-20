import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'

import Hero from '../components/Home/Hero'
import ThanKYouPage from '../pages/ThankYou'
import Profile from '../pages/Profile'
import AboutUs from '../pages/AboutUs'
import ContactUs from '../pages/ContactUs'
import Setting from '../pages/Setting'
import Reservation from '../pages/Reservation'
import Projects from '../pages/Projects'
import MyCart from '../pages/MyCart'
import ProjectCard from '../pages/ProjectCard'
import Services from '../pages/Services'
import Search from '../pages/Search'

const RoutesApp = () => {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path='/' element={<Hero />} />
                <Route path='/thankyou' element={<ThanKYouPage />} />
                <Route path='/profile' element={<Profile />} />
                <Route path='/aboutus' element={<AboutUs />} />
                <Route path='/contactus' element={<ContactUs />} />
                <Route path='/setting' element={<Setting />} />
                <Route path='/reservation' element={<Reservation />} />
                <Route path='/projects' element={<Projects />} />
                <Route path='/mycart' element={<MyCart />} />
                <Route path='/services' element={<Services />} />
                <Route path='/search' element={<Search />} />
                {/* <Route path='/login' element={<Login />} /> */}

            </Routes>
            <Footer />
        </Router>
    )
}

export default RoutesApp