export default function Home() {
  return (
    <>
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
      <div
        className="col-6"
        style={{
          background: `url("https://www.alu.tecnica29de6.edu.ar/assets/images/et29frente-1280x720.jpeg") no-repeat`,
        }}
      >
        <div className="card-boton mt-4">
          <a
            target="_blank"
            href="https://cdn2.buenosaires.gob.ar/bsas/establecimientos-educativos/tour_360/020129800/360_020129800.html"
          >
            <div className="leyenda">
              <img
                src="https://buscatuescuela.buenosaires.gob.ar/assets/images/360.svg"
                height="70px"
              />
              <p className="texto-boton">Recorré la escuela en 360º</p>
            </div>
          </a>
        </div>
      </div>
      <iframe width="425" height="350" src="https://www.openstreetmap.org/export/embed.html?bbox=-58.41709882020951%2C-34.62237995391655%2C-58.414845764637%2C-34.620848123060725&amp;layer=mapnik&amp;marker=-34.621614042023054%2C-58.41597229242325"></iframe><br/><small><a href="https://www.openstreetmap.org/?mlat=-34.621614&amp;mlon=-58.415972#map=19/-34.621614/-58.415972">Ver el mapa más grande</a></small>
    </>
  );
}
