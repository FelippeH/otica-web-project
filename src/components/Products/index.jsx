import styles from "./Products.module.css";
import Image from "next/image";
import Link from "next/link";

const products = [
  {
    id: "óculos1",
    title: "1057 - Redondo Médio G7 Black",
    price: "R$ 0,00",
    image: "/glasses01.png",
  },
  {
    id: "óculos2",
    title: "1261 - Redondo Grande F2 Cinza",
    price: "R$ 0,00",
    image: "/glasses02.png",
    hoverImage: "/glasses02_1.png",
  },
  {
    id: "óculos3",
    title: "1984 - Quadrado Médio T5 Black",
    price: "R$ 0,00",
    image: "/glasses03.png",
    hoverImage: "/glasses03_1.png",
  },
  {
    id: "óculos4",
    title: "óculos X",
    price: "R$ 0,00",
    image: "/glasses04.png",
  },
  {
    id: "óculos5",
    title: "óculos X",
    price: "R$ 0,00",
    image: "/glasses05.png",
  },
  {
    id: "óculos6",
    title: "óculos X",
    price: "R$ 0,00",
    image: "/glasses06.png",
    hoverImage: "/glasses06_1.png",
  },
  {
    id: "óculos7",
    title: "óculos X",
    price: "R$ 0,00",
    image: "/glasses07.png",
    hoverImage: "/glasses07_1.png",
  },
  {
    id: "óculos8",
    title: "óculos X",
    price: "R$ 0,00",
    image: "/glasses08.png",
    hoverImage: "/glasses08_1.png",
  },
];

export default function Products() {
  return (
    <section className={styles.productsSection}>
      <div className={styles.box}>
        <div className={styles.text1}>
          <h2>Frete Grátis</h2>
          <p>A partir de R$ 250,00</p>
        </div>
        <div className={styles.text2}>
          <h2>Garantia</h2>
          <p>12 meses para todas as armações</p>
        </div>
        <div className={styles.text3}>
          <h2>Parcelamento</h2>
          <p>Parcele em até 10x sem juros</p>
        </div>
        <div className={styles.text4}>
          <h2>Qualidade</h2>
          <p>Trabalhamos com as melhores marcas</p>
        </div>
      </div>
      <div className={styles.grid}>
        {products.map((product) => (
          <Link key={product.id} href={""} className={styles.card}>
            <div className={styles.imageWrapper}>
              <Image
                src={product.image}
                alt={product.title}
                fill
                className={styles.image}
              />
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
          </Link>
        ))}
      </div>
    </section>
  );
}
