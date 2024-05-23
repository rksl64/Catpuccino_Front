import React, { useEffect, useState, useRef } from "react";
import "./solicitudesRechazadas.css";
import pawsBanner from '../../assets/img/adopcion/pawsBanner.jpg';
import { Link } from 'react-router-dom';
import { getSolicitudesRechazadas } from "../../Servicios/user.service";
        

function SolicitudRechazadas(){

    const [listaSolicitudes, setSolicitudes] = useState([]);

    useEffect(() => {
        getSolicitudesRechazadas()
        .then(data => {
            setSolicitudes(data);
        })
        .catch(error => {
            console.error('Ops, un error', error);
        });
    }, []);

    return(
    <>
        {listaSolicitudes.map(solicitud => (
        <section className="solicitudes-container">
            <div className="tarjeta">
                <div className="img-data">
                    <img className="img" src={solicitud.gatoDTO.imagen}></img>
                    <div className="data">
                        <h6 className="highlight-p">Solicitud para adoptar a <span>{solicitud.gatoDTO.nombre}</span></h6>
                        <p className="small-text">Hecha por <span>{solicitud.usuarioDTO.nombre}</span></p>
                        <p className="small-text italic">{solicitud.titulo}</p>
                    </div>
                </div>
                
                <div className="status-rechazado">
                    <p>{solicitud.estadoSolicitud}</p>
                </div>
            </div>
        </section>
        ))}
    </>
    )
}

export default SolicitudRechazadas;
