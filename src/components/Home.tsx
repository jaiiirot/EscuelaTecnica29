export default function Home() {
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
                src="https://img.icons8.com/color/20/null/google-classNameroom.png"
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

      <main>
        <section className="secUIndex">
          <div className="secUIndex__info">
            <div className="secUIndex__infoTex">
              <p>Sitio Oficial </p>
              <h2>Escuela Técnica</h2>
              <h1>"Reconquista de Buenos Aires"</h1>
            </div>
            <div className="secUIndex__infoButt">
              <a className="butt" href="">
                ESPECIALIDADES
              </a>
              <a className="butt" href="">
                SOBRE NOSOTROS
              </a>
            </div>
          </div>
        </section>

        <section className="secDIndex">
          <div className="secDIndex__titleNovedad">
            <h2>NOVEDADES</h2>
          </div>
          <div className="secDIndex__cards">
            <article className="card">
              <div className="cardIma">
                <img loading="lazy" src="./images/img/article1.webp" alt="" />
              </div>
              <div className="cardTex">
                <h4>Titulo</h4>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Soluta modi excepturi sapiente, ex consectetur iure magni
                  voluptatum consequatur, id velit saepe nobis laborum maxime
                  distinctio reiciendis facere animi! Reprehenderit, accusamus.
                </p>
                <a href="" className="butt cardButt">
                  +info
                </a>
              </div>
            </article>
            <article className="card">
              <div className="cardIma">
                <img loading="lazy" src="./images/img/article1.webp" alt="" />
              </div>
              <div className="cardTex">
                <h4>Titulo</h4>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Soluta modi excepturi sapiente, ex consectetur iure magni
                  voluptatum consequatur, id velit saepe nobis laborum maxime
                  distinctio reiciendis facere animi! Reprehenderit, accusamus.
                </p>
                <a href="" className="butt">
                  +info
                </a>
              </div>
            </article>
            <article className="card">
              <div className="cardIma">
                <img loading="lazy" src="./images/img/article1.webp" alt="" />
              </div>
              <div className="cardTex">
                <h4>Titulo</h4>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Soluta modi excepturi sapiente, ex consectetur iure magni
                  voluptatum consequatur, id velit saepe nobis laborum maxime
                  distinctio reiciendis facere animi! Reprehenderit, accusamus.
                </p>
                <a href="" className="butt">
                  +info
                </a>
              </div>
            </article>
            <article className="card">
              <div className="cardIma">
                <img loading="lazy" src="./images/img/article1.webp" alt="" />
              </div>
              <div className="cardTex">
                <h4>Titulo</h4>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Soluta modi excepturi sapiente, ex consectetur iure magni
                  voluptatum consequatur, id velit saepe nobis laborum maxime
                  distinctio reiciendis facere animi! Reprehenderit, accusamus.
                </p>
                <a href="" className="butt cardButt">
                  +info
                </a>
              </div>
            </article>
            <article className="card">
              <div className="cardIma">
                <img loading="lazy" src="./images/img/article1.webp" alt="" />
              </div>
              <div className="cardTex">
                <h4>Titulo</h4>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Soluta modi excepturi sapiente, ex consectetur iure magni
                  voluptatum consequatur, id velit saepe nobis laborum maxime
                  distinctio reiciendis facere animi! Reprehenderit, accusamus.
                </p>
                <a href="" className="butt">
                  +info
                </a>
              </div>
            </article>
            <article className="card">
              <div className="cardIma">
                <img loading="lazy" src="./images/img/article1.webp" alt="" />
              </div>
              <div className="cardTex">
                <h4>Titulo</h4>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Soluta modi excepturi sapiente, ex consectetur iure magni
                  voluptatum consequatur, id velit saepe nobis laborum maxime
                  distinctio reiciendis facere animi! Reprehenderit, accusamus.
                </p>
                <a href="" className="butt">
                  +info
                </a>
              </div>
            </article>
          </div>
          <a className="butt secDIndex__butt" href="">
            Ver todas las Novedades
          </a>
        </section>

        <section className="secTIndex">
          <div className="secTIndex__titleEspecialidad">
            <h2>CICLOS | ESPECIALIDADES</h2>
          </div>
          <article className="secTIndex__especialidad">
            <a href="">
              <div style={{ background: "#000000" }}>
                <h3>CICLO BASICO</h3>
              </div>
            </a>
            <a href="">
              <div>
                <img loading="lazy" src="./images/icons/1ciclo.png" alt="" />
                <h3>1° AÑO</h3>
              </div>
            </a>
            <a href="">
              <div>
                <img loading="lazy" src="./images/icons/2ciclo.png" alt="" />
                <h3>2° AÑO</h3>
              </div>
            </a>
          </article>
          <article className="secTIndex__especialidad">
            <a href="">
              <div style={{ background: "#000000" }}>
                <h3>ESPECIALIDADES</h3>
              </div>
            </a>
            <a href="">
              <div>
                <img
                  loading="lazy"
                  src="./images/icons/computacion.png"
                  alt=""
                />
                <h3>COMPUTACÍON</h3>
              </div>
            </a>
            <a href="">
              <div>
                <img
                  loading="lazy"
                  src="./images/icons/electricidad.png"
                  alt=""
                />
                <h3>ELECTRICIDAD</h3>
              </div>
            </a>
            <a href="">
              <div>
                <img loading="lazy" src="./images/icons/mecanica.png" alt="" />
                <h3>MECANICA</h3>
              </div>
            </a>
          </article>
        </section>

        <section className="secCIndex">
          <div className="secCIndex__titleInformacion">
            <h2>INFORMACÍON UTIL</h2>
          </div>
          <article className="secCIndex__calendario">
            <div>||aca va un calendario</div>
            <div>||Fecha importantes del calendario</div>
          </article>
        </section>
      </main>

      <footer className="footer">
        <section className="footer__cont">
          <div className="footer__contInfo">
            <a href="">
              <img loading="lazy" src="./images/icons/ln2.png" alt="" />
            </a>
            <ul>
              <li>
                <i className="fa-solid fa-phone-volume"></i> 11 4957-2920
              </li>
              <li>
                <i className="fa-solid fa-envelope"></i>{" "}
                regencia@tecnica29de6.edu.ar
              </li>
              <li>
                <a href="">
                  <i className="fa-brands fa-facebook"></i>
                </a>
                <a href="">
                  <i className="fa-brands fa-instagram"></i>
                </a>
                <a href="">
                  <i className="fa-brands fa-youtube"></i>
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
        <ul className="footer__copy">
          <li>
            <a href="">Boedo 760 - Ciudad Autonoma de Buenos Aires</a>
          </li>
          <li>
            All rights reserved © 2023 by <a href="">Jairo Tumiri</a>
          </li>
        </ul>
      </footer>
    </>
  );
}
