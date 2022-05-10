import { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

import styles from "../styles/ServiceGallery.module.css";

const ServiceGallery = () => {
  const [hoverState, setHoverState] = useState(0);
  const [linkActive, setLinkActive] = useState(1);

  const { ref, inView } = useInView({
    threshold: 0.5,
  });

  const data = [
    {
      id: 1,
      title: "CMD",
      text: "Die Abkürzung CMD steht für Craniomandibuläre Dysfunktion und ist ein Überbegriff für Fehlregulationen und/ oder Schmerzen der Muskel- und/oder Gelenkfunktion der Kiefergelenke.",
      img: "1",
    },
    {
      id: 2,
      title: "Manuelle Therapie",
      text: "Das Maitland-Konzept beschäftigt sich mit der Befunderhebung und Behandlung von Funktionsstörungen im Gelenk-, Muskel- und Nervensystem mit speziellen Manual- und Mobilisationstechniken, neurodynamische Techniken, Muskeldehnungen, stabilisierende Übungen und Heimprogramme. Durch diese Techniken können Schmerzen gelindert und Bewegungseinschränkungen behoben werden.",
      img: "2",
    },
    {
      id: 3,
      title: "Massage",
      text: "Die Massagetherapie ist eine der bekanntesten und ältesten Heilmethoden und entstand aus einer griechisch-römischen Tradition. Sie wird bis heute in vielen verschieden Bereichen eingesetzt.",
      img: "3",
    },
    {
      id: 4,
      title: "Akupunktur",
      text: "Akupunktur ist eine jahrtausendealte Behandlungsmethode aus China, entstammt der traditionellen chinesischen Medizin (TCM), bei der eine therapeutische Wirkung durch Nadelstiche an bestimmten Punkten des Körpers erzielt wird.",
      img: "4",
    },
  ];

  let linkData = data.find((el) => el.id === linkActive);

  const animation = {
    lineHover: {
      width: 25,
      transition: { bounce: 0, ease: "easeOut", duration: 0.3 },
    },
    lineOff: {
      width: 0,
      transition: { bounce: 0, ease: "easeOut", duration: 0.3 },
    },
    linkActive: {
      color: "#cbbb9f",
    },
    linkOff: {
      color: "#dfd6c5",
    },
    image: {
      y: "0%",
      transition: {
        ease: [0.7, 0.135, 0.235, 0.99],
        duration: 1.8,
      },
    },
    contentBox: {
      y: "0%",
      opacity: 1,
      transition: {
        delay: 0.5,
        ease: [0.7, 0.135, 0.235, 0.99],
        duration: 1,
      },
    },
  };

  const imgCtrl = useAnimation();
  const boxCtrl = useAnimation();

  useEffect(() => {
    if (inView) {
      imgCtrl.start("image");
      boxCtrl.start("contentBox");
    }
  }, [inView, imgCtrl, boxCtrl]);

  return (
    <div className={styles.container}>
      <div className={styles.galleryContainer}>
        <ul className={styles.serviceGalleryList}>
          {data.map((item) => (
            <motion.li
              key={item.id}
              className={styles.serviceGalleryItem}
              onMouseEnter={() => setHoverState(item.id)}
              onMouseLeave={() => setHoverState(0)}
              onClick={() => setLinkActive(item.id)}
              variants={animation}
              animate={item.id === linkActive ? "linkActive" : "linkOff"}
            >
              <motion.div
                style={{
                  background: linkActive === item.id ? "#cbbb9f" : "#dfd6c5",
                }}
                animate={
                  hoverState === item.id || linkActive === item.id
                    ? "lineHover"
                    : "lineOff"
                }
                variants={animation}
                className={styles.line}
              ></motion.div>
              {item.title}
            </motion.li>
          ))}
        </ul>
        <div ref={ref} className={styles.contentContainer}>
          <div className={styles.contentImage}>
            <motion.div
              initial={{ y: "100%" }}
              variants={animation}
              animate={imgCtrl}
              className={styles.image}
            >
              {linkData.img}
            </motion.div>
          </div>
          <motion.div
            initial={{ y: "100%", opacity: 0 }}
            variants={animation}
            animate={boxCtrl}
            className={styles.textBox}
          >
            <h2 className={styles.textBoxHeadline}>{linkData.title}</h2>
            <p className={styles.text}>{linkData.text}</p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ServiceGallery;
