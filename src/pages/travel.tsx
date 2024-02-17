import type { NextPage } from 'next';

import { Footer } from 'components/ui/Footer';
import { Header } from 'components/ui/Header';
import { CarouselSection } from 'components/ui/sections/Carousel';
import { DestinationsSection } from 'components/ui/sections/Destination';
import { HeroSection } from 'components/ui/sections/Hero';
import { RatesSection } from 'components/ui/sections/Rates';
import { SelectionSection } from 'components/ui/sections/Selection';
import GoogleMaps from 'components/ui/sections/GoogleMaps';

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <HeroSection />
      <GoogleMaps />


    </>
  );
};

export default Home;
