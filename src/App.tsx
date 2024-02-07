export default function App() {
  return (
    <>
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
            <h2>2° Ciclo | ESPECIALIDADES</h2>
          </div>
          <article className="secTIndex__especialidad">
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
    </>
  );
}