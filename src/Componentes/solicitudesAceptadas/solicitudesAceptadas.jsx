import React, { useEffect, useState, useRef } from "react";
import { getSolicitudesAceptadas } from '../../Servicios/user.service';
import "./solicitudesAceptadas.css";
// import "./solicitudesAdopcion.css";

        
function SolicitudAceptadas(){
    const [listaSolicitudes, setSolicitudes] = useState([]);

    useEffect(() => {
        getSolicitudesAceptadas()
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
                
                <div className="status-aceptados">
                    <p>{solicitud.estadoSolicitud}</p>
                </div>
            </div>
        </section>
        ))}
    </>
    )
}

export default SolicitudAceptadas;
