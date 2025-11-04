import Navbar from './components/Navbar.jsx'
import './App.css'
import { BrowserRouter } from 'react-router-dom'
import { Routes } from 'react-router-dom'
import { Route } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Services from './components/Services'
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
