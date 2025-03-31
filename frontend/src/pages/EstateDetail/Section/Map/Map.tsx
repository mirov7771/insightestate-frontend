import { FC } from 'react';
import { Section } from '../Section';
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';
import {localField} from "@/i18n/localField";

const containerStyle = {
  width: '100%',
  height: '400px',
};

type MapProps = {
  url: string;
};

const getCoordinatesFromUrl = (url: string) => {
  const match = url.match(/@(-?\d+\.\d+),(-?\d+\.\d+)/);

  if (match) {
    const lat = parseFloat(match[1]);
    const lng = parseFloat(match[2]);

    return { lat, lng };
  }
  return null;
};

export const Map: FC<MapProps> = ({ url }) => {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: 'AIzaSyBdjVBKqaEESzkqmHcesmR1CsDexeSNeaE',
  });
  const result = getCoordinatesFromUrl(url);

  return isLoaded && result ? (
    <Section title={localField('map')}>
      <GoogleMap mapContainerStyle={containerStyle} center={result} zoom={17}>
        <Marker position={result} />
      </GoogleMap>
    </Section>
  ) : null;
};
