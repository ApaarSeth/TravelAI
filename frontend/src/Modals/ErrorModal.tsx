import { ErrorAnimation } from "@/components/Animation/ErrorAnimation";
import Button from "@/components/Utility/Button";
import { ModalContext } from "@/context/ModalContext";
import useFormHook from "@/customHooks/useFormHook";
import { useContext } from "react";

export const ErrorModal = () => {
  const { state, dispatch } = useContext(ModalContext);
  const {
    err: emailerror,
    value: emailValue,
    valueChangeHandler: emailHandler,
  } = useFormHook("email", {
    pattern: "[^@s]+@[^@s]+.[^@s]+",
    patternErrorMessage: "Enter a valid email",
  });
  const handleEmail = (event: any) => {
    return emailHandler;
  };
  return (
    <>
      <button
        className="ml-auto bg-transparent border-0 text-black  float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
        onClick={() => dispatch({ type: "close", payload: null })}
      >
        <span className="bg-transparent text-black opacity-9 h-6 w-6 mt-2 mr-4 text-2xl block outline-none focus:outline-none">
          ×
        </span>
      </button>
      <div className="m-8 mt-4">
        <h1 className="flex justify-center text-3xl m-4 mt-0 font-bold text-blue-900">
          Join the waitlist
        </h1>

        <p className="m-4">
          We are at capacity right now but will be opening up soon
        </p>
        <p className="flex justify-center m-4">Join us, in this adventure</p>
        <div className="flex justify-center">
          <ErrorAnimation></ErrorAnimation>
        </div>

        <div className="border border-2 border-gray-400 mt-4 flex justify-between p-2">
          <div>
            <input
              className="focus:outline-none  placeholder-gray-700"
              type="email"
              required
              onChange={(event) => emailHandler(event.target.value)}
              //   ref={startDestinationRef}
              placeholder="Enter Email..."
              id="destination"
            />
            {emailerror && (
              <p className="text-xs color text-red-600">{emailerror}</p>
            )}
          </div>

          <Button className="p-2" onClick={handleEmail}>
            Notify Me
          </Button>
        </div>
      </div>
    </>
  );
};
