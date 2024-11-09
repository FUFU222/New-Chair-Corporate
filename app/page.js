import styles from "./page.module.css";
import Hero from "@/src/components/Hero/Hero";
import ServiceOverview from "@/src/components/ServiceOverview/ServiceOverview";
import Team from "@/src/components/Team/Team";
import TrackRecord from "@/src/components/TrackRecord/TrackRecord";
import News from "@/src/components/News/News";
import Company from "@/src/components/Company/Company";

export default function Home() {

  return (
    <div className={styles.page}>
      <Hero/>
      <ServiceOverview/>
      <Team/>
      <TrackRecord/>
      <News/>
      <Company/>
    </div>
  );
}