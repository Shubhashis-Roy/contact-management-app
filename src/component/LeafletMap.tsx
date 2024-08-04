import React, { useState } from "react";
import {
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  useMapEvents,
} from "react-leaflet";

interface MyMapProps {
  initialCenter: { lat: number; lng: number };
  zoom: number;
  isLoading: boolean;
  deaths: string;
  cases: string;
  country: string;
  recovered: string;
}

const LeafletMap: React.FC<MyMapProps> = ({
  initialCenter,
  zoom,
  isLoading,
  deaths,
  cases,
  country,
  recovered,
}) => {
  const [position, setPosition] = useState<L.LatLng | null>(null);

  const LocationMarker = () => {
    const map = useMapEvents({
      click() {
        map.locate();
      },
      locationfound(e) {
        setPosition(e.latlng);
        map.flyTo(e.latlng, map.getZoom());
      },
    });

    return position === null ? null : (
      <Marker position={position}>
        <Popup>Country name : {country} </Popup>
        <Popup>Active cases: {cases} </Popup>
        <Popup>Recovered cases: {recovered} </Popup>
        <Popup>Deaths: {deaths} </Popup>
      </Marker>
    );
  };

  return (
    <div className="flex justify-center items-center min-h-screen flex-1">
      {isLoading ? (
        <MapContainer
          center={initialCenter}
          zoom={zoom}
          scrollWheelZoom={false}
        >
          <TileLayer
            attribution='© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <LocationMarker />
        </MapContainer>
      ) : (
        <div
          className="inline-block h-20 w-20 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
          role="status"
        >
          <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
            Loading...
          </span>
        </div>
      )}
    </div>
  );
};

export default LeafletMap;
