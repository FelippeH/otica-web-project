import styles from "./Header.module.css";
import Image from "next/image";
import logo from "/public/logo.png";
import Link from "next/link";

export default function Header() {
  return (
    <div className={styles.container}>
      <Image
        src={logo}
        alt="Logo da empresa"
        width={100}
        height={100}
        className={styles.logo}
      />
      <div className={styles.menu}>
        <Link href="#produtos" className={styles.link}>
          LANÇAMENTOS
        </Link>
        <Link href="#sobre" className={styles.link}>
          ÓCULOS DE GRAU
        </Link>
        <Link href="#contato" className={styles.link}>
          ÓCULOS DE SOL
        </Link>
        <Link href="#contato" className={styles.link}>
          LENTES DE CONTATO
        </Link>
        <Link href="#contato" className={styles.link}>
          ACESSÓRIOS
        </Link>
      </div>
      <div className={styles.icons}>
        <i className="fas fa-magnifying-glass"></i>
        <i className="fas fa-user"></i>
        <i className="fas fa-cart-shopping"></i>
      </div>
    </div>
  );
}
