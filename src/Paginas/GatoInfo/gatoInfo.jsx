import React, { useEffect, useState } from 'react';
import MichiBanner from '../../assets/img/adopcion/MichiBannerDark.jpg';
import gatoEj from '../../assets/img/adopcion/gato.png';
import catPaw from '../../assets/img/adopcion/catPaw.png';
import heartPaw from '../../assets/img/adopcion/heartPaw.png';
import { Link, useParams } from 'react-router-dom';
import "./gatoInfo.css";

import { getGatoOneByOne } from '../../Servicios/user.service';


function GatoInfo(){
    const [gatoOneByOne, setGato] = useState([]);
    const {id} = useParams();

    useEffect(() => {
        getGatoOneByOne(id)
        .then(data => {
            if (typeof data == 'object' && data !== null){
                setGato(data);
            } else {
                console.error('Los datos recibidos no son un objeto:', data);
            }
        })
        .catch(error => {
            console.error('Ops, un error', error)
        });
    }, [id]);

    return(
    <>
    
    <body className='gatoInfo'>
        <section className='TopBanner' style={{backgroundImage: `url(${MichiBanner})`}}>
            <h1>Adopción</h1>
        </section>

        <main className='Main container block-padding pt-0'>
            <section className='row'>
                    <div className='col-lg-12'>
                        <div className='row border-irregular1 block-padding'> {/* GATO CARD */}
                            <img className='col-lg-4 offset-lg-2 border-irregular2 img-fluid hover-opacity' src={gatoEj}></img>
                            <div className='col-lg-4 res-margin mt-5 text-xs-center'> {/* GATO DATOS */}
                            <div className='icon-name'>
                                <img src={catPaw}></img>
                                <h3 className='cat-name'><strong>{gatoOneByOne.nombre}</strong></h3>
                            </div>
                                <div className='row cat-data'>
                                    <div className='col-sm-6'>
                                        <ul className='list-unstyled pet-adopt-info'>
                                            <li className='cat-li'><strong>Raza:</strong><p>{gatoOneByOne ? (gatoOneByOne.raza ? gatoOneByOne.raza.replace('_', ' ') : 'No especificado') : 'Cargando...'}</p></li>
                                            <li className='cat-li'><strong>Tamaño:</strong><p> {gatoOneByOne.tamanyo}</p></li>
                                            <li className='cat-li'><strong>Género:</strong><p>{gatoOneByOne.sexo}</p></li>
                                        </ul>
                                    </div>
                                    <div className='col-sm-6 mb-2'>
                                        <ul className='list-unstyled pet-adopt-info'>
                                            <li className='cat-li'><strong>Cuidados especiales:</strong><p>{gatoOneByOne.necesidadesEspeciales ? 'Sí' : 'No'}</p></li>
                                            <li className='cat-li'><strong>Vacunado: </strong><p>{gatoOneByOne.vacunacionCompleta ? 'Sí' : 'No'}</p></li>
                                            <li className='cat-li'><strong>Chip: </strong><p>{gatoOneByOne.chip ? 'Sí' : 'No'}</p></li>
                                        </ul>
                                    </div>
                                    <p className='short-description'>{gatoOneByOne.descripcionCorta}</p>
                                    <button class="like-button"><p>¡Quiero adoptar!</p></button>
                                </div>
                            </div>
                        </div>  
                    </div>
            </section>

            <section className='col-md-12 about-cat'>
                <h3>Sobre Michi</h3>
                <ul className='custom list-inline cat-list'>
                    <li className='list-inline-item'><img className='heartPaw' src={heartPaw}></img>Amigable con otros gatos</li>
                    <li className='list-inline-item'><img className='heartPaw' src={heartPaw}></img>Juguetón</li>
                    <li className='list-inline-item'><img className='heartPaw' src={heartPaw}></img>Relajado y tranquilo</li>
                </ul>
                <p>{gatoOneByOne.descripcionLarga}
                </p>

                <div className='mt-5 mb-4 rules'>
                    <h6>Reglas sobre la adopción</h6>
                    <p>Si bien es cierto que todos los gatos que se encuentren en Catpuccino son todos para adoptar, se necesita aportar una pequeña cantidad
                        por las vacunaciones(si es que las tiene) y por la colocación del microchip.
                        Esto se hace como medida de seguridad para asegurar el compromiso con la adopción.
                    </p>
                </div>

                <Link to= "../Adopcion"><button className='back-button'><i class='bx bx-arrow-back'></i>Volver a la galería de adopción</button></Link>
            </section>
        </main>
    </body>

    </>
    )
}

export default GatoInfo;