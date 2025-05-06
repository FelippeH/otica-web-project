"use client";

import styles from "./Newsletter.module.css";
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

  function exibirAlert() {
    alert("Cadastro realizado com sucesso!");
  }

  return (
    <section className={styles.main}>
      <div className={styles.box}>
        <h1>Fique por dentro e receba nossas novidades</h1>
        <p>
          Quer saber todas as novidades, lançamentos e vantagens exclusivas de
          nossa loja? Deixe seu email com a gente.
        </p>
        <div className={styles.textInput}>
          <form onSubmit={handleSubmit}>
            <input type="name" placeholder="Nome*" ref={nameRef} required />
            <input type="email" placeholder="Email*" ref={emailRef} required />
            <button onClick={exibirAlert}>Registrar</button>
          </form>
        </div>
      </div>
    </section>
  );
}
