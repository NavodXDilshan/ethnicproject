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
      <script src="https://cdn.botpress.cloud/webchat/v1/inject.js"></script>
      <script src="https://mediafiles.botpress.cloud/3c6f068d-a1fe-4358-b107-4990ee37b40c/webchat/config.js" defer></script>  

    </div>
  </footer>
);

export default Footer;