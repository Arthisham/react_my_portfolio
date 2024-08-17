import React from 'react'
import image from './re1.webp'
import image1 from './re2.webp'
import image2 from './re3.webp'
import './Testinomials.css' 
import Nav from '../Navbar/Nav'

const  Testinomials = () => {
  return (
    <div>
        <Nav />
        <section className='section_contain'>
            <h2>Testinomials</h2>
            <h1>What our customer say</h1>
            <div className="section_card">
             <img src={image} alt="" style={{marginTop:"10%"}} />
                <h4>Love the simplicity</h4>
                <p>
                    "Love the Dress" is a campaign or initiative focused on celebrating and promoting fashion, 
                    particularly beautiful dresses. It can involve showcasing new collections, encouraging people to share 
                    their favorite outfits,or highlighting the craftsmanship and design of various dresses.
                </p>
                
                {/* <h5>Allan Collins</h5>
                <h3>Managing Director</h3> */}
            </div> <br /> <br />
            <br />

            <div className="section_card">
            <img src={image1} alt=""  style={{marginTop:"10%"}} />
                <h4>Excellent Design</h4>
                <p>
                "Excellent Design" embodies the pinnacle of creativity, functionality, and aesthetic appeal. 
                It represents products or solutions that seamlessly blend innovation with usability,
                 delivering superior experiences.
                </p>
              
                {/* <h5>Tanya Grant</h5>
                <h6>Ceo & Founder</h6> */}
            </div> <br /> <br />
            <br />

            <div className="section_card">
            <img src={image2} alt=""  style={{marginTop:"10%"}} />
                <h4>Efficient and Reliable</h4>
                <p>
                The Dress" highlights a garment designed for both functionality and dependability.
                  This dress combines stylish aesthetics with practical features, 
                ensuring it fits well, feels comfortable, and is suitable for various occasions. 
                </p>
               
                {/* <h5>Clay Washington</h5> */}
                {/* <h6>Fashion Designer</h 6> */}
            </div> 
        </section>

    </div>
  )
}

export default  Testinomials