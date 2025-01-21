import React from 'react';
import type { NextPage } from 'next';
import { Header } from 'components/ui/Header';
import { HeroSection } from 'components/ui/sections/Hero';
import GoogleMap from 'components/ui/sections/GoogleMap';
import { ServiceSelectionSection } from 'components/ui/sections/ServiceSelection';
import { RatesSection } from 'components/ui/sections/Rates';
import FormSection from 'components/ui/sections/Form';
import Forms from 'components/ui/sections/Forms';

const Donate: NextPage = () => {
  return (
    <>
      <Header />
      <HeroSection />
      <ServiceSelectionSection />
      <Forms />
      
    </>
  );
};

export default Donate;