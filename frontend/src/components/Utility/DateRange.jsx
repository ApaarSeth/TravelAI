import { useEffect, useRef, useState } from "react";
import { DateRange } from "react-date-range";

import format from "date-fns/format";

import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";

const DateRangeComp = ({ chooseRange, required }) => {
  // date state
  const [range, setRange] = useState([]);
  // open close
  const [open, setOpen] = useState(false);
  const [error, setError] = useState(null);
  // get the target element to toggle
  const refOne = useRef(false);

  useEffect(() => {
    // event listeners
    document.addEventListener("keydown", hideOnEscape, true);
    document.addEventListener("click", hideOnClickOutside, true);
  }, []);

  // hide dropdown on ESC press
  const hideOnEscape = (e) => {
    // console.log(e.key)
    if (e.key === "Escape") {
      setOpen(false);
      setError(!!!range.length);
    }
  };

  // Hide on outside click
  const hideOnClickOutside = (e) => {
    // console.log(refOne.current)
    // console.log(e.target)
    if (refOne.current && !refOne.current.contains(e.target)) {
      setOpen(false);
    }
  };

  const handleDateClosed = () => {
    setOpen((open) => !open);
    if (!open) {
      setError(!!!range.length);
    }
  };

  return (
    <div className="calendarWrap w-full flex pl-2">
      <input
        // value={
        //   range.length
        //     ? `From : ${format(
        //         range[0].startDate,
        //         "MM/dd/yyyy"
        //       )}   To : ${format(range[0].endDate, "MM/dd/yyyy")}`
        //     : ""
        // }
        placeholder={
          range.length
            ? `From : ${format(
                range[0].startDate,
                "MM/dd/yyyy"
              )}   To : ${format(range[0].endDate, "MM/dd/yyyy")}`
            : "Till When?"
        }
        readOnly
        className="w-full focus: outline-none"
        onClick={() => handleDateClosed()}
      />
      {error && required && (
        <p className="text-xs color text-red-600">Date is required</p>
      )}
      <div ref={refOne} className="absolute top-8">
        {open && (
          <DateRange
            onChange={(item) => {
              chooseRange([item.selection]);
              setRange([item.selection]);
              setError(!!![item.selection].length);
            }}
            editableDateInputs={true}
            moveRangeOnFirstSelection={false}
            minDate={new Date()}
            ranges={
              range.length
                ? range
                : [
                    {
                      startDate: new Date(),
                      endDate: new Date(),
                      key: "selection",
                    },
                  ]
            }
            months={1}
            direction="horizontal"
            className="calendarElement"
          />
        )}
      </div>
    </div>
  );
};

export default DateRangeComp;
