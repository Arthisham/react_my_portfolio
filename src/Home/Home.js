import React from 'react'
import './Home.css';
import Nav from '../Navbar/Nav';

const Home = () => {
  return (
    <div className='background1'>
       <Nav/>
       <h1 class="text">Shop With Us..!</h1>


        <div class="container1">
          <p class="para">Welcome to ShopEase, your ultimate online shopping destination! At ShopEase,
             we bring you a seamless and enjoyable shopping experience, offering a vast array of products
             to cater to all your needs. From the latest fashion trends to cutting-edge electronics,
             home essentials, and unique gifts, we've got it all in one convenient place.</p>
        </div>

        <div>
          <button type="text" class="button">SHOP NOW</button>
          <button type="text" class="button1">CLUB MEMBERSHIP</button>
        </div>
    </div>
    
  )
}
export default Home