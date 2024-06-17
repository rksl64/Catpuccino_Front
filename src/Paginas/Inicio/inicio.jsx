import "./Inicio.css";
import "../../assets/vendor/animate.css/animate.min.css";
import "../../assets/vendor/bootstrap/css/bootstrap.min.css";
import "../../assets/vendor/bootstrap-icons/bootstrap-icons.css";
import "../../assets/vendor/boxicons/css/boxicons.min.css";
import "../../assets/vendor/glightbox/css/glightbox.min.css";
import "../../assets/vendor/swiper/swiper-bundle.min.css";
import Banner1 from "../../assets/img/slide/neko-cafe-japan-10.jpg";
import Carousel from "../../Componentes/CarruselGatos/carruselGatos";
import React, { useEffect, useState } from "react";
import { listarproductos } from "../../Servicios/user.service";
import { getToken } from "../../Servicios/Cookies/cookies";
import DashboardGestorGatos from "../../Paginas/DashboardGestorGatos/dashboardGestorGatos";
import DashboardCamarero from "../../Paginas/DashboardCamarero/dashboardCamarero";
import DashboardSuperAdmin from "../../Paginas/DashboardSuperAdmin/dashboardSuperAdmin";
import { PDFDownloadLink} from "@react-pdf/renderer";
import { MenuPDF} from "../../Utils/pdfProductos";

