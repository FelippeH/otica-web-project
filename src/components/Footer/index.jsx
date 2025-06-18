import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <>
      <hr className={styles.hr} />
      <div className={styles.mainContainer}>
        <p className={styles.text}>&copy; Desenvolvido por Felipe Stefano</p>
      </div>
    </>
  );
}
