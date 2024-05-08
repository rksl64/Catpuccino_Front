import React, { useEffect, useState, useRef } from "react";
import "./solicitudesAdopcion.css";
import pawsBanner from '../../assets/img/adopcion/pawsBanner.jpg';
import { Link } from 'react-router-dom';
        

function SolicitudAdopciones(){


    return(
    <>
    <body className="gestion-gatos">
        <section className='TopBanner' style={{backgroundImage: `url(${pawsBanner})`}}></section>

        <main className="container">
            <h1>Gestión administrativa de los gatos</h1>
            <p>Estos son todos los gatos que actualmente residen en Catpuccino</p>

            {/* {listaGatos.map(gato => (
                <section className="card mb-4">
                    <div className="tarjeta">
                        <div className="img-data">
                            <img className="img" src={gato.imagen}></img>
                            <div className="data">
                                <h3>{gato.nombre}</h3>
                                <Link className="button-link" to="/GestionGatos" style={{ textDecoration: 'none' }}>
                                    {gato.numSolicitudes && ( //Si no hay solicitudes asociadas no se muestra el mensaje. Si solo hay una solicitud, el mensaje aparecera en singular
                                        <h6>
                                            {gato.numSolicitudes} solicitud{gato.numSolicitudes === 1 ? '' : 'es'} de adopción asociada
                                        </h6>
                                    )}
                                </Link>
                            </div>
                        </div>
                        
                        <div className="options">
                            <Link className="button-link" to="/GestionGatos" style={{ textDecoration: 'none' }}><i class='bx bxs-pencil' ></i>Editar</Link>
                        </div>
                    </div>
                </section>
            ))} */}


        </main>

    </body>
    
    </>
    )
}

export default SolicitudAdopciones;
