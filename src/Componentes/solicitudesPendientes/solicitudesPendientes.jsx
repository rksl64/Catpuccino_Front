import React, { useEffect, useState, useRef } from "react";
import "./solicitudesPendientes.css";
import pawsBanner from '../../assets/img/adopcion/pawsBanner.jpg';
import { Link } from 'react-router-dom';
import { getSolicitudesPendientes } from "../../Servicios/user.service";
import ModalEstadoSolicitud from "../ModalEstadoSolicitud/modalEstadoSolicitud";
import { Paginator } from 'primereact/paginator';

function SolicitudPendientes(){
    const [listaSolicitudes, setSolicitudes] = useState([]);
    const [selectedSolicitudId, setSelectedSolicitudId] = useState(null);
    const [isModalVisible, setModalVisible] = useState(false);
    const [first, setFirst] = useState(0);
    const [rows, setRows] = useState(10);

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

    const onPageChange = (event) => {
        setFirst(event.first);
        setRows(event.rows);
    };
    
    const paginatedSolicitudes = listaSolicitudes.slice(first, first + rows);

    return(
    <>
        {listaSolicitudes.length === 0 ? (
            <div style={{ textAlign: "center" }} className="no-solicitudes mb-5">
                <h3>No hay solicitudes pendientes.</h3>
            </div>
        ) : (
        paginatedSolicitudes.map((solicitud, index) => (
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
            ))
        )}

        {selectedSolicitudId && (
                        <ModalEstadoSolicitud
                            isVisible={isModalVisible}
                            solicitudId={selectedSolicitudId}
                            onClose={closeModal}
                        />
                    )}

        <div>
            <Paginator first={first} rows={rows} totalRecords={listaSolicitudes.length} rowsPerPageOptions={[10, 20, 30]} onPageChange={onPageChange} />
        </div>
    </>
    )
}

export default SolicitudPendientes;
