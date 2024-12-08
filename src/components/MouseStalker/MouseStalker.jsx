"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useMotionValue, useSpring, useAnimation } from "framer-motion";
import styles from "./MouseStalker.module.css";

const springConfig = { damping: 20, stiffness: 300 };

export default function MouseStalker() {
  const cursorRef = useRef(null);
  const dotX = useMotionValue(-100);
  const dotY = useMotionValue(-100);
  const [borderColor, setBorderColor] = useState("white");
  const xPoint = useMotionValue(-100);
  const yPoint = useMotionValue(-100);
  const x = useSpring(xPoint, springConfig);
  const y = useSpring(yPoint, springConfig);
  const dotAnimation = useAnimation();

  useEffect(() => {
    const handleMouseMove = ({ clientX, clientY }) => {
      const cursorElement = cursorRef.current;
      if (!cursorElement) return;

      xPoint.set(clientX - cursorElement.offsetWidth / 2);
      yPoint.set(clientY - cursorElement.offsetHeight / 2);
      dotX.set(clientX - 4); // ドットの幅の半分を引く
      dotY.set(clientY - 4); // ドットの高さの半分を引く

      const targetElement = document.elementFromPoint(clientX, clientY);
      if (targetElement) {
        const bgColor = window.getComputedStyle(targetElement).backgroundColor;
        const rgb = bgColor.match(/\d+/g);
        if (rgb) {
          const brightness = (parseInt(rgb[0]) * 299 + parseInt(rgb[1]) * 587 + parseInt(rgb[2]) * 114) / 1000;
          setBorderColor(brightness > 128 ? "black" : "white");
        }
      }
    };

    const handleMouseDown = () => {
      dotAnimation.start({ scale: 2, transition: { duration: 0.2 } });
    };

    const handleMouseUp = () => {
      dotAnimation.start({ scale: 1, transition: { duration: 0.2 } });
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [xPoint, yPoint, dotX, dotY, dotAnimation]);

  return (
    <>
      <motion.div
        ref={cursorRef}
        className={styles.cursor}
        style={{
          x,
          y,
          borderColor,
        }}
      />
      <motion.div
        className={styles.dot}
        animate={dotAnimation}
        style={{
          x: dotX,
          y: dotY,
          backgroundColor: borderColor,
        }}
      />
    </>
  );
}