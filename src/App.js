import React from 'react'
import {useState} from 'react'
import {BrowserRouter as Router, Routes, Route , Link} from 'react-router-dom'
import Home from './Home';
import './Header.css'
import logo from "./logo.png"
import Building from './Pages/Building';
import Careers from './Pages/Careers'
import Footer from './Footer.js'
import AboutUs from './Pages/AboutUs';
function App({onClick, onToggle}) {

  const [show, setShow] = useState(false);
  
  function toggle(){
    setShow(!show);
  }

  return (
   <>
   <div className='app'>
    <Router>
      <nav className={show?'':'notActive'}>
        <img src={logo} alt="" />

        <ul id='dropDown' className={show?'active': "notActive"}>
        <li onClick={toggle}><Link to="/">Home</Link></li>
        <li onClick={toggle}><Link to="/blogs">Blogs</Link></li>
        <li onClick={toggle}><Link to="/tripcategories">Trips Categories</Link></li>
        <li onClick={toggle}><Link to="/about">About Us</Link></li>
        <li onClick={toggle}><Link to="/careers">Careers</Link></li>
        </ul>

        <svg onClick={toggle} width="96" height="96" viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clip-path="url(#clip0_6_2)">
          <path d="M12 72H84V64H12V72ZM12 52H84V44H12V52ZM12 24V32H84V24H12Z" fill="white"/>
          </g>
          <defs>
          <clipPath id="clip0_6_2">
          <rect width="96" height="96" fill="white"/>
          </clipPath>
          </defs>
        </svg>

      </nav>
    
   
         <Routes>
         <Route  path='/' element={< Home />}></Route>
         <Route  path='*' element={< Building />}></Route>
         <Route  path='/careers' element={< Careers />} />
         <Route  path='/about' element={< AboutUs />} />
        
         </Routes>

      <Footer />
    </Router>

    </div>
   </>
  )
}

export default App