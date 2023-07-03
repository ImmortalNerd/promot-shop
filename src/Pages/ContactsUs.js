import React from 'react';
import "leaflet/dist/leaflet.css";
import "leaflet/dist/leaflet";
import "../assets/css/ContactUs.css";
import L from "leaflet";
import marker from '../assets/images/marker-icon.png';
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import bgservices from '../assets/images/bg-services.jpg';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function ContactsUs() {
  const pinIcon = L.icon({
    iconUrl: marker,
  });
  return (
    <>
    <div className="container-fluid">
      <div className="row">
        <div className="col-12 p-0">
          <section id='shop-header' className='position-relative bg-black'>
                      <div
                        id='pages-header-bg'
                        className='position-absolute top-0 bottom-0 start-0 end-0 overflow-hidden opacity-75'>
                        <img src={bgservices} alt='' />
                      </div>
                      <div className='container-fluid py-2 py-lg-5 position-relative'>
                        <div className='row justify-content-center align-items-center py-5 '>
                          <div className='col-12 col-lg-6 my-2 my-lg-5 '>
                            <h1 className='text-center pt-5'>Contact Us</h1>

                            <nav aria-label='breadcrumb pb-5'>
                              <ol class='breadcrumb justify-content-center'>
                                <li class='breadcrumb-item'>
                                  <NavLink to='/' className='link-light text-decoration-none'>
                                  <FontAwesomeIcon className='me-1' icon="fa-solid fa-home"/>Home
                                  </NavLink>
                                </li>
                                <li class='breadcrumb-item active' aria-current='page'>
                                  Contact Us
                                </li>
                              </ol>
                            </nav>
                          </div>
                        </div>
                      </div>
          </section>
          <div className="col-12 my-4">
              <MapContainer
                className='vh-100'
                center={[51.513, -0.09]}
                zoom={13}
                scrollWheelZoom={true}>
                <TileLayer url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png' />\
                <Marker position={[51.513, -0.09]} icon={pinIcon}>
                  <Popup>
                    A pretty CSS3 popup. <br /> Easily customizable.
                  </Popup>
                </Marker>
              </MapContainer>
          </div>
          <div className="col-12">
              <div className="container">
                <div className="row justify-content-center align-items-center">
                  <div className="col-8">
                    <form action="" className='g-3 my-5' id='contactus'>
                      <h3>Leave a message</h3>
                      <span className='mb-3'></span>
                      <div className="row">
                         <div className="col-md-6">
                          <input type="username" className="form-control text-muted" id="inputName" placeholder="Full Name"  required/>
                        </div>
                        <div className="col-md-6">
                          <input type="email" className="form-control text-muted" id="inputEmail4" placeholder="Email"  required/>
                        </div>
                      </div>
                      <div className="row my-3">
                        <div className="col-12">
                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Message"  required></textarea>
                        </div>
                      </div>
                        <div className="col-12">
                          <button type="submit" className="btn">Send Message</button>
                        </div>
                    </form>
                  </div>
                </div>
              </div>
          </div>
        </div>
      </div>
    </div>
   
    
    </>
  )
}
