// Data
import data from "../data/index.data.json";
// Components
import Head from "next/head";
import { Hero } from "../components/hero.component";
import PhotoText from "../components/PhotoText";
import PreeFooter from "../components/PreeFooter";
import ServiceGallery from "../components/ServiceGallery";
import SymptomBox from "../components/SymptomBox";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Sarah Radtke</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero title={data.heroData.title} site="index" />
      <ServiceGallery />
      <SymptomBox
        headline={data.symptomData.headline}
        text={data.symptomData.text}
        list={data.symptomData.list}
      />
      <PhotoText
        headline={data.personalData.headline}
        text={data.personalData.text}
        slug={data.personalData.slug}
      />
      <PreeFooter site="index" />
    </div>
  );
}
