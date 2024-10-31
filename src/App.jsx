import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './component/Home';
import WelcomeSection from './component/WelcomeSection';
import Experience from './component/Experience';
import Management from './component/Management';
import SliderComponent from './component/SliderComponent';
import RecentBlog from './component/RecentBlog';
import HappyCustomers from './component/HappyCustomers';
import Cards from './component/Cards';
import Footer from './component/Footer';
import Hotels from './component/Hotels';
import AboutUs from './component/AboutUs';
import Gallery from './component/Gallery';
import News from './component/News';
import Contact from './component/Contact';
import './App.css';

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          {/* Main Routes */}
          <Route path="/" element={
          <>
          <Home />
          <WelcomeSection />
          <Experience />
          <Management />
          <SliderComponent />
          <RecentBlog />
          <HappyCustomers />
          <Cards />
          <Footer />
          </>
        } />


          <Route path="/hotels" element={
          <>
          <Hotels />
          <WelcomeSection />
              <Experience />
              <Management />
              <SliderComponent />
              <RecentBlog />
              <HappyCustomers />
              <Cards />
              <Footer />
          </>
          } />

          <Route path="/about-us" element={
         <>
         <AboutUs />
         <WelcomeSection />
              <Experience />
              <Management />
              <SliderComponent />
              <RecentBlog />
              <HappyCustomers />
              <Cards />
              <Footer />
         </>
          } />

          <Route path="/gallery" element={
          <>
          <Gallery />
          <WelcomeSection />
              <Experience />
              <Management />
              <SliderComponent />
              <RecentBlog />
              <HappyCustomers />
              <Cards />
              <Footer />
          </>
          } />
          
          <Route path="/news" element={
          <>
          <News />
          <WelcomeSection />
              <Experience />
              <Management />
              <SliderComponent />
              <RecentBlog />
              <HappyCustomers />
              <Cards />
              <Footer />
          </>
        } />

          <Route path="/contact" element={<>
           < Contact />
           <WelcomeSection />
              <Experience />
              <Management />
              <SliderComponent />
              <RecentBlog />
              <HappyCustomers />
              <Cards />
              <Footer />
            </>
        } />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
