import Image from "next/image";
import Link from "next/link";
import styles from "./Products.module.css";

export default function ProdList({ product }) {
  return (
    <Link href={""} className={styles.card}>
      <div className={styles.imageWrapper}>
        <Image
          src={product.image}
          alt={product.title}
          fill
          className={styles.image}
        />

        {/*Verificando se o produto tem ou não desconto através da condicional de renderização*/}
        {product.discount && (
          <div className={styles.discountBadge}>-{product.discount}</div>
        )}
        {product.hoverImage && (
          <Image
            src={product.hoverImage}
            alt={product.title}
            fill
            className={`${styles.image} ${styles.hoverImage}`}
          />
        )}
      </div>
      <h3 className={styles.title}>{product.title}</h3>
      <p className={styles.price}>{product.price}</p>
      {product.payment && <p className={styles.payment}>{product.payment}</p>}
    </Link>
  );
}
