"use client"

import React from 'react';
import { motion } from "framer-motion"

import styles from "./Title.module.css"

export default function Title({ sectionId }) {

  const sectionData = [
    {
      id: 1,
      title: "Service",
      description: "ユーザーが持つSNSに対する感性を論理的に分析・言語化し、再現性のあるノウハウとして企業の認知拡大やSNSを活用したマネタイズをご支援します。また、包括的なDX支援を通じて、ビジネスの成長と発展に貢献いたします。",
    },
    {
      id: 2,
      title: "Team",
      description: "弊社のSNSマーケターは大物YouTuber・タレントチャンネル・企業アカウント運用等、経験豊富なメンバーです。",
    },
    {
      id: 3,
      title: "TrackRecord",
      description:
        "最適なソリューションを提供し、\nブランド認知拡大、売り上げ増加に寄与する\nサービスを提供させていただきます。",
    },
    {
      id: 4,
      title: "News",
      description: "最新の関連ニュースを掲載しております。",
    },
    {
      id: 5,
      title: "Company",
      description: "会社概要",
    },
  ];
  

  const section = sectionData.find((item => item.id === sectionId))

  return (
    <>
      <motion.h2
        initial={typeof window === "undefined" ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
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