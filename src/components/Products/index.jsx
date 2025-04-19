import styles from "./Products.module.css";
import Image from "next/image";
import Link from "next/link";

const pGlasses = [
  {
    id: "óculos1",
    title: "1057 - Medium Square G7 Black",
    discount: "27%",
    price: "R$399,00",
    save: "R$289,00",
    payment: "10 x R$28,90",
    image: "/glasses01.png",
    hoverImage: "/glasses01_1.png",
  },
  {
    id: "óculos2",
    title: "1261 - Big Round F2 Cinza",
    discount: "17%",
    price: "R$279,00",
    save: "R$229,00",
    payment: "10 x R$22,90",
    image: "/glasses02.png",
    hoverImage: "/glasses02_1.png",
  },
  {
    id: "óculos3",
    title: "1984 - Medium Square T5 Black",
    discount: "15%",
    price: "R$189,00",
    save: "R$159,00",
    payment: "10 x R$15,90",
    image: "/glasses03.png",
    hoverImage: "/glasses03_1.png",
  },
  {
    id: "óculos4",
    title: "1112 - Medium Round G1 Cinza",
    discount: "34%",
    price: "R$349,00",
    save: "R$229,00",
    payment: "10 x R$22,90",
    image: "/glasses04.png",
    hoverImage: "/glasses04_1.png",
  },
  {
    id: "óculos5",
    title: "1691 - Large Square E4 Cinza",
    discount: "12%",
    price: "R$549,00",
    save: "R$479,00",
    payment: "10 x R$47,90",
    image: "/glasses05.png",
    hoverImage: "/glasses05_1.png",
  },
  {
    id: "óculos6",
    title: "1457 - Small Square H9 Black",
    discount: "15%",
    price: "R$199,00",
    save: "R$169,00",
    payment: "10 x R$16,90",
    image: "/glasses06.png",
    hoverImage: "/glasses06_1.png",
  },
  {
    id: "óculos7",
    title: "1292 - Small Square H5 Vermelho",
    discount: "13%",
    price: "R$229,00",
    save: "R$199,00",
    payment: "10 x R$19,90",
    image: "/glasses07.png",
    hoverImage: "/glasses07_1.png",
  },
  {
    id: "óculos8",
    title: "1552 - Large Round U2 Cinza",
    discount: "35%",
    price: "R$599,00",
    save: "R$389,00",
    payment: "10 x R$38,90",
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
              <div className={styles.discountBadge}>-{product.discount}</div>
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
            <p className={styles.save}>{product.save}</p>
            <p className={styles.payment}>{product.payment}</p>
          </Link>
        ))}
      </div>
      {/* Banner inferior, início da seção de óculos de sol */}
      <div className={styles.bannerInf}>
        <Image
          src="/promo01.jpg"
          alt="Promo Banner"
          fill
          quality={100}
          style={{ objectFit: "cover" }}
        />
      </div>
      {/* Grid do catálogo de óculos de sol */}
      <div className={styles.gridInf}>
        {pSunglass.map((product2) => (
          <Link key={product2.id} href={""} className={styles.card}>
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
    </section>
  );
}
