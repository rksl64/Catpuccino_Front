import React, { useState, useEffect } from "react";
import { Header, Nav, MobileNavToggle, Topbar } from "./navbar-style";
import logito from "../../assets/logito.png";
import { deleteCookie, getToken } from "../../Servicios/Cookies/cookies";
import { habilitarConsumicion } from "../../Servicios/user.service";
import { Sidebar } from "primereact/sidebar";
import "./sidebar.css";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [token, setToken] = useState(false);
  const [Id, setId] = useState(false);
  const [rol, setrol] = useState("");
  const [Ids, setIds] = useState(0);
  const [permiso, setPermiso] = useState(false);
  const [visibleRight, setVisibleRight] = useState(false);

  useEffect(() => {
    if (getToken("token") != null) {
      setToken(true);
      setId(true);
      setIds(getToken("ID"));
      setrol(getToken("Rol"));
    }
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [rol]);

  useEffect(() => {
    habilita();
  });

  const habilita = async () => {
    if (rol === "USUARIO") {
      const response = await habilitarConsumicion(parseInt(Ids));
      setPermiso(response);
    }
  };

  const onLogout = () => {
    setTimeout(() => {
      deleteCookie("token");
      deleteCookie("ID");
      setToken(false);
      window.location.reload();
    }, 300);
  };

  return (
    <>
      <Topbar
        id="topbar"
        className={`d-flex align-items-center fixed-top ${
          scrolled ? "topbar-scrolled" : ""
        }`}
        style={{ backgroundColor: scrolled ? "" : "rgba(255, 255, 255, 0)" }}
      >
        <div className="container-fluid container-xl d-flex align-items-center justify-content-center justify-content-lg-start">
          <i className="bi bi-phone d-flex align-items-center">
            <span>+1 5589 55488 55</span>
          </i>
          <i className="bi bi-clock ms-4 d-none d-lg-flex align-items-center">
            <span>Lunes a Viernes: 09:00 AM - 15:00PM / 16:00 - 20:00 PM</span>
          </i>
        </div>
      </Topbar>
      <Header
        id="header"
        className={`fixed-top d-flex align-items-center ${
          scrolled ? "header-scrolled" : ""
        }`}
        style={{ backgroundColor: scrolled ? "" : "rgba(255, 255, 255, 0)" }}
      >
        <div className="container-fluid container-xl d-flex align-items-center justify-content-between">
          <div className="logo me-auto">
            <h1>
              <a href="/">
                <img src={logito} alt="logo" /> Catpuccino
              </a>
            </h1>
          </div>

          <Nav id="navbar" className="navbar order-last order-lg-0">
            <ul>
              <li>
                <a className="nav-link scrollto " href="/">
                  Inicio
                </a>
              </li>

              {rol !== "" && rol === "USUARIO" && (
                <>
                  <li>
                    <a className="nav-link scrollto" href="/#menu">
                      Menu
                    </a>
                  </li>
                  <li className="dropdown">
                    <a href="/" className="nav-link scrollto">
                      <span>Nuestros Servicios</span>{" "}
                      <i className="bi bi-chevron-down"></i>
                    </a>
                    <ul>
                      <li>
                        <a href="Reserva">Hacer reserva</a>
                      </li>
                      {permiso && (
                        <li>
                          <a href="/Productos">Hacer consumición</a>
                        </li>
                      )}
                      <li>
                        <a href="/Adopcion">Hacer adopción</a>
                      </li>
                      <li>
                        <a href="/MisReservas">Mis gestiones</a>
                      </li>
                    </ul>
                  </li>
                </>
              )}
            </ul>
            <MobileNavToggle
              className="bi bi-list mobile-nav-toggle"
              onClick={() => setVisibleRight(true)}
            ></MobileNavToggle>
            <Sidebar
              visible={visibleRight}
              position="right"
              className="sidebar"
              onHide={() => setVisibleRight(false)}
            >
              <ul>
                <li>
                  <a className="nav-link scrollto " href="/">
                    Inicio
                  </a>
                </li>

                {rol !== "" && rol === "USUARIO" && (
                  <>
                    <li>
                      <a className="nav-link scrollto" href="/#menu">
                        Menu
                      </a>
                    </li>
                    <li className="dropdown">
                      <a href="/" className="nav-link scrollto">
                        <span>Nuestros Servicios</span>{" "}
                        <i className="bi bi-chevron-down"></i>
                      </a>
                      <ul>
                        <li>
                          <a href="Reserva">Hacer reserva</a>
                        </li>
                        {permiso && (
                          <li>
                            <a href="/Productos">Hacer consumición</a>
                          </li>
                        )}
                        <li>
                          <a href="/Adopcion">Hacer adopción</a>
                        </li>
                        <li>
                          <a href="/MisReservas">Mis gestiones</a>
                        </li>
                      </ul>
                    </li>
                  </>
                )}
              </ul>
            </Sidebar>
          </Nav>

          {token ? (
            <a className="book-a-table-btn scrollto" onClick={onLogout}>
              Cerrar Sesión
            </a>
          ) : (
            <a href="/Login" className="book-a-table-btn scrollto">
              Iniciar Sesión
            </a>
          )}
        </div>
      </Header>
    </>
  );
}

export default Navbar;
