import lgp from "../../assets/images/icons/logo256.ico";
import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";
export default function Navbar() {
  const s = styles;
  return (
    <header className={s.header}>
      <div className={s.logo}>
        <Link to="/">
          <img src={lgp} alt="Logo" />
          <span>
            <h5>Escuela Técnica</h5>
            <h3>"Reconquista de Buenos Aires"</h3>
          </span>
        </Link>
      </div>
      <nav className={s.lista}>
        <li>
          <Link to="/institucion">INSTITUCION</Link>
        </li>
        <li>
          <Link to="/unoCiclo">1° CICLO</Link>
        </li>
        <li>
          <a className={s.active}>2° CICLO</a>
          <div className={s.submenu}>
            <nav>
              <li>
                <Link to="/computacion">COMPUTACION</Link>
              </li>
              <li>
                <Link to="/electricidad">ELECTRICIDAD</Link>
              </li>
              <li>
                <Link to="/mecanica">MECANICA</Link>
              </li>
            </nav>
          </div>
        </li>
        <li>
          <Link to="/novedades">NOVEDADES</Link>
        </li>
        <li>
          <Link to="/ecoet29">ECOET29</Link>
        </li>
        <li>
          <Link to="/cooperadora">COOPERADORA</Link>
        </li>
      </nav>
    </header>
  );
}
