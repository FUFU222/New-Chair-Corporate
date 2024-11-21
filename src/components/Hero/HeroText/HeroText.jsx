"use client";

import { motion } from "framer-motion";
import styles from "./HeroText.module.css";

export default function HeroText() {
  const title = "CHAIRMAN";

  const textAnimation = (i) => ({
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.08, duration: 0.5, ease: "easeOut" },
    },
  });

  const descriptionAnimation = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { delay: 1.5, duration: 0.6 } },
  };

  return (
    <div className={styles.textContainer}>
      <h1 className={styles.companyName}>
        {title.split("").map((char, index) => (
          <motion.span
            key={index}
            initial="hidden"
            animate="visible"
            variants={textAnimation(index)}
            style={{ display: "inline-block" }}
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
        ビジネスチャンスや新たな価値を創造します
      </motion.p>
    </div>
  );
}