'use client';

import React, { useEffect } from 'react';
import { Loader } from '@googlemaps/js-api-loader';

export default function GoogleMaps() {
  const mapRef = React.useRef<HTMLDivElement>(null);

  useEffect(() => {
    const initializeMap = async () => {
      const loader = new Loader({
        apiKey: process.env.NEXT_PUBLIC_MAPS_API_KEY as string,
        version: 'quartely',
      });

      

      const { Map } = await loader.importLibrary('maps');

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

          const map = new Map(mapRef.current as HTMLDivElement, options);

          // Add a marker for the current location
          const marker = new google.maps.Marker({
            map: map,
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

  return <div className="h-[830px]" ref={mapRef} />;
}