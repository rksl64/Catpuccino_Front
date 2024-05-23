import React, { useEffect, useState, useRef } from "react";
import "./solicitudesPendientes.css";
import pawsBanner from '../../assets/img/adopcion/pawsBanner.jpg';
import { Link } from 'react-router-dom';
import { getSolicitudesPendientes } from "../../Servicios/user.service";
import ModalEstadoSolicitud from "../ModalEstadoSolicitud/modalEstadoSolicitud";
        

function SolicitudPendientes(){

    const [listaSolicitudes, setSolicitudes] = useState([]);
    const [selectedSolicitudId, setSelectedSolicitudId] = useState(null);
    const [isModalVisible, setModalVisible] = useState(false);

    useEffect(() => {
        getSolicitudesPendientes()
        .then(data => {
            setSolicitudes(data);
        })
        .catch(error => {
            console.error('Ops, un error', error);
        });
    }, []);

    const handleDoubleClick = (solicitudId) => {
        setSelectedSolicitudId(solicitudId);
        setModalVisible(true);
    };

    const closeModal = () => {
        setModalVisible(false);
        setSelectedSolicitudId(null);
    };

    return(
    <>
        {listaSolicitudes.map((solicitud, index) => (
        <section 
            key={index}
            onDoubleClick={() => handleDoubleClick((solicitud.id))}
            className="solicitudes-container">
            <div className="tarjeta">
                <div className="img-data">
                    <img className="img" src={solicitud.gatoDTO.imagen}></img>
                    <div className="data">
                        <h6 className="highlight-p">Solicitud para adoptar a <span>{solicitud.gatoDTO.nombre}</span></h6>
                        <p className="small-text">Hecha por <span>{solicitud.usuarioDTO.nombre}</span></p>
                        <p className="small-text italic">{solicitud.titulo}</p>
                    </div>
                </div>
                
                <div className="status-pendiente">
                    <p>{solicitud.estadoSolicitud}</p>
                </div>
            </div>
        </section>
        ))}

        {selectedSolicitudId && (
                        <ModalEstadoSolicitud
                            isVisible={isModalVisible}
                            solicitudId={selectedSolicitudId}
                            onClose={closeModal}
                        />
                    )}
    </>
    )
}

export default SolicitudPendientes;
