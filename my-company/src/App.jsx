import Navbar from './components/Navbar.jsx'
import './App.css'
import { BrowserRouter } from 'react-router-dom'
import { Routes } from 'react-router-dom'
import { Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Services from './pages/Services'
import Footer from './components/Footer.jsx'

function App() {
  
  return (
    <>
      <div>
        <Navbar/>
        <div>
          <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/services' element={<Services/>}/>
        <Route path='/contact' element={<Contact/>}/>
        </Routes>
        </div>
        <Footer/>
    </div>
    </>
  )
}

export default App;
