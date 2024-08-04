import React, { useEffect, useState } from "react";
import LeafletMap from "../component/LeafletMap.tsx";

const Map = () => {
  const [mapData, setMapData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getData = async () => {
      const response = await fetch(
        // "https://disease.sh/v3/covid-19/countries"
        process.env.REACT_APP_MAP_API
      );
      const data = await response.json();

      if (data) {
        setMapData(data);
        setIsLoading(true);
      }
    };

    getData();
  }, []);

  return mapData.map((item) => (
    <LeafletMap
      initialCenter={{
        lat: item?.countryInfo?.lat,
        lng: item?.countryInfo?.long,
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
