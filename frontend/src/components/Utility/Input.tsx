import { useRef } from "react";

const Input = (props: any) => {
  const {
    id,
    wrapperClassName = "",
    placeholder = "",
    label = "",
    type = "text",
    error = false,
    errorText = "",
    required = false,
    noLabel = false,
    ...rest
  } = props;

  const inputRef = useRef() as any;

  return (
    <div className={wrapperClassName}>
      <div
        className={`transition duration-150 ease-in-out ${
          error
            ? "focus-within:border-red border-red"
            : "focus-within:border-primary border-gray-gray4"
        }`}
        onClick={() => inputRef?.current!.focus()}
      >
        {!noLabel && (
          <label
            htmlFor={id}
            className="text-xs font-normal placeholder-gray-gray4 px-1 pt-1.5"
          >
            {label} {required && <span className="text-red">*</span>}
          </label>
        )}
        <input
          ref={inputRef}
          type={type}
          className={`${
              !["checkbox", "radio"].includes(type)
              ? "px-1 py-1 placeholder-slate-300 text-slate-600 relative bg-white rounded text-sm border border-slate-300 outline-none focus:outline-none focus:ring w-full"
              : ""
          }`}
          id={id}
          placeholder={placeholder}
          {...rest}
        />
      </div>
      {errorText && <p className="text-xs pl-2  text-red mb-4">{errorText}</p>}
    </div>
  );
};

export default Input;
