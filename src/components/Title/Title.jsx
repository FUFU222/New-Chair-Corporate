"use client"

import React from 'react';
import { motion } from "framer-motion"
import sectionData from '@/src/data/sectionData';

import styles from "./Title.module.css"

export default function Title({ sectionId }) {

  const section = sectionData.find((item => item.id === sectionId))

  return (
    <>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{once: true}}
      >
        {section.title}
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{once: true}}
      >
        {section.description}
      </motion.p>
    </>
  );
}