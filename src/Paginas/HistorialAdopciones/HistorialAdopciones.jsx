import React, { useEffect, useState } from "react";
import "./../HistorialSolicitudes/HistorialSolicitudes.css";
import pawsBanner from '../../assets/img/adopcion/pawsBanner.jpg';
import { getAllAdopciones } from '../../Servicios/user.service';
import { Paginator } from 'primereact/paginator';
import { format } from 'date-fns';
        

function HistorialAdopciones(){
    const [listaAdopciones, setAdopciones] = useState([]);
    const [first, setFirst] = useState(0);
    const [rows, setRows] = useState(10);

    useEffect(() => {
        getAllAdopciones()
        .then(data => {
            setAdopciones(data);
        })
        .catch(error => {
            console.error('Ops, un error', error);
        });
    }, []);

    const onPageChange = (event) => {
        setFirst(event.first);
        setRows(event.rows);
    };

    const paginatedSolicitudes = listaAdopciones.slice(first, first + rows);

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return format(date, 'dd/MM/yyyy \'a las\' HH:mm');
    };

    return(
    <>
    <body className="gestion-gatos">
        <section className='TopBanner' style={{backgroundImage: `url(${pawsBanner})`}}></section>

        <main className="container">
            <h1>Historial de Adopciones</h1>
            <p>¡Estos son todas las adopciones que se han realizado en Catpuccino!</p>

            {listaAdopciones.map(adopcion => (
                <section className="card mb-4">
                    <div className="tarjeta">
                        <div className="img-data">
                            <img className="img" src={adopcion.gatoDTO.imagen}></img>
                            <div className="data">
                                <h6 className="highlight-p">Adopción de <span>{adopcion.gatoDTO.nombre}</span></h6>
                                <p className="small-text">Adoptado por <span>{adopcion.usuarioDTO.nombre}</span></p>
                                <p className="small-text italic">Fue adoptado el {formatDate(adopcion.fecha)}</p>
                            </div>
                        </div>
                    </div>
                </section>
            ))}

            <div>
                <Paginator first={first} rows={rows} totalRecords={listaAdopciones.length} rowsPerPageOptions={[10, 20, 30]} onPageChange={onPageChange} />
            </div>
        </main>

    </body>
    </>
    )
}

export default HistorialAdopciones;
