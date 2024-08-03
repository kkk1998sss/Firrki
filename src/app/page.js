
import React from 'react';
import { FaFacebookF, FaInstagram, FaYoutube } from 'react-icons/fa';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import HeroSection1 from './components/HeroSection1';
const Home = () => {
  return (
    <><Header />
    <HeroSection1/>
    <MainContent />
    <br></br>
    <Footer/>
    </>
  );
};

export default Home;
