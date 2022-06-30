// Styles
import styles from "../styles/headline.module.scss";

export const Headline = ({ children, type, center = false }) => {
  const headSwitch = (type) => {
    switch (type) {
      case "h1":
        return (
          <h1
            className={`${styles.headlineContainer} ${styles.h1} ${
              center && styles.center
            }`}
          >
            {children}
          </h1>
        );
      case "h2":
        return (
          <h2
            className={`${styles.headlineContainer} ${styles.h2} ${
              center && styles.center
            }`}
          >
            {children}
          </h2>
        );
      default:
        return (
          <h2
            className={`${styles.headlineContainer} ${styles.h2} ${
              center && styles.center
            }`}
          >
            {children}
          </h2>
        );
    }
  };
  return <>{headSwitch(type)}</>;
};
