import styles from './Footer.module.css';

function Footer() {
  return (
    <footer className={styles.Footer}>
      <div>
        <img src=".\src\assets\img\favicon-32x32.png" alt="" />
      </div>
      <div>
        <p>Examen Final - FrontEnd 3 | Evelyn Tramontin</p>
      </div>
    </footer>
  );
}

export default Footer;
