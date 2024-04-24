import React, { useEffect, useState } from 'react';
import MichiBanner from '../../assets/img/adopcion/MichiBannerDark.jpg';
import gatoEj from '../../assets/img/adopcion/gato.png';
import catPaw from '../../assets/img/adopcion/catPaw.png';
import heartPaw from '../../assets/img/adopcion/heartPaw.png';
import { Link, useParams } from 'react-router-dom';
import "./gatoInfo.css";

import ModalAdopcion from '../../Componentes/ModalAdopcion/modalAdopcion';

// import { Dialog } from 'primereact/dialog';
// import { Button } from 'primereact/button';


import { getGatoOneByOne } from '../../Servicios/user.service';


function GatoInfo(){
    const [gatoOneByOne, setGato] = useState([]);
    const {id} = useParams();
    const [visible, setVisible] = useState(false); {/* MODAL */}

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
    

    {/* -------------------------- MODAL ----------------------- */}
    // const headerElement = (
    //     <div className="inline-flex align-items-center justify-content-center gap-2">
    //         {/* <Avatar image="https://primefaces.org/cdn/primereact/images/avatar/amyelsner.png" shape="circle" /> */}
    //         <span className="font-bold white-space-nowrap">Solicitud de adopción</span>
    //     </div>
    // );

    // const footerContent = (
    //     <div>
    //         <Button label="Ok" icon="pi pi-check" onClick={() => setVisible(false)} autoFocus />
    //         {/* <button>Enviar solicitud</button> */}
    //     </div>
    // );

    return(
    <>
    
    <body className='gatoInfo'>
        <section className='TopBanner' style={{backgroundImage: `url(${MichiBanner})`}}>
            <h1>Adopción</h1>
        </section>

        <main className='Main container block-padding'>
            <section className='row'>
                    <div className='col-lg-12'>
                        <div className='row border-irregular1 block-padding'> {/* GATO CARD */}
                            <img className='col-lg-4 offset-lg-2 border-irregular2 img-fluid hover-opacity' src={gatoOneByOne.imagen}></img>
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


                                    {/* <div className="card flex justify-content-center">
                                    <Button label="Show" icon="pi pi-external-link" onClick={() => setVisible(true)} />
                                    <Dialog visible={visible} modal header={headerElement} footer={footerContent} style={{ width: '50rem' }} onHide={() => setVisible(false)}>
                                        <p className="m-0"> ¡Cuentanos por qué te gustaría añadir un nuevo miembro felino a tu familia! </p>
                                        <input placeholder='Titulo para tu solicitud'></input>
                                        <textarea placeholder='Explicacion de adopción'></textarea>
                                    </Dialog>
                                    </div> */}

                                    <ModalAdopcion></ModalAdopcion>


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
                <p>{gatoOneByOne.descripcionLarga}</p>

                <div className='rules'>
                    <h6>Reglas sobre la adopción</h6>
                    <p>La adopción en Catpuccino es un proceso sencillo y gratificante. Todos nuestros gatos están disponibles para ser adoptados de forma gratuita, sin embargo, como parte de nuestro compromiso con el bienestar de los gatos, solicitamos a los adoptantes que cubran los costos asociados con el microchip y las vacunas, si es necesario.<br></br>
                        Nuestro equipo se asegura de que cada adopción sea un éxito. Los adoptantes deben completar un formulario de solicitud y ser entrevistados para garantizar que estén preparados para cuidar a un nuevo amigo felino. Además, se firma un contrato de adopción para establecer claramente los términos y condiciones.<br></br><br></br>
                        En Catpuccino, creemos en encontrar hogares amorosos y responsables para todos nuestros gatos. Únete a nuestra comunidad de amantes de los gatos y haz una diferencia en la vida de un gato necesitado. ¡Ven a Catpuccino y encuentra a tu nuevo mejor amigo peludo hoy mismo!
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