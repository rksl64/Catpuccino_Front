import React, { useEffect, useState, useRef } from "react";
import "./gestionGatos.css";
import { addGatos } from "../../Servicios/user.service";
import { getRazas } from "../../Servicios/user.service";

import gatoEj from '../../assets/img/adopcion/gato.png';

import { Toast } from 'primereact/toast';
        

function GestionGatos(){

    /*--------- PARA LOS MENSAJES EMERGENTES ---------*/ 
    const toast = useRef(null);
    const showSuccess = () => {
        toast.current.show({severity:'success', summary: 'Éxito', detail:'¡Registro completado!', life: 3000});
    }
    const showError = () => {
        toast.current.show({severity:'error', summary: 'Error', detail:'Ops, sucedió un error,', life: 3000});
    }
    const showWarn = () => {
        toast.current.show({severity:'warn', summary: 'Aviso', detail:'Faltan campos por rellenar', life: 3000});
    }
    /*--------------------------------------------*/ 

    return(
    <>
    <main className="gestion-gatos">
    <Toast ref={toast} />

        <div className="container">
            <h1>Gestión administrativa de los gatos</h1>
            <p>Estos son todos los gatos que actualmente residen en Catpuccino</p>

            <button>Añadir gato</button>

            <section className="card">
                <div className="img-data">
                    <img src={gatoEj}></img>
                    <div className="data">
                        <h3>Nombre gato</h3>
                        <h6>5 solicitudes de adopción asociadas</h6>
                    </div>
                </div>

                <div className="options">
                    <button>Más detalles</button>
                    <button>Editar</button>
                    <button>Eliminar</button>
                </div>

            </section>

        </div>

    </main>
    
    </>
    )
}

export default GestionGatos;
