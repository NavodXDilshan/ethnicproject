import React, { useEffect, useState } from 'react';

interface EvacuationListPopupProps {
    userLat: number;
    userLng: number;
    onClose: () => void;
}

const EvacuationListPopup: React.FC<EvacuationListPopupProps> = ({ userLat, userLng, onClose }) => {
    const [points, setPoints] = useState<Array<{ city: string, longitude: number, latitude: number, distance: number }>>([]);

    useEffect(() => {
        fetch('http://localhost:4000/evacuation-points', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ userLat, userLng }),
        })
            .then(response => response.json())
            .then(data => {
                setPoints(data);
            })
            .catch(error => {
                console.error('Error fetching evacuation points:', error);
            });
    }, [userLat, userLng]);

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
            <div className="bg-white p-6 rounded-lg shadow-lg w-96">
                <h2 className="text-2xl font-bold mb-4">Evacuation Centers</h2>
                <ul>
                    {points.map((point, index) => (
                        <li key={index} className="mb-4 flex justify-between items-center">
                            <div>
                                <p className="font-semibold">{point.city}</p>
                                <p className="text-sm text-gray-600">{point.distance.toFixed(2)} km away</p>
                            </div>
                            <button
                                className="p-2 bg-blue-500 text-white rounded"
                                onClick={() => window.open(
                                    `https://www.google.com/maps/dir/?api=1&origin=${userLat},${userLng}&destination=${point.latitude},${point.longitude}&travelmode=driving`,
                                    '_blank'
                                )}
                            >
                                Route
                            </button>
                        </li>
                    ))}
                </ul>
                <button
                    className="mt-4 p-2 bg-red-500 text-white rounded w-full"
                    onClick={onClose}
                >
                    Close
                </button>
            </div>
        </div>
    );
};

export default EvacuationListPopup;