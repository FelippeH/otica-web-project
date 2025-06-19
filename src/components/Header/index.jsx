"use client";

import styles from "./Header.module.css";
import Image from "next/image";
import logo from "/public/logo.png";
import Link from "next/link";
import { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faUser,
  faCartShopping,
} from "@fortawesome/free-solid-svg-icons";

export default function Header() {
  const [termo, setTermo] = useState("");

  const handleSearch = () => {
    if (termo.trim() === "") return;
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") handleSearch();
  };

  return (
    <div className={styles.container}>
      <Image
        src={logo}
        alt="Logo da empresa"
        width={100}
        height={100}
        className={styles.logo}
      />
      <div className={styles.menu}>
        <div className={styles.search}>
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            className={styles.searchIcon}
          />
          <input
            type="text"
            placeholder="O que você precisa hoje?"
            value={termo}
            onChange={(e) => setTermo(e.target.value)}
            onKeyDown={handleKeyDown}
          />
        </div>
        <Link href="#produtos" className={styles.link}>
          Óculos de grau
        </Link>
        <Link href="#produtos" className={styles.link}>
          Óculos de sol
        </Link>
        <Link href="#produtos" className={styles.link}>
          Lentes de contato
        </Link>
        <Link href="#produtos" className={styles.link}>
          Acessórios
        </Link>
      </div>
      <div className={styles.icons}>
        <FontAwesomeIcon icon={faUser} className={styles.ii} />
        <FontAwesomeIcon icon={faCartShopping} className={styles.ii} />
      </div>
    </div>
  );
}
