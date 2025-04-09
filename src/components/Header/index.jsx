import styles from "./Header.module.css";
import Image from "next/image";
import logo from "/public/logo.png";

export default function Header() {
  return (
    <header className={styles.container}>
      <Image
        src={logo}
        alt="Logo da empresa"
        width={100}
        height={100}
        className={styles.logo}
      />
      <i className={`fas fa-magnifying-glass ${styles.maglass}`}></i>
      <i className={`fa-solid fa-cart-shopping ${styles.cart}`}></i>
    </header>
  );
}
