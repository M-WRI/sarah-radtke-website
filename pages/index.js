import Head from "next/head";
import Hero from "../components/Hero";
import PreeFooter from "../components/PreeFooter";
import ServiceGallery from "../components/ServiceGallery";
import styles from "../styles/Home.module.css";

export default function Home() {
  const data = {
    bulletPointOne: [
      { id: 1, title: "Schulterschmerzen" },
      { id: 2, title: "Ellenbogenschmerzen (Tennis-&Golferellenbogen)" },
      { id: 3, title: "Handgelenksschmerzen" },
      { id: 4, title: "Rückenschmerzen(HWS, BWS, LWS, Ischias)" },
      { id: 5, title: "Hüftgelenksschmerzen" },
      { id: 6, title: "Knieschmerzen" },
      { id: 7, title: "Fußschmerzen" },
      { id: 8, title: "Fersensporn" },
    ],

    id: 1,
    bulletPointTwo: [
      {
        id: 1,
        title:
          "unerfüllter Kinderwunsch, unregelmäßiger Zyklus,POC; Endometriose",
      },
      { id: 2, title: "Kopfschmerzen, Migräne" },
      { id: 3, title: "Schwindel" },
      { id: 4, title: "Tinnitus" },
      { id: 5, title: "Schlafstörungen" },
      { id: 6, title: "Stress" },
      { id: 7, title: "Kiefergelenksschmerzen" },
      { id: 8, title: "Nackenschmerzen" },
    ],
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Sarah Radtke</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero />
      <ServiceGallery />
      <section className={styles.sectionThreeContainer}>
        <div className={styles.contentContainer}>
          <h2 className={styles.sectionHeadline}>
            Sie leiden an folgenden Symptomen?
          </h2>
          <p className={styles.sectionText}>
            Jedes Krankheitsbild ist bei jedem Menschen verschieden. Schmerzen
            können viele Ursachen haben. Daher geht es mir bei jeder Behandlung
            um die ganz eigenen Bedürfnisse der Patient*innen, jede Behandlung
            ist individuell und dauert mindestens eine Stunde.Denn in der
            Therapie benötigt man eine gewisse Zeit, um sich in den Menschen
            hineinzufühlen. Das erreicht man nicht in 20 Minuten, wie es in
            vielen Praxen läuft. Jede Behandlung beginnt mit einer ausführlichen
            (professionellen) Anamnese und Befundung mit hoher Qualität.
          </p>

          <div className={styles.bulletPointsContainer}>
            <ul className={styles.bulletPointsList}>
              {data.bulletPointOne.map((point) => (
                <li key={point.id}>{point.title}</li>
              ))}
            </ul>
            <ul className={styles.bulletPointsList}>
              {data.bulletPointTwo.map((point) => (
                <li key={point.id}>{point.title}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      <section className={styles.sectionFourContainer}>
        <div className={styles.imageContainer}>
          <div className={styles.bgImageElement}></div>
          <div className={styles.imageWrapper}></div>
        </div>
        <div className={styles.sectionFourContent}>
          <h2 className={styles.sectionFourHeadline}>Sarah Radtke</h2>
          <p className={styles.sectionFourText}>
            Mein Name ist Sarah Radtke. Ich wurde 1983 in Köln geboren, bin
            verheiratet und lebe mit meinen 2 Kindern und meinem Mann seit 2004
            in Hamburg. Nach meinen Studium der Zahnmedizin an der Uniklinik
            Eppendorf folgten eine Physiotherapieausbildung und weitere
            Qualifikationen und Fortbildungen in den Bereichen Lymphdrainage,
            Rückentraining, Kiefergelenkbehandlungen (CMD) und Manuelle
            Therapie. Heilpraktiker- und Akupunkturausbildung (Spezalisiert bei
            Kinderwunsch)
          </p>
        </div>
      </section>
      <PreeFooter />
    </div>
  );
}
