import React, { useEffect, useState } from "react";
import "./carruselGatos.css";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { EffectCoverflow, Pagination, Navigation } from 'swiper';
import { Link, useParams } from 'react-router-dom';
import { getGatosDisponibles, getNumGatosAdoptados } from '../../Servicios/user.service';

import MichiBanner from '../../assets/img/adopcion/MichiBannerDark.jpg';
import gatoEj from '../../assets/img/adopcion/gato.png'
import clients from '../../assets/img/adopcion/clients.png'
import happyCat from '../../assets/img/adopcion/happyCat.png'



function CarruselGatos(){
    const [listaGatos, setGatos] = useState([]);
    const [numGatosAdoptados, setNumGatosAdoptados] = useState(0);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const [gatosDisponibles, numAdoptados] = await Promise.all([ //uso el promise.all para ejecutar ambas funciones a la vez
                    getGatosDisponibles(),
                    getNumGatosAdoptados()
                ]);
                setGatos(gatosDisponibles);
                setNumGatosAdoptados(numAdoptados);
            } catch (error) {
                console.error('Ops, un error', error);
            }
        };

        fetchData();
      }, []);
// cambie el <body className="carruselGatos"> por <div className="carruselGatos"> por que salia el siguiente error react-dom.development.js:86 Warning: validateDOMNesting(...): <body> cannot appear as a child of <div>.
    return(
    <>
    <div className="carruselGatos"> 
    <main>
        <div>
            <span>conoce a</span>
            <h1>nuestros gatos</h1>
            <hr></hr>
            <p>Descubre a nuestros gatos y encuentra a tu compañero perfecto.
              Somos una cafetería única donde puedes disfrutar de café mientras conoces a nuestros adorables felinos. 
              ¡Adopta, apoya y comparte el amor por los gatos en Catpuccino!</p>
            <div className="stats-general mt-5 mb-5">
              <div className="stats row">
                  <img className="col-md-6" src={happyCat} ></img>
                  <h5 className="col-md-6">{numGatosAdoptados}</h5>
                  <p>gatos adoptados</p>
              </div>
              <div className="stats row">
                  <img className="col-md-6" src={clients} ></img>
                  <h5 className="col-md-6">+ 50</h5>
                  <p>clientes felices</p>
              </div>
            </div>

            <Link to= "../Adopcion"><button>Ir a la galería de adopción</button></Link>
        </div>
        <Swiper className="swiper"
            effect={'coverflow'}
            grabCursor={true}
            centeredSlides={true}
            loop={true}
            slidesPerView={'auto'}
            coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2.5,
            }}
            pagination={{ el: '.swiper-pagination', clickable: true }}
            navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
            clickable: true,
            }}
            modules={[EffectCoverflow, Pagination, Navigation]}
        >
        
        {listaGatos.map(gato => (
            <SwiperSlide className="swiper-slide" style={{backgroundImage: `url(${gato.imagen})`}}>
                <div>
                    <h2>{gato.nombre}</h2>
                    <p>{gato.descripcionCorta}</p>
                </div>
            </SwiperSlide>
        ))}
        <div className="swiper-pagination"></div>
        </Swiper>
        {/* <img src="https://cdn.pixabay.com/photo/2021/11/04/19/39/jellyfish-6769173_960_720.png" alt="" class="bg"></img> 
        <img src="https://cdn.pixabay.com/photo/2012/04/13/13/57/scallop-32506_960_720.png" alt="" class="bg2"></img> */}
    </main>



    </div>
    </>
    );
}

export default CarruselGatos;