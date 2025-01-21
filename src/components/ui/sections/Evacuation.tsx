import { AiOutlineSearch } from 'react-icons/ai';

const EvacuationSection = () => {
    // Evacuation points around Colombo
    const evacuationPoints = [
        { lat: 6.933504, lng: 79.850529 }, // Colombo Fort
        { lat: 6.887078, lng: 79.861243 }, // Bambalapitiya
        { lat: 6.872281, lng: 79.860611 }, // Wellawatte
        { lat: 6.918387, lng: 79.901744 }, // Rajagiriya
        { lat: 6.868993, lng: 79.899685 }, // Nugegoda
    ];

    // Generate query string for evacuation points
    const evacuationMarkers = evacuationPoints
        .map(point => `${point.lat},${point.lng}`)
        .join('|');

    return (
        <section className="relative h-screen w-full">
            {/* Background Video */}
            <video
                autoPlay
                loop
                muted
                className="h-full w-full object-cover"
                controls={false}
                src="/assets/media/videos/mountain.mp4"
            />
            {/* Overlay */}
            <div className="absolute left-0 top-0 h-full w-full bg-gray-900/50" />

            {/* Content Section */}
            <div className="absolute left-1/2 top-1/2 w-full -translate-x-1/2 -translate-y-1/2">
                <div className="container mx-auto flex flex-col items-center justify-center gap-8 p-4 text-center text-white">
                    {/* Title and Subtitle */}
                    <h1 className="text-5xl font-extrabold drop-shadow-lg">Aqua Shield</h1>
                    <h2 className="text-xl font-light drop-shadow-md">
                        Ensuring Safety, Every Step of the Way
                    </h2>

                    {/* Embedded Video */}
                    <iframe
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/TFGDJwwziAU?autoplay=1"
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>

                    {/* Buttons Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                        {/* Nearest Evacuation Point Button */}
                        <button
                            className="flex flex-col items-center justify-center gap-3 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-600 p-6 text-white shadow-lg hover:from-blue-600 hover:to-indigo-700 hover:shadow-xl transition-transform duration-300 ease-in-out"
                            onClick={() =>
                                window.open(
                                    `https://www.google.com/maps/dir/?api=1&origin=current+location&destination=6.927079,79.861244&travelmode=driving`,
                                    '_blank'
                                )
                            }
                        >
                            <img
                                src="/assets/media/images/location.png"
                                alt="Nearest Evacuation Point"
                                className="h-16 w-16"
                            />
                            <span className="text-lg font-semibold">Nearest Evacuation Point</span>
                        </button>

                        {/* All Evacuation Centers Button */}
                        <button
                            className="flex flex-col items-center justify-center gap-3 rounded-lg bg-gradient-to-br from-teal-400 to-cyan-500 p-6 text-white shadow-lg hover:from-teal-500 hover:to-cyan-600 hover:shadow-xl transition-transform duration-300 ease-in-out"
                            onClick={() =>
                                window.open(
                                    `https://www.google.com/maps/search/?api=1&query=${evacuationMarkers}`,
                                    '_blank'
                                )
                            }
                        >
                            <img
                                src="/assets/media/images/evacuation.png"
                                alt="All Evacuation Centers"
                                className="h-16 w-16"
                            />
                            <span className="text-lg font-semibold">All Evacuation Centers</span>
                        </button>

                        {/* Add Evacuation Centers Button */}
                        <button
                            className="flex flex-col items-center justify-center gap-3 rounded-lg bg-gradient-to-br from-purple-400 to-blue-500 p-6 text-white shadow-lg hover:from-purple-500 hover:to-blue-600 hover:shadow-xl transition-transform duration-300 ease-in-out"
                            onClick={() =>
                                window.open(
                                    'https://www.google.com/maps/search/add+evacuation+center',
                                    '_blank'
                                )
                            }
                        >
                            <img
                                src="/assets/media/images/add-pointer.png"
                                alt="Add Evacuation Centers"
                                className="h-16 w-16"
                            />
                            <span className="text-lg font-semibold">Add Evacuation Centers</span>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export { EvacuationSection };
