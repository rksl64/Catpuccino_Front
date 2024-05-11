import React, { useEffect, useState } from 'react';
import MichiBanner from '../../assets/img/adopcion/MichiBannerDark.jpg';
import { Link } from 'react-router-dom';
import "./adopcion.css";

import { getGatosDisponibles } from '../../Servicios/user.service';


function Adopcion(){
    const [listaGatos, setGatos] = useState([]);

    useEffect(() => {
        getGatosDisponibles()
        .then(data => {
            setGatos(data);
        })
        .catch(error => {
            console.error('Ops, un error', error);
        });
    }, []);


    return (
    <>

    <section className='adopcion'>
        <section className='TopBanner' style={{backgroundImage: `url(${MichiBanner})`}}>
            <h1>Adopción</h1>
        </section>

        <main className='Main container block-padding pt-0'>
            <section className='introduccion'>
                <h2>¡Encuentra a tu nuevo mejor amigo!</h2>
                <p>Estos son todos los gatos que actualmente forman parte de la familia de Catpuccino,
                a los cuales puedes conocer en nuestro establecimiento y adoptarlos!
                Nuestros gatos estan ansiosos de encontrar su nueva familia y darles mucho amor.</p>
            </section>

            <section className='row mt-5'> {/* GATO */}
                {listaGatos.map(gato => (
                    <div className='adopt-card col-md-6 col-xl-3 res-margin'>
                        <div className='card'>
                            <div className='thumbnail text-center'>
                            <img className='border-irregular1 img-fluid' src={gato.imagen} alt=""></img>
                            <div className='card-info'>
                                <h3>{gato.nombre}</h3>
                                <ul className='list-unstyled'>
                                <li><strong>Género:</strong> {gato.sexo.toLowerCase()}</li>
                                <li><strong>Raza:</strong> {gato.raza ? gato.raza.replace('_', ' ').toLowerCase() : 'No especificada'}</li>
                                <li><strong>Tamaño:</strong> {gato.tamanyo.toLowerCase()}</li>
                                </ul>
                            </div>
                            <Link to={`/Gatoinfo/${gato.id}`}><button>MÁS INFO</button></Link>
                        </div>
                        </div>
                    </div>
                ))}
            </section>
        </main>
    </section>


    </>
  );
}

export default Adopcion;