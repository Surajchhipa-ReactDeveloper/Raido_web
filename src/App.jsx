import React from 'react';
import './App.css';
import Home from './components/Home/Home';
import Blog from './components/Blog/Blog';
import Contact from './components/Contact/Contact';
import Discover from './components/Discover/Discover';
import Gallery from './components/Gallery/Gallery';
import Journals from './components/Journals/Journals';
import AboutUs from './components/About/AboutUs';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';

const App = () => {

  return (
    <>
      <NavBar />
      <Home />
      <AboutUs />
      <Discover />
      <Blog />
      <Journals />
      <Gallery />
      <Contact />
      <Footer />
    </>
  )
}
export default App;
