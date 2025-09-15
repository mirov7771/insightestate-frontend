import {CSSProperties, FC} from 'react';
import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api';


const getCoordinatesFromUrl = (
    url: string,
    latitude?: number,
    longitude?: number
) => {
  if (latitude && longitude) {
    console.log("latitude = ", latitude, "longitude = ", longitude)
    return {
      lat: latitude,
      lng: longitude
    }
  }
  const match = url.match(/@(-?\d+\.\d+),(-?\d+\.\d+)/);

  if (match) {
    const lat = parseFloat(match[1]);
    const lng = parseFloat(match[2]);

    return { lat, lng };
  }
  return null;
};

type GMapProps = {
  url: string;
  mapContainerStyle?: CSSProperties;
  zoom?: number;
  latitude?: number;
  longitude?: number;
};

export const GMap: FC<GMapProps> = ({
  zoom = 17,
  mapContainerStyle = { width: '100%', height: '100%' },
  url,
  latitude,
  longitude
}) => {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: 'AIzaSyBdjVBKqaEESzkqmHcesmR1CsDexeSNeaE',
  });
  const result = getCoordinatesFromUrl(url, latitude, longitude);

  return isLoaded && result ? (
    <GoogleMap mapContainerStyle={mapContainerStyle} center={result} zoom={zoom}>
      <Marker position={result} />
    </GoogleMap>
  ) : null;
};
