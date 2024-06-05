import React, { useEffect, useState, useRef } from "react";
import "./gestionGatos.css";
import pawsBanner from '../../assets/img/adopcion/pawsBanner.jpg';
import { Link } from 'react-router-dom';
import { getGatosDisponibles, getNumSolicitudByIdGato } from '../../Servicios/user.service';
import { Paginator } from 'primereact/paginator';

import ModalEditarGato from "../../Componentes/ModalEditarGato/modalEditarGato";

function GestionGatos(){
    const [listaGatos, setGatos] = useState([]);
    const [first, setFirst] = useState(0);
    const [rows, setRows] = useState(10);

    useEffect(() => {
        async function fetchData() {
            try {
                const gatos = await getGatosDisponibles();
                const gatosConSolicitudes = await Promise.all(gatos.map(async (gato) => {
                    const numSolicitudes = await getNumSolicitudByIdGato(gato.id);
                    return { ...gato, numSolicitudes };
                }));
                setGatos(gatosConSolicitudes);
            } catch (error) {
                console.error('Ops, un error', error);
            }
        }
        fetchData();
    }, []);

    const onPageChange = (event) => {
        setFirst(event.first);
        setRows(event.rows);
    };
    
    const paginatedSolicitudes = listaGatos.slice(first, first + rows);

    return(
    <>
    <body className="gestion-gatos">
        <section className='TopBanner' style={{backgroundImage: `url(${pawsBanner})`}}></section>

        <main className="container">
            <h1>Gestión administrativa de los gatos</h1>
            <p>Estos son todos los gatos que actualmente residen en Catpuccino</p>

            {paginatedSolicitudes.map(gato => (
                <section className="card mb-4">
                    <div className="tarjeta">
                        <div className="img-data">
                            <img className="img" src={gato.imagen}></img>
                            <div className="data">
                                <h3>{gato.nombre}</h3>
                                <Link className="button-link" to="/SolicitudesAdopcion" style={{ textDecoration: 'none' }}>
                                    {gato.numSolicitudes && ( //Si no hay solicitudes asociadas no se muestra el mensaje. Si solo hay una solicitud, el mensaje aparecera en singular
                                        <h6>
                                            {gato.numSolicitudes} solicitud{gato.numSolicitudes === 1 ? '' : 'es'} de adopción asociada
                                        </h6>
                                    )}
                                </Link>
                            </div>
                        </div>
                        
                        <ModalEditarGato gatoId={gato.id}></ModalEditarGato>
                        {/* <Link className="button-link" to="/GestionGatos" style={{ textDecoration: 'none' }}><i class='bx bxs-pencil' ></i>Editar</Link> */}

                    </div>
                </section>
            ))}

        <div>
            <Paginator first={first} rows={rows} totalRecords={listaGatos.length} rowsPerPageOptions={[10, 20, 30]} onPageChange={onPageChange} />
        </div>

        </main>

    </body>
    
    </>
    )
}

export default GestionGatos;
