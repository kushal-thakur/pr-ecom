import React from 'react'
import HomePage from '../pages/HomePage'
import LoginPage from '../pages/LoginPage'
import { BrowserRouter as Router, Routes, Route, useParams } from "react-router-dom"
import AboutPage from '../pages/AboutPage'
import CartPage from '../pages/Cart'
import ContactPage from '../pages/ContactPage'
import Detail from '../pages/Detail'
import ProtectRouting from '../router/ProtectRouting'
import Men from '../pages/Men'
import Women from '../pages/Women'
import Baby from '../pages/Baby'
import Electronics from '../pages/Electronics'
import Sports from '../pages/Sports'
import Books from '../pages/Books'


const Appss = () => {
  
  return (
    <>

      <Router>
        <Routes>
          <Route path="/" element={<ProtectRouting component={HomePage}/>}/>

          <Route path='/About-Page' element={<AboutPage />} />
          <Route path='/Cart-Page' element={<CartPage />} />
          <Route path='/Contact-Page' element={<ContactPage />} />
          <Route path='/Detail/:id' element={<Detail/>}/>
          <Route path='/loginpg' element={<LoginPage/>}/>
          <Route path='/men' element={<Men/>}/>
          <Route path='/women' element={<Women/>}/>
          <Route path='/Baby' element={<Baby/>}/>
          <Route path='/Electronics' element={<Electronics/>}/>
          <Route path='/Sports' element={<Sports/>}/>
          <Route path='/Books' element={<Books/>}/>
          
          

          
        </Routes>
      </Router>




    </>

  )
}

export default Appss;