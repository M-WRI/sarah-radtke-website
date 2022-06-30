import styles from "../styles/Overview.module.scss";

const Overview = ({ offer, site }) => {
  const filteredOffer = offer.filter((item) => item.title !== site);
  return (
    <div className={styles.sectionTwo}>
      <h2 className={styles.headline}>Das Angebot im Überblick</h2>
      <div className={site === "index" ? styles.galleryIndex : styles.gallery}>
        {site !== "index"
          ? filteredOffer.map((el) => (
              <div key={el.id} className={styles.imageWrapper}>
                <h3 className={styles.imgTitle}>{el.title}</h3>
              </div>
            ))
          : offer.map((el) => (
              <div key={el.id} className={styles.imageWrapper}>
                <h3 className={styles.imgTitle}>{el.title}</h3>
              </div>
            ))}
      </div>
    </div>
  );
};

export default Overview;
