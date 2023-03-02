import React from "react";

export default function Button({
  type = "submit",
  className = "",
  processing = false,
  children,
  onClick,
  active = true,
  // ref,
}) {
  const button = active
    ? "text-white bg-blue-900 border border-transparent "
    : "bg-white text-blue-900 border border-1 border-blue-900 ";
  return (
    <button
      type={type}
      onClick={onClick}
      className={
        button +
        className +
        ` inline-flex items-center px-4 py-2  font-semibold text-xs tracking-widest active:bg-blue-800 transition ease-in-out duration-150 ${
          processing && "opacity-25"
        }`
      }
      disabled={processing}
    >
      {children}
    </button>
  );
}
