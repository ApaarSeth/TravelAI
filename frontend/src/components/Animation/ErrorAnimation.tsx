import styles from "./ErrorAnimation.module.css";

export const ErrorAnimation = () => {
  //   const { effectiveConnectionType } = useNetworkStatus();
  let lowEnd = false;
  const effectiveConnectionType = "4g";
  //   switch ("effectiveConnectionType") {
  //     case "2g":
  //     case "3g":
  //       lowEnd = true;
  //       break;
  //     case "4g":
  //     default:
  //       lowEnd = false;
  //       break;
  //   }

  return (
    <>
      {lowEnd && <p>Happy Waiting...</p>}
      {!lowEnd && (
        <div
          aria-label="Orange and tan hamster running in a metal wheel"
          role="img"
          className={styles["wheel-and-hamster"]}
        >
          <div className={styles["wheel"]}></div>
          <div className={styles["hamster"]}>
            <div className={styles["hamster__body"]}>
              <div className={styles["hamster__head"]}>
                <div className={styles["hamster__ear"]}></div>
                <div className={styles["hamster__eye"]}></div>
                <div className={styles["hamster__nose"]}></div>
              </div>
              <div
                className={`${styles["hamster__limb"]} ${styles["hamster__limb--fr"]}`}
              ></div>
              <div
                className={`${styles["hamster__limb"]} ${styles["hamster__limb--fl"]}`}
              ></div>
              <div
                className={`${styles["hamster__limb"]} ${styles["hamster__limb--br"]}`}
              ></div>
              <div
                className={`${styles["hamster__limb"]} ${styles["hamster__limb--bl"]}`}
              ></div>
              <div className={`${styles["hamster__tail"]}`}></div>
            </div>
          </div>
          <div className={styles["spoke"]}></div>
        </div>
      )}
    </>
  );
};
