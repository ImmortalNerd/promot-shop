import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import useAxios from '../Hooks/useAxios';
import Loading from './../components/Loading';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import img from '../assets/images/backshop.jpg'
import '../assets/css/Shop.css'
const url = "https://64538fa8c18adbbdfea0c1a9.mockapi.io/Products";


export default function Shop() {
    const {loading, data: products} = useAxios(url);

    return (
      <>
      
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 p-0">
              <section id='shop-header' className='position-relative bg-black'>
                <div
                  id='pages-header-bg'
                  className='position-absolute top-0 bottom-0 start-0 end-0 overflow-hidden opacity-75'>
                  <img src={img} alt='' />
                </div>
                <div className='container-fluid py-2 py-lg-5 position-relative'>
                  <div className='row justify-content-center align-items-center py-5 '>
                    <div className='col-12 col-lg-6 my-2 my-lg-5 '>
                      <h1 className='text-center pt-5'>Shop</h1>

                      <nav aria-label='breadcrumb pb-5'>
                        <ol class='breadcrumb justify-content-center'>
                          <li class='breadcrumb-item'>
                            <NavLink to='/' className='link-light text-decoration-none'>
                            <FontAwesomeIcon className='me-1' icon="fa-solid fa-home"/>Home
                            </NavLink>
                          </li>
                          <li class='breadcrumb-item active' aria-current='page'>
                            Shop
                          </li>
                        </ol>
                      </nav>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
          
          <Loading show={loading} />
          <div className="container">
            <div className="row row-cols-2 row-cols-lg-4 my-5 g-4" id='shop'>
              {products.map((product) => {
                return(
                  <div className="col" key={product.id}>
                      <div className="card overflow-hidden text-center">
                        <img src={product.image} className="card-img-top" alt="..." />
                        <div className="card-body">
                          <h5 className="card-title">{product.name}</h5>
                          <p className="card-text">${product.price}</p>
                          <NavLink className='nav-link'>
                            <button><FontAwesomeIcon icon="fa-solid fa-cart-plus" size='2x'/></button>
                          </NavLink>
                        </div>
                      </div>
                  </div>
                );
                
              })
              }
            </div>
          </div>
        </div>
      </>
    
    )
}
