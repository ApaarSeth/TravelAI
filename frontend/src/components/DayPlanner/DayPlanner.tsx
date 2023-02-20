import { Axios } from "axios";
import { useEffect, useState } from "react";
import Map from "../Map/Map";
import PlacesList from "../PlacesInformation/placesList";
import Button from "../Utility/Button";
import axios from "axios";

const DayPlanner = ({ locationId }: any) => {
  const [plannerData, setPlannerData] = useState([]);
  const [dayData, setDayData] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const data = await axios({
          // Endpoint to send files
          url: `${process.env.NEXT_PUBLIC_NG_ROK}/get-plan?id=${locationId}`,
          method: "POST",
          // Attaching the form data
          data: {
            id: locationId,
          },
        });
        // const res = await axios.get(
        //   `${process.env.NEXT_PUBLIC_NG_ROK}/get-plan?id=${locationId}`
        // );
        setPlannerData(() => data.data as any);
      } catch (error) {}
    })();
    // const data = [
    //   [
    //     {
    //       location: {
    //         address: "1600 Amphitheatre Parkway, Mountain View, california.",
    //         lat: 26.841706,
    //         lng: 80.940006,
    //         icon: "https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png",
    //       },
    //       name: "museum",
    //       image: "",
    //       description: "random data",
    //       time: "30min",
    //     },
    //     {
    //       location: {
    //         address: "1600 Amphitheatre Parkway, Mountain View, california.",
    //         lat: 26.839658,
    //         lng: 80.942838,
    //         icon: "https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png",
    //       },
    //       name: "museum",
    //       image: "",
    //       description: "random data",
    //       time: "30min",
    //     },
    //   ],
    //   [
    //     {
    //       location: {
    //         address: "1600 Amphitheatre Parkway, Mountain View, california.",
    //         lat: 33.42216,
    //         lng: -118.08427,
    //         icon: "https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png",
    //       },
    //       name: "museum",
    //       image: "",
    //       description: "random data",
    //       time: "30min",
    //     },
    //     {
    //       location: {
    //         address: "1600 Amphitheatre Parkway, Mountain View, california.",
    //         lat: 34.42216,
    //         lng: -119.08427,
    //         icon: "https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png",
    //       },
    //       name: "museum",
    //       image: "",
    //       description: "random data",
    //       time: "30min",
    //     },
    //   ],
    //   [
    //     {
    //       location: {
    //         address: "1600 Amphitheatre Parkway, Mountain View, california.",
    //         lat: 35.42216,
    //         lng: -120.08427,
    //         icon: "https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png",
    //       },
    //       name: "museum",
    //       image: "",
    //       description: "random data",
    //       time: "30min",
    //     },
    //     {
    //       location: {
    //         address: "1600 Amphitheatre Parkway, Mountain View, california.",
    //         lat: 36.42216,
    //         lng: -121.08427,
    //         icon: "https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png",
    //       },
    //       name: "museum",
    //       image: "",
    //       description: "random data",
    //       time: "30min",
    //     },
    //   ],
    // ];
  }, []);

  const dayClicked = (index: number) => {
    setDayData(() => [...plannerData[index]]);
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
              onClick={() => dayClicked(index)}
            >{`Day ${index + 1}`}</Button>
          );
        })}
      </div>
      <div className="flex m-6">
        {dayData?.[0]?.["location"] && (
          <PlacesList className="w-1/2" placesArray={dayData} />
        )}
        {dayData?.[0]?.["location"] && (
          <Map className="w-1/2" placesArray={dayData} />
        )}
      </div>
    </>
  );
};

export default DayPlanner;
