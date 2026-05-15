function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Comfly
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarComfly"
          aria-controls="navbarComfly"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarComfly">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Vuelos
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Hoteles
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Vuelo + Hotel
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Paquetes
              </a>
            </li>
          </ul>

          <span className="navbar-text">📞 2902 22 33</span>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
