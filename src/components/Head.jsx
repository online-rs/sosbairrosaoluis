import React from 'react'
import Link from 'next/link'
import styles from './Head.module.css'

function Head (){
    return(
        <div className={styles.navdiv}>
            <div>
                <h1>SOS Bairro São Luis</h1>
            </div>
            <div>
                <nav className={styles.navbar}>
                    <li>Início</li>
                    <li>Notícia</li>
                    <li>Cadastro</li>
                    <li>Contato</li>
                </nav>
            </div>
            
        </div>
    );
}

export default Head;