"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"

import ToggleButton from "./ToggleButton/ToggleButton";
import Navigation from "./Navigation/Navigation";

import styles from "./Header.module.css"


export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className={styles.header}>
      <Link href="#">
        <Image 
          src="/images/companyLogo.png"
          alt="株式会社CHAIRMANのロゴ"
          width={200}
          height={40}
          priority
          />
      </Link>
      <ToggleButton
        open={open}
        label="メニューを開きます"
        onClick={() => setOpen(!open)}
        />
      <Navigation
        id="navigation"
        open={open}/>
    </header>
  )
}