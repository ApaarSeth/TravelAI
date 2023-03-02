import PlacesInfo from "./PlacesInfo";
import styles from "./PlacesList.module.css";

const PlacesList = ({ placesArray, className }: any) => {
  return (
    <div className="w-1/2 relative">
      {placesArray.map((placesInfo: any, index: any) => {
        return (
          <div key={placesInfo.name + "index" + Math.random() * 100}>
            <div
              key={placesInfo.name + "index" + Math.random() * 100}
              className={styles.placesCorner + " absolute"}
            ></div>
            <div
              key={placesInfo.name + "index" + Math.random() * 100}
              className={`mr-5 pb-6 pl-4  ${
                index !== placesArray.length - 1
                  ? `border-l-2 border-dashed ${styles["vertical-border"]}`
                  : "border-none"
              }
              ${index === 0 ? "overflow-hidden" : ""}
              `}
            >
              <PlacesInfo
                key={placesInfo.name + "index" + Math.random() * 100}
                placeInfo={placesInfo}
              ></PlacesInfo>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default PlacesList;
