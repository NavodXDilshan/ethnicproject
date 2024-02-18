import { FaFacebook, FaInstagram, FaPinterest, FaTwitter, FaYoutube } from 'react-icons/fa';

const Footer = () => (
  <footer className="bg-gray-100 px-4 py-8 md:px-0 md:py-16">
    <div className="container mx-auto flex flex-col items-center justify-center gap-4 md:flex-row md:justify-between">
      <section className="flex flex-wrap items-center justify-center gap-6">
        <FaFacebook className="icon" />
        <FaTwitter className="icon" />
        <FaInstagram className="icon" />
        <FaPinterest className="icon" />
        <FaYoutube className="icon" />
      </section>
    </div>
  </footer>
);

export { Footer };