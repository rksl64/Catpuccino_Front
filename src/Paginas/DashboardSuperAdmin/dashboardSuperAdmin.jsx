import React, { useState } from "react";
import "./dashboardSuperAdmin.css";
import pawsBanner from "../../assets/img/adopcion/pawsBanner.jpg";
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
                      <i class="bx bxs-user"></i> N U E V O <br></br>C A M A R E
                      R O
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
                      <i class="bx bxs-cat"></i> N U E V O <br></br> G E S T O R
                      &nbsp; G A T O S
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
                      <i class="bx bxs-user"></i>H I S T O R I A L <br/> D E&nbsp; R E S E R V A S
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
                      <i class="bx bxs-cat"></i>H I S T O R I A L &nbsp; D E <br/>&nbsp; A D O P C I Ó N
                      &nbsp; G A T O S
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
                  {/* <Link to="/SolicitudesAdopcion" class="animated-button" style={{ textDecoration: 'none' }}>
                                    <svg xmlns="http://www.w3.org/2000/svg" class="arr-2" viewBox="0 0 24 24">
                                        <path
                                        d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"
                                        ></path>
                                    </svg>
                                    <span class="text"><i class='bx bxs-inbox' ></i> S O L I C I T U D E S</span>
                                    <span class="circle"></span>
                                    <svg xmlns="http://www.w3.org/2000/svg" class="arr-1" viewBox="0 0 24 24">
                                        <path
                                        d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"
                                        ></path>
                                    </svg>
                                </Link>

                                <Link to="/HistorialSolicitudes" class="animated-button" style={{ textDecoration: 'none' }}>
                                    <svg xmlns="http://www.w3.org/2000/svg" class="arr-2" viewBox="0 0 24 24">
                                        <path
                                        d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"
                                        ></path>
                                    </svg>
                                    <span class="text"> <i class='pi pi-address-book' ></i> H I S T O R I A L <br></br>  S O L I C I T U D E S</span>
                                    <span class="circle"></span>
                                    <svg xmlns="http://www.w3.org/2000/svg" class="arr-1" viewBox="0 0 24 24">
                                        <path
                                        d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"
                                        ></path>
                                    </svg>
                                </Link> */}
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
