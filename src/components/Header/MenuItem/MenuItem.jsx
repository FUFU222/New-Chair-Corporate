import * as React from "react";
import { motion } from "framer-motion";
import styles from "../Header.module.css";

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 }
    }
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 }
    }
  }
};

const menuContent = ["Home", "About", "TrackRecord", "Team", "News", "Company"];

export default function MenuItem({ i }) {
  return (
    <motion.li
      variants={variants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <p className={styles.textPlaceholder}>
        {menuContent[i]}
      </p>
    </motion.li>
  )
};
