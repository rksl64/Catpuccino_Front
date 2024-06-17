import React, { useEffect, useState } from "react";
import "./HistorialSolicitudes.css";
import pawsBanner from '../../assets/img/adopcion/banner.jpg';
import { getAllSolicitudes } from '../../Servicios/user.service';
import { Paginator } from 'primereact/paginator';
        

function HistorialSolicitudes(){
    const [listaSolicitudes, setSolicitudes] = useState([]);
    const [first, setFirst] = useState(0);
    const [rows, setRows] = useState(10);

    useEffect(() => {
        getAllSolicitudes()
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
    <body className="gestion-gatos">
        <section className='TopBanner' style={{backgroundImage: `url(${pawsBanner})`}}></section>

        <main className="container">
            <h1>Historial de solicitudes</h1>
            <p>Estos son todas las solicitudes que han llegado a Catpuccino</p>

            {paginatedSolicitudes.map(solicitud => (
                <section className="card mb-4">
                    <div className="tarjeta">
                        <div className="img-data">
                            <img className="img" src={solicitud.gatoDTO.imagen}></img>
                            <div className="data">
                                <h6 className="highlight-p">Solicitud para adoptar a <span>{solicitud.gatoDTO.nombre}</span></h6>
                                <p className="small-text">Hecha por <span>{solicitud.usuarioDTO.nombre}</span></p>
                                <p className="small-text italic">{solicitud.titulo}</p>
                            </div>
                        </div>

                        <div className={`status ${getStatusClass(solicitud.estadoSolicitud)}`}>
                            <p>{solicitud.estadoSolicitud}</p>
                        </div>
                    </div>
                </section>
            ))}

            <div>
                <Paginator first={first} rows={rows} totalRecords={listaSolicitudes.length} rowsPerPageOptions={[10, 20, 30]} onPageChange={onPageChange} />
            </div>
        </main>

    </body>
    </>
    )
}

export default HistorialSolicitudes;
