import React, { useState } from 'react';
import "../assets/css/HotSale.css";
import { NavLink } from 'react-router-dom';
import data1 from '../data/featured1.json';
import data2 from '../data/featured2.json';
import data3 from '../data/featured3.json';
import data4 from '../data/featured4.json';

export default function HotSale() {

return (
  <>
  <div className="container my-5" id='featured'>
    <div className="row justify-content-center text-center position-relative">
      <div className="col-12">
      <h2>FEATURED PRODCUTS</h2>
          <span></span>
      </div>
    </div>
    <div className="row mt-5">
      <div className="col-12">
        <ul className="nav justify-content-center gap-2" id="myTab" role="tablist">
          <li className="nav-item" role="presentation">
            <button className="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home-tab-pane" type="button" role="tab" aria-controls="home-tab-pane" aria-selected="true">CLOTHING</button>
          </li>
          <li className="nav-item" role="presentation">
            <button className="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile-tab-pane" type="button" role="tab" aria-controls="profile-tab-pane" aria-selected="false">BAGS</button>
          </li>
          <li className="nav-item" role="presentation">
            <button className="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact-tab-pane" type="button" role="tab" aria-controls="contact-tab-pane" aria-selected="false">SHOES</button>
          </li>
          <li className="nav-item" role="presentation">
            <button className="nav-link" id="disabled-tab" data-bs-toggle="tab" data-bs-target="#disabled-tab-pane" type="button" role="tab" aria-controls="disabled-tab-pane" aria-selected="false">ACCESSORIES</button>
          </li>
        </ul>
        <div className="tab-content" id="myTabContent">
          <div className="tab-pane fade show active" id="home-tab-pane" role="tabpanel" aria-labelledby="home-tab" tabindex="0">
            <div className="container">
              <div className="row row-cols-2 row-cols-lg-4 mt-5 g-4">
                {data1.map((product) => {
                    return (
                    <div className="col">
                        <div className="card overflow-hidden text-center">
                          <img src={product.image} className="card-img-top" alt="..." />
                          <div className="card-body">
                            <h5 className="card-title">{product.name}</h5>
                            <p className="card-text">${product.price}</p>
                            <NavLink className='nav-link'>
                              <button> Add to Cart</button>
                             </NavLink>
                          </div>
                        </div>
                    </div>
                    );
                })}
              </div>
            </div>
          </div>
          <div className="tab-pane fade" id="profile-tab-pane" role="tabpanel" aria-labelledby="profile-tab" tabindex="0">
            <div className="container">
                <div className="row row-cols-2 row-cols-lg-4 mt-5 g-4">
                  {data2.map((product) => {
                      return (
                      <div className="col">
                          <div className="card overflow-hidden text-center">
                            <img src={product.image} className="card-img-top" alt="..." />
                            <div className="card-body">
                              <h5 className="card-title">{product.name}</h5>
                              <p className="card-text">${product.price}</p>
                              <NavLink className='nav-link'>
                                <button> Add to Cart</button>
                              </NavLink>
                            </div>
                          </div>
                      </div>
                      );
                  })}
                </div>
            </div>
          </div>
          <div className="tab-pane fade" id="contact-tab-pane" role="tabpanel" aria-labelledby="contact-tab" tabindex="0">
            <div className="container">
                  <div className="row row-cols-2 row-cols-lg-4 mt-5 g-4">
                    {data3.map((product) => {
                        return (
                        <div className="col">
                            <div className="card overflow-hidden text-center">
                              <img src={product.image} className="card-img-top" alt="..." />
                              <div className="card-body">
                                <h5 className="card-title">{product.name}</h5>
                                <p className="card-text">${product.price}</p>
                                <NavLink className='nav-link'>
                                  <button> Add to Cart</button>
                                </NavLink>
                              </div>
                            </div>
                        </div>
                        );
                    })}
                  </div>
            </div>
          </div>
          <div className="tab-pane fade" id="disabled-tab-pane" role="tabpanel" aria-labelledby="disabled-tab" tabindex="0">
            <div className="container">
                <div className="row row-cols-2 row-cols-lg-4 mt-5 g-4">
                  {data4.map((product) => {
                      return (
                      <div className="col">
                          <div className="card overflow-hidden text-center">
                            <img src={product.image} className="card-img-top" alt="..." />
                            <div className="card-body">
                              <h5 className="card-title">{product.name}</h5>
                              <p className="card-text">${product.price}</p>
                              <NavLink className='nav-link'>
                                <button> Add to Cart</button>
                              </NavLink>
                            </div>
                          </div>
                      </div>
                      );
                  })}
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
