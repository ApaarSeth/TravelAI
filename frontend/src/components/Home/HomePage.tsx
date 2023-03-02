import { useJsApiLoader, Autocomplete } from "@react-google-maps/api";
import { useMemo, useRef } from "react";
import { BiMap } from "react-icons/Bi";
import axios from "axios";
import Router, { useRouter } from "next/router";

const containerStyle = {
  width: "400px",
  height: "400px",
};

const HomePage = () => {
  const router = useRouter();
  const destinationRef = useRef<HTMLInputElement>(null);
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
      const data = await axios({
        // Endpoint to send files
        url: `${process.env.NEXT_PUBLIC_NG_ROK}/plan-trip`,
        method: "POST",
        // Attaching the form data
        data: {
          city: autocomplete.getPlace().name,
          days: daysRef.current!.value,
        },
      });
      router.push(`/planner/${data.data.id}`);
    } catch (error) {}
  };

  return (
    <div className="-mt-4">
      {!isLoaded ? (
        <h1>Loading...</h1>
      ) : (
        <>
          <div className="flex justify-center">
            <div className="flex items-center drop-shadow-lg bg-white p-2">
              <Autocomplete
                onLoad={(autocomplete) => onLoad(autocomplete)}
                onPlaceChanged={() => onPlaceChanged()}
              >
                <>
                  <BiMap className="inline mr-2" />
                  <input
                    ref={destinationRef}
                    className="focus:outline-none  placeholder-gray-700"
                    type="text"
                    placeholder="City or Destination"
                    id="destination"
                  />
                </>
              </Autocomplete>
              <input
                type="text"
                placeholder="Days"
                ref={daysRef}
                className="focus:outline-none placeholder-gray-700 pl-2 border border-y-white border-x-black"
              />
              <button
                className="text-white bg-indigo-900 py-2 px-5"
                onClick={getRoute}
              >
                Search
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default HomePage;
