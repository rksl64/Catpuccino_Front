import React, { useEffect, useState, useRef  } from 'react';
import "./modalEstadoSolicitud.css";
import logito from "../../assets/logito.png";
import { getSolicitudOneByOne } from '../../Servicios/user.service';
import { aceptarSolicitud } from '../../Servicios/user.service';
import { rechazarSolicitud } from '../../Servicios/user.service';
import { useNavigate } from "react-router-dom";

import { Dialog } from 'primereact/dialog';
import { Toast } from 'primereact/toast';

function ModalEstadoSolicitud({ isVisible, solicitudId, onClose }){

    /*--------- PARA LOS MENSAJES EMERGENTES ---------*/ 
    const toast = useRef(null);
    const navigate = useNavigate();
    const showSuccess = () => {
        toast.current.show({severity:'success', summary: 'Éxito', detail:'¡Solicitud aceptada!', life: 3000});
    }
    const showInfo = () => {
        toast.current.show({severity:'info', summary: 'Éxito', detail:'Solicitud rechazada', life: 3000});
    }
    /*--------------------------------------------*/ 


    /*--------- LISTAR SOLICITUD LOGICA ---------*/ 
    const [solicitud, setSolicitud] = useState(null);

    useEffect(() => {
        if (solicitudId) {
            getSolicitudOneByOne(solicitudId)
                .then(data => {
                    setSolicitud(data);
                })
                .catch(error => {
                    console.error('Ops, un error', error);
                });
        }
    }, [solicitudId]);
    /*--------- LISTAR SOLICITUD LOGICA ---------*/ 

    /*--------- ACEPTAR/RECHAZAR SOLICITUD LOGICA ---------*/ 
    const handleAceptarSolicitud = (id) => {
        aceptarSolicitud(id)
            .then(response => {
                console.log('Solicitud aceptada', response);
                showSuccess();
                setTimeout(() => {
                    navigate("/SolicitudesAdopcion");
                }, 3000);
            })
            .catch(error => {
                console.error('Error al aceptar la solicitud', error);
            });
    };

    const handleRechazarSolicitud = (id) => {
        rechazarSolicitud(id)
            .then(response => {
                console.log('Solicitud rechazada', response);
                showInfo();
                setTimeout(() => {
                    navigate("/SolicitudesAdopcion");
                }, 3000);
            })
            .catch(error => {
                console.error('Error al rechazar la solicitud', error);
            });
    };
    /*--------- ACEPTAR/RECHAZAR SOLICITUD LOGICA ---------*/ 

    const [visible, setVisible] = useState(false);
    const headerElement = (
        <div className="inline-flex align-items-center justify-content-center gap-2">
            <img src={logito} style={{ height: "4rem", width: "auto" }}></img>
            <span className="font-bold white-space-nowrap"><h3>Detalles de la solicitud</h3></span>
        </div>
    );

    return(
        <>
        <div className="card flex justify-content-center">
        <Toast ref={toast} />
            <Dialog visible={isVisible} modal header={headerElement} style={{ width: '50rem' }} onHide={onClose}>
            {solicitud ? (
                <div className='contenido-modal-estadoSolicitud' key={solicitud.id}>
                    <h5>Motivo: <span className='italic'>{solicitud.titulo}</span></h5>
                    <p>{solicitud.titulo}</p>

                    <div className='button-aceppt-decline'>
                        <button className='decline' onClick={() => handleRechazarSolicitud(solicitud.id)}>Rechazar</button>
                        <button className='acept' onClick={() => handleAceptarSolicitud(solicitud.id)}>Aceptar</button>
                    </div>
                </div>
            ) : (
                <p>Cargando...</p>
            )}
            </Dialog>
        </div>
        </>
    )
}

export default ModalEstadoSolicitud;