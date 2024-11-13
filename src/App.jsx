import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'

import Hero from './components/Home/Hero'
import './styles/App.css'

import ThanKYouPage from './pages/ThankYou'
import Profile from './pages/Profile'

function App() {
 

  return (
    <Router>
    <Header />
      <Routes>
        
        <Route path='/' element={<Hero />} />
        <Route path='/thankyou' element={<ThanKYouPage />} />
        <Route path='/profile' element={<Profile />} />
       {/* <Route path='/login' element={<Login />} /> */}

      </Routes>
    <Footer />
  </Router>
  )
}

export default App
