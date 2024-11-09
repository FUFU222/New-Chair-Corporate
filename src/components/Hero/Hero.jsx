import styles from "./Hero.module.css"

export default function Hero() {
  return (
    <section>
      <div className={styles.textContainer}>
        <div className={styles.box}>
          <h1 className={styles.companyName}>
            CHAIRMAN
          </h1>
          <p>CHAIRMANはSNSマーケティングを通じて<br/>
          ビジネスチャンスや新たな価値を創造します。</p>
        </div>
      </div>
      <div className={styles.videoContainer}>
        
      </div>
    </section>
  )
}