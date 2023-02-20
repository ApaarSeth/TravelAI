import PlacesInfo from "./placesInfo";

const PlacesList = ({ placesArray, className }: any) => {
  return (
    <>
      <div className={`${className}`}>
        {placesArray.map((placesInfo: any, index: any) => {
          return <PlacesInfo key={index} placeInfo={placesInfo}></PlacesInfo>;
        })}
      </div>
    </>
  );
};

export default PlacesList;
