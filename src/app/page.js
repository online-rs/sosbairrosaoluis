import Image from "next/image";
import styles from "./page.module.css";
import Cadastro from "../components/Cadastro"; // Import with curly braces
import React from 'react';
import Facilidades from "../components/Facilidades";
import Teste from '../components/Teste'
import { getServerSideProps } from "../components/Teste";

export default function Home() {
  const testes = [
    {
      titulo: "Atestados",
      link: 'https://brunoadvogado.com'
    },
    {
      titulo: "Novo",
    link: 'https://www.google.com'},
    {
      titulo: "Auxílio Reconstrução",
      link: "https://ajudagoverno.com"
    }
  ];
  
  
  return (
    <main className={styles.main}>
      <section className={styles.section}>
        <h1>Facilidades</h1>

        <div className={styles.squad}>
          {testes.map((teste, index) =>
            (<Facilidades key={index} servico={teste.titulo} endereco={teste.link} />))}
        </div>
      </section>
      <Teste />
    </main>
  );
}
