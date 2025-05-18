// Puedes llamarlo PaginaPrincipal.tsx
import 'bootstrap/dist/css/bootstrap.min.css';

export default function PaginaPrincipal() {
  return (
    <>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand texto-acento" href="#">GameStore</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarContent">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item"><a className="nav-link" href="#">Explore</a></li>
              <li className="nav-item"><a className="nav-link" href="#">Categories</a></li>
              <li className="nav-item"><a className="nav-link" href="#">Home</a></li>
              <li className="nav-item"><a className="nav-link" href="#">Platform</a></li>
              <li className="nav-item"><a className="nav-link" href="#">Special Offers</a></li>
            </ul>
            <button className="btn btn-outline-light me-2"><i className="bi bi-person-circle"></i></button>
            <button className="btn btn-outline-light"><i className="bi bi-search"></i></button>
          </div>
        </div>
      </nav>

      {/* Carrusel */}
      <div id="mainCarousel" className="carousel slide mt-4 container" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="/Minecraft_banner.png" className="d-block w-100" alt="Game 1" />
            <div className="carousel-caption">
              <a href="#" className="btn btn-acento">Detalles</a>
            </div>
          </div>
          <div className="carousel-item">
            <img src="/Rimworld_banner.jpg" className="d-block w-100" alt="Game 2" />
            <div className="carousel-caption">
              <a href="#" className="btn btn-acento">Detalles</a>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#mainCarousel" data-bs-slide="prev">
          <span className="carousel-control-prev-icon"></span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#mainCarousel" data-bs-slide="next">
          <span className="carousel-control-next-icon"></span>
        </button>
      </div>

      {/* Juegos Destacados */}
      <div className="container mt-5">
        <h3 className="texto-acento">Featured Games</h3>
        <div className="row row-cols-1 row-cols-md-5 g-4 mt-3">
          
          <div className="col">
            <div className="card h-100">
              <img src="/Minecraft-Logo.png" className="card-img-top" alt="Game" />
              <div className="card-body text-center">
                <h5 className="card-title text-light">Minecraft</h5>
                <a href="#" className="btn btn-acento btn-sm w-100">Detalles</a>
              </div>
            </div>
          </div>
          
          <div className="col">
            <div className="card h-100">
              <img src="/Rimworld_Logo.png" className="card-img-top" alt="Game" />
              <div className="card-body text-center">
                <h5 className="card-title text-light">Rimworld</h5>
                <a href="#" className="btn btn-acento btn-sm w-100">Detalles</a>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="card h-100">
              <img src="/GodofWar_Logo.jpg" className="card-img-top" alt="Game" />
              <div className="card-body text-center">
                <h5 className="card-title text-light">God of War</h5>
                <a href="#" className="btn btn-acento btn-sm w-100">Detalles</a>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="card h-100">
              <img src="/Minecraft-Logo.png" className="card-img-top" alt="Game" />
              <div className="card-body text-center">
                <h5 className="card-title text-light">Minecraft</h5>
                <a href="#" className="btn btn-acento btn-sm w-100">Detalles</a>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="card h-100">
              <img src="/Minecraft-Logo.png" className="card-img-top" alt="Game" />
              <div className="card-body text-center">
                <h5 className="card-title text-light">Minecraft</h5>
                <a href="#" className="btn btn-acento btn-sm w-100">Detalles</a>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="card h-100">
              <img src="/Minecraft-Logo.png" className="card-img-top" alt="Game" />
              <div className="card-body text-center">
                <h5 className="card-title text-light">Minecraft</h5>
                <a href="#" className="btn btn-acento btn-sm w-100">Detalles</a>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="card h-100">
              <img src="/Minecraft-Logo.png" className="card-img-top" alt="Game" />
              <div className="card-body text-center">
                <h5 className="card-title text-light">Minecraft</h5>
                <a href="#" className="btn btn-acento btn-sm w-100">Detalles</a>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="card h-100">
              <img src="/Minecraft-Logo.png" className="card-img-top" alt="Game" />
              <div className="card-body text-center">
                <h5 className="card-title text-light">Minecraft</h5>
                <a href="#" className="btn btn-acento btn-sm w-100">Detalles</a>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="card h-100">
              <img src="/Minecraft-Logo.png" className="card-img-top" alt="Game" />
              <div className="card-body text-center">
                <h5 className="card-title text-light">Minecraft</h5>
                <a href="#" className="btn btn-acento btn-sm w-100">Detalles</a>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="card h-100">
              <img src="/Minecraft-Logo.png" className="card-img-top" alt="Game" />
              <div className="card-body text-center">
                <h5 className="card-title text-light">Minecraft</h5>
                <a href="#" className="btn btn-acento btn-sm w-100">Detalles</a>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Estilos personalizados */}
      <style>{`
        body {
          background-color: #1a1a1d;
          color: white;
        }
        .bg-dark-2 {
          background-color: #2d2d30;
        }
        .btn-acento {
          background-color: hsl(259, 90%, 50%);
          color: white;
          border: none;
        }
        .btn-acento:hover {
          background-color: hsl(259, 90%, 40%);
        }
        .texto-acento {
          color: #00c9ff;
        }
        .card {
          background-color: #2d2d30;
          border: none;
        }
      `}</style>
    </>
  );
}