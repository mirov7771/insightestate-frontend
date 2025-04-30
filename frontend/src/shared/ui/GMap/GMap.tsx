import { CSSProperties, FC } from 'react';
import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api';

const getCoordinatesFromUrl = (url: string) => {
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
};

export const GMap: FC<GMapProps> = ({
  zoom = 17,
  mapContainerStyle = { width: '100%', height: '100%' },
  url,
}) => {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: 'AIzaSyBdjVBKqaEESzkqmHcesmR1CsDexeSNeaE',
  });
  const result = getCoordinatesFromUrl(url);

  return isLoaded && result ? (
    <GoogleMap mapContainerStyle={mapContainerStyle} center={result} zoom={zoom}>
      <Marker position={result} />
    </GoogleMap>
  ) : null;
};
