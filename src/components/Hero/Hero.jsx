// import { useLogo } from "@/src/context/LogoContext";
import BackgroundText from "./BackgroundText/BackgroundText";
import HeroText from "./HeroText/HeroText";
import PhoneMockup from "./PhoneMockup/PhoneMockup";
import styles from "./Hero.module.css";

export default function Hero() {
  // const { setLogo } = useLogo();

  // useEffect(() => {
  //   setLogo("/images/companyLogo.png"); // 初期ロゴを設定
  // }, []);
  return (
    <section className={styles.heroContainer}>
      <BackgroundText />
      <HeroText />
      <PhoneMockup />
    </section>
  );
}