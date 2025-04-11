import styles from "./Cover.module.css";
import Image from "next/image";
import { useEffect, useState } from "react";

const images = ["/cover1.jpg", "/cover2.jpg", "/cover3.jpg", "/cover4.jpg"]; //Array de imagens utilizadas no carrossel da página//

export default function Cover() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [intervalTime, setIntervalTime] = useState(7000);

  //Aqui faço o uso do setInterval para cronometrar o tempo da imagem do banner na tela//
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, intervalTime);

    return () => clearInterval(interval);
  }, [intervalTime, currentIndex]);

  //Aqui a função de setas, permitindo avançar e voltar a imagem do banner//
  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  //Aqui se inicia a parte visual da página, utilizando um modo carrossel nas imagens do banner//
  return (
    <div className={styles.carousel}>
      {images.map((img, index) => (
        <div
          key={index}
          className={`${styles.slide} ${
            index === currentIndex ? styles.active : ""
          }`}
        >
          <Image
            src={img}
            alt={`Slide ${index}`}
            fill
            className={styles.image}
            priority={index === 0}
          />

          {index === currentIndex && (
            <div className={styles.textOverlay}>
              <p>Preços baixos em</p>
              <h1>ÓCULOS DE GRAU E DE SOL</h1>
              <p>Você só encontra aqui</p>
            </div>
          )}
        </div>
      ))}

      <button className={styles.prev} onClick={goToPrev}>
        &#10094;
      </button>
      <button className={styles.next} onClick={goToNext}>
        &#10095;
      </button>
    </div>
  ); //Botões utilizados para navegar entre as imagens do carrossel//
}
