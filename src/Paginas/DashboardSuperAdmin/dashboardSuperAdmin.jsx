import React, { useState } from "react";
import "./dashboardSuperAdmin.css";
import pawsBanner from "../../assets/img/adopcion/admin-banner.jpg";
import catpuccino from "../../assets/img/adopcion/catpuccinoig.jpg";
import { Link } from "react-router-dom";
import ModalCamarero from "./Modals/modalCamarero.js"
import ModalAdopcion from "./Modals/modalAdopcion.js"
import { Dialog } from "primereact/dialog";
import { Divider } from "primereact/divider";

function DashboardSuperAdmin() {
  const [visibleCama, setVisibleCama] = useState(false);
  const [visibleAdop, setVisibleAdop] = useState(false);

  return (
    <>
      <body className="dashboard-superAdmin pb-5">
        <section
          className="TopBanner"
          style={{ backgroundImage: `url(${pawsBanner})` }}
        ></section>

        <main className="Main container block-padding">
          <section className="row">
            <h2>Dashboard administrador general</h2>
            <div className="col">
              <div className="row border-irregular1 block-padding">
                {" "}
                {/* IMG DASHBOARD */}
                <img src={catpuccino}></img>
              </div>
            </div>
            <div className="col">
              <div className="row p-5">
                {" "}
                {/* DASHBOARD BOTONES */}
                <Divider
                  align="left"
                  style={{ backgroundColor: "#FAF9F6" }}
                  className="mb-5"
                >
                  <div className="inline-flex align-items-center divider">
                    <i class="bx bxs-category category"></i>
                    <b>Sistema</b>
                  </div>
                </Divider>
                <div className="buttons">
                  <button
                    onClick={() => setVisibleCama(true)}
                    class="animated-button"
                    style={{ textDecoration: "none" }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="arr-2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
                    </svg>
                    <span class="text">
                      <i class="bx bxs-user"></i> NUEVO CAMARERO
                    </span>
                    <span class="circle"></span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="arr-1"
                      viewBox="0 0 24 24"
                    >
                      <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
                    </svg>
                  </button>

                  <button
                    onClick={() => setVisibleAdop(true)}
                    class="animated-button"
                    style={{ textDecoration: "none" }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="arr-2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
                    </svg>
                    <span class="text">
                      <i class="bx bxs-user"></i> NUEVO GESTORGATOS
                    </span>
                    <span class="circle"></span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="arr-1"
                      viewBox="0 0 24 24"
                    >
                      <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
                    </svg>
                  </button>
                  <Link
                    to="../ListarReservas"
                    class="animated-button"
                    style={{ textDecoration: "none" }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="arr-2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
                    </svg>
                    <span class="text">
                    <i class='bx bxs-book-content'></i>HISTORIAL DE RESERVAS
                    </span>
                    <span class="circle"></span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="arr-1"
                      viewBox="0 0 24 24"
                    >
                      <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
                    </svg>
                  </Link>
                  <Link
                    to="../ListarAdopciones"
                    class="animated-button"
                    style={{ textDecoration: "none" }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="arr-2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
                    </svg>
                    <span class="text">
                    <i class='bx bxs-book-content'></i>HISTORIAL DE ADOPCIONES
                    </span>
                    <span class="circle"></span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="arr-1"
                      viewBox="0 0 24 24"
                    >
                      <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
                    </svg>
                  </Link>
                  <Dialog
                    header="Crear Usuario Camarero"
                    visible={visibleCama}
                    style={{ width: "40vw", height: '100vh' }}
                    onHide={() => {
                      if (!visibleCama) return;
                      setVisibleCama(false);
                    }}
                  >
                    <ModalCamarero></ModalCamarero>
                  </Dialog>
                  <Dialog
                    header="Crear Usuario Adopción"
                    visible={visibleAdop}
                    style={{ width: "40vw", height: '100vh', }}
                    onHide={() => {
                      if (!visibleAdop) return;
                      setVisibleAdop(false);
                    }}
                  >
                    <ModalAdopcion></ModalAdopcion>
                  </Dialog>
                 
                </div>
              </div>
            </div>
          </section>
        </main>
      </body>
    </>
  );
}

export default DashboardSuperAdmin;
