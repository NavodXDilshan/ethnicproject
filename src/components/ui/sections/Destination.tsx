import Image from 'next/image';

const albumSections = [
  {
    title: "Be a Force for Good",
    caption: "Helping the needy during the flood disaster in Ratnapura.",
    images: [
      { src: "/assets/media/images/1.jpg", alt: "Train Pic", span: "col-span-2 row-span-2 md:col-span-4 lg:col-span-3" },
      { src: "/assets/media/images/2.jpg", alt: "Mountain Range" },
      { src: "/assets/media/images/3.jpg", alt: "Elephants" },
      { src: "/assets/media/images/4.jpg", alt: "Lotus Tower" },
      { src: "/assets/media/images/5.jpg", alt: "Beaches" },
    ],
  },
  {
    title: "Be the Light for Those in Darkness",
    caption: "Providing relief during the flood disaster in Matale.",
    images: [
      { src: "/assets/media/images/6.jpg", alt: "Temple" },
      { src: "/assets/media/images/7.jpg", alt: "Street Market" },
      { src: "/assets/media/images/8.jpg", alt: "Traditional Dance" },
      { src: "/assets/media/images/9.jpeg", alt: "Ancient Ruins" },
    ],
  },
  {
    title: "Support Those in Need",
    caption: "Rescuing those affected by adverse weather in Puttalam.",
    images: [
      { src: "/assets/media/images/10.jpg", alt: "Jungle Safari" },
      { src: "/assets/media/images/11.avif", alt: "Bird Watching" },
      { src: "/assets/media/images/12.jpg", alt: "Underwater Dive" },
      { src: "/assets/media/images/13.jpg", alt: "Underwater Dive" },
      { src: "/assets/media/images/14.webp", alt: "Underwater Dive" },
    ],
  },
];

const DestinationsSection = () => (
  <section className="px-4 py-12 md:px-0 md:py-16 bg-gray-100">
    <div className="container mx-auto text-center">
      <h1 className="text-4xl font-bold text-gray-800 md:text-5xl">Album of Unity</h1>
      <p className="mt-4 text-lg text-gray-600 md:text-xl max-w-2xl mx-auto">
        A collection of heartfelt moments where communities came together to support one another 
        during times of crisis. These images capture resilience, compassion, and unity in the face of adversity.
      </p>

      {albumSections.map((section, index) => (
        <div key={index} className="mt-12">
          <h2 className="text-2xl font-semibold text-gray-700">{section.title}</h2>
          <p className="text-gray-600">{section.caption}</p>

          <div className="grid grid-rows-none gap-2 pt-8 md:grid-cols-4 md:gap-4 lg:grid-cols-5">
            {section.images.map((image, i) => (
              <Image
                key={i}
                alt={image.alt}
                className={`h-full w-full rounded object-cover shadow shadow-black/20 ${image.span || ''}`}
                height={800}
                width={800}
                src={image.src}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  </section>
);

export { DestinationsSection };
