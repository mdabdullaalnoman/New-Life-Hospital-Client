import React from 'react';
import Footer from '../../Shared/Footer';
import Navbar from '../../Shared/Navbar';
import Doctors from './Doctors';
import Hero from './Hero';



const Home = () => {
    return (
        <div>
            <Navbar />
            <Hero />
            <Doctors />
            <Footer />
        </div>
    );
};

export default Home;