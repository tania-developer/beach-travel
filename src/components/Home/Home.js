import React from 'react';
import About from './About/About';
import Banner from './Banner/Banner';
import Discover from './Discover/Discover';
import Experience from './Experience/Experience';
import NavBar from './NavBar/NavBar';
import ScrollButton from './ScrollButton/ScrollButton';
import Subscribe from './Subscribe/Subscribe';
import Video from './Video/Video';

const Home = () => {
    return (
        <main>
            <NavBar/>
            <Banner/>
            <About/>
            <Discover/>
            <Video/>
            <Subscribe/>
           
            <ScrollButton/>
        </main>
    );
};

export default Home;