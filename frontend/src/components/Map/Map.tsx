import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";
import React from "react";
import { mapOptions } from "./MapConfig";
const containerStyle = {
  width: "50%",
  height: "70vh",
};

// const center = useMemo(() => ({ lat: 18.52043, lng: 73.856743 }), []);

const Map = ({ placesArray, nonce }: any) => {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: `${process.env.NEXT_PUBLIC_GOOGLE_MAPS_KEY}`,
  });

  console.log("placesArray", placesArray);
  const renderMap = (): JSX.Element => (
    <>
      {!placesArray ? (
        <h1>Loading...</h1>
      ) : (
        <GoogleMap
          mapContainerStyle={containerStyle}
          zoom={10}
          options={{
            styles: mapOptions,
          }}
          center={{
            lat: placesArray[0].location.lat,
            lng: placesArray[0].location.lng,
          }}
        >
          {placesArray.map((places: any, index: number) => {
            return (
              <Marker
                key={index}
                position={{
                  lat: places.location.lat,
                  lng: places.location.lng,
                }}
                label={{
                  color: "#fff",
                  fontSize: "12px",
                  fontWeight: "600",
                  text: `${index + 1}`,
                }}
                icon={{
                  url: "/map_icon.svg",
                  labelOrigin: new google.maps.Point(16, 28),
                  fillOpacity: 1,
                  fillColor: "#fff",
                  strokeOpacity: 1,
                  strokeWeight: 1,
                  strokeColor: "#333",
                  scale: 6,
                }}
              />
            );
          })}
        </GoogleMap>
      )}
    </>
  );
  return isLoaded ? renderMap() : <h1>Loading...</h1>;
};

export default Map;
