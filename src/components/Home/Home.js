import React from 'react';
import About from './About/About';
import Banner from './Banner/Banner';
import Discover from './Discover/Discover';
import NavBar from './NavBar/NavBar';

const Home = () => {
    return (
        <main>
            <NavBar/>
            <Banner/>
            <About/>
            <Discover/>
        </main>
    );
};

export default Home;