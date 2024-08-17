import React from 'react'
import './Product.css'
import img1 from './p1.jpeg'
import img2 from './p2.webp'
import img3 from './p3.webp'
import img4 from './p11.webp'
import img5 from './p5.webp'
import img6 from './p6.jpeg'
import img7 from './p7.webp'
import img8 from './p8.webp'
import img9 from './p9.webp'
import img10 from './p14.jpeg'
import img11 from './p12.jpeg'
import img12 from './p13.jpeg'
import Nav from '../Navbar/Nav'


const Product = () => {
    return (
        <div>
           <Nav />
            <div className="products">
                    <h3 className='heading'>Our Products</h3>

                <div className="product">
                        <img src={img1} alt="menu" />
                    <div className="details">
                        <div className="details_sub">
                            
                        </div>
                        <h3 style={{fontSize:"20px"}}>Bodycon Dress</h3>
                        <button>Add to Cart</button>
                    </div>
                </div>
                <div className="product">
                        <img src={img2} alt="menu" />
                    <div className="details">
                        <div className="details_sub">
                            {/* <h5>T-Shirt</h5> */}
                        </div>
                        <h3 style={{fontSize:"20px"}}>T-Shirt

                        </h3>
                            <button>Add to Cart</button>
                    </div>
                    
                </div>
                <div className="product">
                        <img src={img3} alt="menu" />
                    <div className="details">
                        <div className="details_sub">
                            {/* <h5>Skirt</h5> */}
                        
                        </div>
                        <h3 style={{fontSize:"20px"}}>Skirt</h3>
                        <button>Add to Cart</button>                  
                    </div>
                    
                </div>
                <div className="product">
                        <img src={img4} alt="menu" />
                    <div className="details">
                        <div className="details_sub">
                            {/* <h5>Shoes</h5> */}
            
                        </div>
                        <h3 style={{fontSize:"20px"}}>Shoes</h3>
                        <button>Add to Cart</button>
                    
                    </div>
                   
                </div>
                <div className="product">
                        <img src={img5} alt="menu" />
                    <div className="details">
                        <div className="details_sub">
                            {/* <h5>Shoes</h5> */}
                           
                        </div>
                        <h3 style={{fontSize:"20px"}}>Shoes</h3>
                        <button>Add to Cart</button>    
                    
                    </div>
                    
                </div>
                <div className="product">
                        <img src={img6} alt="menu" />
                    <div className="details">
                        <div className="details_sub">
                            {/* <h5>Hand Bag</h5> */}
                        
                        </div>
                        <h3 style={{fontSize:"20px"}}>Hand Bag</h3>
                        <button>Add to Cart</button>
                    
                    </div>
                    
                </div>
                <div className="product">
                        <img src={img7} alt="menu" />
                    <div className="details">
                        <div className="details_sub">
                            {/* <h5>Watches</h5> */}
        
                        </div>
                        <h3 style={{fontSize:"20px"}}>Watches</h3>
                        <button>Add to Cart</button>
                    </div>
                   
                </div>
                <div className="product">
                        <img src={img8} alt="menu" />
                    <div className="details">
                        <div className="details_sub">
                            {/* <h5>Slippers</h5> */}
                
                        </div>
                        <h3 style={{fontSize:"20px"}}>Slippers</h3>
                        <button>Add to Cart</button>    
                    </div>
                    
                </div>
                <div className="product">
                        <img src={img9} alt="menu" />
                    <div className="details">
                        <div className="details_sub">
                            {/* <h5>Men Shirt</h5> */}
                        </div>
                        <h3 style={{fontSize:"20px"}}>Shirt</h3>
                        <button>Add to Cart</button>
                    </div>
                       
                </div>
               
                <div className="product">
                        <img src={img10} alt="menu" />
                    <div className="details">
                        <div className="details_sub">
                            {/* <h5>Men Shirt</h5> */}
                        </div>
                        <h3 style={{fontSize:"20px"}}>Shirt</h3>
                            <button>Add to Cart</button>
                    </div>
                       
                </div>

                <div className="product">
                        <img src={img11} alt="menu" />
                    <div className="details">
                        <div className="details_sub">
                            {/* <h5>sun-glasses</h5> */}
                        </div>
                        <h3 style={{fontSize:"20px"}}>Sun-glasses</h3>
                        <button>Add to Cart</button>
                    </div>
                       
                </div>

                <div className="product">
                        <img src={img12} alt="menu" />
                    <div className="details">
                        <div className="details_sub">
                            {/* <h5>Jean</h5> */}
                        </div>
                        <h3 style={{fontSize:"20px"}}>Jean</h3>
                        <button>Add to Cart</button>
                    </div>
                      
                </div>
            </div>
        </div>
    )
}

export default Product