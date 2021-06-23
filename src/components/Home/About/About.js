import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import about1 from '../../../images/about1.jpg';
import about2 from '../../../images/about2.jpg';
import Fade from 'react-reveal/Fade';
import './About.css';

const About = () => {
    return (
        <section>
            <Container fluid>
                <Row className=" justify-content-center align-items-center about">
                    <Col md={4}>
                        <Fade left duration={2000} distance="50px">
                            <h2 className="about__title">More Information <br /> About The Best Beaches</h2>
                            <p className="about__description">You can find the most beautiful and pleasant places at the best
                                prices with special discounts, you choose the place we will guide you all the way to wait, get your
                                place now.
                            </p>
                            <button className="button">Reserve a place</button>
                        </Fade>
                    </Col>
                    <Col xs={{ order: 1 }} md={5}>
                        <Fade right duration={2000} distance="50px">
                            <div className="about__img">
                                <div className="about__img-overlay">
                                    <img src={about1} alt="" className="about__img-one" />
                                </div>

                                <div className="about__img-overlay">
                                    <img src={about2} alt="" className="about__img-two" />
                                </div>
                            </div>
                        </Fade>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default About;