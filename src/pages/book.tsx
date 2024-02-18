import type { NextPage } from 'next';

import { Footer } from 'components/ui/Footer';
import { Header } from 'components/ui/Header';
import { HeroSection } from 'components/ui/sections/Hero';
import { BookSelection } from 'components/ui/sections/Book';

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