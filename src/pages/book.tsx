import React from 'react';
import type { NextPage } from 'next';

import { BookSelection } from 'components/ui/sections/Book';
import  Footer  from 'components/ui/Footer';
import { Header } from 'components/ui/Header';
import { HeroSection } from 'components/ui/sections/Hero2';

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <HeroSection />
      <BookSelection />
      <Footer />
    </>
  );
};

export default Home;