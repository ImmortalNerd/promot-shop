import React from 'react';
import '../assets/css/Footer.css';
import logo2 from "../assets/images/logo2.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavLink } from 'react-router-dom';

export default function Footer() {
  return (
   <footer className='footer'>
    <div className="container-fluid text-bg-dark">
        <div className="row">
          <div className="col-12">
            <div className="container my-5">
              <div className="row g-3">
                <div className="col-lg-3 col-12">
                  <div className="row g-3">
                    <div className="col-12">
                    <img src={logo2} alt="" />
                    </div>
                    <div className="col-12">
                    
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                    </div>
                    <div className="col-12">
                      <div className="row">
                        <div className="col-1">
                          <FontAwesomeIcon icon="fa-solid fa-location-dot" />
                        </div>
                        <div className="col-11">
                          Mukkey-doe Roboto square 2/1 House Hsmilton villa
                        </div>
                      </div>
                      <div className="row mt-3">
                      <div className="col-1">
                          <FontAwesomeIcon icon="fa-solid fa-phone" />
                        </div>
                        <div className="col-11">
                        055-993587 - 880-1569845
                        </div>
                      </div>
                      
                      
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-12" id='customerCare'>
                  <div className="row row-cols-1 g-1">
                    <div className="col mb-4">
                      <h5 className='position-relative fw-light'>CUSTOMER CARE</h5>
                    </div>
                    <div className="col">
                      <NavLink className='nav-link' to='contacus'>Contact Us</NavLink>
                      <hr/>
                    </div>
                    <div className="col">
                    <a className='nav-link' href="#">Sitemap</a>
                      <hr />
                    </div>
                    <div className="col">
                    <a className='nav-link' href="#">Terms & Conditions</a>
                      <hr />
                    </div>
                    <div className="col">
                    <a className='nav-link' href="#">Gift & Vourchers</a>
                    
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-12" id='information'>
                  <div className="row row-cols-1 g-1">
                    <div className="col mb-4">
                      <h5 className='position-relative fw-light'>INFORMATION</h5>
                    </div>
                    <div className="col">
                      <NavLink className='nav-link' to='blog'>Our Blog</NavLink>
                      <hr/>
                    </div>
                    <div className="col">
                    <a className='nav-link' href="#">About Our Shop</a>
                      <hr />
                    </div>
                    <div className="col">
                    <a className='nav-link' href="#">Secure Shopping</a>
                      <hr />
                    </div>
                    <div className="col">
                    <a className='nav-link' href="#">Privacy Policy</a>
                    
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-12" id='newsletter'>
                  <div className="row row-cols-1 g-1">
                    <div className="col mb-4">
                      <h5 className='position-relative fw-light'>NEWSLETTER SIGNUP</h5>
                    </div>
                    <div className="col">
                    Subscribe to the receive on new arrivals and other discount information
                    </div>
                    <div className="col mt-3">
                      <div className="input-group mb-3">
                        <input type="text" className="form-control" placeholder="Enter Your Email" aria-label="Recipient's username" aria-describedby="button-addon2" />
                        <button className="m-0 border-0 p-3" type="button" id="button-addon2">
                          <FontAwesomeIcon icon="fa-solid fa-envelope-circle-check" />
                        </button>
                      </div>
                    </div>
                    <div className="col d-flex gap-2 align-items-center" id='brandIcon'>
                      <div>
                        <a href=""><FontAwesomeIcon icon="fa-brands fa-facebook-f" /></a>
                      </div>
                      <div>
                        <a href=""><FontAwesomeIcon icon="fa-solid fa-rss" /></a>
                      </div>
                      <div>
                        <a href=""><FontAwesomeIcon icon="fa-brands fa-linkedin-in" /></a>
                      </div>
                      <div>
                        <a href=""><FontAwesomeIcon icon="fa-brands fa-google-plus-g" /></a>
                      </div>
                      <div>
                        <a href=""><FontAwesomeIcon icon="fa-brands fa-twitter" /></a>
                      </div>
                      
                      
                      
                      
                      
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12" id='copyright'>
            <div className="container my-3">
              <div className="row justify-content-center">
                <div className="col-12 text-center">
                  Copyright © 2023 <b> PromotShop</b> All rights Reserved
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
   </footer>
      
    
  );
}
