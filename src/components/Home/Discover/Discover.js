import React from 'react';
import discover1 from '../../../images/discover1.jpg';
import discover2 from '../../../images/discover2.jpg';
import discover3 from '../../../images/discover3.jpg';
import discover4 from '../../../images/discover4.jpg';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css'
import "swiper/components/effect-coverflow/effect-coverflow.min.css";
import "swiper/components/pagination/pagination.min.css";
import "swiper/components/navigation/navigation.min.css";
import SwiperCore, {
    EffectCoverflow,
    Pagination,
    Navigation
} from "swiper/core";
import { Row, Container } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import './Discover.css';

SwiperCore.use([EffectCoverflow, Pagination, Navigation]);

const Discover = () => {
    return (
        <section>
            <Container fluid>
                <Row className=" justify-content-center align-items-center ">
                    <h2 class="section__title discover__title">Discover the most <br /> attractive places</h2>
                   <Fade top duration={2000} distance="60px">
                   <div className="swiper__container">
                    <Swiper 
                       // navigation={true}
                        effect={"coverflow"}
                        centeredSlides={true}
                        slidesPerView={window.innerWidth < 768 ? 1 : "auto"}
                        loop={true}
                        coverflowEffect={{
                            rotate: 10,
                            stretch: 0,
                            depth: 100,
                            modifier: 1,
                            slideShadows: true
                        }}
                        pagination={{
                            clickable: true
                        }}
                         >
                        <SwiperSlide>
                            <img src={discover1} alt="slider" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={discover2} alt="slider" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={discover3} alt="slider" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={discover4} alt="slider" />
                        </SwiperSlide>
                    </Swiper>
                    </div>
                   </Fade>
                </Row>
            </Container>
        </section>
    );
};

export default Discover;