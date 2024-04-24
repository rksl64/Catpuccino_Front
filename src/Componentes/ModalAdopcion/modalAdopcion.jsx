import React, { useEffect, useState } from 'react';
import { Dialog } from 'primereact/dialog';
import { Button } from 'primereact/button';

function ModalAdopcion(){

    const [visible, setVisible] = useState(false);

    const headerElement = (
        <div className="inline-flex align-items-center justify-content-center gap-2">
            {/* <Avatar image="https://primefaces.org/cdn/primereact/images/avatar/amyelsner.png" shape="circle" /> */}
            <span className="font-bold white-space-nowrap">Solicitud de adopción</span>
        </div>
    );

    const footerContent = (
        <div>
            <Button label="Ok" icon="pi pi-check" onClick={() => setVisible(false)} autoFocus />
        </div>
    );


    return(
        <>
        <div className="card flex justify-content-center">
            <Button label="Show" icon="pi pi-external-link" onClick={() => setVisible(true)} />
            <Dialog visible={visible} modal header={headerElement} footer={footerContent} style={{ width: '50rem' }} onHide={() => setVisible(false)}>
                <p className="m-0"> ¡Cuentanos por qué te gustaría añadir un nuevo miembro felino a tu familia! </p>
                <input placeholder='Titulo para tu solicitud'></input>
                <textarea placeholder='Explicacion de adopción'></textarea>
            </Dialog>
        </div>
        
        
        
        
        </>
    )
}

export default ModalAdopcion;