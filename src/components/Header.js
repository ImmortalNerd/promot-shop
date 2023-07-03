import React from 'react'
import logo from "../assets/images/logo.png"
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import '../assets/css/Header.css'

export default function Header() {
  return (
    <div className="container" id='header'>
      <div className="row align-items-center d-none d-lg-flex">
        <div className="col-12">
          <div className="row my-4">
              <div className="col-3">
              <img src={logo} alt="" />
            </div>
            <div className="col-5">
              <div className="hstack gap-3">
                <div className='icon'><FontAwesomeIcon icon="fa-solid fa-phone" size='xs' /></div>
                <div>For Inquery : 88-5535678</div>
                <div className='icon'><FontAwesomeIcon icon="fa-solid fa-envelope" size='xs' /></div>
                <div>
                  <NavLink style={{textDecoration: 'none', color: 'var(--bs-body-color)'}}>mail@example.com</NavLink>
                </div>
              </div>
            </div>
            <div className="col-3">
              <form className="search-bar d-flex p-1" role="search">
                  <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                  <button className='bg-transparent' type="submit"><FontAwesomeIcon icon="fa-solid fa-magnifying-glass" /></button>
              </form>
            </div>
          </div>
        </div>
      
      </div>
    </div>
  );
}
