import React from 'react';
import type { NextPage } from 'next';

import { BookSelection } from 'components/ui/sections/Book';
import  Footer  from 'components/ui/Footer';
import { Header } from 'components/ui/Header';
import { HeroSection } from 'components/ui/sections/Hero2';
import About from './about';

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <HeroSection />
      <About />
      <Footer />
    </>
  );
};

export default Home;