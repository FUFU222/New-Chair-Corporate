"use client"

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import styles from "./ServiceOverview.module.css";
import Title from "../Title/Title"

gsap.registerPlugin(ScrollTrigger);

export default function ServiceOverview({sectionData}) {
  const listWrapperRef = useRef(null);
  const listRef = useRef(null);

  useEffect(() => {
    const listWrapperEl = listWrapperRef.current;
    const listEl = listRef.current;
    
    if (listWrapperEl && listEl) {
      gsap.to(listEl, {
        x: () => -(listEl.clientWidth - listWrapperEl.clientWidth),
        ease: "none",
        scrollTrigger: {
          trigger: listWrapperEl,
          start: "top top",
          end: () => `+=${listEl.clientWidth - listWrapperEl.clientWidth}`,
          scrub: true,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });
    }
  }, []);

  return (
    <section>
      <Title sectionId={1}/>
      <div ref={listWrapperRef} className={styles.scrollListWrapper}>
        <ul ref={listRef} className={styles.scrollList}>
          <li className={styles.scrollItem}>Card</li>
          <li className={styles.scrollItem}>Card</li>
          <li className={styles.scrollItem}>Card</li>
        </ul>
      </div>
    </section>
  );
}