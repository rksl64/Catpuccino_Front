import React, { useState, useEffect } from "react";
import { Header, Nav, MobileNavToggle, Topbar } from "./navbar-style";
import logito from "../../assets/logito.png";
import { deleteCookie, getToken } from "../../Servicios/Cookies/cookies";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [token, setToken] = useState(false);

  useEffect(() => {
    if (getToken("token") != null) {
      setToken(true);
    } else {
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
  }, []);
  const onLogout = () => {
    deleteCookie("token");
    deleteCookie("ID");
    setToken(false);
    window.location.reload();
  };

  return (
    <>
      <Topbar
        id="topbar"
        className={`d-flex align-items-center fixed-top ${
          scrolled ? "topbar-scrolled" : ""
        }`}
        style={{ backgroundColor: scrolled ? '' : 'rgba(255, 255, 255, 0)' }}
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
        style={{ backgroundColor: scrolled ? '' : 'rgba(255, 255, 255, 0)' }}
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
              <li>
                <a className="nav-link scrollto" href="#menu">
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
                    <a href="Reserva">Reservas</a>
                  </li>
                  <li>
                    <a href="/Productos">Productos</a>
                  </li>
                  <li>
                    <a href="/Consumiciones">Consumiciones</a>
                  </li>
                  <li>
                    <a href="/">Drop Down 2</a>
                  </li>
                  <li>
                    <a href="/">Drop Down 3</a>
                  </li>
                  <li>
                    <a href="/">Drop Down 4</a>
                  </li>
                </ul>
              </li>
            </ul>
            <MobileNavToggle className="bi bi-list mobile-nav-toggle"></MobileNavToggle>
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
