"use client"

import { useState, useEffect, useRef } from "react";
import { motion, useScroll, useCycle, delay } from "framer-motion";
import { useDimensions } from "./use-dimensions"
import Image from "next/image";
import Link from "next/link";

import MenuToggle from "./MenuToggle/MenuToggle";
import Navigation from "./Navigation/Navigation";

import styles from "./Header.module.css";

const sidebar = {
  open: (height = 1000) => {
    let clipPosition, sizeAdjustment;
    
    if (typeof window !== "undefined") {
      if(window.innerWidth <= 512) {
        // スマートフォン
        clipPosition = "calc(100%  - 42px) 42px";
        sizeAdjustment = 800;
      } else if (window.innerWidth <= 1024) {
        // タブレット
        clipPosition = "calc(100%  - 54px) 52px";
        sizeAdjustment = 1200;
      } else {
        // デスクトップ
        clipPosition = "calc(100% - 40px) 40px";
        sizeAdjustment = 1500;
      }
    }

    return {
      clipPath: `circle(${height * 2 + sizeAdjustment}px at ${clipPosition})`,
      transition: {
        delay: 0.1,
        type: "spring",
        stiffness: 100,
        restDelta: 2,
      },
    };
  },
  closed: () => {
    let clipPosition;

    if (typeof window !== "undefined") {
      if(window.innerWidth <= 512) {
        // スマートフォン
        clipPosition = "calc(100%  - 42px) 42px";
      } else if (window.innerWidth <= 1024) {
        // タブレット
        clipPosition = "calc(100%  - 54px) 52px";
      } else {
        // デスクトップ
        clipPosition = "calc(100% - 40px) 40px";
      }
    }

    return {
      clipPath: `circle(22px at ${clipPosition})`,
      transition: {
        delay: 0.2,
        type: "spring",
        stiffness: 200,
        damping: 28,
      },
    };
  },
};

export default function Header() {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);

  const [isVisible, setIsVisible] = useState(true);
  const { scrollY } = useScroll();
  const lastScrollY = useRef(0); 

  useEffect(() => {
    const unsubscribe = scrollY.on("change", (latest) => {
      if (lastScrollY.current < latest) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      lastScrollY.current = latest;
    });

    return unsubscribe;
  }, [scrollY]);
  return (
    <motion.header
      className={styles.header}
      initial={{ y: 0 }}
      animate={{ y: isVisible ? 0 : -100 }}
      transition={{ duration: 0.3 }}
    >
      <Link href="/">
        <Image
          src="/images/ChairLogo.png"
          alt="株式会社CHAIRMANのロゴ"
          width={60} height={60}
          priority
        />
      </Link>
      <motion.nav
        initial={false}
        animate={isOpen ? "open" : "closed"}
        custom={height}
        ref={containerRef}
      >
        <motion.div className={styles.background} variants={sidebar} />
        <Navigation />
        <MenuToggle toggle={() => toggleOpen()} />
      </motion.nav>
    </motion.header>
  );
}