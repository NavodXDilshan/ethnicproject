import React from 'react';
import type { NextPage } from 'next';
import { Header } from 'components/ui/Header';
import { HeroSection } from 'components/ui/sections/Hero';
import GoogleMap from 'components/ui/sections/GoogleMap';

const Travel: NextPage = () => {
  return (
    <>
      <Header />
      <HeroSection />
      <GoogleMap />
    </>
  );
};

export default Travel;