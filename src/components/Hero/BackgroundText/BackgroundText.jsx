"use client";

import { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import styles from "./BackgroundText.module.css";

const BackgroundText = () => {
  const [isClient, setIsClient] = useState(false);
  const controls = useAnimation();

  useEffect(() => {
    setIsClient(true);
    controls.start({
      x: ["0%", "-100%"], // アニメーションを0%から-100%まで移動
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 100, // アニメーションの全体の時間
          ease: "linear",
        },
      },
    });
  }, [controls]);

  if (typeof window === "undefined") {
    return null;
  }

  const text = "CHAIRMAN";
  const repeatCount = 30; // テキストの繰り返し数を指定

  return (
    <div className={styles.backgroundTextContainer}>
      <motion.div className={styles.backgroundTextContent} animate={controls}>
        {/* テキストを複製してスムーズなループを実現 */}
        {[...Array(repeatCount)].map((_, index) => (
          <span key={index} className={styles.text}>
            {text}
          </span>
        ))}
        {[...Array(repeatCount)].map((_, index) => (
          <span key={`clone-${index}`} className={styles.text}>
            {text}
          </span>
        ))}
      </motion.div>
    </div>
  );
};

export default BackgroundText;