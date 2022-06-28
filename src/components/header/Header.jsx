import {NavLink} from 'react-router-dom'
import './header.css'
import { getFilteredProductsByCategory } from '../../api'
import { useState, useEffect } from 'react'
import CategoryList from '../CategoryList'
import { Link} from 'react-router-dom'

const Header = () => {
    const [isListShow, setListShow] = useState(false);


    const [products, setProducts] = useState([]);
    useEffect(() => {
        getFilteredProductsByCategory()
        .then(resolve => setProducts(resolve))
    }, [])

    const handleListShow = () => {
        setListShow(!isListShow)
      }

    
  return (
    <div>
      <div class="info">
            <div class="address">
                <a href="https://www.google.com/maps/place/Marush+Sweets+Boutique+Teryan+65+Branch/@40.1859451,44.5158425,17z/data=!3m1!4b1!4m5!3m4!1s0x406abdf535b11b33:0x9b8376a06a3ae86d!8m2!3d40.1859451!4d44.5180365?shorturl=1"><i class="fa-solid fa-location-dot"></i> Yerevan, Teryan str. 65  |</a>
                <a href="https://www.google.com/maps/place/Marush+Sweets+Boutique/@40.1936409,44.4962337,17z/data=!3m1!4b1!4m5!3m4!1s0x406abd1142960497:0x987fe7d02f52e79f!8m2!3d40.1936409!4d44.4984277?shorturl=1"><i class="fa-solid fa-location-dot"></i> Yerevan, Baghramyan str. 58 |</a>
                <a href="https://www.google.com/maps/place/32+Komitas+Ave,+Yerevan+0012,+Armenia/@40.2043525,44.5017869,18.5z/data=!4m5!3m4!1s0x406abd471f65e34b:0xc4b5fabb1e995902!8m2!3d40.2042952!4d44.5029769?shorturl=1"><i class="fa-solid fa-location-dot"></i> Yerevan, Komitas str.32 |</a>
            </div>
            <span><i class="fa-solid fa-phone-flip"></i>974-524</span>
            <div class="icons">
                <a href="https://www.facebook.com/MarushSweetsBoutique"><i class="fa-brands fa-facebook-f"></i></a>
                <a href="https://www.instagram.com/"><i class="fa-brands fa-instagram"></i></a>
            </div>
           
        </div>

        
        <div class="section">
            
            <div className='logo'>
              <img src='/images/logo.png'/>
            </div>
            <div class="category" >
                <Link to={'/Shop/'}><span onClick={handleListShow}>Browse Categories <i class="fa-solid fa-angle-down"></i></span></Link>
            </div>

            <nav class="pages">
                <NavLink to = '/AboutUs'>About Us</NavLink>
                <NavLink to = '/Cafe_shop'>Cafe-Shop</NavLink>
                <NavLink to = '/Contact'>Contact Us</NavLink>
            </nav>

            <form class="search-bar">
               <input className='Search' type = 'text' placeholder='Search Here...'/>
                <label for="search" class="fas fa-search"></label>
            </form>

            <div class="icons">
                <i class="fas fa-user"></i>
                <i class="fa-solid fa-cart-shopping"></i>
            </div>
        </div>
        <div className='Home'>
            {
                isListShow && <CategoryList products = {products}/>
            }
                
        </div>
    </div>
    
  )
}

export default Header