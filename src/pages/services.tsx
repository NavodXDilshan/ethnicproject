import React from 'react';
import type { NextPage } from 'next';
import { Header } from 'components/ui/Header';
import { HeroSection } from 'components/ui/sections/Hero';
import GoogleMap from 'components/ui/sections/GoogleMap';
import { ServiceSelectionSection } from 'components/ui/sections/ServiceSelection';

const Services: NextPage = () => {
  return (
    <>
      <Header />
      <HeroSection />
      <ServiceSelectionSection />
    </>
  );
};

export default Services;