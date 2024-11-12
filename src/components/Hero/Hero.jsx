"use client"

import { motion } from "framer-motion"
import styles from "./Hero.module.css"
import Image from "next/image"

const textAnimation = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {delay:i * 0.08, duration: 0.5, ease: "easeOut"}
  })
}
const descriptionAnimation = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { delay: 1.5, duration: 0.6 } },
};

export default function Hero() {
  const title = "CHAIRMAN"
  return (
    <section className={styles.heroContainer}>
      <div className={styles.textContainer}>
        <h1 className={styles.companyName}>
          {title.split("").map((char, index) => (
            <motion.span
              key={index}
              custom={index}
              initial="hidden"
              animate="visible"
              variants={textAnimation}
              style={{display: "inline-block" }}
            >
              {char}
            </motion.span>
          ))}
        </h1>
        <motion.p
          className={styles.companyDescription}
          initial="hidden"
          animate="visible"
          variants={descriptionAnimation}
        >
          CHAIRMANはSNSマーケティングを通じて
        </motion.p>
        <motion.p
          className={styles.companyDescription}
          initial="hidden"
          animate="visible"
          variants={descriptionAnimation}
        >
          ビジネスチャンスや新たな価値を創造します。
        </motion.p>
      </div>
      <div className={styles.phoneContainer}>
        <div className={styles.mockupContainer}>
          <Image
            className={styles.mockup} 
            src="/images/iphone-mockup.png"
            width={500}
            height={800}
            alt="iphoneのモック画像" />
          <div className={styles.videoContainer}>
            <video
              className={styles.video}
              src="/videos/CHAIRMAN.mp4"
              width={360}
              height={640}
              autoPlay
              muted
              loop
              preload="true"
            />
          </div>
        </div>
      </div>
    </section>
  )
}