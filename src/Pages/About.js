import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { NavLink } from 'react-router-dom';
import bgabout from '../assets/images/aboutbanner.jpg';
import team from '../assets/images/about.jpg';
import '../assets/css/About.css';
import teammember1 from '../assets/images/team01.jpg';
import teammember2 from '../assets/images/team02.jpg';
import teammember3 from '../assets/images/team03.jpg';
import teammember4 from '../assets/images/team04.jpg';


export default function About() {
  return (
    <>
    <div className="container-fluid" id='about'>
      <div className="row">
        <div className="col-12 p-0">
          <section id='shop-header' className='position-relative bg-black'>
            <div
              id='pages-header-bg'
              className='position-absolute top-0 bottom-0 start-0 end-0 overflow-hidden opacity-75'>
              <img src={bgabout}  alt='' />
            </div>
            <div className='container-fluid py-2 py-lg-5 position-relative'>
              <div className='row justify-content-center align-items-center py-5 '>
                <div className='col-12 col-lg-6 my-2 my-lg-5 '>
                  <h1 className='text-center pt-5'>About Us</h1>

                  <nav aria-label='breadcrumb pb-5'>
                    <ol class='breadcrumb justify-content-center'>
                      <li class='breadcrumb-item'>
                        <NavLink to='/' className='link-light text-decoration-none'>
                        <FontAwesomeIcon className='me-1' icon="fa-solid fa-home"/>Home
                        </NavLink>
                      </li>
                      <li class='breadcrumb-item active' aria-current='page'>
                        About Us
                      </li>
                    </ol>
                  </nav>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <div className="container">
            <div className="row my-4">
              <div className="col-12 col-lg-6">
                <img src={team} alt="" />
              </div>
              <div className="col-12 col-lg-6">
                <h3>About Our Team</h3>
                <span className='mb-3'></span>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique autem ullam ipsa. Omnis in tempore officiis placeat optio est officia.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero voluptas, maiores dolore ullam magnam placeat repellat quidem soluta ad sed, laborum excepturi! Quasi quibusdam doloribus repellat eveniet iure autem quis exercitationem consequatur recusandae? Quibusdam eveniet impedit esse possimus nam. Libero!</p>
                <p>Lorem, ipsum dolor.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam minima, tempore vero voluptatibus ab possimus labore dolore id accusantium aut eaque cumque nam incidunt quod rem eveniet similique sunt dolores? Esse pariatur velit, praesentium eligendi officia rem minima quod. Reiciendis dolores debitis molestias explicabo eaque amet, perferendis nesciunt quidem necessitatibus?</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas natus quo inventore unde ad placeat qui, ex iusto, labore temporibus voluptates magnam ducimus exercitationem cum soluta. Reiciendis voluptatibus unde cum.</p>
              </div>
            </div>
            <div className="row my-5 justify-content-center">
              <div className="col-12 text-center">
                <h3> Our Creative <span>Team</span></h3>
                <p className='text-muted'>Our skill is really high quality and standard for build your project.</p>
              </div>
              <div className="row row-cols-2 row-cols-lg-4" id='team'>
                <div className="col">
                  <div className="card">
                    <div className='card-head position-relative'>
                      <img src={teammember1} className="card-img-top" alt="..."/>
                    <div className='card-name position-absolute'>
                      <h5>Jennifer Lawrence</h5>
                      <h6>CEO Founder</h6>
                    </div>
                    </div>
                    <div className="card-body d-flex justify-content-center">
                      <p className="card-text">Lorem ipsum dolor sit amet consectetur.</p>
                      <a href="" className='btn'><FontAwesomeIcon className='align-self-center' icon="fa-brands fa-square-whatsapp" size='3x'/></a>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="card">
                    <div className='card-head position-relative'>
                      <img src={teammember2} className="card-img-top" alt="..."/>
                    <div className='card-name position-absolute'>
                      <h5>Martin Jerry</h5>
                      <h6>CEO Funder</h6>
                    </div>
                    </div>
                    <div className="card-body d-flex justify-content-center">
                      <p className="card-text">Lorem ipsum dolor sit amet consectetur.</p>
                      <a href="" className='btn'><FontAwesomeIcon className='align-self-center' icon="fa-brands fa-square-whatsapp" size='3x'/></a>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="card">
                    <div className='card-head position-relative'>
                      <img src={teammember3} className="card-img-top" alt="..."/>
                    <div className='card-name position-absolute'>
                      <h5>Danny Louis</h5>
                      <h6>CEO Funder</h6>
                    </div>
                    </div>
                    <div className="card-body d-flex justify-content-center">
                      <p className="card-text">Lorem ipsum dolor sit amet consectetur.</p>
                      <a href="" className='btn'><FontAwesomeIcon className='align-self-center' icon="fa-brands fa-square-whatsapp" size='3x'/></a>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="card">
                    <div className='card-head position-relative'>
                      <img src={teammember4} className="card-img-top" alt="..."/>
                    <div className='card-name position-absolute'>
                      <h5>Michael Johnson</h5>
                      <h6>CEO Founder</h6>
                    </div>
                    </div>
                    <div className="card-body d-flex justify-content-center">
                      <p className="card-text">Lorem ipsum dolor sit amet consectetur.</p>
                      <a href="" className='btn'><FontAwesomeIcon className='align-self-center' icon="fa-brands fa-square-whatsapp" size='3x'/></a>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
        
      </div>
    </div>
    
    </>
    
    
  );
}
