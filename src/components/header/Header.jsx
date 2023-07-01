import { Link } from "react-router-dom";
import styles from "./Header.module.css"
import { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";

function Header() {

  const theme = useContext(ThemeContext)

    return (
      <>
      <header className={styles.header +" "+ theme.value}>
        <nav className={styles.nav}>
          <Link to="./home"><i className="fa-solid fa-tooth"></i></Link>
          <Link to="./home">Home</Link>
          <Link to="./contacto">Contacto</Link>
          <Link to="./favs">Favoritos</Link>
        </nav>
        <button onClick={()=> theme.changeValue()}><i className="fa-regular fa-circle-half-stroke"></i></button>
      </header>
      </>
    );
}

export default Header;