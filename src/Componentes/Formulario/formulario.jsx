import React, { useEffect, useState, useRef } from "react";
import "./formulario.css";
import { useNavigate } from "react-router-dom";
import { addGatos } from "../../Servicios/user.service";
import { getRazas } from "../../Servicios/user.service";
import pawsBanner from '../../assets/img/adopcion/pawsBanner.jpg';


import { Dropdown } from 'primereact/dropdown';
import { Toast } from 'primereact/toast';
import { Dialog } from 'primereact/dialog';
        

function Formulario(){
    const [value, setValue] = useState('');
    const navigate = useNavigate();

    const [razas, setRazas] = useState([]);
    const [selectedRaza, setSelectedRaza] = useState(null);

    const [nombre, setNombre] = useState('');
    const [imagen, setImagen] = useState('');
    const [descripcionCorta, setDescripcion] = useState('');
    const [sexo, setSexo] = useState('');
    const [necesidadesEspeciales, setNecesidadesEspeciales] = useState('');
    const [raza, setRaza] = useState('');
    const [tamanyo, setTamanyo] = useState('');
    const [vacunacionCompleta, setVacunacionCompleta] = useState('');
    const [chip, setTieneChip] = useState('');
    const [descripcionLarga, setDescripcionLarga] = useState('');
    const [disponible] = useState(true);

    /*--------- PARA LOS MENSAJES EMERGENTES ---------*/ 
    const toast = useRef(null);
    const showSuccess = () => {
        toast.current.show({severity:'success', summary: 'Éxito', detail:'¡Registro completado!', life: 3000});
    }
    const showError = () => {
        toast.current.show({severity:'error', summary: 'Error', detail:'Ops, sucedió un error,', life: 3000});
    }
    const showWarn = () => {
        toast.current.show({severity:'warn', summary: 'Aviso', detail:'Faltan campos por rellenar', life: 3000});
    }
    /*--------------------------------------------*/ 


    useEffect(() => {
        getRazas()
            .then(response => {
                const razasOptions = response.map(raza => ({
                    label: raza.replace(/_/g, ' ').toLowerCase().replace(/\b\w/g, c => c.toUpperCase()),
                    value: raza
                }));
                setRazas(razasOptions);
            })
            .catch(error => {
                console.error('Error al obtener las razas:', error);
            });
    }, []);


    const addMichi = async () => {

        if (!nombre || !imagen || !descripcionCorta || !sexo || !necesidadesEspeciales || !selectedRaza || !tamanyo || !vacunacionCompleta || !chip || !descripcionLarga || !disponible) {
            showWarn();
            return;
        }

        try{
            await addGatos({
                nombre,
                imagen,
                descripcionCorta,
                sexo,
                necesidadesEspeciales,
                raza: selectedRaza,
                tamanyo,
                vacunacionCompleta,
                chip,
                descripcionLarga,
                disponible
            });
            showSuccess();
            setTimeout(() => {
                setVisible(false);
            }, 3000);
        } catch (error) {
            showError();
            console.error('Ops, un error', error);
        }
    }

    /*--------- MODAL LOGICA  ---------*/
    const [visible, setVisible] = useState(false);
    const headerElement = (
        <div className="inline-flex align-items-center justify-content-center gap-2">
            <span className="font-bold white-space-nowrap"><h2>¡Yay! Añadamos un nuevo gato a la familia</h2></span>
        </div>
    );
    /*--------- MODAL LOGICA  ---------*/ 

    return(
    <>

        {/* ESTILO BOTÓN MODAL */}
        <button class="animated-button" style={{ textDecoration: 'none' }} onClick={() => setVisible(true)}>
            <svg xmlns="http://www.w3.org/2000/svg" class="arr-2" viewBox="0 0 24 24">
                <path
                d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"
                ></path>
            </svg>
            <span class="text"> <i class='bx bxs-message-square-add'></i> A Ñ A D I R <br></br> G A T O</span>
            <span class="circle"></span>
            <svg xmlns="http://www.w3.org/2000/svg" class="arr-1" viewBox="0 0 24 24">
                <path
                d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"
                ></path>
            </svg>
        </button>
        {/* ESTILO BOTÓN MODAL */}

        {/* CONTENIDO MODAL (AÑADIR GATO) */}
        <Dialog visible={visible} modal header={headerElement} style={{ width: '70rem' }} onHide={() => setVisible(false)}>
        <Toast ref={toast} />
        <main className="formulario-general">
            <div className="row">
                <section className="img slide d-none d-lg-block  ">
                     {/* IMAGEN */}
                </section>


                <section className="cont-formulario col">
                    <form onSubmit={(event) => { event.preventDefault(); addMichi(); }}> {/* AQUI INICIA EL FORMULARIO */}
                        <div className="line">
                            <div className="selects">
                                <label>Nombre</label>
                                <input class="input" type="text" id="nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} placeholder="Nombre del gato" maxLength={50}></input>
                            </div>
                            <div className="selects">
                                <label>Imagen</label>
                                <input class="input" type="text" id="imagen" value={imagen} onChange={(e) => setImagen(e.target.value)} placeholder="Link imagen" maxLength={500}></input>
                            </div>
                        </div>


                        <div className="line">
                            <div className="selects">
                                <label>Descripción breve</label>
                                <textarea class="input" type="text" id="description-short" value={descripcionCorta} onChange={(e) => setDescripcion(e.target.value)} placeholder="Escribe una descripción breve introductoria del gato!" maxLength={100}></textarea>
                            </div>
                            <div className="selects">
                                <label>Raza</label>
                                <Dropdown id="dd-razas" value={selectedRaza} options={razas} onChange={(e) => {console.log("Valor seleccionado:", e.target.value);setSelectedRaza(e.value);}} placeholder="Selecciona una raza" />
                            </div>
                        </div>


                        <div className="line">
                            <div className="selects">
                                <label for='pet-spayed'>Género</label>
                                <div class='radio-container'>
                                    <input id='pet-gender-female' name='pet-gender' type='radio' value='HEMBRA' onChange={(e) => setSexo(e.target.value)}></input>
                                    <label for='pet-gender-female'>Hembra</label>
                                    <input id='pet-gender-male' name='pet-gender' type='radio' value='MACHO' onChange={(e) => setSexo(e.target.value)}></input>
                                    <label for='pet-gender-male'>Macho</label>
                                </div>
                            </div>
                            <div className="selects">
                                <label for='pet-spayed'>¿Necesidades especiales?</label>
                                <div class='radio-container'>
                                    <input id='pet-spayed' name='spayed-neutered' type='radio' value='TRUE' onChange={(e) => setNecesidadesEspeciales(e.target.value)}></input>
                                    <label for='pet-spayed'>Si</label>
                                    <input id='pet-neutered' name='spayed-neutered' type='radio' value='FALSE' onChange={(e) => setNecesidadesEspeciales(e.target.value)}></input>
                                    <label for='pet-neutered'>No</label>
                                </div>
                            </div>
                        </div>


                        <div className="line-size">
                            <div className="selects">
                                <label for='pet-weight-0-25'>Tamaño</label>
                                <div class='radio-container'>
                                <input id='pet-weight-0-25' name='pet-weight' type='radio' value='PEQUEÑO'  onChange={(e) => setTamanyo(e.target.value)}></input>
                                <label for='pet-weight-0-25'>Pequeño</label>
                                <input id='pet-weight-25-50' name='pet-weight' type='radio' value='MEDIANO'  onChange={(e) => setTamanyo(e.target.value)}></input>
                                <label for='pet-weight-25-50'>Mediano</label>
                                <input id='pet-weight-50-100' name='pet-weight' type='radio' value='GRANDE'  onChange={(e) => setTamanyo(e.target.value)}></input>
                                <label for='pet-weight-50-100'>Grande</label>
                                </div>
                            </div>
                        </div>
                        <div className="line">
                            <div className="selects">
                                <label for='pet-spayed'>¿Vacunación completa?</label>
                                <div class='radio-container'>
                                    <input id='pet-vacunacion-si' name='pet-vacunacion' type='radio' value='TRUE'  onChange={(e) => setVacunacionCompleta(e.target.value)}></input>
                                    <label for='pet-vacunacion-si'>Si</label>
                                    <input id='pet-vacunacion-no' name='pet-vacunacion' type='radio' value='FALSE'  onChange={(e) => setVacunacionCompleta(e.target.value)}></input>
                                    <label for='pet-vacunacion-no'>No</label>
                                </div>
                            </div>


                            <div className="selects">
                                <label for='pet-spayed'>¿Tiene chip?</label>
                                <div class='radio-container'>
                                    <input id='pet-chip-si' name='pet-chip' type='radio' value='TRUE' onChange={(e) => setTieneChip(e.target.value)}></input>
                                    <label for='pet-chip-si'>Si</label>
                                    <input id='pet-chip-no' name='pet-chip' type='radio' value='FALSE' onChange={(e) => setTieneChip(e.target.value)}></input>
                                    <label for='pet-chip-no'>No</label>
                                </div>
                            </div>
                        </div>


                        <div className="line mb-5">
                            <div className="selects">
                                <label>Descripción detallada</label>
                                <textarea class="input" type="text" id="description-large" value={descripcionLarga}  onChange={(e) => setDescripcionLarga(e.target.value)} placeholder="Escribe una descripción más detallada sobre el gato!" maxLength={500}></textarea>
                            </div>
                        </div>


                        <div style={{ textAlign: "center" }} >
                            <button type="submit">Registrar gato</button>
                        </div>
                    </form>
                </section>
            </div>
        </main>
        </Dialog>
        {/* CONTENIDO MODAL (AÑADIR GATO) */}
    </>
    )
}

export default Formulario;
