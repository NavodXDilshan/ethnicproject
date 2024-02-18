import { AiOutlineSearch } from 'react-icons/ai';

const HeroSection = () => (
  <section className="relative h-screen w-full">
    <video
      autoPlay
      loop
      muted
      className="h-full w-full object-cover"
      controls={false}
      src="/assets/media/videos/sigiriya.mp4"
    />
    <div className="absolute left-0 top-0 h-full w-full bg-gray-900/50" />

    <div className="absolute left-1/2 top-1/2 w-full -translate-x-1/2 -translate-y-1/2">
      <div className="container mx-auto flex flex-col items-center justify-center gap-4 p-4 text-center text-white">
        <h1>Book anything from here!</h1>
        <h2 className="font-light">All At One Place</h2>

       
      </div>
    </div>
  </section>
);

export { HeroSection };
