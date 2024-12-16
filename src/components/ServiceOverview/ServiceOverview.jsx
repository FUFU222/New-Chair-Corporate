"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import styles from "./ServiceOverview.module.css";
import Title from "../Title/Title";
import ServiceList from "./ServiceList/ServiceList";

export default function ServiceOverview({ sectionData = [] }) {
  const { scrollY } = useScroll();
  const translateY = useTransform(scrollY, [0, 300], [0, -100]); // スクロールに応じてY軸を変化

  return (
    <motion.section
      className={styles.serviceOverview}
      style={{ y: translateY }}
      initial={{ y: "100vh" }} // 初期状態で画面外に配置
      animate={{ y: 0 }} // スクロールで画面内に移動
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
    >
      <Title sectionId={1} />
      <div className={styles.serviceOverviewContainer}>
        <ServiceList />
      </div>
    </motion.section>
  );
}