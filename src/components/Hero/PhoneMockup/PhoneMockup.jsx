import Image from "next/image"
import styles from "./PhoneMockup.module.css"

export default function PhoneMockup() {
  return (
    <div className={styles.phoneContainer}>
      <div className={styles.mockupContainer}>
        <Image
          className={styles.mockup}
          src="/images/iphone-mockup.png"
          width={396}
          height={704}
          alt="iphoneのモック画像"
          priority
        />
        <div className={styles.videoContainer}>
          <video
            className={styles.video}
            src="/videos/CHAIRMAN.mp4"
            autoPlay
            muted
            loop
            preload="true"
          />
        </div>
      </div>
    </div>
  )
}