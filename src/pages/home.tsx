import React from 'react';
import type { NextPage } from 'next';

import Footer from 'components/ui/Footer';
import { Header } from 'components/ui/Header';
import { CarouselSection } from 'components/ui/sections/Carousel';
import { DestinationsSection } from 'components/ui/sections/Destination';
import { HeroSection } from 'components/ui/sections/Hero';
import { SelectionSection } from 'components/ui/sections/Selection';

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <HeroSection />
      <DestinationsSection />
      <SelectionSection />
      <CarouselSection />
      <Footer />
    </>
  );
};

export default Home;