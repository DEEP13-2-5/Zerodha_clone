import React from 'react';
import Hero from './Hero';
import Award from './Award';
import Stats from './Stats';
import Priceing from './Priceing'; 
import Education from './Education';
import OpenAccount from '../OpenAccount';
import Navbar from '../Navbar';
import Footer from '../Footer';

function HomePage() {
    return (  
        <>
            <Hero />
            <Award />
            <Stats />
            <Priceing />
            <Education />
            <OpenAccount />
        </>
    );
}

export default HomePage;

