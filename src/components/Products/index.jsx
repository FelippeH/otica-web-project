"use client";

import { useState } from "react";
import styles from "./Products.module.css";
import Image from "next/image";
import ProdList from "./ProdList";
import { pGlasses, pSunglass } from "@/data/Products";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

export default function Products() {
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 4;
  const totalPages = Math.ceil(pSunglass.length / itemsPerPage);

  const nextPage = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const startIndex = currentPage * itemsPerPage;
  const visibleProducts = pSunglass.slice(
    startIndex,
    startIndex + itemsPerPage
  );

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
      <div className={styles.textHeader}>
        <h1>As melhores opções em óculos de sol</h1>
      </div>
      <div className={styles.carouselCont}>
        <button
          onClick={prevPage}
          disabled={currentPage === 0}
          className={styles.arrow}
        >
          <FontAwesomeIcon
            icon={faChevronLeft}
            className={styles.carouselArrow}
          />
        </button>

        <div className={styles.carouselProd}>
          {visibleProducts.map((catalog) => (
            <ProdList key={catalog.id} product={catalog} />
          ))}
        </div>
        <button
          onClick={nextPage}
          disabled={currentPage === totalPages - 1}
          className={styles.arrow}
        >
          <FontAwesomeIcon
            icon={faChevronRight}
            className={styles.carouselArrow}
          />
        </button>
      </div>
    </section>
  );
}
