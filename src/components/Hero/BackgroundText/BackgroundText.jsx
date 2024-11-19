"use client";

import { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import styles from "./BackgroundText.module.css";

const BackgroundText = () => {
  const [isClient, setIsClient] = useState(false);
  const controls = useAnimation();

  useEffect(() => {
    setIsClient(true);
    // console.log("anime")
    controls.start({
      x: ["100%", "-100%"],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 10,
          ease: "linear",
        },
      },
    });
  }, []);

  if (!isClient) {
    return null;
  }

  return (
    <div className={styles.backgroundTextContainer}>
      <motion.div className={styles.backgroundTextContent} animate={controls}>
        <span className={styles.text}>
          Next.jsプロジェクトでFramer Motionを使用し、背景に文字や画像が横に流れ続けるアニメーションを実装する際、Hydration Errorを避けるためには以下の点に注意する必要があります。
          Next.jsプロジェクトでFramer Motionを使用し、背景に文字や画像が横に流れ続けるアニメーションを実装する際、Hydration Errorを避けるためには以下の点に注意する必要があります。
        </span>
      </motion.div>
    </div>
  );
};

export default BackgroundText;