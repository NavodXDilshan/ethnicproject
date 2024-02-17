import { AiOutlineSearch } from 'react-icons/ai';

const HeroSection = () => (
  <section className="relative h-screen w-full">
    <video
      autoPlay
      loop
      muted
      className="h-full w-full object-cover"
      controls={false}
      src="/assets/media/videos/beach.mp4"
    />
    <div className="absolute left-0 top-0 h-full w-full bg-gray-900/50" />

    <div className="absolute left-1/2 top-1/2 w-full -translate-x-1/2 -translate-y-1/2">
      <div className="container mx-auto flex flex-col items-center justify-center gap-4 p-4 text-center text-white">
        <h1>First Class Travel</h1>
        <h2 className="font-light">Top 1% Locations Worldwide</h2>

        <form className="mx-auto flex w-full max-w-[700px] items-center justify-between gap-4 rounded-md border bg-gray-100/90 px-2 py-1 text-black xs:flex-wrap">
          <input
            className="flex-1 border-0 bg-transparent shadow-none focus:outline-none"
            id="search"
            name="search"
            placeholder="Search Destinations"
            type="text"
          />
          <button className="grow-0 text-center xs:grow">
            <AiOutlineSearch className="icon !text-white xs:mx-auto" size={20} />
          </button>
        </form>
      </div>
    </div>
  </section>
);

export { HeroSection };
