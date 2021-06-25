import React from 'react';
import { Row, Container, Col } from 'react-bootstrap';
import experience1 from '../../../images/experience1.jpg';
import experience2 from '../../../images/experience2.jpg';
import './Experience.css'
const Experience = () => {
    return (
        <section>       
            <Container fluid>
            <h2 className="section__title text-center my-5">With Our Experience <br /> We Will Serve You</h2>
                <Row className="justify-content-center">
                    <Col md={2}>
                        <div className="experience__data text-center">
                            <h2 className="experience__number">20</h2>
                            <span className="experience__description">Year <br /> Experience</span>
                        </div>
                    </Col>
                    <Col md={2}>
                        <div className="experience__data text-center">
                            <h2 className="experience__number">75</h2>
                            <span className="experience__description">Complete <br /> Tours</span>
                        </div>
                    </Col>
                    <Col md={2}>
                        <div className="experience__data text-center">
                            <h2 className="experience__number">650+</h2>
                            <span className="experience__description">Tourist <br /> Destination</span>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <div className="experience__overlay">
                        <img src={experience1} alt="" className="experience__img-one" />
                    </div>

                    <div className="experience__overlay">
                        <img src={experience2} alt="" className="experience__img-two" />
                    </div>
                </Row>
            </Container>
        </section>
    );
};

export default Experience;