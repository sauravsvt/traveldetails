import React from 'react'
import {BrowserRouter as Router, Routes, Route , Link} from 'react-router-dom'
import Home from './Home';
import './Header.css'
import logo from "./logo.png"
import Building from './Pages/Building';
function App() {
  return (
   <>
   <div className='app'>

  
   

   
    <Router>
    <nav>
   
    <img src={logo} alt="" />
    <ul>
    <li><Link to="/">Home</Link></li>
    <li><Link to="/blogs">Blogs</Link></li>
    <li><Link to="/tripcategories">Trips Categories</Link></li>
    <li><Link to="/about">About Us</Link></li>
    <li><Link to="/careers">Careers</Link></li>
    </ul>
    </nav>
    
   
         <Routes>
         <Route  path='/' element={< Home />}></Route>
         <Route  path='*' element={< Building />}></Route>
        
         </Routes>
    </Router>

    </div>
   </>
  )
}

export default App