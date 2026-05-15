function Banner() {
  return (
    <div id="carouselExample" className="carousel slide position-relative">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src="imagen1.jpg" className="d-block w-100" alt="Destino 1" />
        </div>
        <div className="carousel-item">
          <img src="imagen2.jpg" className="d-block w-100" alt="Destino 2" />
        </div>
        <div className="carousel-item">
          <img src="imagen3.jpg" className="d-block w-100" alt="Destino 3" />
        </div>
      </div>

      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExample"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExample"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>

      <div className="buscador-overlay">
        <div className="buscador-tabs">
          <div className="buscador-tab active">
            <span className="tab-label">VUELOS</span>
            <button className="tab-icon tab-icon--active" type="button">
              <img src="icono-avion.svg" alt="Vuelos" />
            </button>
          </div>
          <div className="buscador-tab">
            <span className="tab-label">HOTELES</span>
            <button className="tab-icon" type="button">
              <img src="icono-hotel.svg" alt="Hoteles" />
            </button>
          </div>
          <div className="buscador-tab">
            <span className="tab-label">VUELO + HOTEL</span>
            <button className="tab-icon" type="button">
              <img src="icono-vuelo-hotel.svg" alt="Vuelo + Hotel" />
            </button>
          </div>
          <div className="buscador-tab">
            <span className="tab-label">PAQUETES</span>
            <button className="tab-icon" type="button">
              <img src="icono-paquetes.svg" alt="Paquetes" />
            </button>
          </div>
        </div>

        <div className="buscador-form">
          <div className="buscador-campos">
            <div className="campo-grupo">
              <input type="text" className="campo-input" placeholder="Origen" />
              <span className="campo-icono">📍</span>
            </div>
            <div className="campo-grupo">
              <input
                type="text"
                className="campo-input"
                placeholder="Destino"
              />
              <span className="campo-icono">📍</span>
            </div>
            <div className="campo-grupo">
              <input
                type="text"
                className="campo-input"
                defaultValue="17/05/2026"
              />
              <span className="campo-icono">📅</span>
            </div>
            <div className="campo-grupo">
              <input
                type="text"
                className="campo-input"
                defaultValue="25/05/2026"
              />
              <span className="campo-icono">📅</span>
            </div>
            <div className="campo-grupo">
              <select className="campo-input" defaultValue="turista-1">
                <option value="turista-1">Turista - 1 pasajero</option>
                <option value="turista-2">Turista - 2 pasajeros</option>
                <option value="business-1">Business - 1 pasajero</option>
              </select>
            </div>
            <button className="btn-buscar" type="button">
              BUSCAR
            </button>
          </div>

          <div className="buscador-opciones">
            <span className="opcion">Solo ida</span>
            <span className="opcion active">Ida y vuelta</span>
            <span className="opcion">Multi-ciudad</span>
            <label className="opcion-check ms-auto">
              <input type="checkbox" onChange={() => {}} /> Buscar Fechas
              cercanas
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
