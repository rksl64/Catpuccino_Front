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
      <section className='body'>
            <div className='contenedor'>
                <h2>Listado de Reservas</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Nombre</th>
                            <th>Reserva</th>
                            <th>Cantidad</th>
                        </tr>
                    </thead>
                    <tbody>
                        {consumiciones.map(consumicion => (
                            <tr key={consumicion.id}>
                                <td>{consumicion.reservaDTO.nombre_reserva}</td>
                                <td>{consumicion.productoDTO.nombre}</td>
                                <td>{consumicion.cantidad}</td>
                                
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </section>
      
    );
}
export default Consumiciones;