import styles from "./Products.module.css";
import Image from "next/image";
import Link from "next/link";

const pGlasses = [
  {
    id: "óculos1",
    title: "1057 - Medium Square G7 Black",
    price: "R$ 0,00",
    image: "/glasses01.png",
    hoverImage: "/glasses01_1.png",
  },
  {
    id: "óculos2",
    title: "1261 - Big Round F2 Cinza",
    price: "R$ 0,00",
    image: "/glasses02.png",
    hoverImage: "/glasses02_1.png",
  },
  {
    id: "óculos3",
    title: "1984 - Medium Square T5 Black",
    price: "R$ 0,00",
    image: "/glasses03.png",
    hoverImage: "/glasses03_1.png",
  },
  {
    id: "óculos4",
    title: "1112 - Medium Round G1 Cinza",
    price: "R$ 0,00",
    image: "/glasses04.png",
    hoverImage: "/glasses04_1.png",
  },
  {
    id: "óculos5",
    title: "1691 - Large Square E4 Cinza",
    price: "R$ 0,00",
    image: "/glasses05.png",
    hoverImage: "/glasses05_1.png",
  },
  {
    id: "óculos6",
    title: "1457 - Small Square H9 Black",
    price: "R$ 0,00",
    image: "/glasses06.png",
    hoverImage: "/glasses06_1.png",
  },
  {
    id: "óculos7",
    title: "1292 - Small Square H5 Vermelho",
    price: "R$ 0,00",
    image: "/glasses07.png",
    hoverImage: "/glasses07_1.png",
  },
  {
    id: "óculos8",
    title: "1552 - Large Round U2 Cinza",
    price: "R$ 0,00",
    image: "/glasses08.png",
    hoverImage: "/glasses08_1.png",
  },
];

const pSunglass = [
  {
    id: "óculos1",
    title: "1057 - Medium Square G7 Black",
    price: "R$ 0,00",
    image: "/sunglass01.png",
    hoverImage: "/sunglass01_1.png",
  },
  {
    id: "óculos2",
    title: "1261 - Big Round F2 Cinza",
    price: "R$ 0,00",
    image: "/sunglass02.png",
    hoverImage: "/sunglass02_1.png",
  },
  {
    id: "óculos3",
    title: "1984 - Medium Square T5 Black",
    price: "R$ 0,00",
    image: "/sunglass03.png",
    hoverImage: "/sunglass03_1.png",
  },
  {
    id: "óculos4",
    title: "1112 - Medium Round G1 Cinza",
    price: "R$ 0,00",
    image: "/sunglass04.png",
    hoverImage: "/sunglass04_1.png",
  },
  {
    id: "óculos5",
    title: "1691 - Large Square E4 Cinza",
    price: "R$ 0,00",
    image: "/sunglass05.png",
    hoverImage: "/sunglass05_1.png",
  },
  {
    id: "óculos6",
    title: "1457 - Small Square H9 Black",
    price: "R$ 0,00",
    image: "/sunglass06.png",
    hoverImage: "/sunglass06_1.png",
  },
  {
    id: "óculos7",
    title: "1292 - Small Square H5 Vermelho",
    price: "R$ 0,00",
    image: "/sunglass07.png",
    hoverImage: "/sunglass07_1.png",
  },
  {
    id: "óculos8",
    title: "1552 - Large Round U2 Cinza",
    price: "R$ 0,00",
    image: "/sunglass08.png",
    hoverImage: "/sunglass08_1.png",
  },
];

export default function Products() {
  return (
    <section className={styles.productsSection}>
      {/* Box com informações, posicionado na parte inferior do banner principal */}
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
      {/* Texto posicinado na parte superior ao cátalogo principal */}
      <div className={styles.textHeader}>
        <h1>Aproveite armações com até 35% de desconto</h1>
      </div>
      {/* Grid do catálogo de óculos de grau */}
      <div className={styles.grid}>
        {pGlasses.map((product) => (
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
      {/* Banner inferior, início da seção de óculos de sol */}
      <div className={styles.bannerInf}>
        <Image
          src="/promo01.png"
          alt="Promo Banner"
          width={1920}
          height={500}
        />
      </div>
      {/* Grid do catálogo de óculos de sol */}
      <div className={styles.sunGlass}>
        <div className={styles.gridInf}>
          {pSunglass.map((product2) => (
            <Link key={product2.id} href={""} className={styles.cardInf}>
              <div className={styles.imageWrapper}>
                <Image
                  src={product2.image}
                  alt={product2.title}
                  fill
                  className={styles.image}
                />
                {product2.hoverImage && (
                  <Image
                    src={product2.hoverImage}
                    alt={product2.title}
                    fill
                    className={`${styles.image} ${styles.hoverImage}`}
                  />
                )}
              </div>
              <h3 className={styles.title}>{product2.title}</h3>
              <p className={styles.price}>{product2.price}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
