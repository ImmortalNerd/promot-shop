import React from 'react';
import HomeSlider from '../components/HomeSlider';
import banner1 from "../assets/images/banner04.jpg";
import banner2 from "../assets/images/banner05.jpg";
import banner3 from "../assets/images/banner01.jpg";
import banner4 from "../assets/images/banner02.jpg";
import banner5 from "../assets/images/banner03.jpg";
import bg1 from '../assets/images/bg1base-full.jpg';
import brand1 from '../assets/images/brand1.png';
import brand2 from '../assets/images/brand2.png';
import brand3 from '../assets/images/brand3.png';
import brand4 from '../assets/images/brand4.png';
import brand5 from '../assets/images/brand5.png';
import brand6 from '../assets/images/brand6.png';
import { NavLink } from 'react-router-dom';
import 'animate.css';
import "../assets/css/Home.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Home() {
  return (
    <>
    <HomeSlider />
    <section id='newCollection' className='m-5'>
      <div classNameName="container m-5">
        <div className="row justify-content-center m-5">
          <div className="col-lg-3 col-12">
            <div className="row row-cols-1 g-3">
              <div className="col">
                <div className="card overflow-hidden">
                  <img src={banner1} className="card-img" alt="" />
                  <div className="card-img-overlay">
                    <p className="card-text pt-2">New Collection 2023</p>
                    <h4 className="card-title">SUN GLASS</h4>
                    <NavLink className='nav-link'> Shop Now</NavLink>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card overflow-hidden">
                    <img src={banner2} className="card-img" alt="" />
                    <div className="card-img-overlay">
                      <p className="card-text pt-2">New Collection 2023</p>
                      <h4 className="card-title">NICE BELT</h4>
                      <NavLink className='nav-link'> Shop Now</NavLink>
                    </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-12">
            <div className="card overflow-hidden">
                <img src={banner3} className="card-img" alt="" />
                <div className="card-img-overlay">
                  <p className="card-text pt-2">New Collection 2023</p>
                  <h4 className="card-title">FASHIONABLE SHOE</h4>
                  <NavLink className='nav-link'> Shop Now</NavLink>
                </div>
            </div>
          </div>
          <div className="col-lg-3 col-12">
            <div className="row row-cols-1 g-3">
              <div className="col">
                <div className="card overflow-hidden">
                  <img src={banner4} className="card-img" alt="" />
                  <div className="card-img-overlay">
                    <p className="card-text pt-2">New Collection 2023</p>
                    <h4 className="card-title">AWESOME BAG</h4>
                    <NavLink className='nav-link'> Shop Now</NavLink>
                  </div>
                </div>
              </div>
              <div className="col">
              <div className="card overflow-hidden">
                  <img src={banner5} className="card-img" alt="" />
                  <div className="card-img-overlay">
                    <p className="card-text pt-2">New Collection 2023</p>
                    <h4 className="card-title">FINE WATCH</h4>
                    <NavLink className='nav-link'> Shop Now</NavLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section id='info' className='position-relative bg-black mb-5'>
      <div
        id='info-bg'
        className='position-absolute top-0 bottom-0 start-0 end-0 overflow-hidden opacity-75'>
        <img src={bg1} alt='' />
      </div>
      <div className='container py-2 py-lg-5 position-relative'>
        <div className='row row-cols-1 row-cols-lg-3 justify-content-center align-items-center py-5 g-3'>
          <div className="col">
            <a href="">
              <div className="card text-center p-3">
                <div className="card-body m-3">
                  <div className="card-title">
                    <FontAwesomeIcon icon="fa-solid fa-truck" size='3x'/>
                  </div>
                  <h3 className="mb-2">Free Shipping</h3>
                  <p className="card-text">Free shipping all over the country</p>
                </div>
              </div>
            </a>
          </div>
          <div classNameName="col">
            <a href="">
              <div className="card text-center p-3">
                  <div className="card-body m-3">
                    <div className="card-title">
                      <FontAwesomeIcon icon="fa-solid fa-headset" size='3x'/>
                    </div>
                    <h3 className="mb-2">Customer Support</h3>
                    <p className="card-text">Round the clock support 24/7</p>
                  </div>
              </div>
            </a>
          </div>
          <div classNameName="col">
            <a href="">
              <div className="card text-center p-3">
                    <div className="card-body m-3">
                      <div className="card-title">
                      <FontAwesomeIcon icon="fa-solid fa-gem" size='3x'/>
                      </div>
                      <h3 className="mb-2">Good Quality</h3>
                      <p className="card-text">Only the best quality and brands</p>
                    </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
    <section id='clients'>
      <div className="container">
        <div className="row justify-content-center my-5">
          <div className="col-12 text-center">
            <h4>BRAND & CLIENT</h4>
            <span></span>
          </div>
          <div className="row row-cols-6 my-5">
            <div className="col">
              <img src={brand1} alt=''/>
            </div>
            <div className="col">
              <img src={brand2} alt=''/>
            </div>
            <div className="col">
              <img src={brand3} alt=''/>
            </div>
            <div className="col">
              <img src={brand4} alt=''/>
            </div>
            <div className="col">
              <img src={brand5} alt=''/>
            </div>
            <div className="col">
              <img src={brand6} alt=''/>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
      
    
  )
}

