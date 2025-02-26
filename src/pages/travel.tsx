import React from 'react';
import type { NextPage } from 'next';
import { Header } from 'components/ui/Header';
import { EvacuationSection } from 'components/ui/sections/Evacuation';
import GoogleMap from 'components/ui/sections/GoogleMap';

const Travel: NextPage = () => {
  return (
    <>
      <Header />
      <EvacuationSection />
      {/* <GoogleMap /> */}
    </>
  );
};

export default Travel;