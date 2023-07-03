import React from 'react'
import { NavLink } from 'react-router-dom';

export default function HomeSliderSlide(props) {
  return (
    <>
        <div className='position-absolute top-0 start-0 bottom-0 end-0 d-flex justify-content-start align-items-center'>
            <div className="container">
                <div className='row align-items-center g-3 mx-5'>
                    <div className={`col-12 ${props.id %2 === 0 ? 'text-end' : 'text-start'}`}>{props.def}</div>
                    <div className={`col-12 ${props.id %2 === 0 ? 'text-end' : 'text-start'}`}><h1>{props.title}</h1></div>
                    <div className={`col-2 text-center ${props.id %2 === 0 ? 'ms-auto' : 'me-auto'}`}>
                        <NavLink className='nav-link p-2' to={props.link}>SHOP NOW</NavLink>
                    </div>
                </div>
            </div> 
        </div>
        <img src={props.img} alt="" className='img-fluid'/>

    </>
  );
    // ${props.id === 'odd' ? 'justify-content-start' : 'justify-content-end'}
}
