"use client";

import styles from "./Newsletter.module.css";
import React, { useState } from "react";

export default function Newsletter() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();

      const formData = new FormData();
      formData.append("nome", name);
      formData.append("email", email);

      const response = await fetch(
        "http://localhost/otica-aurora/newsletterUserData.php",
        {
          method: "POST",
          body: formData,
        }
      );

      if (!response.ok) {
        throw new Error(`Erro HTTP: ${response.status}`);
      }

      const result = await response.json();
      if (result.status === "ok") {
        alert(result.mensagem);
        setName("");
        setEmail("");
      } else {
        alert("Erro: " + result.mensagem);
      }
    } catch (err) {
      alert("Erro na conexão com o servidor.");
    }
  };

  return (
    <section className={styles.main}>
      <div className={styles.box}>
        <h1>Fique por dentro e receba nossas novidades</h1>
        <p>
          Quer saber todas as novidades, lançamentos e vantagens exclusivas de
          nossa loja? Deixe seu email com a gente.
        </p>
        {/*Entrada de dados*/}
        <div className={styles.textInput}>
          <form
            onSubmit={(e) => {
              handleSubmit(e);
            }}
          >
            <input
              type="text"
              placeholder="Nome*"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <input
              type="email"
              placeholder="E-mail*"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button type="submit">Registrar</button>
          </form>
        </div>
      </div>
    </section>
  );
}