function Inicio() {
  const [productos, setProductos] = useState([]);
  const [filtro, setFiltro] = useState("todos");
  const [Id, setId] = useState(false);
  const [rol, setrol] = useState('');

  useEffect(() => {
    if (getToken("token") != null ) {
      setId(true);
      setrol(getToken("Rol"));
    }
    listarproductos()
      .then((data) => {
        setProductos(data);
        console.log(data)
      })
      .catch((error) => {
        console.error("Error al obtener los productos:", error);
      });
  }, []);

  const filtrarProductos = (tipo) => {
    setFiltro(tipo);
  };

  return (
    <>
     {rol !== '' && rol === 'USUARIO' && (
      <><><section id="hero">
          <div className="hero-container">
            <div
              id="heroCarousel"
              data-bs-interval="5000"
              className="carousel slide carousel-fade"
              data-bs-ride="carousel"
            >
              <ol className="carousel-indicators" id="hero-carousel-indicators"></ol>

              <div className="carousel-inner" role="listbox">
                <div
                  className="carousel-item active"
                  style={{ backgroundImage: `url(${Banner1})` }}
                >
                  <div className="carousel-container">
                    <div className="carousel-content">
                      <h2 className="animate__animated animate__fadeInDown">
                        <span>Catpuccino</span> Cat Café
                      </h2>
                      <p className="animate__animated animate__fadeInUp">
                        ¡Bienvenido al encantador mundo de Catpuccino! Reserva tu
                        hora y disfruta de la compañía de nuestros adorables gatos
                        durante 60 minutos. También ofrecemos una variedad de
                        cafés, tés y dulces en nuestra acogedora cafetería. ¡Ven y
                        relájate entre felinos!"
                      </p>
                      <div>
                        <a
                          href="#menu"
                          className="btn-menu animate__animated animate__fadeInUp scrollto"
                        >
                          Nuestro Menu
                        </a>
                        {rol !== '' && (
                          <a
                            href="/Reserva"
                            className="btn-book animate__animated animate__fadeInUp scrollto"
                          >
                            Hacer una Reserva
                          </a>)}
                        {rol !== '' && (
                          <a
                            href="/Adopcion"
                            className="btn-book animate__animated animate__fadeInUp scrollto"
                          >
                            Hacer una Adopción
                          </a>)}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
          <Carousel /></>
          <section id="menu" className="menu">
            <div className="container">
              <div className="section-title">
                <h2>Disfruta nuestro delicioso <span>Menú</span></h2>
              </div>

              <div className="row">
                <div className="col-lg-12 d-flex justify-content-center">
                  <ul id="menu-flters">
                    <li onClick={() => filtrarProductos("todos")} className={filtro === "todos" ? "filter-active" : ""}>Ver todo</li>
                    <li onClick={() => filtrarProductos("bebida")} className={filtro === "bebida" ? "filter-active" : ""}>Bebidas</li>
                    <li onClick={() => filtrarProductos("comida")} className={filtro === "comida" ? "filter-active" : ""}>Comida</li>
                    <li onClick={() => filtrarProductos("postre")} className={filtro === "postre" ? "filter-active" : ""}>Dulces y Acompañamientos</li>
                  </ul>
                </div>
              </div>

              <div className="row menu-container">
                {productos.map((producto) => {
                  if (filtro === "todos" || producto.tipo.toLowerCase() === filtro) {
                    return (
                      <div key={producto.id} className="col-lg-6 menu-item">
                        <div className="menu-content">
                          <a href="/">{producto.nombre}</a>
                          <span>{producto.precio}€</span>
                        </div>
                        <div className="menu-ingredients">
                          {producto.descripcion}
                        </div>
                      </div>
                    );
                  } else {
                    return null;
                  }
                })}
              </div>
            </div>
          </section></>
      )}{rol === '' && (
        <><><section id="hero">
            <div className="hero-container">
              <div
                id="heroCarousel"
                data-bs-interval="5000"
                className="carousel slide carousel-fade"
                data-bs-ride="carousel"
              >
                <ol className="carousel-indicators" id="hero-carousel-indicators"></ol>
  
                <div className="carousel-inner" role="listbox">
                  <div
                    className="carousel-item active"
                    style={{ backgroundImage: `url(${Banner1})` }}
                  >
                    <div className="carousel-container">
                      <div className="carousel-content">
                        <h2 className="animate__animated animate__fadeInDown">
                          <span>Catpuccino</span> Cat Café
                        </h2>
                        <p className="animate__animated animate__fadeInUp">
                          ¡Bienvenido al encantador mundo de Catpuccino! Reserva tu
                          hora y disfruta de la compañía de nuestros adorables gatos
                          durante 60 minutos. También ofrecemos una variedad de
                          cafés, tés y dulces en nuestra acogedora cafetería. ¡Ven y
                          relájate entre felinos!"
                        </p>
                        <div>
                          <a
                            href="#menu"
                            className="btn-menu animate__animated animate__fadeInUp scrollto"
                          >
                            Nuestro Menu
                          </a>
                          {rol !== '' && (
                            <a
                              href="/Reserva"
                              className="btn-book animate__animated animate__fadeInUp scrollto"
                            >
                              Hacer una Reserva
                            </a>)}
                          {rol !== '' && (
                            <a
                              href="/Adopcion"
                              className="btn-book animate__animated animate__fadeInUp scrollto"
                            >
                              Hacer una Adopción
                            </a>)}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
            <Carousel /></>
            <section id="menu" className="menu">
              <div className="container">
                <div className="section-title">
                  <h2>Disfruta nuestro delicioso <span>Menú</span></h2>
                </div>
  
                <div className="row">
                  <div className="col-lg-12 d-flex justify-content-center">
                    <ul id="menu-flters">
                      <li onClick={() => filtrarProductos("todos")} className={filtro === "todos" ? "filter-active" : ""}>Ver todo</li>
                      <li onClick={() => filtrarProductos("bebida")} className={filtro === "bebida" ? "filter-active" : ""}>Bebidas</li>
                      <li onClick={() => filtrarProductos("comida")} className={filtro === "comida" ? "filter-active" : ""}>Comida</li>
                      <li onClick={() => filtrarProductos("postre")} className={filtro === "postre" ? "filter-active" : ""}>Dulces y Acompañamientos</li>
                    </ul>
                  </div>
                </div>
  
                <div className="row menu-container">
                  {productos.map((producto) => {
                    if (filtro === "todos" || producto.tipo.toLowerCase() === filtro) {
                      return (
                        <div key={producto.id} className="col-lg-6 menu-item">
                          <div className="menu-content">
                            <a href="/">{producto.nombre}</a>
                            <span>{producto.precio}€</span>
                          </div>
                          <div className="menu-ingredients">
                            {producto.descripcion}
                          </div>
                        </div>
                      );
                    } else {
                      return null;
                    }
                  })}
                </div>
              </div>
            </section>
    {/* <PDFDownloadLink document={<MenuPDF productos={productos}/>} fileName="carta.pdf">
      {({ blob, url, loading, error }) =>
        loading ? 'Loading document...' : 'Download now!'
      }
    </PDFDownloadLink> */}
    </>
        )}{rol !== '' && rol === 'ADOPCION' && (
          <>
          <DashboardGestorGatos/>
          </>
          )}
          {rol !== '' && rol === 'CAMARERO' && (
          <>
          <DashboardCamarero/>
          </>
          )} 
          {rol !== '' && rol === 'SUPERUSER' && (
          <>
          <DashboardSuperAdmin/>
          </>
          )}
      
      
     
    </>
  );
}

export default Inicio;
