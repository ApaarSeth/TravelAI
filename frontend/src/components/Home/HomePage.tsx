import {
  Autocomplete,
  StandaloneSearchBox,
  useJsApiLoader,
} from "@react-google-maps/api";
import {
  use,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { BiMap } from "react-icons/Bi";
import { useRouter } from "next/router";
import styles from "./HomePage.module.css";
import Button from "../Utility/Button";
import axiosInstance from "../Utility/axiosinstance";
import { Debounce } from "../Utility/debounce";
import LoaderContext from "@/context/AppContext";
import useFormHook from "@/customHooks/useFormHook";
import { ModalContext } from "@/context/ModalContext";
import Modal from "@/Modals/Modal";
import { ErrorModal } from "@/Modals/ErrorModal";
import DateRangeComp from "../Utility/DateRange";
const containerStyle = {
  width: "400px",
  height: "400px",
};

const placeValidator = (startValue: any, endValue: any) => {
  if (startValue === endValue) {
    return "Start and End Destination can'nt be same";
  }

  return null;
};

const HomePage = () => {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: `${process.env.NEXT_PUBLIC_GOOGLE_MAPS_KEY}`,
    libraries: ["places"],
  });
  const { state, dispatch } = useContext(ModalContext);
  const startDestinationRef = useRef<HTMLInputElement>(null);
  const endDestinationRef = useRef<HTMLInputElement>(null);
  const daysRef = useRef<HTMLInputElement>(null);
  const [autocompleteStart, setAutocompleteStart] = useState<any>();
  const [autocompleteEnd, setAutocompleteEnd] = useState<any>();
  const {
    err: startPlaceerror,
    value: startPlaceValue,
    touched: startPlaceTouched,
    valueChangeHandler: startValueChangeHandler,
  } = useFormHook("Start Place");
  const {
    err: endPlaceError,
    value: endPlaceValue,
    touched: endPlaceTouched,
    valueChangeHandler: endValueChangeHandler,
  } = useFormHook("End Place");
  const {
    err: endDateError,
    value: endDateValue,
    valueChangeHandler: endDateChangeHandler,
  } = useFormHook("End Date", { required: true });
  const {
    err: startDateError,
    value: startDateValue,
    valueChangeHandler: startDateChangeHandler,
  } = useFormHook("Start Date", { required: true });
  const router = useRouter();
  const { loading, error } = useContext(LoaderContext);
  const [range, setRange] = useState([]);
  // useEffect(() => {
  //   dispatch({
  //     type: "open",
  //     payload: null,
  //   });
  // }, []);

  const chooseRange = (range: any) => {
    setRange(range);
  };
  const onLoadStart = (autocomp: any) => {
    setAutocompleteStart(autocomp);
  };

  const onLoadEnd = (autocomp: any) => {
    setAutocompleteEnd(autocomp);
  };

  const getRoute = async (e: any) => {
    e.preventDefault();
    const data = {
      lat: autocompleteStart.getPlace().geometry.location.lat(),
      lng: autocompleteEnd.getPlace().geometry.location.lng(),
      days: range,
    };
    console.log(data);

    // try {
    //   const data = await axiosInstance({
    //     // Endpoint to send files
    //     url: `${process.env.NEXT_PUBLIC_NG_ROK}/plan-trip`,
    //     method: "POST",
    //     // Attaching the form data
    //     data: {
    //       city: autocompleteStart.getPlace().name,
    //       days: daysRef.current!.value,
    //     },
    //   });
    //   router.push(`/planner/${data.data.id}`);
    //   router.push(`/planner/random`);
    // } catch (err) {
    //   if (error) {
    //     alert("Hey");
    //   }
    // }
  };

  // if (true) {
  //   dispatch({
  //     type: "open",
  //     payload: null,
  //   });
  // }

  return (
    <div className="-mt-4">
      {error && <h1>Loading...</h1>}
      {!isLoaded ? (
        <h1>Loading...</h1>
      ) : (
        <>
          <div>
            <form
              onSubmit={getRoute}
              className="flex justify-center flex-wrap mx-2 items-center drop-shadow-lg rounded-xl  md:bg-white md:p-2"
            >
              <div className="w-full md:max-w-[25%]  rounded-t-sm md:mr-2 md:mb-0 border-y-white bg-white mb-2">
                <Autocomplete
                  onLoad={(autocomplete) => onLoadStart(autocomplete)}
                  onPlaceChanged={() =>
                    startValueChangeHandler(
                      autocompleteStart.getPlace().name
                      // ,
                      // () =>
                      //   placeValidator(
                      //     autocompleteStart.getPlace().name,
                      //     autocompleteEnd?.getPlace()?.name
                      //   )
                    )
                  }
                >
                  <div className="flex">
                    <span>
                      <BiMap className="inline mr-2" />
                    </span>
                    <input
                      className="focus:outline-none  w-full  placeholder-gray-700"
                      type="text"
                      required
                      value={autocompleteStart?.getPlace()?.name}
                      ref={startDestinationRef}
                      placeholder="Coming From?"
                      id="destination"
                    />
                  </div>
                </Autocomplete>
              </div>
              <div className="w-full md:max-w-[25%] md:mb-0 md:mr-2 bg-white mb-2 border border-y-white md:border-l-black md:border-r-transparent">
                <Autocomplete
                  onLoad={(autocomplete) => onLoadEnd(autocomplete)}
                  onPlaceChanged={
                    () => endValueChangeHandler(autocompleteEnd.getPlace().name)
                    // , () =>
                    //   placeValidator(
                    //     autocompleteStart?.getPlace()?.name,
                    //     autocompleteEnd?.getPlace()?.name
                    //   )
                    // )
                  }
                >
                  <div>
                    <div className="flex md:pl-1 ">
                      <span>
                        <BiMap className="inline mr-2" />
                      </span>
                      <input
                        className="focus:outline-none  w-full  placeholder-gray-700"
                        type="text"
                        required
                        ref={endDestinationRef}
                        placeholder="Where To ?"
                        id="destination"
                      />
                    </div>
                    <div>
                      {!!startPlaceValue.length &&
                        !!endPlaceValue.length &&
                        startPlaceValue === endPlaceValue && (
                          <p className="ml-2 mr-2 text-xs color text-red-600">
                            Start and End places should be different
                          </p>
                        )}
                    </div>
                  </div>
                </Autocomplete>
              </div>
              <div className="flex w-full md:w-[30%] items-center mb-2 border border-y-white md:border-x-black md:mb-0 md:mr-2  self-stretch ">
                <DateRangeComp
                  chooseRange={chooseRange}
                  required={true}
                ></DateRangeComp>
                {/* <div className=" bg-white w-full md:w-[50%] mr-2 md:mr-0  md:pr-1">
                  <label htmlFor="startDate" className="text-sm gray-700 pl-1">
                    Start Date
                  </label>
                  <input
                    id="startDate"
                    type="date"
                    placeholder="Start Days"
                    ref={daysRef}
                    min={new Date().toLocaleString().split(",")[0]}
                    onBlur={startDateChangeHandler}
                    className="focus:outline-none  pl-1 mr-1 w-full"
                  />
                  <div>
                    {startDateError && (
                      <p className="text-xs color text-red-600 pl-1">
                        {startDateError}
                      </p>
                    )}
                  </div>
                </div>
                <div className="bg-white  w-full md:max-w-[50%]  border  border-y-white md:border-l-black">
                  <label htmlFor="endDate" className="text-sm gray-700 pl-2">
                    End Date
                  </label>
                  <input
                    type="date"
                    id="endDate"
                    placeholder="EndDays"
                    ref={daysRef}
                    onBlur={(event) => endDateChangeHandler(event.target.value)}
                    className="focus:outline-none pl-1 w-full"
                  />
                  <div>
                    {endDateError && (
                      <p className="text-xs color text-red-600  pl-2">
                        {endDateError}
                      </p>
                    )}
                  </div>
                </div> */}
              </div>
              <div className="w-full md:max-w-[15%]">
                <Button
                  processing={
                    !(
                      startPlaceTouched &&
                      !!startPlaceerror &&
                      endPlaceTouched &&
                      !!endPlaceError &&
                      !!range.length
                    )
                  }
                  className="text-white rounded bg-indigo-500 py-2 px-5 block w-full md:w-3/4 md:m-auto"
                  onClick={getRoute}
                >
                  Search
                </Button>
              </div>
            </form>
          </div>
        </>
      )}
      <Modal title="Join the Waitlist" custom={true}>
        <ErrorModal></ErrorModal>
      </Modal>
    </div>
  );
};

export default HomePage;
