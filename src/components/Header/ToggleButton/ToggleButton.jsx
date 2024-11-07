// import styles from "./ToggleButton.module.css"

// export default function ToggleButton({open, onClick}) {

//   console.log(open)
//   return (
//     <div className={open ? styles.open : styles.close}
//       onClick={onClick}>
//       <span className={styles.line}></span>
//       <span className={styles.line}></span>
//       <span className={styles.line}></span>
//       <p>{open ? "Close" : "Menu"}</p>
//     </div>
//   )
// }

import styles from "./ToggleButton.module.css";

export default function ToggleButton({ open, onClick }) {
  return (
    <div className={styles.toggleButton} onClick={onClick}>
      <span className={`${styles.line} ${open ? styles.openLine : ""}`}></span>
      <span className={`${styles.line} ${open ? styles.openLine : ""}`}></span>
      <span className={`${styles.line} ${open ? styles.openLine : ""}`}></span>
      <p>{open ? "Close" : "Menu"}</p>
    </div>
  );
}