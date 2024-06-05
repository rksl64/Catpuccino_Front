import React, { useEffect, useState, useRef  } from 'react';
import "./modalEditarGato.css";
import { useNavigate } from "react-router-dom";
import { editGato, getGatoOneByOne, getRazas } from '../../Servicios/user.service';

import { Dialog } from 'primereact/dialog';
import { Button } from 'primereact/button';
import { Toast } from 'primereact/toast';
import { Dropdown } from 'primereact/dropdown';

function ModalEditarGato({ gatoId }){

    /*--------- PARA LOS MENSAJES EMERGENTES ---------*/ 
    const toast = useRef(null);
    const navigate = useNavigate();
    const showSuccess = () => {
        toast.current.show({severity:'success', summary: 'Éxito', detail:'Datos actualizados correctamente', life: 3000});
    }
    const showError = () => {
        toast.current.show({severity:'error', summary: 'Error', detail:'Error al actualizar los datos,', life: 3000});
    }
    const showWarn = () => {
        toast.current.show({severity:'warn', summary: 'Aviso', detail:'Faltan campos por rellenar', life: 3000});
    }
    /*--------------------------------------------*/ 

    /*--------- EDITAR GATO LOGICA  ---------*/
    const [razas, setRazas] = useState([]);
    const [selectedRaza, setSelectedRaza] = useState(null);

    useEffect(() => { //Obtener los datos del gato
        if (gatoId) {
            getGatoOneByOne(gatoId)
            .then(data => {
              setGatoData(data);
              getRazas() //Obtengo las razas para poblar mi dropdown
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
            })
            .catch(error => {
              console.error('Ops, un error', error);
            });
        }
      }, [gatoId]);

    const [gatoData, setGatoData] = useState({
        id: gatoId,
        nombre: '',
        imagen: '',
        raza: '',
        tamanyo: '',
        sexo: '',
        descripcionCorta: '',
        disponible: true,
        vacunacionCompleta: '',
        descripcionLarga: '',
        chip: '',
        necesidadesEspeciales: ''
    });

    const handleCambiosGato = (name, value) => {
        setGatoData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const validarCampos = (data) => {
        const requiredFields = ['nombre', 'raza', 'sexo', 'tamanyo', 'imagen', 'descripcionCorta', 'descripcionLarga'];
        for (let field of requiredFields) {
            if (!data[field]) {
                return false;
            }
        }
        return true;
    };

    const actualizarGato = async (e) => {
    e.preventDefault();
    if (!validarCampos(gatoData)) {
        showWarn();
        return;
    }

    try {
        const gatoActualizado = await editGato(gatoData); 
        console.log('Gato actualizado:', gatoActualizado);
        showSuccess();
        setVisible(false);
    } catch (error) {
        showError();
        console.error('Ops, un error', error);
        }
    };


    /*--------- EDITAR GATO LOGICA  ---------*/ 

    const [visible, setVisible] = useState(false);
    const headerElement = (
        <div className="inline-flex align-items-center justify-content-center gap-2">
            <img src={gatoData.imagen} style={{ height: "4rem", width: "auto", borderRadius: "50%" }}></img>
            <span className="font-bold white-space-nowrap"><h3>Editar información</h3></span>
        </div>
    );

    return(
        <>
        <div className="card-edit-cat flex justify-content-center">
        <Toast ref={toast} />
            <button class="button-edit-cat" onClick={() => setVisible(true)}><i class='bx bxs-pencil' ></i><p>Editar</p></button>
            <Dialog visible={visible} modal header={headerElement} style={{ width: '55rem' }} onHide={() => setVisible(false)}>
                <form onSubmit={actualizarGato}>
                    <div className='contenido-modal-edit-gato'>

                        <div className="line">
                            <div className="selects">
                                <label>Nombre</label>
                                <input class="input" type="text" name="nombre" placeholder="Nombre" value={gatoData.nombre}  onChange={(e) => handleCambiosGato(e.target.name, e.target.value)} maxLength={50}/>                            
                            </div>
                            <div className="selects">
                                <label>Imagen</label>
                                <input class="input" type="text" name="imagen" placeholder="Imagen" value={gatoData.imagen}  onChange={(e) => handleCambiosGato(e.target.name, e.target.value)} maxLength={500}/>
                            </div>
                        </div>

                        <div className="line">
                            <div className="selects">
                                <label>Descripción breve</label>
                                <textarea class="input" type="text" id="description-short" name="descripcionCorta" placeholder="Descripcion corta" value={gatoData.descripcionCorta}  onChange={(e) => handleCambiosGato(e.target.name, e.target.value)} maxLength={100}/>
                            </div>
                            <div className="selects">
                                <label>Raza</label>
                                <Dropdown id="dd-razas" value={gatoData.raza} options={razas} onChange={(e) => {
                                                                                            setSelectedRaza(e.value);
                                                                                            handleCambiosGato('raza', e.value); }}
                                />
                            </div>
                        </div>  

                        <div className="line">
                            <div className="selects">
                                <label for='pet-spayed'>Género</label>
                                <div class='radio-container'>
                                    <input id='pet-gender-female' name='pet-gender' type='radio' value='HEMBRA'  checked={gatoData.sexo === 'HEMBRA'}   onChange={() => handleCambiosGato('sexo', 'HEMBRA')}   ></input>
                                    <label for='pet-gender-female'>Hembra</label>
                                    <input id='pet-gender-male' name='pet-gender' type='radio' value='MACHO'  checked={gatoData.sexo === 'MACHO'}   onChange={() => handleCambiosGato('sexo', 'MACHO')}   ></input>
                                    <label for='pet-gender-male'>Macho</label>
                                </div>
                            </div>
                            <div className="selects">
                                <label for='pet-spayed'>¿Necesidades especiales?</label>
                                <div class='radio-container'>
                                    <input id='pet-spayed' name='spayed-neutered' type='radio' value='TRUE'  checked={gatoData.necesidadesEspeciales === true} onChange={() => handleCambiosGato('necesidadesEspeciales', true)} ></input>
                                    <label for='pet-spayed'>Si</label>
                                    <input id='pet-neutered' name='spayed-neutered' type='radio' value='FALSE' checked={gatoData.necesidadesEspeciales === false} onChange={() => handleCambiosGato('necesidadesEspeciales', false)}></input>
                                    <label for='pet-neutered'>No</label>
                                </div>
                            </div>
                        </div>

                        <div className="line-size">
                            <div className="selects">
                                <label for='pet-weight-0-25'>Tamaño</label>
                                <div class='radio-container'>
                                <input id='pet-weight-0-25' name='pet-weight' type='radio' value='PEQUEÑO'  checked={gatoData.tamanyo === 'PEQUEÑO'} onChange={() => handleCambiosGato('tamanyo', 'PEQUEÑO')}></input>
                                <label for='pet-weight-0-25'>Pequeño</label>
                                <input id='pet-weight-25-50' name='pet-weight' type='radio' value='MEDIANO' checked={gatoData.tamanyo === 'MEDIANO'} onChange={() => handleCambiosGato('tamanyo', 'MEDIANO')}></input>
                                <label for='pet-weight-25-50'>Mediano</label>
                                <input id='pet-weight-50-100' name='pet-weight' type='radio' value='GRANDE' checked={gatoData.tamanyo === 'GRANDE'} onChange={() => handleCambiosGato('tamanyo', 'GRANDE')}></input>
                                <label for='pet-weight-50-100'>Grande</label>
                                </div>
                            </div>
                        </div>
                        <div className="line">
                            <div className="selects">
                                <label for='pet-spayed'>¿Vacunación completa?</label>
                                <div class='radio-container'>
                                    <input id='pet-vacunacion-si' name='pet-vacunacion' type='radio' value='true' checked={gatoData.vacunacionCompleta === true} onChange={() => handleCambiosGato('vacunacionCompleta', true)}></input>
                                    <label for='pet-vacunacion-si'>Si</label>
                                    <input id='pet-vacunacion-no' name='pet-vacunacion' type='radio' value='false' checked={gatoData.vacunacionCompleta === false} onChange={() => handleCambiosGato('vacunacionCompleta', false)}></input>
                                    <label for='pet-vacunacion-no'>No</label>
                                </div>
                            </div>

                            <div className="selects">
                                <label for='pet-spayed'>¿Tiene chip?</label>
                                <div class='radio-container'>
                                    <input id='pet-chip-si' name='pet-chip' type='radio' value='TRUE' checked={gatoData.chip === true} onChange={() => handleCambiosGato('chip', true)}></input>
                                    <label for='pet-chip-si'>Si</label>
                                    <input id='pet-chip-no' name='pet-chip' type='radio' value='FALSE' checked={gatoData.chip === false} onChange={() => handleCambiosGato('chip', false)}></input>
                                    <label for='pet-chip-no'>No</label>
                                </div>
                            </div>
                        </div>

                        <div className="line mb-5">
                            <div className="selects">
                                <label>Descripción detallada</label>
                                <textarea class="input" type="text" id="description-large" name="descripcionLarga" placeholder="Descripcion Larga" value={gatoData.descripcionLarga}  onChange={(e) => handleCambiosGato(e.target.name, e.target.value)} maxLength={500}/>
                            </div>
                        </div>

                        <div style={{ textAlign: "right" }} >
                            <Button className='button-send' label="Actualizar" icon="pi pi-check" type="submit"/>
                            {/* <button type="submit">Registrar gato</button> */}
                        </div>
                    </div>
                </form>
            </Dialog>
        </div>
        </>
    )
}

export default ModalEditarGato;