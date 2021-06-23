import React from 'react';
import discover1 from '../../../images/discover1.jpg';
import discover2 from '../../../images/discover2.jpg';
import discover3 from '../../../images/discover3.jpg';
import discover4 from '../../../images/discover4.jpg';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css'
import SwiperCore from 'swiper';


const Discover = () => {
    const slides = [];

    for(let i = 1; i < 5; i++){
        slides.push(
            <SwiperSlide key={`slide-${i}`}>
                <img src={discover1} alt="slider"/>
            </SwiperSlide>
        )
    }
    return (
        <section>
            <h2 class="section__title">Discover the most <br/> attractive places</h2>
            <Swiper>
                {slides}
            </Swiper>
        </section>
    );
};

export default Discover;