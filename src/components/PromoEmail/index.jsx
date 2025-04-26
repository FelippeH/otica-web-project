import styles from "./PromoEmail.module.css";
import Image from "next/image";
import React, { useRef } from "react";

export default function PromoEmail() {
  const emailRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    emailRef.current.value = "";
  };

  return (
    <div className={styles.main}>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Digite seu email"
          ref={emailRef}
          required
        />
        <button type="submit">Assina</button>
      </form>
    </div>
  );
}
