"use client"

import { useState, useCallback, useEffect, useRef } from "react";
import { motion, useScroll } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

import ToggleButton from "./ToggleButton/ToggleButton";
import Navigation from "./Navigation/Navigation";

import styles from "./Header.module.css";

export default function Header() {
  const { scrollY } = useScroll();
  const [isVisible, setIsVisible] = useState(true);
  const [openMenu, setOpenMenu] = useState(false);
  const lastScrollY = useRef(0); // lastScrollY を useRef で管理

  useEffect(() => {
    const unsubscribe = scrollY.on("change", (latest) => {
      if (lastScrollY.current < latest) {
        // スクロールダウン時にヘッダーを非表示
        setIsVisible(false);
      } else {
        // スクロールアップ時にヘッダーを表示
        setIsVisible(true);
      }
      lastScrollY.current = latest; // 最新のスクロール位置を lastScrollY に更新
    });

    return unsubscribe; // クリーンアップとして unsubscribe を返す
  }, [scrollY]);

  const handleClick = useCallback((event) => {
    event.stopPropagation();
    setOpenMenu((prevOpen) => !prevOpen);
  }, []);

  return (
    <motion.header
      className={styles.header}
      initial={{ y: 0 }}
      animate={{ y: isVisible ? 0 : -100 }}
      transition={{ duration: 0.3 }}
    >
      <Link href="#">
        <Image
          src="/images/companyLogo.png"
          alt="株式会社CHAIRMANのロゴ"
          width={200}
          height={40}
          priority
        />
      </Link>
      <ToggleButton openMenu={openMenu} label="メニューを開きます" onClick={handleClick} />
      <Navigation id="navigation" openMenu={openMenu} />
    </motion.header>
  );
}