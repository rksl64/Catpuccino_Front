import './styles.css';
import { listarproductos } from '../../Servicios/user.service';
import React, { useEffect, useState } from 'react'; 


function Producto() {
    const [productos, setProductos] = useState([]);

  useEffect(() => {
    listarproductos()
      .then(data => {
        setProductos(data);
      })
      .catch(error => {
        console.error('Error al obtener los productos:', error);
      });
  }, []); 

  return (
    <section>
        <div>
    <h2>Listado de Productos</h2>
    <ul>
      {productos.map(producto => (
        <li key={producto.id}>{producto.nombre}{producto.descripcion}</li>
      ))}
    </ul>
  </div>
  </section>
    
  );
  
}
export default Producto;
