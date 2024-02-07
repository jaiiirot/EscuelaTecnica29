export default function Footer() {
  return (
    <footer className="footer">
      <section className="footer__cont">
        <div className="footer__contInfo">
          <a href="">
            <img loading="lazy" src="./images/icons/ln2.png" alt="" />
          </a>
          <ul>
            <li>
              <i className="fa-solid fa-phone-volume" /> 11 4957-2920
            </li>
            <li>
              <i className="fa-solid fa-envelope" />{" "}
              regencia@tecnica29de6.edu.ar
            </li>
            <li>
              <a href="">
                <i className="fa-brands fa-facebook" />
              </a>
              <a href="">
                <i className="fa-brands fa-instagram" />
              </a>
              <a href="">
                <i className="fa-brands fa-youtube" />
              </a>
            </li>
          </ul>
        </div>
        <div className="footer__contNave">
          <ul>
            <li>
              <h3>INSTITUCIONAL</h3>
            </li>
            <li>
              <a href="">Historia</a>
            </li>
            <li>
              <a href="">Autoridades</a>
            </li>
            <li>
              <a href="https://chautabu.buenosaires.gob.ar/">E.S.I.</a>
            </li>
            <li>
              <a href="">Centro de Estudiantes</a>
            </li>
          </ul>
          <ul>
            <li>
              <h3>ESPECIALIDADES</h3>
            </li>
            <li>
              <a href="">Computacíon</a>
            </li>
            <li>
              <a href="">Electricidad</a>
            </li>
            <li>
              <a href="">Mecanica</a>
            </li>
          </ul>
        </div>
      </section>
      <hr />
      <ul className="footer__copy">
        <li>
          <a href="">Boedo 760 - Ciudad Autonoma de Buenos Aires</a>
        </li>
        <li>
          All rights reserved © 2023 by <a href="">Jairo Tumiri</a>
        </li>
      </ul>
    </footer>
  );
}
