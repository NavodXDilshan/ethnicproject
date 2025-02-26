import React, { useState } from 'react';

interface PopupFormProps {
    onClose: () => void;
}

const PopupForm: React.FC<PopupFormProps> = ({ onClose }) => {
    const [city, setCity] = useState('');
    const [longitude, setLongitude] = useState('');
    const [latitude, setLatitude] = useState('');
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        const data = { city, longitude, latitude };
        fetch('http://localhost:4000/save-location', { // Updated URL
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then(response => response.json())
            .then(() => {
                setTimeout(() => {
                    setLoading(false);
                    setSuccess(true);
                    setTimeout(() => {
                        setSuccess(false);
                        onClose();
                    }, 2000); // Close popup after 2 seconds
                }, 1000); // Show spinner for 1 second
            })
            .catch(error => {
                setLoading(false);
                console.error('Error saving location:', error);
            });
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
            <div className="bg-white p-6 rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold mb-4">Add Evacuation Center</h2>
                {loading ? (
                    <div className="flex items-center justify-center">
                        <div className="loader"></div> {/* Add your loading spinner here */}
                        <span className="ml-2">Saving...</span>
                    </div>
                ) : success ? (
                    <div className="flex items-center justify-center text-green-500">
                        <svg
                            className="w-6 h-6 mr-2"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M5 13l4 4L19 7"
                            ></path>
                        </svg>
                        Location saved successfully!
                    </div>
                ) : (
                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label className="block text-gray-700">City/ Place</label>
                            <input
                                type="text"
                                className="w-full p-2 border border-gray-300 rounded"
                                value={city}
                                onChange={(e) => setCity(e.target.value)}
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700">Longitude</label>
                            <input
                                type="text"
                                className="w-full p-2 border border-gray-300 rounded"
                                value={longitude}
                                onChange={(e) => setLongitude(e.target.value)}
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700">Latitude</label>
                            <input
                                type="text"
                                className="w-full p-2 border border-gray-300 rounded"
                                value={latitude}
                                onChange={(e) => setLatitude(e.target.value)}
                                required
                            />
                        </div>
                        <div className="flex justify-end">
                            <button
                                type="button"
                                className="mr-4 p-2 bg-red-500 text-white rounded"
                                onClick={onClose}
                            >
                                Cancel
                            </button>
                            <button
                                type="submit"
                                className="p-2 bg-blue-500 text-white rounded"
                            >
                                Save
                            </button>
                        </div>
                    </form>
                )}
            </div>
        </div>
    );
};

export default PopupForm;