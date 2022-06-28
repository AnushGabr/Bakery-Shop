import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Header from './components/header/Header'
import Footer from './components/Footer'
import AboutUs from './pages/AboutUs'
import Cafe_Shop from './pages/Cafe_Shop'
import Contact from './pages/Contact'
import Home from './pages/Home'
//import  from './pages/Products'
import { useState} from 'react'
import Products from './pages/Products'

const App = () => {
  return (
    <BrowserRouter>
      <Header/>
        <Routes>
          <Route path= '/' element = {<Home/>}/>
          <Route path= '/AboutUs' element = {<AboutUs/>}/>
          <Route path= '/Cafe_Shop' element = {<Cafe_Shop/>}/>
          <Route path= '/Contact' element = {<Contact/>}/>
          <Route path='/products?category=' element = {<Products/>}/>
        </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App