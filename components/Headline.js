import React from "react";

import styles from "../styles/Headline.module.css";

const Headline = ({ headline }) => {
  return <h2 className={styles.headline}>{headline}</h2>;
};

export default Headline;
