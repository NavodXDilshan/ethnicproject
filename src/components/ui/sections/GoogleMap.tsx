import React, { useEffect, useRef } from 'react';
import { Loader } from '@googlemaps/js-api-loader';

export default function GoogleMap() {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const initializeMap = async () => {
      const loader = new Loader({
        apiKey: process.env.NEXT_PUBLIC_MAPS_API_KEY as string,
        version: 'quarterly',
      });

      const google: any = await loader.load();

      // Retrieve user's current location
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const locationInMap = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          };

          const options: google.maps.MapOptions = {
            center: locationInMap,
            zoom: 18,
            mapId: 'NEXT_MAPS_TUTS',
          };

          const map = new google.maps.Map(mapRef.current!, options);

          // Add a marker for the current location
          new google.maps.Marker({
            map,
            position: locationInMap,
          });
        },
        (error) => {
          console.error('Error retrieving current location:', error);
        }
      );
    };

    initializeMap();
  }, []);

  return <div className="h-[700px]" ref={mapRef}></div>;
}