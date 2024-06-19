import React, { useEffect, useState, useRef } from "react";
import { getSolicitudesAceptadas } from '../../Servicios/user.service';
import "./solicitudesAceptadas.css";
import { Paginator } from 'primereact/paginator';

        
function SolicitudAceptadas(){
    const [listaSolicitudes, setSolicitudes] = useState([]);
    const [first, setFirst] = useState(0);
    const [rows, setRows] = useState(10);

    useEffect(() => {
        getSolicitudesAceptadas()
        .then(data => {
            setSolicitudes(data);
        })
        .catch(error => {
            console.error('Ops, un error', error);
        });
    }, []);

    const onPageChange = (event) => {
        setFirst(event.first);
        setRows(event.rows);
    };
    
    const paginatedSolicitudes = listaSolicitudes.slice(first, first + rows);


    return(
    <>
        {listaSolicitudes.length === 0 ? (
            <div style={{ textAlign: "center" }} className="no-solicitudes mb-5">
                <h3>No hay solicitudes aceptadas aún.</h3>
            </div>
        ) : (
        paginatedSolicitudes.map(solicitud => (
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
            ))
        )}

        <div>
            <Paginator first={first} rows={rows} totalRecords={listaSolicitudes.length} rowsPerPageOptions={[10, 20, 30]} onPageChange={onPageChange} />
        </div>
    </>
    )
}

export default SolicitudAceptadas;
