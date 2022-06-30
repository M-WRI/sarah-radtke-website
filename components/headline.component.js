// Styles
import styles from "../styles/headline.module.scss";

export const Headline = ({
  children,
  type,
  center = false,
  mb = false,
  underline = false,
  secondary = false,
}) => {
  const headSwitch = (type) => {
    switch (type) {
      case "h1":
        return (
          <div className={underline && styles.headWrapper}>
            {underline && <div className={styles.line} />}
            <h1
              className={`
              ${styles.headlineContainer} 
              ${styles.h1} 
              ${center && styles.center} 
              ${mb && styles.mb} 
              ${secondary ? styles.secondary : styles.primary}
              `}
            >
              {children}
            </h1>
          </div>
        );
      case "h2":
        return (
          <div className={underline && styles.headWrapper}>
            {underline && <div className={styles.line} />}
            <h2
              className={`
              ${styles.headlineContainer} 
              ${styles.h2} 
              ${center && styles.center} 
              ${mb && styles.mb} 
              ${secondary ? styles.secondary : styles.primary}
              `}
            >
              {children}
            </h2>
          </div>
        );
      default:
        return (
          <div className={underline && styles.headWrapper}>
            {underline && <div className={styles.line} />}
            <h2
              className={`
              ${styles.headlineContainer} 
              ${styles.h2} 
              ${center && styles.center} 
              ${mb && styles.mb} 
              ${secondary ? styles.secondary : styles.primary}
              `}
            >
              {children}
            </h2>
          </div>
        );
    }
  };
  return <>{headSwitch(type)}</>;
};
