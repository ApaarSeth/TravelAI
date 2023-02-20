import Image from "next/image";
import Button from "../Utility/Button";

const PlacesInfo = ({ placeInfo }: any) => {
  return (
    <div className="mr-5 mb-4">
      <h4 className="underline underline-offset-1">{placeInfo?.name}</h4>
      <div className="flex mr-2">
        <div
          className="mr-2 w-1/4"
          style={{ position: "relative", paddingBottom: "20%" }}
        >
          <Image
            src="/image.png"
            alt="Picture of the author"
            layout="fill"
            objectFit="cover"
          />
        </div>

        <div className="w-3/4">
          <p>{placeInfo.description}</p>
          <p className="text-sm text-cyan-400">{placeInfo?.time}</p>
          <div className="flex justify-end">
            <Button onClick={undefined}> Book Now</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlacesInfo;
