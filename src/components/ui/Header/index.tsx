import { useState } from 'react';
import Link from 'next/link';
import { AiOutlineClose } from 'react-icons/ai';
import { BiSearch } from 'react-icons/bi';
import { BsPerson } from 'react-icons/bs';
import { FaFacebook, FaInstagram, FaPinterest, FaTwitter, FaYoutube } from 'react-icons/fa';
import { HiOutlineMenuAlt4 } from 'react-icons/hi';

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

        <nav className="hidden items-center gap-3 md:flex md:gap-6">
          <Link href="home"><span>Home</span></Link>
          <Link href="travel"><span>Travel</span></Link>
          <Link href="book"><span>Book</span></Link>
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <BiSearch size={20} />
          <BsPerson size={20} />
        </div>

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
            Beaches.
          </span>

          <AiOutlineClose className="cursor-pointer" onClick={handleMobileMenu} size={20} />
        </section>

        <nav className="flex flex-col gap-4 text-xl">
          <span className="border-b border-b-slate-500 p-2">Home</span>
          <span className="border-b border-b-slate-500 p-2">Destinations</span>
          <span className="border-b border-b-slate-500 p-2">Travel</span>
          <span className="border-b border-b-slate-500 p-2">View</span>
          <span className="border-b border-b-slate-500 p-2">Book</span>
        </nav>

        <section className="flex flex-col gap-4">
          <button>Search</button>
          <button>Account</button>
        </section>

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
