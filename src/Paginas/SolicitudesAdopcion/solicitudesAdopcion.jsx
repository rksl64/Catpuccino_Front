import React, { useEffect, useState, useRef } from "react";
import "./solicitudesAdopcion.css";
import pawsBanner from '../../assets/img/adopcion/pawsBanner.jpg';
import { Link } from 'react-router-dom';

import SolicitudAceptadas from "../../Componentes/solicitudesAceptadas/solicitudesAceptadas";
import SolicitudPendientes from "../../Componentes/solicitudesPendientes/solicitudesPendientes";
import SolicitudRechazadas from "../../Componentes/solicitudesRechazadas/solicitudesRechazadas";

import { TabMenu } from 'primereact/tabmenu';
import 'primeicons/primeicons.css';        

function SolicitudAdopciones(){
    const toast = useRef(null);
    const [activeIndex, setActiveIndex] = useState(0);

    const items = [
        {
            label: 'Pendientes',
            icon: 'pi pi-hourglass',
            command: () => {
                setActiveIndex(0);
            }
        },
        {
            label: 'Aceptadas',
            icon: 'pi pi-check',
            command: () => {
                setActiveIndex(1);
            }
        },
        {
            label: 'Rechazadas',
            icon: 'pi pi-times',
            command: () => {
                setActiveIndex(2);
            }
        }
    ];

    const renderContent = () => {
        switch (activeIndex) {
            case 0:
                return <SolicitudPendientes />;
            case 1:
                return <SolicitudAceptadas />;
            case 2:
                return <SolicitudRechazadas />;
            default:
                return null;
        }
    };

    return(
    <>
    <body className="gestion-solicitudes">
        <section className='TopBanner' style={{backgroundImage: `url(${pawsBanner})`}}></section>

        <main className="container mt-5 mb-5">
            <h1>Solicitudes de adopción</h1>
            <p>Estos son todos las solicitudes de adopción hechas recientemente, para ver más detalles
                y aceptar/rechazar las solicitud, hacer doble click.
            </p>

            <section className="solicitudes-card">
                <TabMenu className="tabmenu" model={items} />
            </section>

            {renderContent()}
        </main>

    </body>
    
    </>
    )
}

export default SolicitudAdopciones;
