import { AiOutlineSearch } from 'react-icons/ai';
import { openPopup, openPopupForm } from '../../utils/popupFunctions';
import { useEffect, useState } from 'react';
import EvacuationListPopup from '../sections/EvacuationListPopup';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';

const EvacuationSection = () => {

    const [nearestPoint, setNearestPoint] = useState(null);
    const [showPopup, setShowPopup] = useState(false);
    const [userLocation, setUserLocation] = useState({ lat: 0, lng: 0 });
    const [loadingAllCenters, setLoadingAllCenters] = useState(false);
const [loadingAddCenter, setLoadingAddCenter] = useState(false);
const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(position => {
                const { latitude, longitude } = position.coords;
                setUserLocation({ lat: latitude, lng: longitude });
            });
        } else {
            alert('Geolocation is not supported by this browser.');
        }
    }, []);

    const findNearestEvacuationPoint = () => {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(position => {
                    const { latitude, longitude } = position.coords;
                    fetch('http://localhost:4000/nearest-evacuation', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({ userLat: latitude, userLng: longitude }),
                    })
                        .then(response => response.json())
                        .then(data => {
                            if (data.latitude && data.longitude) {
                                setNearestPoint(data);
                                window.open(
                                    `https://www.google.com/maps/dir/?api=1&origin=${latitude},${longitude}&destination=${data.latitude},${data.longitude}&travelmode=driving`,
                                    '_blank'
                                );
                            } else {
                                alert('No evacuation points found');
                            }
                        })
                        .catch(error => {
                            console.error('Error finding nearest evacuation point:', error);
                        });
                });
            } else {
                alert('Geolocation is not supported by this browser.');
            }
        };

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
                            onClick={findNearestEvacuationPoint}
                        >
                            <img
                                src="/assets/media/images/location.png"
                                alt="Nearest Evacuation Point"
                                className="h-16 w-16"
                            />
                            <span className="text-lg font-semibold">Nearest Evacuation Point</span>
                            <span className="text-sm">ආසන්නතම ඉවත් කිරීමේ ස්ථානය</span>
                            <span className="text-sm">அருகிலுள்ள வெளியேற்றும் இடம்</span>
                        </button>

                        {/* All Evacuation Centers Button */}
<button
    className="flex flex-col items-center justify-center gap-3 rounded-lg bg-gradient-to-br from-teal-400 to-cyan-500 p-6 text-white shadow-lg hover:from-teal-500 hover:to-cyan-600 hover:shadow-xl transition-transform duration-300 ease-in-out"
    onClick={() => {
        setIsLoading(true);
        setLoadingAllCenters(true);
        setTimeout(() => {
            setShowPopup(true);
            setLoadingAllCenters(false);
            setIsLoading(false);
        }, 1000);
    }}
>
    {loadingAllCenters ? (
        <AiOutlineLoading3Quarters className="h-16 w-16 animate-spin" />
    ) : (
        <img
            src="/assets/media/images/evacuation.png"
            alt="All Evacuation Centers"
            className="h-16 w-16"
        />
    )}
    <span className="text-lg font-semibold">All Evacuation Centers</span>
    <span className="text-sm">සියලුම ඉවත් කිරීමේ මධ්‍යස්ථාන</span>
                            <span className="text-sm">அனைத்து வெளியேற்றும் மையங்கள்</span>
</button>

{/* Add Evacuation Centers Button */}
<button
    className="flex flex-col items-center justify-center gap-3 rounded-lg bg-gradient-to-br from-purple-400 to-blue-500 p-6 text-white shadow-lg hover:from-purple-500 hover:to-blue-600 hover:shadow-xl transition-transform duration-300 ease-in-out"
    onClick={() => {
        setIsLoading(true);
        setLoadingAddCenter(true);
        setTimeout(() => {
            openPopupForm();
            setLoadingAddCenter(false);
            setIsLoading(false);
        }, 1000);
    }}
>
    {loadingAddCenter ? (
        <AiOutlineLoading3Quarters className="h-16 w-16 animate-spin" />
    ) : (
        <img
            src="/assets/media/images/add-pointer.png"
            alt="Add Evacuation Centers"
            className="h-16 w-16"
        />
    )}
    <span className="text-lg font-semibold">Add Evacuation Centers</span>
    <span className="text-sm">ඉවත් කිරීමේ මධ්යස්ථාන එකතු කරන්න</span>
                            <span className="text-sm">வெளியேற்றும் மையங்களைச் சேர்க்கவும்</span>
</button>
                    </div>
                </div>
            </div>
            {showPopup && (
                <EvacuationListPopup
                    userLat={userLocation.lat}
                    userLng={userLocation.lng}
                    onClose={() => setShowPopup(false)}                />
            )}
            {isLoading && (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-75 z-50">
        <AiOutlineLoading3Quarters className="h-16 w-16 animate-spin text-white" />
    </div>
)}
        </section>
    );
};

export { EvacuationSection };
