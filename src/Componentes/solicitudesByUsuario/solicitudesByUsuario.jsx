import React, { useEffect, useState, useRef } from "react";
import "./solicitudesByUsuario.css";
import { getSolicitudesByUsuario, cancelarSolicitud } from '../../Servicios/user.service';
import { getID } from '../../Servicios/Cookies/cookies';
import { Paginator } from 'primereact/paginator';
import { useNavigate } from "react-router-dom";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

import { Toast } from 'primereact/toast';

function SolicitudesByUsuario(){

    
    /*--------- PARA LOS MENSAJES EMERGENTES ---------*/ 
    const toast = useRef(null);
    const navigate = useNavigate();
    const showSuccess = () => {
        toast.current.show({severity:'info', summary: 'Éxito', detail:'Solicitud cancelada', life: 3000});
    }
    const showError = () => {
        toast.current.show({severity:'error', summary: 'Error', detail:'Error al cancelar la solicitud,', life: 3000});
    }
    /*--------------------------------------------*/ 

    /*--------- SOLICITUD LOGICA  ---------*/ 
    const [listaSolicitudes, setSolicitudes] = useState([]);
    const [first, setFirst] = useState(0);
    const [rows, setRows] = useState(10);
    const usuarioID = getID('ID');

    useEffect(() => {
        getSolicitudesByUsuario(usuarioID)
        .then(data => {
            setSolicitudes(data);
        })
        .catch(error => {
            console.error('Ops, un error', error);
        });
    }, []);

    const handleCancelarSolicitud = (id) => {
        cancelarSolicitud(id)
            .then(response => {
                console.log('Solicitud cancelada', response);
                showSuccess();
                setTimeout(() => {
                    window.location.reload();
                }, 3000);
            })
            .catch(error => {
                showError();
                console.error('Error al cancelar la solicitud', error);
            });
    };
    /*--------- SOLICITUD LOGICA  ---------*/

    /*--------- CONFIRMACIÓN CANCELACIÓN SOLICITUD  ---------*/ 
    const [showModal, setShowModal] = useState(false);
    const [selectedSolicitudId, setSelectedSolicitudId] = useState(null);

    const handleConfirmCancel = () => {
        if (selectedSolicitudId !== null) {
            handleCancelarSolicitud(selectedSolicitudId);
            setShowModal(false);
        }
    };

    const handleCancelClick = (id) => {
        setSelectedSolicitudId(id);
        setShowModal(true);
    };

    function ConfirmationModal({ show, onHide, onConfirm }) {
        return (
          <Modal show={show} onHide={onHide}>
            <Modal.Header closeButton>
              <Modal.Title>Confirmación</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              ¿Estás seguro de que deseas cancelar tu solicitud?
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={onHide}>
                Cerrar
              </Button>
              <Button variant="danger" onClick={onConfirm}>
                Cancelar solicitud
              </Button>
            </Modal.Footer>
          </Modal>
        );
      }
    /*--------- CONFIRMACIÓN CANCELACIÓN SOLICITUD  ---------*/
    
    const onPageChange = (event) => {
        setFirst(event.first);
        setRows(event.rows);
    };

    const getStatusClass = (estado) => {
        switch (estado) {
            case 'ACEPTADO':
                return 'status-aceptado';
            case 'RECHAZADO':
                return 'status-rechazado';
            case 'PENDIENTE':
                return 'status-pendiente';
            case 'CANCELADA':
                return 'status-cancelada';
        }
    };

    const paginatedSolicitudes = listaSolicitudes.slice(first, first + rows);

    return(
    <>
    <Toast ref={toast} />
    <ConfirmationModal 
        show={showModal} 
        onHide={() => setShowModal(false)} 
        onConfirm={handleConfirmCancel} 
    />
        {listaSolicitudes.length === 0 ? (
            <div style={{ textAlign: "center" }} className="no-solicitudes mb-5">
                <p>No hay solicitudes aún.</p>
            </div>
        ) : (
        paginatedSolicitudes.map(solicitud => (
            <section className="solicitudes-container">
                <div className="tarjeta">
                    <div className="img-data">
                        <img className="img" src={solicitud.gatoDTO.imagen}></img>
                        <div className="data">
                            <h6 className="highlight-p">Solicitud para adoptar a <span>{solicitud.gatoDTO.nombre}</span></h6>
                            <p className="small-text italic">{solicitud.titulo}</p>
                            <p className="small-text italic">{solicitud.mensaje}</p>
                        </div>
                    </div>
                    
                    <div className={`status ${getStatusClass(solicitud.estadoSolicitud)}`}>
                        <p>{solicitud.estadoSolicitud}</p>
                            {solicitud.estadoSolicitud === 'PENDIENTE' && ( //Si el estado de la solicitud es PENDIENTE se dará la opcion de cancelar la solicitud
                            <button className="cancelar-button" onClick={() => handleCancelClick(solicitud.id)}>
                                Cancelar solicitud
                            </button> )}
                    </div>
                </div>
            </section>
            ))
        )}

        <div>
            <Paginator className="paginator-otros" first={first} rows={rows} totalRecords={listaSolicitudes.length} rowsPerPageOptions={[10, 20, 30]} onPageChange={onPageChange} />
        </div>
    </>
    )
}

export default SolicitudesByUsuario;
