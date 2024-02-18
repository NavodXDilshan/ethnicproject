import Image from 'next/image';

const DestinationsSection = () => (
  <section className="px-4 py-8 md:px-0 md:py-16">
    <div className="container mx-auto text-center">
      <h2>All-Inclusive Resorts</h2>
      <p>At Sri Lanka&apos;s Most Sought Out Places!</p>

      <div className="grid grid-rows-none gap-2 pt-8 md:grid-cols-4 md:gap-4 lg:grid-cols-5">
        <Image
          alt="Train Pic"
          className="col-span-2 row-span-2 h-full w-full rounded object-cover shadow shadow-black/20 md:col-span-4 lg:col-span-3"
          height={1000}
          src="/assets/media/images/1.jpg"
          width={1000}
        />
        <Image
          alt="Mountain Range"
          className="h-full w-full rounded object-cover shadow shadow-black/20"
          height={1000}
          src="/assets/media/images/2.png"
          width={1000}
        />
        <Image
          alt="Elephants"
          className="h-full w-full rounded object-cover shadow shadow-black/20"
          height={1000}
          src="/assets/media/images/3.webp"
          width={1000}
        />
        <Image
          alt="Lotus Tower"
          className="h-full w-full rounded object-cover shadow shadow-black/20"
          height={1000}
          src="/assets/media/images/4.jpg"
          width={1000}
        />
        <Image
          alt="Beaches"
          className="h-full w-full rounded object-cover shadow shadow-black/20"
          height={1000}
          src="/assets/media/images/5.jpg"
          width={1000}
        />
      </div>
    </div>
  </section>
);

export { DestinationsSection };
