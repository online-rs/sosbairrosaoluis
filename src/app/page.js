import Image from "next/image";
import styles from "./page.module.css";
import Cadastro from "../components/Cadastro"; // Import with curly braces
import React from 'react'

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>SOS Bairro São Luis</h1>
      <Cadastro style={{ backgroundColor: "red" }} />
    </main>
  );
}
