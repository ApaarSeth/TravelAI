import { Autocomplete, useJsApiLoader } from "@react-google-maps/api";
import { useMemo, useRef } from "react";
import { BiMap } from "react-icons/Bi";
import { useRouter } from "next/router";
import styles from "./HomePage.module.css";
import Button from "../Utility/Button";

const containerStyle = {
  width: "400px",
  height: "400px",
};

const HomePage = () => {
  const router = useRouter();
  const originDestinationRef = useRef<HTMLInputElement>(null);
  const endDestinationRef = useRef<HTMLInputElement>(null);

  const daysRef = useRef<HTMLInputElement>(null);
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: `${process.env.NEXT_PUBLIC_GOOGLE_MAPS_KEY}`,
    libraries: ["places"],
  });
  let autocomplete: any = useMemo(() => null, []);

  const onLoad = (autocomp: any) => {
    autocomplete = autocomp;
    console.log("autocomplete: ", autocomplete);
  };

  const onPlaceChanged = () => {
    if (autocomplete !== null) {
      console.log(
        autocomplete.getPlace().geometry.location.lat(),
        autocomplete.getPlace().geometry.location.lng()
      );
    } else {
      console.log("Autocomplete is not loaded yet!");
    }
  };

  const getRoute = async (e: any) => {
    e.preventDefault();
    const data = {
      lat: autocomplete.getPlace().geometry.location.lat(),
      lng: autocomplete.getPlace().geometry.location.lng(),
      days: daysRef.current!.value,
    };

    try {
      // const data = await axios({
      //   // Endpoint to send files
      //   url: `${process.env.NEXT_PUBLIC_NG_ROK}/plan-trip`,
      //   method: "POST",
      //   // Attaching the form data
      //   data: {
      //     city: autocomplete.getPlace().name,
      //     days: daysRef.current!.value,
      //   },
      // });
      // router.push(`/planner/${data.data.id}`);
      router.push(`/planner/random`);
    } catch (error) {}
  };

  return (
    <div className="-mt-4">
      {!isLoaded ? (
        <h1>Loading...</h1>
      ) : (
        <>
          <div className="flex justify-center flex-wrap mx-2 flex-auto items-center drop-shadow-lg rounded-xl  md:bg-white md:p-2">
            <div className="w-full md:w-[23%] rounded-t-sm md:mr-2 md:mb-0 border-y-white bg-white mb-2">
              <Autocomplete
                onLoad={(autocomplete) => onLoad(autocomplete)}
                onPlaceChanged={() => onPlaceChanged()}
              >
                <div className="flex">
                  <span>
                    <BiMap className="inline mr-2" />
                  </span>
                  <input
                    ref={originDestinationRef}
                    className="focus:outline-none  placeholder-gray-700"
                    type="text"
                    placeholder="Start Destination"
                    id="destination"
                  />
                </div>
              </Autocomplete>
            </div>
            <div className="w-full md:w-[23%] md:mb-0 bg-white mb-2 border border-y-white md:border-l-black">
              <Autocomplete
                className=" "
                onLoad={(autocomplete) => onLoad(autocomplete)}
                onPlaceChanged={() => onPlaceChanged()}
              >
                <div className="flex md:pl-2">
                  <span>
                    <BiMap className="inline mr-2" />
                  </span>
                  <input
                    ref={endDestinationRef}
                    className="focus:outline-none  placeholder-gray-700"
                    type="text"
                    placeholder="End Destination"
                    id="destination"
                  />
                </div>
              </Autocomplete>
            </div>
            <div className="flex w-full mb-2 md:w-[32%] md:mb-0 md:mr-2">
              <input
                type="date"
                placeholder="StartDays"
                ref={daysRef}
                className="focus:outline-none w-full  placeholder-gray-700 pl-2 mr-2 border border-y-white md:border-x-black md:pr-2"
              />
              <input
                type="date"
                placeholder="EndDays"
                ref={daysRef}
                className="focus:outline-none w-full  placeholder-gray-700 pl-2 pr-2 border border-y-white md:border-r-black  md:border-l-white"
              />
            </div>
            <div className="w-full md:w-[13%]">
              <Button
                className="text-white rounded bg-indigo-500 py-2 px-5 block w-full md:w-3/4 md:m-auto"
                onClick={getRoute}
              >
                Search
              </Button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default HomePage;
