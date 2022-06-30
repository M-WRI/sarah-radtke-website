// Data
import data from "../data/footer.data.json";
// Components
import { Text } from "./text.component";
import { Headline } from "./headline.component";
// Styles
import styles from "../styles/footer.module.scss";

export const Footer = () => {
  return (
    <footer className={styles.container}>
      <div className={styles.contentWrapper}>
        <div className={styles.addressInfoContainer}>
          <Headline className={styles.headline} center>
            Sarah Radtke
          </Headline>
          <Text center>{data.address.info}</Text>
          <address className={styles.address}>{data.address.address}</address>
        </div>
        <div>
          <Text center>{data.schedule}</Text>
        </div>
        <div className={styles.contactContainer}>
          <Text center>{data.contact}</Text>
        </div>
      </div>
    </footer>
  );
};
