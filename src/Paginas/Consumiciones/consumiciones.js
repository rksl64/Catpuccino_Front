import React, { useEffect, useState } from 'react'; 
import { listarconsumiciones } from '../../Servicios/user.service';

function Consumiciones(){
    const [consumiciones, setConsumiciones] = useState([]);

    useEffect(() => {
      listarconsumiciones()
        .then(data => {
          setConsumiciones(data);
        })
        .catch(error => {
          console.error('Error al obtener las consumiciones:', error);
        });
    }, []); 
  
    return (
      <section>
          <div>
      <h2>Listado de Consumiciones</h2>
      <ul>
        {consumiciones.map(consumicion => (
          <li key={consumicion.id}>{consumicion.reservaDTO.nombre_reserva}{consumicion.productoDTO.nombre}{consumicion.cantidad}</li>
        ))}
      </ul>
    </div>
    </section>
      
    );
}
export default Consumiciones;