import DayPlanner from "@/components/DayPlanner/DayPlanner";
import { useRouter } from "next/router";
import { GetServerSideProps } from "next";

export default function Planner({ product }) {
  const router = useRouter();
  const { id } = router.query;

  return (
    <>
      <DayPlanner locationId={product}></DayPlanner>
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
