import DayPlanner from "@/components/DayPlanner/DayPlanner";
import { useRouter } from "next/router";
import { GetServerSideProps } from "next";
import Link from "next/link";
import { useState } from "react";

const Tab = ({ isSelected, title, onClick, className }) => (
  <span
    onClick={onClick}
    className={
      className +
      `${
        isSelected ? " border-b-4 border-blue-900 text-blue-400" : "text-sla"
      } m-4 px-2`
    }
  >
    {title}
  </span>
);

export default function Planner({ product }) {
  const { query } = useRouter();
  const [selectedTab, setTab] = useState("Route");
  const tabs = ["Route", "Day by day", "Checklist", "Experiences"];
  const { id } = query;
  let component = null;
  switch (selectedTab) {
    case "Route":
      component = (
        <h1 className="text-center text-lg font-bold">Chutiya banaya tumko</h1>
      );
      break;
    case "Day by day":
      component = <DayPlanner locationId={product}></DayPlanner>;
      break;
    case "Checklist":
      component = (
        <h1 className="text-center text-lg font-bold">Chutiya banaya tumko</h1>
      );

      break;
    case "Experiences":
      component = (
        <h1 className="text-center text-lg font-bold">Chutiya banaya tumko</h1>
      );

      break;

    default:
      break;
  }
  return (
    <>
      <h2 className="text-center text-blue-900 font-bold  text-5xl mt-16 mb-16">
        YOUR ITINERARY IS READY
      </h2>
      <nav className="flex justify-center">
        {tabs.map((tab) => {
          return (
            <Tab
              className="cursor-pointer"
              title={tab}
              isSelected={selectedTab === tab}
              onClick={() => {
                setTab(tab);
              }}
            />
          );
        })}
      </nav>

      <section>{component}</section>
    </>
  );
}

export function getServerSideProps({ params }) {
  return {
    props: {
      product: params.id,
    },
  };
}
