import { useEffect, useMemo, useRef, useState } from "react";
import Map from "../Map/Map";
import Button from "../Utility/Button";
import PlacesList from "../PlacesInformation/PlacesList";

const DayPlanner = ({ locationId }: any) => {
  const [plannerData, setPlannerData] = useState([]);
  const [dayData, setDayData] = useState([]);
  const daysRef = useRef(0);
  const [hoverIndex, setHoverIndex] = useState(0);
  const setInfoWIndowIndex = (index: number) => {
    setHoverIndex(index);
  };
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
                lat: 40.7616,
                lng: -73.9776,
              },
              icon: null,
              name: "start",
              description: " ",
              time: "30 mins",
            },
            {
              twitter: "https://twitter.com/empirestatebldg",
              facebook: "https://www.facebook.com/empirestatebuilding",
              instagram: "https://www.instagram.com/empirestatebldg/",
              quora: "https://www.quora.com/topicEmpire-State-Building",
              tripadvisor: "https://www.tripadvisor.com/104365",
              location: {
                lat: 40.748333333333,
                lng: -73.985277777778,
              },
              icon: "https://upload.wikimedia.org/wikipedia/commons/1/10/Empire_State_Building_%28aerial_view%29.jpg",
              name: "Empire State Building",
              description: " ",
              time: "30 mins",
            },
            {
              twitter: "https://twitter.com/CentralParkNYC",
              facebook: "https://www.facebook.com/centralparknyc",
              instagram: null,
              quora: null,
              tripadvisor: "https://www.tripadvisor.com/105127",
              location: {
                lat: 40.7825,
                lng: -73.966111111111,
              },
              icon: "https://upload.wikimedia.org/wikipedia/commons/0/05/Southwest_corner_of_Central_Park%2C_looking_east%2C_NYC.jpg",
              name: "Central Park",
              description: " ",
              time: "30 mins",
            },
            {
              twitter: "https://twitter.com/metmuseum",
              facebook: "https://www.facebook.com/metmuseum",
              instagram: "https://www.instagram.com/metmuseum/",
              quora:
                "https://www.quora.com/topicMetropolitan-Museum-of-Art-New-York",
              tripadvisor: "https://www.tripadvisor.com/105125",
              location: {
                lat: 40.779444444444444,
                lng: -73.96333333333334,
              },
              icon: "https://upload.wikimedia.org/wikipedia/commons/3/30/Metropolitan_Museum_of_Art_%28The_Met%29_-_Central_Park%2C_NYC.jpg",
              name: "Metropolitan Museum of Art",
              description: " ",
              time: "30 mins",
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
        {dayData?.[0]?.["location"] && (
          <PlacesList
            setHoverIndex={setInfoWIndowIndex}
            placesArray={dayData}
          />
        )}
        {dayData?.[0]?.["location"] && (
          <Map
            hoverIndex={hoverIndex}
            className="w-1/2"
            placesArray={dayData}
          />
        )}
      </div>
    </>
  );
};

export default DayPlanner;
