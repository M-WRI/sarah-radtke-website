// styles
import styles from "../styles/SymptomBox.module.css";

const SymptomBox = ({ text, headline, list }) => {
  return (
    <section className={styles.sectionThreeContainer}>
      <div className={styles.contentContainer}>
        {headline && <h2 className={styles.sectionHeadline}>{headline}</h2>}
        {text && <p className={styles.sectionText}>{text}</p>}
        <div className={styles.listContainer}>
          {list.map((item) => (
            <span className={styles.listItem} key={item.id}>
              • {item.title}{" "}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SymptomBox;
