import styles from "./Cover.module.css";
import Image from "next/image";
import cover from "/public/cover.png";

export default function Cover() {
  return (
    <div className={styles.main}>
      <Image src={cover} alt="Capa" className={styles.cover} fill priority />
      <div className={styles.text}>
        <p>Preços baixos em</p>
        <h1>ÓCULOS DE GRAU E DE SOL</h1>
        <p>Você só encontra aqui</p>
      </div>
    </div>
  );
}
