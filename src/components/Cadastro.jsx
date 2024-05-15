'use client';
import React, { useState } from 'react';
import styles from './Cadastro.module.css'

function Cadastro() {
  const [nomeCompleto, setNomeCompleto] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [rua, setRua] = useState('');
  const [numero, setNumero] = useState('');
  const [bairro, setBairro] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission

    const formData = {
      nomeCompleto,
      whatsapp,
      rua,
      numero,
      bairro,
    };

    console.log('Form submitted:', formData); // Replace with your form submission logic
    // Submit the form data to your backend or perform other actions
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.group}>
        <label htmlFor="nomeCompleto">Nome completo:</label>
        <input
          type="text"
          id="nomeCompleto"
          name="nomeCompleto"
          value={nomeCompleto}
          onChange={(event) => setNomeCompleto(event.target.value)}
          required
        />
      </div>

      <div className={styles.group}>
        <label htmlFor="whatsapp">WhatsApp:</label>
        <input
          type="tel"
          id="whatsapp"
          name="whatsapp"
          value={whatsapp}
          onChange={(event) => setWhatsapp(event.target.value)}
          required
        />
      </div>

      <div className={styles.group}>
        <label htmlFor="rua">Rua:</label>
        <input
          type="text"
          id="rua"
          name="rua"
          value={rua}
          onChange={(event) => setRua(event.target.value)}
          required
        />
      </div>

      <div className={styles.group}>
        <label htmlFor="numero">Número:</label>
        <input
          type="number"
          id="numero"
          name="numero"
          value={numero}
          onChange={(event) => setNumero(event.target.value)}
          required
        />
      </div>

      <div className={styles.group}>
        <label htmlFor="bairro">Bairro:</label>
        <input
          type="text"
          id="bairro"
          name="bairro"
          value={bairro}
          onChange={(event) => setBairro(event.target.value)}
          required
        />
      </div>
      <div className={styles.button}>
         <button type="submit" className="btn btn-primary center">Enviar</button>
      </div>
     </form>
  );
}

export default Cadastro;
