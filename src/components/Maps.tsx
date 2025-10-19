import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '390px'
};

const center = {
  lat: -23.55052,
  lng: -46.633308
};

export default function Maps() {
  return (
    <LoadScript googleMapsApiKey="AIzaSyACVTcHGlqZis9BZdilqpN7coGS3xwjp-Q">
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={15}
      >
        <Marker position={center} />
      </GoogleMap>
    </LoadScript>
  );
}