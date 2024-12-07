import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useEffect,useState } from 'react'
import axios from 'axios'
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
import Members from '../pages/Members'
import UserDataRegister from '../pages/UserDataRegister'
import ServiceDetail from '../pages/ServiceDetail'
import Login from '../pages/Login'
import Register from '../pages/Register'
import Calendar from '../pages/Calendar'
import Guide from '../pages/Guide'
import UploadProject from '../pages/UploadProject'
import Priorities from '../pages/Priorities'
import Method from '../pages/Method'
import ProtectedRoute from '../components/utils/ProtectedRoute'
import Logout from '../pages/Logout'



const RoutesApp = () => {
    
    
    
    
    return (
        <Router>
            <Header />
            <Routes>
                <Route path='/' element={<Hero />} />
                <Route path='/thankyou' element={<ThanKYouPage />} />
                <Route path='/profile' element={<ProtectedRoute> <Profile /> </ProtectedRoute> } />
                <Route path='/aboutus' element={<AboutUs />} />
                <Route path='/contactus' element={<ContactUs />} />
                <Route path='/setting' element={ <ProtectedRoute> <Setting />  </ProtectedRoute> } />
                <Route path='/reservation' element={<Reservation />} />
                <Route path='/projects' element={<Projects />} />
                <Route path='/mycart' element={<MyCart />} />
                <Route path='/services' element={<Services />} />
                <Route path='/search' element={<Search />} />
               {/* <Route path ='/projectcard' element={<ProjectCard />} />*/} 
                <Route path ='/members' element={<Members />} />
                <Route path ='/userdataregister' element={<UserDataRegister />} />
                <Route path ='/servicedetail' element={<ServiceDetail />} />
                <Route path='/register' element={<Register />} /> 
                <Route path='/login' element={<Login />} /> 
                <Route path='/calendar' element={<Calendar />} /> 
                <Route path='/guide' element={<Guide />} /> 
                <Route path='/projects/new' element={<UploadProject />} /> 
                <Route path='/priorities' element={<Priorities />} /> 
                <Route path='/method' element={<Method />} /> 
                
                <Route path='/projects/:id' element={<ProjectCard />} />
                <Route path="/members/:id" element={<Profile /> } /> 
                <Route path='/logout' element={<Logout />} /> 
                                                    

            </Routes>
            <Footer />
        </Router>
    )
}

export default RoutesApp