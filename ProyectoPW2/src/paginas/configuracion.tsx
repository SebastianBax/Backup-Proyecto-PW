import '../paginas/style.css';


const configuracion = () => {


return<div className="container mt-5">
      <h1>Account Settings</h1>
      <form>
        <div className="col-md-3">
          <label  className="form-label">Cambiar nombre</label>
          <input type="text" className="form-control mb-3" placeholder="Pancho"/>
        </div>

        <div className="col-md-3">
          <label className="form-label">Cambiar correo electrónico</label>
          <input type="email" className="form-control mb-3" placeholder="asd@gmail.com"/>
        </div>
        <div className="col-md-3">
          <label className="form-label"> Cambiar contraseña</label>
          <input type="password" className="form-control mb-3" placeholder="*****"/>
        </div>
        <div className="col-md-3">
          <label className="form-label"> Cambiar pais</label>
          <input type="text" className="form-control mb-3" placeholder="Peru"/>
        </div>

        <button className="btn btn-success">Guardar Cambios</button>
      </form>
    </div>
}


export default configuracion