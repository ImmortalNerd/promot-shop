import React from 'react'
import logo from "../assets/images/logo.png"
import { useAuth0 } from '@auth0/auth0-react'
import { NavLink } from 'react-router-dom';
import Home from '../Pages/Home';
import '../assets/css/Navbar.css'
import 'animate.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Portfolio from '../Pages/Portfolio';

export default function Navbar() {

  //const { loginWithRedirect, user, isAuthenticated, isLoading, logout} = useAuth0();

  return (
    <>
    <div className="container-fluid p-0 text-bg-dark sticky-top ">
      <div className="row justify-content-between m-0">
        <div className="col-12">
            <div className="row justify-content-center m-auto">
              <div className="col-8 position-relative">
              <nav className="navbar navbar-expand-lg navbar-dark bg-dark py-2 m-auto">
                <div class="container-fluid">
                  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                  </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mb-lg-0">
                      <li className="nav-item menu-item">
                      <NavLink className='nav-link' aria-current='page' to='/'>
                        <FontAwesomeIcon className='me-1' icon="fa-solid fa-home" size='xs' />
                        HOME</NavLink>
                      </li>
                      <li className="nav-item menu-item">
                        <NavLink className='nav-link' aria-current='page' to='hotsale'> HOT SALE </NavLink>
                      </li>
                      <li className="nav-item menu-item">
                        <NavLink className='nav-link' aria-current='page' to='shop'> SHOP </NavLink>
                      </li>
                      <li className="nav-item menu-item">
                        <NavLink className='nav-link' aria-current='page' to='about'> ABOUT US</NavLink>
                      </li>
                      <li className="nav-item menu-item">
                        <NavLink className='nav-link' aria-current='page' to='contactus'> CONTACT US </NavLink>
                      </li>
                      <li className="nav-item menu-item">
                        <NavLink className='nav-link' aria-current='page' to='blog'> BLOG </NavLink>
                      </li>
                    </ul>
                    </div>
                </div>
              </nav>
              </div>
              <div className='col-2 login-icons d-flex align-items-center justify-content-center ms-4'>
              <NavLink className='nav-link' to='login' target="_blank"><FontAwesomeIcon className='p-1' icon="fa-solid fa-right-to-bracket" /></NavLink>
              </div>
              <div className="col-2 login-icons d-flex align-items-center justify-content-center ms-3">
                <NavLink className='nav-link' to='portfolio' target="_blank"><FontAwesomeIcon icon="fa-solid fa-cart-shopping"/></NavLink>
              </div>
            </div>
        </div>
      </div>
    </div>
    </>
    

  );
}
