import styles from "../styles/text.module.scss";

export const Text = ({ children, center = false }) => {
  const textFormater = children.split(" // ");
  return (
    <>
      {textFormater.map((text, i) => (
        <p
          key={i}
          className={`${styles.textContainer} ${center && styles.center}`}
        >
          {text}
        </p>
      ))}
    </>
  );
};
