import PlacesInfo from "./PlacesInfo";
import styles from "./PlacesList.module.css";

const PlacesList = ({ placesArray, className }: any) => {
  return (
    <div className="w-1/2 relative">
      {placesArray.map((placesInfo: any, index: any) => {
        return (
          <>
            <div className={styles.placesCorner + " absolute"}></div>
            <div
              className={`mr-5 pb-6 pl-4  ${
                index !== placesArray.length - 1
                  ? `border-l-2 border-dashed ${styles["vertical-border"]}`
                  : "border-none"
              }
              ${index === 0 ? "overflow-hidden" : ""}
              `}
            >
              <PlacesInfo key={index} placeInfo={placesInfo}></PlacesInfo>
            </div>
          </>
        );
      })}
    </div>
  );
};

export default PlacesList;
