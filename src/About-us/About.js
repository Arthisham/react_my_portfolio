import React from 'react'
import img from './abt.jpeg'
import Nav from '../Navbar/Nav';
import './About.css'

const About = () => {
    return (
        <div>
            <Nav />
        <div className="section">
            <div className="container2">
                <div className="content-section">
                    <div className="title">
                        <h5>About Us</h5>
                    </div>
                    <div className="content">
                        <p>Welcome to ShopEase, your ultimate destination for an
                             unparalleled online shopping experience. At ShopEase
                            , we are dedicated to bringing you a vast selection of 
                            high-quality products, exceptional customer service, 
                            and an enjoyable, hassle-free shopping journey.</p>
                        <div className='content1'>
                        <h5>Our Mission</h5>
                        <p>Our mission is to make online shopping convenient, enjoyable, 
                            and accessible for everyone. We aim to provide our customers 
                            with an extensive range of products across various categories, ensuring that you find exactly what
                             you’re looking for, no matter your needs or preferences.</p>

                        </div>
                        
                        <div className="button">
                        Read More....
                        </div>
                    </div>
                    </div>
                      <div className="image-section">
                        <img src={img} alt="art" />
                      </div>
                </div>

             </div>
             </div>
            );
}

            export default About