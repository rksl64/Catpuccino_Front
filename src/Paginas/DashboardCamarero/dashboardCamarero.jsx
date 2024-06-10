import React from "react";
import "./dashboardCamarero.css";
import coffeBanner from '../../assets/img/adopcion/banner.jpg';
import camarero from '../../assets/img/adopcion/camareroCafeteria.jpg';
import { Link } from 'react-router-dom';

import { Divider } from 'primereact/divider';
        

function DashboardCamarero(){

    return(
    <>
    <body className="dashboard-camarero pb-5">
        <section className='TopBanner' style={{backgroundImage: `url(${coffeBanner})`, }}></section>

        <main className='Main container block-padding'>
            <section className='row'>
                    <h2>Dashboard camarero</h2>
                    <div className='col'>
                        <div className='row border-irregular1 block-padding'> {/* IMG DASHBOARD */}
                            <img src={camarero}></img>
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
                                <Link to="/" className="animated-button" style={{ textDecoration: 'none' }}>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="arr-2" viewBox="0 0 24 24">
                                        <path
                                        d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"
                                        ></path>
                                    </svg>
                                    <span className="text"><i className='bx bxs-calculator'></i>GESTIÓN DE CUENTAS</span>
                                    <span className="circle"></span>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="arr-1" viewBox="0 0 24 24">
                                        <path
                                        d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"
                                        ></path>
                                    </svg>
                                </Link>

                                <Link to="/" className="animated-button" style={{ textDecoration: 'none' }}>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="arr-2" viewBox="0 0 24 24">
                                        <path
                                        d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"
                                        ></path>
                                    </svg>
                                    <span className="text"><i className='bx bxs-bell-off'></i>RESERVAS AUSENTES</span>
                                    <span className="circle"></span>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="arr-1" viewBox="0 0 24 24">
                                        <path
                                        d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"
                                        ></path>
                                    </svg>
                                </Link>

                                <Link to="/SolicitudesAdopcion" class="animated-button" style={{ textDecoration: 'none' }}>
                                    <svg xmlns="http://www.w3.org/2000/svg" class="arr-2" viewBox="0 0 24 24">
                                        <path
                                        d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"
                                        ></path>
                                    </svg>
                                    <span className="text"><i className='bx bxs-food-menu' ></i>AÑADIR CUENTAS</span>
                                    <span className="circle"></span>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="arr-1" viewBox="0 0 24 24">
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
                                    <span class="text"> <i class='pi pi-address-book' ></i>HISTORIAL DE CUENTAS</span>
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

export default DashboardCamarero;
