import { useEffect, useMemo, useRef, useState } from "react";
import Map from "../Map/Map";
import Button from "../Utility/Button";
import axios from "axios";
import PlacesList from "../PlacesInformation/PlacesList";

const DayPlanner = ({ locationId }: any) => {
  const [plannerData, setPlannerData] = useState([]);
  const [dayData, setDayData] = useState([]);
  const daysRef = useRef(0);
  useEffect(() => {
    (async () => {
      try {
        // const data = await axios({
        //   // Endpoint to send files
        //   url: `${process.env.NEXT_PUBLIC_NG_ROK}/get-plan?id=${locationId}`,
        //   method: "POST",
        //   // Attaching the form data
        //   data: {
        //     id: locationId,
        //   },
        // });
        const data = [
          [
            {
              location: {
                address:
                  "1600 Amphitheatre Parkway, Mountain View, california.",
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
                address:
                  "1600 Amphitheatre Parkway, Mountain View, california.",
                lat: 26.839658,
                lng: 80.942838,
                icon: "https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png",
              },
              name: "museum",
              image: "",
              description: "random data",
              time: "30min",
            },
            {
              location: {
                address:
                  "1600 Amphitheatre Parkway, Mountain View, california.",
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
                address:
                  "1600 Amphitheatre Parkway, Mountain View, california.",
                lat: 26.839658,
                lng: 80.942838,
                icon: "https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png",
              },
              name: "museum",
              image: "",
              description: "random data",
              time: "30min",
            },
            {
              location: {
                address:
                  "1600 Amphitheatre Parkway, Mountain View, california.",
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
                address:
                  "1600 Amphitheatre Parkway, Mountain View, california.",
                lat: 26.839658,
                lng: 80.942838,
                icon: "https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png",
              },
              name: "museum",
              image: "",
              description: "random data",
              time: "30min",
            },
            {
              location: {
                address:
                  "1600 Amphitheatre Parkway, Mountain View, california.",
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
                address:
                  "1600 Amphitheatre Parkway, Mountain View, california.",
                lat: 26.839658,
                lng: 80.942838,
                icon: "https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png",
              },
              name: "museum",
              image: "",
              description: "random data",
              time: "30min",
            },
            {
              location: {
                address:
                  "1600 Amphitheatre Parkway, Mountain View, california.",
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
                address:
                  "1600 Amphitheatre Parkway, Mountain View, california.",
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
                address:
                  "1600 Amphitheatre Parkway, Mountain View, california.",
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
                address:
                  "1600 Amphitheatre Parkway, Mountain View, california.",
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
                address:
                  "1600 Amphitheatre Parkway, Mountain View, california.",
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
                address:
                  "1600 Amphitheatre Parkway, Mountain View, california.",
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
        setPlannerData(() => data as any);
      } catch (error) {}
      return () => {
        dayClicked(0);
      };
    })();
  }, []);

  useEffect(() => {
    dayClicked(0);
  }, [plannerData]);

  const dayClicked = (index: number) => {
    daysRef.current = index + 1;
    if (plannerData?.length) {
      setDayData(() => [...plannerData[index]]);
    }
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
              active={daysRef.current === index + 1}
              className={"mr-3"}
              key={index}
              onClick={() => dayClicked(index)}
            >{`Day ${index + 1}`}</Button>
          );
        })}
      </div>

      {daysRef?.current && (
        <h2 className="text-center text-blue-900 font-bold font-size text-5xl mt-16 mb-24">{`DAY ${daysRef.current}`}</h2>
      )}
      <div className="flex m-6">
        {dayData?.[0]?.["location"] && <PlacesList placesArray={dayData} />}
        {dayData?.[0]?.["location"] && (
          <Map className="w-1/2" placesArray={dayData} />
        )}
      </div>
    </>
  );
};

export default DayPlanner;
