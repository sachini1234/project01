import React from 'react'
import logo from './logo.svg';
import './App.css';
import backgroundimg from "./assets/img 4.png";
import app from "./assets/img 2.png";
import strategy from "./assets/img 1.png";

import Navbar from './components/NavbarComp';
import Footer from './components/footer';

function App() {
  return (
    <div className="App">
      <Navbar/>
      
      <figure className="position-relative">
        <img src={backgroundimg} alt="Background Image" className="img-fluid card-img"/>
        <figcaption className="flex-md-column me-lg-5">
          <div className="grad1">
            <p>We crush your competitors, goals, and sales records - without the B.S.</p>
            <button type="button" className="border-0">
              <p>Get free consultation</p>
            </button>
          </div>
        </figcaption>
      </figure>

      <div className="container">
        <div className="d-sm-flex">
          <div>
            <img src={app} alt="Background Image" className="img-fluid card-img me-sm-5 pe-sm-3"/>
          </div>
          <div className='me-5 ms-2 col-sm-7 pt-sm-5 mt-sm-5'>
            <div className="mt-sm-3 justify-content-sm-center">
              <p className="topic">Web & Mobile App Development</p>
              <p className="content">Your web and mobile Apps are pieces of the puzzle to grow your business. We use frameworks which tailor content and engagement methods to respond to different intents shown by your potential customers who interact with your business online.</p>
              <button type="button" className="border-0 learn">
                <p>LEARN MORE</p>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="d-sm-flex flex-sm-row-reverse">
          <div>
              <img src={strategy} alt="Background Image" className="img-fluid card-img ps-sm-5"/>
          </div>
          <div className='col-sm-8 pt-sm-5 mt-sm-5'>
            <div className="mt-sm-3">
              <p className="topic justify-content-sm-center align-items-sm-center">Web & Mobile App Development</p>
              <p className="content justify-content-sm-center align-items-sm-center">Your web and mobile Apps are pieces of the puzzle to grow your business. We use frameworks which tailor content and engagement methods to respond to different intents shown by your potential customers who interact with your business online.</p>
              <button type="button" className="border-0 learn justify-content-sm-center align-items-sm-center">
                <p>LEARN MORE</p>
              </button>
            </div>
          </div>
        </div>
      </div>

      <Footer/>
    </div>
  );
}

export default App;
