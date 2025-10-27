// Pages/Home.js
import React from 'react';
import HeroSection from './HeroSection';
import Footer from './Footer';
import AppSection from './AppSection';
import CourseSection from './CourseSection';
import TestimonialSection from './Testimonials';

const Home = () => {
  return (
    <>
      <HeroSection />
      <TestimonialSection />
      <CourseSection />
      <AppSection />
      <Footer />
    </>
  );
};

export default Home;
