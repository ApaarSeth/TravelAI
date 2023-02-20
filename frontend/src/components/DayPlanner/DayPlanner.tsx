import { useEffect, useState } from "react";
import Map from "../Map/Map";
import PlacesList from "../PlacesInformation/placesList";
import Button from "../Utility/Button";

const DayPlanner = () => {
  const [plannerData, setPlannerData] = useState([]);
  const [dayData, setDayData] = useState([]);
  useEffect(() => {
    const data = [
      [
        {
          location: {
            address: "1600 Amphitheatre Parkway, Mountain View, california.",
            lat: 26.841706,
            lng: 80.940006,
            icon: "https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png",
          },
          name: "museum",
          image: "",
          description: "random data",
          time: "30min",
        },
        {
          location: {
            address: "1600 Amphitheatre Parkway, Mountain View, california.",
            lat: 26.839658,
            lng: 80.942838,
            icon: "https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png",
          },
          name: "museum",
          image: "",
          description: "random data",
          time: "30min",
        },
      ],
      [
        {
          location: {
            address: "1600 Amphitheatre Parkway, Mountain View, california.",
            lat: 33.42216,
            lng: -118.08427,
            icon: "https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png",
          },
          name: "museum",
          image: "",
          description: "random data",
          time: "30min",
        },
        {
          location: {
            address: "1600 Amphitheatre Parkway, Mountain View, california.",
            lat: 34.42216,
            lng: -119.08427,
            icon: "https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png",
          },
          name: "museum",
          image: "",
          description: "random data",
          time: "30min",
        },
      ],
      [
        {
          location: {
            address: "1600 Amphitheatre Parkway, Mountain View, california.",
            lat: 35.42216,
            lng: -120.08427,
            icon: "https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png",
          },
          name: "museum",
          image: "",
          description: "random data",
          time: "30min",
        },
        {
          location: {
            address: "1600 Amphitheatre Parkway, Mountain View, california.",
            lat: 36.42216,
            lng: -121.08427,
            icon: "https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png",
          },
          name: "museum",
          image: "",
          description: "random data",
          time: "30min",
        },
      ],
    ];
    setTimeout(() => {
      setPlannerData(() => data as any);
    }, 1000);
  }, []);

  const dayClicked = (index: number) => {
    setDayData(() => plannerData[index]);
  };

  if (!plannerData.length) {
    return <p>Loading</p>;
  }
  return (
    <>
      <div className="flex justify-center m-4">
        {plannerData.map((data, index) => {
          return (
            <Button
              key={index}
              className="mr-2"
              type="button"
              onClick={() => dayClicked(index)}
            >{`Day ${index + 1}`}</Button>
          );
        })}
      </div>
      <div className="flex m-6">
        {dayData.length && (
          <PlacesList className="w-1/2" placesArray={dayData} />
        )}
        {dayData.length && <Map className="w-1/2" placesArray={dayData} />}
      </div>
    </>
  );
};

export default DayPlanner;
