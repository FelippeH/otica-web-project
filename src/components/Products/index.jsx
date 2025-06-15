import styles from "./Products.module.css";
import Image from "next/image";
import ProdList from "./ProdList";
import { pGlasses, pSunglass } from "@/data/Products";

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
        {pGlasses.map((catalog) => (
          <ProdList key={catalog.id} product={catalog} />
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
        {pSunglass.map((catalog) => (
          <ProdList key={catalog.id} product={catalog} />
        ))}
      </div>
    </section>
  );
}
