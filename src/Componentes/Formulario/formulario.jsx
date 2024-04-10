import React, { useState } from "react";
import "./formulario.css";
import logito from "../../assets/logito.png";
import formCat from '../../assets/img/adopcion/catSurprised.jpg';

import { InputText } from 'primereact/inputtext';
import { Dropdown } from 'primereact/dropdown';
import { InputTextarea } from "primereact/inputtextarea";

function Formulario(){
    const [value, setValue] = useState('');
    const [selectedCity, setSelectedCity] = useState(null);
    const cities = [
        { name: 'New York', code: 'NY' },
        { name: 'Rome', code: 'RM' },
        { name: 'London', code: 'LDN' },
        { name: 'Istanbul', code: 'IST' },
        { name: 'Paris', code: 'PRS' }
    ];


    return(
    <>
    <main className="formulario-general">
        <section className="container">
            <section className="row align-items-stretch">
                <section className="col carousel slide d-none d-lg-block col-md-5 col-lg-5 col-xl-6 img">
                     {/* IMAGEN */}
                </section>

                <section className="container-formulario col">
                    <h3>¡Yay! Añadamos un nuevo gato</h3>
                    <form>
                        <div className="linea">
                            <span className="p-float-label">
                                <InputText id="nombre" value={value} onChange={(e) => setValue(e.target.value)} />
                                <label htmlFor="nombre">Nombre</label>
                            </span>
                            <span className="p-float-label">
                                <InputText id="imagen" value={value} onChange={(e) => setValue(e.target.value)} />
                                <label htmlFor="imagen">imagen</label>
                            </span>
                        </div>
                        <div className="line">
                            <div className="card flex justify-content-center">
                                <span className="p-float-label">
                                    <InputTextarea id="description" value={value} onChange={(e) => setValue(e.target.value)} rows={5} cols={30} />
                                    <label htmlFor="description">Description</label>
                                </span>
                            </div>
                        </div>
                        <div className="line">
                            <label for='pet-spayed'>Género</label>
                            <div class='radio-container'>
                                <input id='pet-gender-female' name='pet-gender' type='radio' value='female'></input>
                                <label for='pet-gender-female'>Female</label>
                                <input id='pet-gender-male' name='pet-gender' type='radio' value='male'></input>
                                <label for='pet-gender-male'>Male</label>
                            </div>

                            <div class='pets-spayed-neutered'>
                                <label for='pet-spayed'>Necesidades especiales</label>
                                <div class='radio-container'>
                                    <input id='pet-spayed' name='spayed-neutered' type='radio' value='spayed'></input>
                                    <label for='pet-spayed'>Spayed</label>
                                    <input id='pet-neutered' name='spayed-neutered' type='radio' value='neutered'></input>
                                    <label for='pet-neutered'>Neutered</label>
                                </div>
                            </div>
                        </div>
                        <div className="line">
                            <div className="card flex justify-content-center">
                                <span className="p-float-label w-full md:w-14rem">
                                    <Dropdown inputId="dd-city" value={selectedCity} onChange={(e) => setSelectedCity(e.value)} options={cities} optionLabel="name" className="w-full" />
                                    <label htmlFor="dd-city">RAZA</label>
                                </span>
                            </div>
                        </div>
                        <div className="line">
                            <div class='pets-weight'>
                                <label for='pet-weight-0-25'>Tamaño</label>
                                <div class='radio-container'>
                                <input id='pet-weight-0-25' name='pet-weight' type='radio' value='0-25'></input>
                                <label for='pet-weight-0-25'>Pequeño</label>
                                <input id='pet-weight-25-50' name='pet-weight' type='radio' value='25-50'></input>
                                <label for='pet-weight-25-50'>Mediano</label>
                                <input id='pet-weight-50-100' name='pet-weight' type='radio' value='50-100'></input>
                                <label for='pet-weight-50-100'>Grande</label>
                                </div>
                            </div>
                        </div>
                        <div className="line">
                            <div className="pet-form-box">
                                <label for='pet-spayed'>Vacunación completa</label>
                                <div class='radio-container'>
                                    <input id='pet-vacunacion-si' name='pet-vacunacion' type='radio' value='true'></input>
                                    <label for='pet-vacunacion-si'>Si</label>
                                    <input id='pet-vacunacion-no' name='pet-vacunacion' type='radio' value='false'></input>
                                    <label for='pet-vacunacion-no'>No</label>
                                </div>
                            </div>

                            <div className="pet-form-box">
                                <label for='pet-spayed'>¿Tiene chip?</label>
                                <div class='radio-container'>
                                    <input id='pet-chip-si' name='pet-chip' type='radio' value='true'></input>
                                    <label for='pet-chip-si'>Si</label>
                                    <input id='pet-chip-no' name='pet-chip' type='radio' value='false'></input>
                                    <label for='pet-chip-no'>No</label>
                                </div>
                            </div>

                        </div>
                        <div className="line">
                            <div className="card flex justify-content-center">
                                <span className="p-float-label">
                                    <InputTextarea id="description" value={value} onChange={(e) => setValue(e.target.value)} rows={5} cols={30} />
                                    <label htmlFor="description">Description larga</label>
                                </span>
                            </div>
                        </div>


                    </form>
                </section>
            </section>
        </section>
    </main>
    
    </>
    )
}

export default Formulario;
