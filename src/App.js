import React from 'react';
import {Routes,Route} from 'react-router-dom';
import Home from './Home/Home';
import Contact from './Contact/Contact';
import Product from './Product/Product';
import About from './About-us/About';
import Testinomials from './Testinomials/Testinomials';


const App = () => {
  return (
    <div>
  
       <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Product" element={<Product />} />
          <Route path="/About" element={<About />} />
          <Route path="/testinomials" element={<Testinomials />} />
       </Routes> 
    </div>
  )
}

export default App                 