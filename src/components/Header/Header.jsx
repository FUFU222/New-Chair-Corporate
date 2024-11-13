"use client"

import { useState, useCallback, useEffect, useRef } from "react";
import { motion, useScroll, useCycle } from "framer-motion";
import { useDimensions } from "./use-dimensions"
import Image from "next/image";
import Link from "next/link";

import MenuToggle from "./MenuToggle/MenuToggle";
import Navigation from "./Navigation/Navigation";

import styles from "./Header.module.css";

const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at calc(100% - 40px) 40px)`,
    transition: {
      type: "spring",
      stiffness: 110,
      restDelta: 2
    }
  }),
  closed: {
    clipPath: "circle(24px at calc(100% - 40px) 40px)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 500,
      damping: 40
    }
  }
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