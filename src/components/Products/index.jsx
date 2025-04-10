import styles from "./Products.module.css";
import Image from "next/image";
import Link from "next/link";

export default function Products() {
  return (
    <div className={styles.main}>
      <h1>NOSSOS PRODUTOS</h1>
      <p>
        Trabalhamos com óculos de grau, óculos de sol, lentes transition nos
        modelos masculino, feminino e infantil.
      </p>
      <p>
        Todos os nossos preços são acessíveis e contam com a melhor qualidade do
        mercado.
      </p>
      <div className={styles.catalog}>
        
      </div>
    </div>
  );
}
