import PlacesInfo from "./PlacesInfo";
import styles from "./PlacesList.module.css";

const PlacesList = ({ setHoverIndex, placesArray, className }: any) => {
  return (
    <div className="w-1/2 relative">
      {placesArray.map((placesInfo: any, index: any) => {
        return (
          <div
            className={`${
              index === 0
                ? styles.firstBorderCorner
                : index !== placesArray.length - 1
                ? styles.borderCorner
                : styles.borderCorner +
                  " border-none " +
                  styles.lastBorderCorner
            }  relative`}
            onMouseOver={() => setHoverIndex(index)}
            onMouseLeave={() => setHoverIndex(null)}
            key={placesInfo.name + "index" + Math.random() * 100}
          >
            <div
              key={placesInfo.name + "index" + Math.random() * 100}
              className={`mr-5 pb-3 pl-4  ${
                index !== placesArray.length - 1
                  ? `${styles["vertical-border"]}`
                  : `border-none z-10 relative`
              }
              `}
            >
              <div
                key={placesInfo.name + "index" + Math.random() * 100}
                className={styles.placesCorner + " absolute"}
              ></div>
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
