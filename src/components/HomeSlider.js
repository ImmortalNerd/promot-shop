import React, { useEffect, useRef } from 'react';
import Slide1 from '../assets/images/Slide1.jpg';
import Slide2 from '../assets/images/Slide2.jpg';
import Slide3 from '../assets/images/Slide3.jpg';
import { register } from 'swiper/element/bundle';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import '../assets/css/HomeSlider.css'
import HomeSliderSlide from './HomeSliderSlide';
register();

export default function HomeSlider() {
 
  return (
    <>
      <swiper-container
        slides-per-view='1'
        navigation='true' 
        pagination='true'
        loop='true'
        id='homeSlider'>
        <swiper-slide>
            <HomeSliderSlide
                id= {1}
                def = 'Trendy Sprint Collection In This Time'
                title= 'FOR WOMEN'
                link = 'shop'
                img = {Slide1}
            />
          
        </swiper-slide>
        <swiper-slide>
            <HomeSliderSlide
                id = {2}
                def = 'Trendy Sprint Collection In This Time'
                title = 'FOR MEN'
                link = 'shop'
                img = {Slide3}
            />
        </swiper-slide>
        <swiper-slide>
            <HomeSliderSlide
                id= {3}
                def = 'Trendy Sprint Collection In This Time'
                title = 'HOT SALE'
                link = 'hotsale'
                img = {Slide2}
            />
        </swiper-slide>
      </swiper-container>
    </>
   
  );
}
