import {
  GoogleMap,
  InfoWindow,
  Marker,
  useJsApiLoader,
} from "@react-google-maps/api";
import Link from "next/link";
import React, { useState } from "react";
import { mapOptions } from "./MapConfig";
import {
  BsFacebook,
  BsInstagram,
  BsTwitter,
  BsQuora,
  BsX,
} from "react-icons/bs";
const containerStyle = {
  width: "50%",
  height: "70vh",
};

// const center = useMemo(() => ({ lat: 18.52043, lng: 73.856743 }), []);

const Map = ({ placesArray, nonce }: any) => {
  const [placeDetails, setPlaceDetails] = useState() as any;
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: `${process.env.NEXT_PUBLIC_GOOGLE_MAPS_KEY}`,
  });

  const renderMap = (): JSX.Element => (
    <>
      {!placesArray ? (
        <h1>Loading...</h1>
      ) : (
        <GoogleMap
          mapContainerStyle={containerStyle}
          onClick={() => setPlaceDetails({})}
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
                onClick={() => {
                  setPlaceDetails({ ...places });
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
          {placeDetails && (
            <InfoWindow
              position={placeDetails.location}
              onLoad={(infoWindow) => {
                console.log("infoWindow");
              }}
            >
              <>
                <span
                  className="flex justify-end !mb-0 pt-1 pr-1"
                  onClick={() => setPlaceDetails({})}
                >
                  <BsX className="inline" />
                </span>
                <div className="p-2 pt-0 ">
                  <h1 className="mb-2 font-bold underline underline-offset-1">
                    {placeDetails.name}
                  </h1>

                  <div className="flex pb-2 m-auto text-center">
                    <Link
                      href={placeDetails?.twitter ?? ""}
                      target="_blank"
                      className="inline-block"
                    >
                      <BsTwitter className="inline mr-2" />
                    </Link>
                    <Link
                      href={placeDetails?.instagram ?? ""}
                      target="_blank"
                      className="inline-block"
                    >
                      <BsInstagram className="inline mr-2" />
                    </Link>
                    <Link
                      href={placeDetails?.facebook ?? ""}
                      target="_blank"
                      className="inline-block"
                    >
                      <BsFacebook className="inline mr-2" />
                    </Link>
                    <Link
                      href={placeDetails?.facebook ?? ""}
                      target="_blank"
                      className="inline-block"
                    >
                      <BsQuora className="inline mr-2" />
                    </Link>
                    <Link
                      className="a2a_button_twitter"
                      href={placeDetails?.twitter ?? ""}
                      target="_blank"
                    ></Link>
                    <Link
                      className="a2a_button_tripadvisor"
                      href={placeDetails?.twitter ?? ""}
                      target="_blank"
                    ></Link>
                  </div>
                  {/* <Button
                  type="button"
                  onClick={() => setPlaceDetails({})}
                  className="text-white bg-blue-800 rounded-md border border-transparent  
                  px-1 py-1  font-semibold text-xs tracking-widest
                  transition ease-in-out duration-150"
                >
                  close
                </Button> */}
                </div>
              </>
            </InfoWindow>
          )}
        </GoogleMap>
      )}
    </>
  );
  return isLoaded ? renderMap() : <h1>Loading...</h1>;
  // return renderMap();
};

export default Map;
