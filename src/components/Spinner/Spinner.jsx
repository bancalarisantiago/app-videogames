//Libraries
import React from "react";

//Styles
import styles from "./Spinner.module.css";

const Spinner = () => {
  return (
    <div className={styles.container}>
      <div className={styles.loader} id="loader">
        Loading...
      </div>
    </div>
  );
};

export default Spinner;
