import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';
import { Nav, Navbar, Container } from 'react-bootstrap';

const NavBar = () => {
    const [isSticky, setSticky] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if(window.scrollY > 50) {
                setSticky(true);
            }
            else {
                setSticky(false);
            }
        })
    })
    return (
        <Navbar 
        collapseOnSelect 
        expand="lg"
        fixed="top"
      
        className={isSticky ?"shadow-sm bg-white py-2" : " "}>
            <Container>
                <Navbar.Brand as={Link} to="/">Travel</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Link 
                           as={Link} to="/" 
                           className="mr-md-5"
                           onClick={() =>window.scrollTo(500, 0)} active>
                           Home
                        </Nav.Link>
                        <Nav.Link href="#features" className="mr-md-5" active>Features</Nav.Link>
                        <Nav.Link href="#pricing"  className="mr-md-5" active>Pricing</Nav.Link>
                        <Nav.Link href="#about"  className="mr-md-5" active>about</Nav.Link>
                        <Nav.Link href="places"  className="mr-md-5" active>places</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavBar;