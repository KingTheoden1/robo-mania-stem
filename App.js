import React from 'react';

import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import Header from './components/home/header/Header'; // Corrected import path
import Brand from './components/home/brand/Brand'; // Corrected import path
import Programs from './components/home/programs/Programs'; // Corrected import path
{/* import { Navbar, Header, Brand, Programs, Footer } from './components';
import './App.css'; */}

const App = () => {
  return (
    <div className='App'>
      <div className='gradient__bg'>
        <Navbar />
        <Header />
      </div>
      <Brand />
      <Programs />
      {/*<Features />
      <Possibility />
      <CTA />
      <Blog /> */} 
      <Footer />
    </div>
  )
}

export default App

