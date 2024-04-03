import React, { Component, useEffect, useState } from 'react';
import { Background, TopBanner, Main } from './adopcion-style';
import MichiBanner from '../../assets/img/adopcion/MichiBannerDark.jpg'
import gatoEj from '../../assets/img/adopcion/gato.png'
import { Link } from 'react-router-dom';
import adopcionService from '../../Servicios/adopcion.service';


function Adopcion(){
  const [gatos, setGatos] = useState([]); /* declaro variables */

  useEffect( () => { /* utilizo use effect para poder utilizar la funcion cuando el componente sea renderizado */
    getGatos();
  }, [])


  const getGatos = async() => {
    const response = await adopcionService.getAll;
    console.log(response)
    if(response.ok){
      const data = await response.json();
      setGatos(data);
    }
  }


    return (
    <>
    
    <TopBanner style={{backgroundImage: `url(${MichiBanner})`}}>
      <h1>Adopción</h1>
    </TopBanner>

    <Background>
    <Main className='container block-padding pt-0'>
      <section className='introduccion'>
        <h2>¡Encuentra a tu nuevo mejor amigo!</h2>
        <p>Estos son todos los gatos que actualmente forman parte de la familia de Catpuccino,
          a los cuales puedes conocer en nuestro establecimiento y adoptarlos!
          Nuestros gatos estan ansiosos de encontrar su nueva familia y darles mucho amor.</p>
      </section>

      <section className='row mt-5'>
        {/* GATO */}
          <div className='adopt-card col-md-6 col-xl-3 res-margin'>
            <div className='card'>
                <div className='thumbnail text-center'>
                  <img className='border-irregular1 img-fluid' src={gatoEj}></img>
                  <div className='card-info'>
                    <h3>Nombre</h3>
                    <ul className='list-unstyled'>
                      <li><strong>Género:</strong> Hembra</li>
                      <li><strong>Edad:</strong> 2 años</li>
                      <li><strong>Raza:</strong> Michi raza</li>
                    </ul>
                  </div>
                  <Link to="/Gatoinfo"><button>MÁS INFO</button></Link>
              </div>
            </div>
          </div>

          <div className='adopt-card col-md-6 col-xl-3 res-margin'>
            <div className='card'>
                <div className='thumbnail text-center'>
                  <img className='border-irregular1 img-fluid' src={gatoEj}></img>
                  <div className='card-info'>
                    <h3>Nombre</h3>
                    <ul className='list-unstyled'>
                      <li><strong>Género:</strong> Hembra</li>
                      <li><strong>Edad:</strong> 2 años</li>
                      <li><strong>Raza:</strong> Michi raza</li>
                    </ul>
                  </div>
                  <button>MÁS INFO</button>
              </div>
            </div>
          </div>

          <div className='adopt-card col-md-6 col-xl-3 res-margin'>
            <div className='card'>
                <div className='thumbnail text-center'>
                  <img className='border-irregular1 img-fluid' src={gatoEj}></img>
                  <div className='card-info'>
                    <h3>Nombre</h3>
                    <ul className='list-unstyled'>
                      <li><strong>Género:</strong> Hembra</li>
                      <li><strong>Edad:</strong> 2 años</li>
                      <li><strong>Raza:</strong> Michi raza</li>
                    </ul>
                  </div>
                  <button>MÁS INFO</button>
              </div>
            </div>
          </div>

          <div className='adopt-card col-md-6 col-xl-3 res-margin'>
            <div className='card'>
                <div className='thumbnail text-center'>
                  <img className='border-irregular1 img-fluid' src={gatoEj}></img>
                  <div className='card-info'>
                    <h3>Nombre</h3>
                    <ul className='list-unstyled'>
                      <li><strong>Género:</strong> Hembra</li>
                      <li><strong>Edad:</strong> 2 años</li>
                      <li><strong>Raza:</strong> Michi raza</li>
                    </ul>
                  </div>
                  <button>MÁS INFO</button>
              </div>
            </div>
          </div>

          <div className='adopt-card col-md-6 col-xl-3 res-margin'>
            <div className='card'>
                <div className='thumbnail text-center'>
                  <img className='border-irregular1 img-fluid' src={gatoEj}></img>
                  <div className='card-info'>
                    <h3>Nombre</h3>
                    <ul className='list-unstyled'>
                      <li><strong>Género:</strong> Hembra</li>
                      <li><strong>Edad:</strong> 2 años</li>
                      <li><strong>Raza:</strong> Michi raza</li>
                    </ul>
                  </div>
                  <button>MÁS INFO</button>
              </div>
            </div>
          </div>

          <div className='adopt-card col-md-6 col-xl-3 res-margin'>
            <div className='card'>
                <div className='thumbnail text-center'>
                  <img className='border-irregular1 img-fluid' src={gatoEj}></img>
                  <div className='card-info'>
                    <h3>Nombre</h3>
                    <ul className='list-unstyled'>
                      <li><strong>Género:</strong> Hembra</li>
                      <li><strong>Edad:</strong> 2 años</li>
                      <li><strong>Raza:</strong> Michi raza</li>
                    </ul>
                  </div>
                  <button>MÁS INFO</button>
              </div>
            </div>
          </div>

          <div className='adopt-card col-md-6 col-xl-3 res-margin'>
            <div className='card'>
                <div className='thumbnail text-center'>
                  <img className='border-irregular1 img-fluid' src={gatoEj}></img>
                  <div className='card-info'>
                    <h3>Nombre</h3>
                    <ul className='list-unstyled'>
                      <li><strong>Género:</strong> Hembra</li>
                      <li><strong>Edad:</strong> 2 años</li>
                      <li><strong>Raza:</strong> Michi raza</li>
                    </ul>
                  </div>
                  <button>MÁS INFO</button>
              </div>
            </div>
          </div>

          <div className='adopt-card col-md-6 col-xl-3 res-margin'>
            <div className='card'>
                <div className='thumbnail text-center'>
                  <img className='border-irregular1 img-fluid' src={gatoEj}></img>
                  <div className='card-info'>
                    <h3>Nombre</h3>
                    <ul className='list-unstyled'>
                      <li><strong>Género:</strong> Hembra</li>
                      <li><strong>Edad:</strong> 2 años</li>
                      <li><strong>Raza:</strong> Michi raza</li>
                    </ul>
                  </div>
                  <button>MÁS INFO</button>
              </div>
            </div>
          </div>

          <div className='adopt-card col-md-6 col-xl-3 res-margin'>
            <div className='card'>
                <div className='thumbnail text-center'>
                  <img className='border-irregular1 img-fluid' src={gatoEj}></img>
                  <div className='card-info'>
                    <h3>Nombre</h3>
                    <ul className='list-unstyled'>
                      <li><strong>Género:</strong> Hembra</li>
                      <li><strong>Edad:</strong> 2 años</li>
                      <li><strong>Raza:</strong> Michi raza</li>
                    </ul>
                  </div>
                  <button>MÁS INFO</button>
              </div>
            </div>
          </div>
          
         

       

      </section>
    </Main>
    </Background>



    </>
  );
}

export default Adopcion;