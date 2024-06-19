import React, { useEffect, useState } from "react";
import "./dashboardGestorGatos.css";
import pawsBanner from '../../assets/img/adopcion/pawsBanner.jpg';
// import paaws from '../../assets/img/adopcion/paaws.jpg';
import cats from '../../assets/img/adopcion/twocats.jpg';
import { Link } from 'react-router-dom';
import Formulario from "../../Componentes/Formulario/formulario";

import { Divider } from 'primereact/divider';
        

function DashboardGestorGatos(){

    return(
    <>
    <body className="dashboard-gatos pb-5">
        <section className='TopBanner' style={{backgroundImage: `url(${pawsBanner})`}}></section>

        <main className='Main container block-padding'>
            <section className='row'>
                    <h2>Dashboard administrador de gatos</h2>
                    <div className='col'>
                        <div className='row border-irregular1 block-padding'> {/* IMG DASHBOARD */}
                            <img src={cats}></img>
                        </div>  
                    </div>
                    <div className='col'>
                        <div className='row p-5'> {/* DASHBOARD BOTONES */}
                            <Divider align="left" style={{ backgroundColor: '#FAF9F6' }} className="mb-5">
                                <div className="inline-flex align-items-center divider">
                                    <i class='bx bxs-category category' ></i>
                                    <b>Sistema</b>
                                </div>
                            </Divider>
                            <div className='buttons'>
                                <Link to="/GestionGatos" class="animated-button" style={{ textDecoration: 'none' }}>
                                    <svg xmlns="http://www.w3.org/2000/svg" class="arr-2" viewBox="0 0 24 24">
                                        <path
                                        d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"
                                        ></path>
                                    </svg>
                                    <span class="text"><i class='bx bxs-cat'></i> G A T O S</span>
                                    <span class="circle"></span>
                                    <svg xmlns="http://www.w3.org/2000/svg" class="arr-1" viewBox="0 0 24 24">
                                        <path
                                        d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"
                                        ></path>
                                    </svg>
                                </Link>

                                <Formulario></Formulario>

                                {/* <Link to="/FormularioGatos" class="animated-button" style={{ textDecoration: 'none' }}>
                                    <svg xmlns="http://www.w3.org/2000/svg" class="arr-2" viewBox="0 0 24 24">
                                        <path
                                        d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"
                                        ></path>
                                    </svg>
                                    <span class="text"> <i class='bx bxs-message-square-add'></i> A Ñ A D I R <br></br> G A T O</span>
                                    <span class="circle"></span>
                                    <svg xmlns="http://www.w3.org/2000/svg" class="arr-1" viewBox="0 0 24 24">
                                        <path
                                        d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"
                                        ></path>
                                    </svg>
                                </Link> */}

                                <Link to="/SolicitudesAdopcion" class="animated-button" style={{ textDecoration: 'none' }}>
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
                                </Link>

                                <Link to="/HistorialAdopciones" class="animated-button" style={{ textDecoration: 'none' }}>
                                    <svg xmlns="http://www.w3.org/2000/svg" class="arr-2" viewBox="0 0 24 24">
                                        <path
                                        d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"
                                        ></path>
                                    </svg>
                                    <span class="text"> <i class='bx bxs-bone' ></i> H I S T O R I A L <br></br>  A D O P C I O N E S</span>
                                    <span class="circle"></span>
                                    <svg xmlns="http://www.w3.org/2000/svg" class="arr-1" viewBox="0 0 24 24">
                                        <path
                                        d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"
                                        ></path>
                                    </svg>
                                </Link>
                            </div>
                        </div>  
                    </div>
            </section>
        </main>

    </body>
    
    </>
    )
}

export default DashboardGestorGatos;
