export default function Navbar() {
  return (
    <>
    <div className="red">
      <ul>
        <li>
          <a href="">
            <img
              loading="lazy"
              src="https://img.icons8.com/fluency/24/null/facebook.png"
            />
          </a>
        </li>
        <li>
          <a href="">
            <img
              loading="lazy"
              src="https://img.icons8.com/color/24/null/instagram-new--v1.png"
            />
          </a>
        </li>
        <li>
          <a href="">
            <img
              loading="lazy"
              src="https://img.icons8.com/color/24/null/youtube-play.png"
            />
          </a>
        </li>
      </ul>
      <ul>
        <li>
          <a href="">
            Campus
            <img
              loading="lazy"
              src="https://img.icons8.com/color/20/null/graduation-cap.png"
            />
          </a>
        </li>
        <li>
          <a href="">
            Aulas{" "}
            <img
              loading="lazy"
              src="https://img.icons8.com/color/20/null/google-classroom.png"
            />
          </a>
        </li>
      </ul>
    </div>
    <header className="menu">
      <nav className="menu__desk">
        <a href="#">
          <img loading="lazy" src="./images/icons/ln1.png" alt="" />
        </a>
        <ul className="menu__options">
          <li>
            <a href="section/institucion.html">Institucion</a>
          </li>
          <li>
            <a href="./section/unoCiclo.html">1° Ciclo</a>
          </li>
          <li>
            <a href="">2° Ciclo +</a>
          </li>
          <li>
            <a href="#">Novedades</a>
          </li>
          <li>
            <a href="">Contacto</a>
          </li>
        </ul>
      </nav>
    </header>  
    </>
  )
}
