import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";

const containerStyle = {
  width: "50%",
};

// const center = useMemo(() => ({ lat: 18.52043, lng: 73.856743 }), []);

const Map = ({ placesArray }: any) => {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: `${process.env.NEXT_PUBLIC_GOOGLE_MAPS_KEY}`,
  });

  console.log("placesArray", placesArray);
  return (
    <>
      {!isLoaded ? (
        <h1>Loading...</h1>
      ) : (
        <GoogleMap
          mapContainerStyle={containerStyle}
          zoom={50}
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
                icon={places.location.icon}
              />
            );
          })}
        </GoogleMap>
      )}
    </>
  );
};

export default Map;
