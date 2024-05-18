import styles from './Cadastro.module.css';

function Cadastro() {
  return (
    <form className={styles.form}>
      <div className={styles.group}>
        <label htmlFor="nomeCompleto">Nome completo:</label>
        <input
          type="text"
          id="nomeCompleto"
          name="nomeCompleto"
          required
        />
      </div>

      <div className={styles.group}>
        <label htmlFor="whatsapp">WhatsApp:</label>
        <input
          type="tel"
          id="whatsapp"
          name="whatsapp"
          required
        />
      </div>

      <div className={styles.group}>
        <label htmlFor="rua">Rua:</label>
        <input
          type="text"
          id="rua"
          name="rua"
          required
        />
      </div>

      <div className={styles.group}>
        <label htmlFor="numero">Número:</label>
        <input
          type="number"
          id="numero"
          name="numero"
          required
        />
      </div>

      <div className={styles.group}>
        <label htmlFor="bairro">Bairro:</label>
        <input
          type="text"
          id="bairro"
          name="bairro"
          required
        />
      </div>

      <div className={styles.button}>
        <button type="submit" className="btn btn-primary center">
          Enviar
        </button>
      </div>
    </form>
  );
}

export default Cadastro;
