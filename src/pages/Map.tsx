import React, { useEffect, useState } from "react";
import LeafletMap from "../component/LeafletMap.tsx";

interface MapDataItem {
  countryInfo: {
    lat: string;
    long: string;
  };
  deaths: string;
  active: string;
  country: string;
  recovered: string;
}

const Map = () => {
  const [mapData, setMapData] = useState<MapDataItem[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const apiKey = process.env.REACT_APP_MAP_API;

  useEffect(() => {
    const getData = async () => {
      let response;
      if (apiKey) {
        response = await fetch(apiKey);
      }
      const data = await response.json();

      if (data) {
        setMapData(data);
        setIsLoading(true);
      }
    };

    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return mapData.map((item) => (
    <LeafletMap
      initialCenter={{
        lat: parseFloat(item?.countryInfo?.lat),
        lng: parseFloat(item?.countryInfo?.long),
      }}
      zoom={13}
      isLoading={isLoading}
      deaths={item?.deaths}
      cases={item?.active}
      country={item?.country}
      recovered={item?.recovered}
    />
  ));
};

export default Map;
