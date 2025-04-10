import styles from "./Cover.module.css";
import Image from "next/image";
import { useEffect, useState } from "react";

const images = ["/cover2.jpg", "/cover3.jpg", "/cover4.jpg"];

export default function Cover() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [intervalTime, setIntervalTime] = useState(7000);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, intervalTime);

    return () => clearInterval(interval);
  }, [intervalTime, currentIndex]);

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
            layout="fill"
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
    </div>
  );
}
