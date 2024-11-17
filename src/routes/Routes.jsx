import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'

import Hero from '../components/Home/Hero'
import ThanKYouPage from '../pages/ThankYou'
import Profile from '../pages/Profile'
import AboutUs from '../pages/AboutUs'
import ContactUs from '../pages/ContactUs'
import SettingsProfile from '../pages/SettingsProfile'
import FormReservation from '../pages/FormReservation'

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
                <Route path='/settingsprofile' element={<SettingsProfile />} />
                <Route path='/formreservation' element={<FormReservation />} />
                {/* <Route path='/login' element={<Login />} /> */}

            </Routes>
            <Footer />
        </Router>
    )
}

export default RoutesApp