import React, { useEffect, useState, useRef  } from 'react';
import "./modalAdopcion.css";
import logito from "../../assets/logito.png";
import { hacerSolicitud } from '../../Servicios/user.service';
import { getID } from '../../Servicios/Cookies/cookies';
import { useNavigate } from "react-router-dom";

import { Dialog } from 'primereact/dialog';
import { Button } from 'primereact/button';
import { Toast } from 'primereact/toast';

function ModalAdopcion({ gatoId }){

    /*--------- PARA LOS MENSAJES EMERGENTES ---------*/ 
    const toast = useRef(null);
    const navigate = useNavigate();
    const showSuccess = () => {
        toast.current.show({severity:'success', summary: 'Éxito', detail:'¡Solicitud enviada!', life: 3000});
    }
    const showError = () => {
        toast.current.show({severity:'error', summary: 'Error', detail:'Ops, sucedió un error,', life: 3000});
    }
    const showWarn = () => {
        toast.current.show({severity:'warn', summary: 'Aviso', detail:'Faltan campos por rellenar', life: 3000});
    }
    const showWarnLogin = () => {
        toast.current.show({severity:'warn', summary: 'Aviso', detail:'Debes estar logueado para adoptar', life: 3000});
    }
    /*--------------------------------------------*/ 


    /*--------- SOLICITUD LOGICA  ---------*/ 
    const [titulo, setTitulo] = useState('');
    const [mensaje, setMensaje] = useState('');
    const [estadoSolicitud] = useState('PENDIENTE');
    const usuarioID = getID('ID');

    //Si el usuario no esta logueado, me devuelve a la pantalla de login
    const handleButtonClick = () => {
        if (usuarioID) {
            setVisible(true);
        } else {
            showWarnLogin();
            setTimeout(() => {
                navigate("/Login");
            }, 3000);
        }
    };

    const newSolicitud = async (event) => {
        event.preventDefault();
        if (!titulo || !mensaje ) {
            showWarn();
            return;
        }

        try{
            await hacerSolicitud({
                titulo,
                mensaje,
                estadoSolicitud,
                gatoDTO : {
                    id: parseInt(gatoId)},
                usuarioDTO : {
                    id: parseInt(usuarioID)
                }
            });
            showSuccess();
            setTimeout(() => {
                navigate("/");
            }, 3000);
        }catch (error) {
            showError();
            console.error('Ops, un error', error);
        }
    }

    /*--------- SOLICITUD LOGICA  ---------*/ 

    const [visible, setVisible] = useState(false);
    const headerElement = (
        <div className="inline-flex align-items-center justify-content-center gap-2">
            <img src={logito} style={{ height: "4rem", width: "auto" }}></img>
            <span className="font-bold white-space-nowrap"><h3>Solicitud de adopción</h3></span>
        </div>
    );

    return(
        <>
        <div className="card flex justify-content-center">
        <Toast ref={toast} />
            {/* <button class="like-button" icon="pi pi-external-link" onClick={() => setVisible(true)}><p>¡Quiero adoptar!</p></button> */}
            <button class="like-button" icon="pi pi-external-link" onClick={handleButtonClick}><p>¡Quiero adoptar!</p></button>
            <Dialog visible={visible} modal header={headerElement} style={{ width: '50rem' }} onHide={() => setVisible(false)}>
                <p className="mb-4"> ¡Cuentanos por qué te gustaría añadir un nuevo miembro felino a tu familia! </p>
                <form onSubmit={newSolicitud}>
                    <div className='contenido-modal'>
                        <input className='mb-3' value={titulo} onChange={(e) => setTitulo(e.target.value)} placeholder='Título para tu solicitud' maxLength={20}></input>
                        <textarea value={mensaje} onChange={(e) => setMensaje(e.target.value)} placeholder='Cuentanos más a detalle por qué quieres adoptar a este gato' maxLength={100}></textarea>
                        <Button className='button-send' label="Enviar solicitud" icon="pi pi-check" type="submit" onClick={() => setVisible(false)} autoFocus />
                    </div>
                </form>
            </Dialog>
        </div>
        </>
    )
}

export default ModalAdopcion;