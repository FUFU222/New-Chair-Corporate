import styles from "./ToggleButton.module.css";

export default function ToggleButton({ openMenu, onClick }) {
  return (
    <div className={styles.toggleButton} onClick={onClick}>
      <span className={`${styles.line} ${openMenu ? styles.openLine : ""}`}></span>
      <span className={`${styles.line} ${openMenu ? styles.openLine : ""}`}></span>
      <span className={`${styles.line} ${openMenu ? styles.openLine : ""}`}></span>
      <p>{openMenu ? "Close" : "Menu"}</p>
    </div>
  );
}