import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare, faInstagramSquare, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { Row, Col, Container } from 'react-bootstrap';
import './Banner.css';
import homePic from '../../../images/home2.jpg';
const Banner = () => {
    return (
        
            <Container fluid >
                <Row className=" justify-content-center align-items-center banner">
                    <Col md={4}>
                       <span className="home__data-subtitle">Discover your place</span>
                        <h1 className="home__data-title">Explore The <br/> Best <b>Beautiful <br/> Beaches</b></h1>
                        <button className="button">Explore</button>
                        <div>
                            <span className="home__social">
                                <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer"className="home__social-link">
                                 <FontAwesomeIcon icon={faFacebookSquare} /></a>
                            </span>
                            <span className="home__social">
                            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="home__social-link">
                                 <FontAwesomeIcon icon={faInstagramSquare} />
                            </a>
                            </span>
                            <span className="home__social">
                            <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className="home__social-link">
                                 <FontAwesomeIcon icon={faTwitter} />
                            </a>
                            </span>
                        </div>
                    </Col>
                    <Col md={5}>
                    <div className="home__info">
                        <div>
                            <span className="home__info-title">5 best places to visit</span>
                            <button className="home__info-button">More  <FontAwesomeIcon icon={faArrowRight} /></button>
                        </div>

                        <div className="home__info-overlay">
                            <img src={homePic} alt="home2" className="home__info-img"/>
                        </div>
                    </div>
                    </Col>
                </Row>
            </Container>
        
    );
};

export default Banner;