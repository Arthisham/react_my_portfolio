import React from 'react'
import './Contact.css';
import Nav from '../Navbar/Nav';
// import Footer from '../Footer/Footer';

const Contact = () => {
    return (
        <div className='background2'>
             <Nav/>
             <div className='top-div'>
             <h3 className="text-white"   style={{marginTop:"85px"}}>CONTACT FORM</h3>
             </div>
            
            <div className="container"   style={{height:"300px"}}>
                <h5 className="text-dark">Get In Touch</h5>
                <div className="row row-col-2 g-4 ">
                    <div className="col">
                        <label for="name" id="name">First Name</label><br />
                        <input type="text" className="input" /><br />
                    </div><br />
                    <div className="col">
                        <label for="name" id="name">Last Name</label><br />
                        <input type="text" className="input" />
                    </div>
                </div><br />

                <div className="div">
                    <label for="name" id="name">Email</label><br />
                    <input type="text" className="input" id="input" />
                </div><br />

                <div className="div">
                    <label htmlFor="name" id="name">Subject</label><br />
                    <input type="text" className="input" id="input" />
                </div><br />

                <div className="col-md-12">
                    <label className="text-black" for="message">Message</label>
                    <textarea name="message" id="message" cols="30" rows="7" class="form-control rounded-0" placeholder="Write your notes or questions here..." />
                </div>
            <br />

            <div className="btn">
                <button type="submit">Send Message</button>
            </div>
        </div>
        {/* <Footer /> */}
    </div >

    );
}
export default Contact;