import styles from "./pages.module.css";
export default function UnoCiclo() {
  return (
    <>
      <section className={`container-65 ${styles.unociclo}`}>
        <header>
          <h1>CICLO BASICO | 1° CICLO</h1>
          <h2>
            Metas de Aprendizaje de la Educación Técnico <br /> Profesional de
            Nivel Secundario
          </h2>
        </header>
        <div className={styles.unociclo__info}>
          <p>
            El ciclo básico en la Escuela Técnica N.º 29 "Reconquista de Buenos
            Aires" forma parte de la Modalidad Técnico Profesional de nivel
            secundario y está diseñado para proporcionar una formación inicial
            común en diversas áreas técnico-científicas. Su propósito es
            desarrollar conocimientos generales y habilidades prácticas que
            permitan a los estudiantes abordar problemáticas tecnológicas,
            sentando las bases para las especializaciones técnicas del ciclo
            superior.
          </p>
          <div className={styles.unociclo__list}>
            <p>
              <strong>
                1. Desarrollar una formación tecnológica general de base común
                para todos los estudiantes de la modalidad
              </strong>
              , permitiendo su introducción a las problemáticas
              técnico-científicas.
            </p>
            <p>
              <strong>
                2. Favorecer el aprendizaje centrado en la resolución de
                problemas tecnológicos
              </strong>
              , adecuados a distintos niveles de complejidad según el momento
              del trayecto formativo.
            </p>
            <p>
              <strong>
                3. Integrar saberes, conocimientos y habilidades provenientes de
                distintas áreas y secciones del taller (Tecnología de Base,
                Tecnología de Producción y Proyecto)
              </strong>
              , promoviendo una visión articulada.
            </p>
            <p>
              <strong>
                4. Promover la identificación y análisis crítico de necesidades
                tecnológicas
              </strong>
              , desarrollando competencias para diseñar, planificar y construir
              soluciones técnicas.
            </p>
            <p>
              <strong>
                5. Fomentar la adquisición de habilidades prácticas y
                actitudinales en contextos reales de trabajo
              </strong>
              , con un enfoque en la seguridad, la organización y el trabajo en
              equipo.
            </p>
            <p>
              <strong>
                6. Incorporar criterios de sostenibilidad y cuidado del medio
                ambiente en los proyectos técnicos
              </strong>{" "}
              , asegurando la formación de profesionales responsables.
            </p>
          </div>
        </div>

        <div className={styles.unociclo__btn}>
          <span>
            <a
              href="https://boletinoficial.buenosaires.gob.ar/normativaba/norma/252992"
              target="_blank"
            >
              Resolución N° 4145 SSGECP/2012
            </a>
          </span>
        </div>
        <hr />
      </section>
      <section className={`container-65 ${styles.unociclo__plan}`}>
        <article>
          <h2>1° AÑO</h2>
          <div>
            <h3>
              CAMPO DE FORMACIÓN <br />
              GENERAL
            </h3>
            <ul>
              <li>
                <strong>Biología</strong>
              </li>
              <li>
                <strong>Educación artistica</strong>
              </li>
              <li>
                <strong>Educación ciudadana</strong>
              </li>
              <li>
                <strong>Educación Física</strong>
              </li>
              <li>
                <strong>Geografía</strong>
              </li>
              <li>
                <strong>Historia</strong>
              </li>
              <li>
                <strong>Inglés</strong>
              </li>
              <li>
                <strong>Lengua y literatura</strong>
              </li>
            </ul>
          </div>
          <div>
            <h3>
              CAMPO DE FORMACIÓN <br />
              CIENTÍFICO TECNOLÓGICO
            </h3>
            <ul>
              <li>
                <strong>Matemática</strong>
              </li>
              <li>
                <strong>Tecnología de la representación</strong>
              </li>
              <li>
                <strong>Taller</strong>
              </li>
            </ul>
          </div>
        </article>
        <article>
          <h2>2° AÑO</h2>
          <div>
            <h3>
              CAMPO DE FORMACIÓN <br /> GENERAL
            </h3>
            <ul>
              <li>
                <strong>Biología</strong>
              </li>
              <li>
                <strong>Educación ciudadana</strong>
              </li>
              <li>
                <strong>Educación Física</strong>
              </li>
              <li>
                <strong>Geografía</strong>
              </li>
              <li>
                <strong>Historia</strong>
              </li>
              <li>
                <strong>Inglés</strong>
              </li>
              <li>
                <strong>Lengua y literatura</strong>
              </li>
            </ul>
          </div>
          <div>
            <h3>
              CAMPO DE FORMACIÓN <br />
              CIENTÍFICO TECNOLÓGICO
            </h3>
            <ul>
              <li>
                <strong>Fisica</strong>
              </li>
              <li>
                <strong>Matemática</strong>
              </li>
              <li>
                <strong>Tecnología de la representación</strong>
              </li>
              <li>
                <strong>Taller</strong>
              </li>
            </ul>
          </div>
        </article>
      </section>
    </>
  );
}
