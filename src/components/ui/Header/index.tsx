import { useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { BiSearch } from 'react-icons/bi';
import { BsPerson } from 'react-icons/bs';
import { FaFacebook, FaInstagram, FaPinterest, FaTwitter, FaYoutube } from 'react-icons/fa';
import { HiOutlineMenuAlt4 } from 'react-icons/hi';
import Link from 'next/link';


const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMobileMenu = () => setIsOpen(prev => !prev);

  return (
    
  
    <header className="absolute top-0 z-10 flex h-20 w-full items-center justify-center px-4 text-white lg:px-0">
      <section className="container mx-auto flex items-center justify-between gap-4">
        <span className="font-roboto-condensed text-3xl font-bold uppercase md:text-4xl">
          VISIT SL.
        </span>
        <script src="https://cdn.botpress.cloud/webchat/v1/inject.js"></script>
        <script src="https://mediafiles.botpress.cloud/3c6f068d-a1fe-4358-b107-4990ee37b40c/webchat/config.js" defer></script>  


        <nav className="hidden items-center gap-15 md:flex md:gap-8">
          <Link href="/" key="home"><span>Home</span></Link>
          <Link href="/travel" key="travel"><span>Travel</span></Link>
          <Link href="/book" key="book"><span>Book</span></Link>
        </nav>
      
   
        <div className="md:hidden">
          <HiOutlineMenuAlt4 className="cursor-pointer" onClick={handleMobileMenu} size={20} />
        </div>
      </section>

      <div
        className={`absolute ${
          isOpen ? 'left-0' : 'left-[-100%]'
        } top-0 flex h-screen w-full flex-col gap-4 bg-gray-100 px-4 py-6 text-black`}
      >
        <section className="flex items-center justify-between">
          <span className="font-roboto-condensed text-3xl font-bold uppercase md:text-4xl">
            VISIT SL.
          </span>

          <AiOutlineClose className="cursor-pointer" onClick={handleMobileMenu} size={20} />
        </section>

        <nav className="flex flex-col gap-4 text-xl">
        <Link href="/" key="home"><span className="border-b border-b-slate-500 p-2">Home</span></Link>
        <Link href="/travel" key="travel"><span className="border-b border-b-slate-500 p-2">Travel</span></Link>
        <Link href="/book" key="book"><span className="border-b border-b-slate-500 p-2">Book</span></Link>
        </nav>

        <section className="flex items-center justify-center gap-6">
          <FaFacebook className="icon" />
          <FaTwitter className="icon" />
          <FaInstagram className="icon" />
          <FaPinterest className="icon" />
          <FaYoutube className="icon" />
        </section>
      </div>
    </header>
   
  );
};

export { Header };