import React from 'react';
import { Background, TopBanner, Main } from './gatoInfo-style';
import MichiBanner from '../../assets/img/adopcion/MichiBannerDark.jpg';
import gatoEj from '../../assets/img/adopcion/gato.png';
import catPaw from '../../assets/img/adopcion/catPaw.png';
import heartPaw from '../../assets/img/adopcion/heartPaw.png';
import { Link } from 'react-router-dom';




function GatoInfo(){
    return(
    <>
    
    <TopBanner style={{backgroundImage: `url(${MichiBanner})`}}>
      <h1>Adoptar un gato</h1>
    </TopBanner>

    <Background>
    <Main className='container block-padding pt-0'>
        <section className='row'>
            <div className='col-lg-12'>
                <div className='row border-irregular1 block-padding'> {/* GATO CARD */}
                    <img className='col-lg-4 offset-lg-2 border-irregular2 img-fluid hover-opacity' src={gatoEj}></img>
                    <div className='col-lg-4 res-margin mt-5 text-xs-center'> {/* GATO DATOS */}
                    <div className='icon-name'>
                        <img src={catPaw}></img>
                        <h3 className='cat-name'><strong>Michi</strong></h3>
                    </div>
                        <div className='row cat-data'>
                            <div className='col-sm-6'>
                                <ul className='list-unstyled pet-adopt-info'>
                                    <li className='cat-li'><strong>Raza: </strong>Michi</li>
                                    <li className='cat-li'><strong>Tamaño: </strong>Mediano</li>
                                    <li className='cat-li'><strong>Género: </strong>Hembra</li>
                                </ul>
                            </div>
                            <div className='col-sm-6 mb-2'>
                                <ul className='list-unstyled pet-adopt-info'>
                                    <li className='cat-li'><strong>Cuidados especiales: </strong>No</li>
                                    <li className='cat-li'><strong>Vacunado: </strong>Si</li>
                                    <li className='cat-li'><strong>Chip: </strong>No</li>
                                </ul>
                            </div>
                            <p className='short-description'>When setting a global font family, developers specify a single 
                            font that will be universally applied across all components in their React application.</p>
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
            <p>Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos
            y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas 
            "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.
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

       
    </Main>
    </Background>


    </>
    )
}

export default GatoInfo;