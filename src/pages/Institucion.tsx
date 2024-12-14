import styles from "./pages.module.css";
export default function Institucion() {
  return (
    <>
      <div className={styles.banner}></div>
      <div className={styles.container}>
        <span className={styles.title}>
          <h2>Escuela Técnica Nº 29 D.E. N°6"</h2>
          <h1>"Reconquista de Buenos Aires"</h1>
        </span>
        <section className={styles.imgText}>
          <h2>Historia</h2>
          <p>
            Ubicada en el tradicional barrio de Boedo, la Escuela Técnica Nº 29
            tiene una rica historia que se remonta a 1944, cuando fue fundada
            como Escuela de Aprendizaje por la Corporación de Transporte. Su
            propósito original era formar obreros especializados en soldadura,
            chapistería, tornería, mecánica automotriz y electricidad para sus
            talleres. A lo largo de los años, evolucionó para convertirse en una
            institución de referencia en Sudamérica, atrayendo delegaciones de
            países como Venezuela, Colombia, Ecuador y Brasil.
          </p>
          <img
            src="https://wp.tecnica29de6.edu.ar/htdocs/wp/wp-content/uploads/2014/06/estacion.jpg"
            alt=""
          />
          <p>
            En 1963, la escuela fue incorporada al régimen de las Escuelas
            Nacionales de Educación Técnica de la Nación, y en 1967 adoptó el
            nombre de "Reconquista de Buenos Aires". A lo largo de su historia,
            la escuela ha mantenido su lema "Enseñar produciendo" como un eje
            central de su identidad. Actualmente, ofrece a sus estudiantes una
            educación técnica integral con orientación en mecánica, electricidad
            y programación, complementada con actividades culturales, deportivas
            y proyectos innovadores.
          </p>
        </section>

        <section>
          <h2>Nuestra Misión y Visión</h2>
          <p>
            La Escuela Técnica Nº 29 tiene como misión formar técnicos y
            profesionales íntegros, éticos y comprometidos con el desarrollo
            sostenible. Nos esforzamos por preparar a nuestros estudiantes para
            enfrentar los desafíos del mundo laboral y académico, fomentando en
            ellos una conciencia crítica, creativa y socialmente responsable. A
            través de una educación técnica de excelencia, buscamos garantizar
            su inserción profesional, ciudadana y social, convirtiéndolos en
            agentes activos del progreso del país. Aspiramos a ser una
            institución líder en la educación técnico-profesional, reconocida
            tanto a nivel nacional como internacional por la calidad de su
            enseñanza y su capacidad para adaptarse a los avances tecnológicos y
            a las demandas del sistema socio-productivo. Nuestra visión es
            inspirar a los estudiantes a construir un futuro innovador,
            equitativo y sostenible, siendo referentes en su campo de
            especialización.
          </p>
        </section>

        <section>
          <h2>Compromiso Ambiental</h2>
          <p>
            En la Escuela Técnica Nº 29, reconocemos nuestra responsabilidad
            ciudadana en la protección del medio ambiente. Fomentamos una
            sensibilidad ambiental que permita a nuestros estudiantes
            identificar y analizar críticamente los problemas ambientales
            locales y globales, promoviendo una convivencia armónica y
            equilibrada con el entorno. Este compromiso se traduce en la
            incorporación de prácticas sostenibles y en el impulso de proyectos
            educativos que reflejan la importancia del desarrollo sustentable.
          </p>
        </section>
        <hr />
        <section>
          <h2>Información Relevante</h2>
          <ul>
            <li>
              <strong>Ubicación:</strong> Av. Boedo 760, Ciudad de Buenos Aires.
            </li>
            <li>
              <strong>Contacto:</strong>
              <ul>
                <li>
                  Email:{" "}
                  <a href="mailto:det_29_de6@bue.edu.ar">
                    det_29_de6@bue.edu.ar
                  </a>
                </li>
                <li>Teléfono: 4931-0118 / 4957-2920</li>
                <li>
                  Web:{" "}
                  <a href="http://tec29de6.buenosaires.edu.ar">
                    tec29de6.buenosaires.edu.ar
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <strong>Formación técnica especializada:</strong> Orientaciones en
              mecánica, electricidad y programación.
            </li>
            <li>
              <strong>Título otorgado:</strong> Bachillerato Técnico en
              Mecánica, Electricidad o Programación de Computadoras.
            </li>
            <li>
              <strong>Idiomas:</strong> Clases de inglés y certificación
              internacional.
            </li>
            <li>
              <strong>Proyectos pedagógicos:</strong> Participación en
              concursos, talleres prácticos, laboratorios de ciencias y
              desarrollo artístico.
            </li>
            <li>
              <strong>Instalaciones:</strong> Jornada completa en turnos mañana,
              tarde, vespertino y nocturno.
            </li>
            <li>
              <strong>Compromiso ambiental:</strong> Educación en desarrollo
              sostenible y conciencia ambiental.
            </li>
          </ul>
        </section>
      </div>
    </>
  );
}
