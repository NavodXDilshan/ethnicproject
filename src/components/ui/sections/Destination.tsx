import Image from 'next/image';

const albumSections = [
  {
    title: "Be a force for good",
    caption: "Helping the needy during the flood disaster occured in Ratnapura",
    images: [
      { src: "/assets/media/images/1.jpg", alt: "Train Pic", span: "col-span-2 row-span-2 md:col-span-4 lg:col-span-3" },
      { src: "/assets/media/images/2.jpg", alt: "Mountain Range" },
      { src: "/assets/media/images/3.jpg", alt: "Elephants" },
      { src: "/assets/media/images/4.jpg", alt: "Lotus Tower" },
      { src: "/assets/media/images/5.jpg", alt: "Beaches" },
    ],
  },
  {
    title: "Be the light of those who have lost the way",
    caption: "Providing relief during the flood disaster in Matale.",
    images: [
      { src: "/assets/media/images/6.jpg", alt: "Temple" },
      { src: "/assets/media/images/7.jpg", alt: "Street Market" },
      { src: "/assets/media/images/8.jpg", alt: "Traditional Dance" },
      { src: "/assets/media/images/9.jpeg", alt: "Ancient Ruins" },
    ],
  },
  {
    title: "Support those who are in need",
    caption: "Recueing those who were affected by adverse weather in Puttalam",
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
  <section className="px-4 py-8 md:px-0 md:py-16">
    <div className="container mx-auto">
      {albumSections.map((section, index) => (
        <div key={index} className="mb-12 text-center">
          <h2 className="text-2xl font-semibold">{section.title}</h2>
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
