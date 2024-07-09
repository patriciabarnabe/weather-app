import { useState, useEffect } from "react";

interface Location {
  lat: number | null;
  lon: number | null;
  error: string | null;
}

const useGeoLocation = () => {
  const [location, setLocation] = useState<Location>({
    lat: null,
    lon: null,
    error: null,
  });

  useEffect(() => {
    if (!navigator.geolocation) {
      setLocation({
        error: "Geolocation is not supported by your browser",
        lat: null,
        lon: null,
      });
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        setLocation({
          lat: position.coords.latitude,
          lon: position.coords.longitude,
          error: null,
        });
      },
      () => {
        setLocation({
          error: "Unable to retrieve your location",
          lat: null,
          lon: null,
        });
      }
    );
  }, []);

  return location;
};

export default useGeoLocation;
