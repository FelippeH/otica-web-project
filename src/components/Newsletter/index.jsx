import styles from "./Newsletter.module.css";
import Image from "next/image";
import React, { useRef } from "react";

export default function Newsletter() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const email = emailRef.current.value;
    emailRef.current.value = "";
    const name = nameRef.current.value;
    nameRef.current.value = "";
  };

  const emailRef = useRef(null);
  const nameRef = useRef(null);

  return (
    <section className={styles.main}>
      <div className={styles.box}>
        <h1>Fique por dentro e receba nossas novidades</h1>
        <p>
          Participe de nossa newsletter para ficar por dentro de promoções,
          novas coleções e novidades!
        </p>
        <div className={styles.textInput}>
          <form onSubmit={handleSubmit}>
            <input type="name" placeholder="Nome*" ref={nameRef} required />
            <input type="email" placeholder="Email*" ref={emailRef} required />
            <button type="submit">Registrar</button>
          </form>
        </div>
      </div>
    </section>
  );
}
