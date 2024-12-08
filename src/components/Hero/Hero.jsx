import BackgroundText from "./BackgroundText/BackgroundText";
import HeroText from "./HeroText/HeroText";
import PhoneMockup from "./PhoneMockup/PhoneMockup";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.heroContainer}>
      <BackgroundText />
      <HeroText />
      <PhoneMockup />
    </section>
  );
}