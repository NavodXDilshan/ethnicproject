import React from 'react';
import type { NextPage } from 'next';
import { Header } from 'components/ui/Header';
import { HeroSection } from 'components/ui/sections/Hero';
import Forms from 'components/ui/sections/Forms';


const Donate: NextPage = () => {
  return (
    <>
      <Header />
      <HeroSection />
      <Forms />
      
    </>
  );
};

export default Donate;