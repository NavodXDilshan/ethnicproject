import { useState } from 'react';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';
import Image from 'next/image';

const CarouselSection = () => {
  const [slide, setSlide] = useState(0);

  const SLIDER_DATA = [
    {
      url: '/assets/media/images/resort1.jpg',
    },
    {
      url: '/assets/media/images/resort2.jpg',
    },
    {
      url: '/assets/media/images/resort3.webp',
    },
    {
      url: '/assets/media/images/resort4.webp',
    },
    {
      url: '/assets/media/images/resort5.jpg',
    },
  ];

  const handlePrevSlide = () =>
    setSlide(prevIndex => (prevIndex === 0 ? SLIDER_DATA.length - 1 : prevIndex - 1));
  const handleNextSlide = () =>
    setSlide(prevIndex => (prevIndex === SLIDER_DATA.length - 1 ? 0 : prevIndex + 1));

  return (
    <section className="relative flex items-center justify-center">
      <span
        className="absolute left-4 top-1/2 flex cursor-pointer items-center justify-center rounded-full bg-white/75 p-2 text-xl leading-none text-slate-800 lg:left-8 lg:text-3xl"
        onClick={handlePrevSlide}
      >
        <BsChevronLeft />
      </span>
      <span
        className="absolute right-4 top-1/2 flex cursor-pointer items-center justify-center rounded-full bg-white/75 p-2 text-xl leading-none text-slate-800 lg:right-8 lg:text-3xl"
        onClick={handleNextSlide}
      >
        <BsChevronRight />
      </span>
      {SLIDER_DATA.map((item, index) => (
        <div key={index} className={`w-full rounded-md ${index !== slide && 'hidden'}`}>
          {index === slide && (
            <Image
              alt="beach image"
              className="h-[400px] w-full object-cover object-bottom shadow shadow-black/20 lg:h-[750px]"
              height={1000}
              src={item.url}
              width={1000}
            />
          )}
        </div>
      ))}
    </section>
  );
};

export { CarouselSection };
