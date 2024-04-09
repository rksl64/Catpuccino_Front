import React, { useEffect, useState } from 'react';
import './styles.css';
import { listarproductos } from '../../Servicios/user.service';

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

    const [contadores, setContadores] = useState({});

    const incrementarContador = (id) => {
        setContadores(prevContadores => ({
            ...prevContadores,
            [id]: (prevContadores[id] || 0) + 1
        }));
    };

    const decrementarContador = (id) => {
        setContadores(prevContadores => ({
            ...prevContadores,
            [id]: Math.max((prevContadores[id] || 0) - 1, 0)
        }));
    };

    return (
        <section>
            <div className='contenedor'>
                <h2>Listado de Productos</h2>
                <table>
                    <thead>
                        <tr>
                            
                            <th>Nombre</th>
                            <th>Descripción</th>
                            <th>Precio</th>
                            <th>Tipo</th>
                            <th>Contador</th>
                            <th>¡Miow!</th>
                        </tr>
                    </thead>
                    <tbody>
                        {productos.map(producto => (
                            <tr key={producto.id}>
                                
                                <td>{producto.nombre}</td>
                                <td>{producto.descripcion}</td>
                                <td>{producto.precio}</td>
                                <td>{producto.tipo}</td>
                                <td>
                                    <button onClick={() => decrementarContador(producto.id)}>-</button>
                                    <span>{contadores[producto.id] || 0}</span>
                                    <button onClick={() => incrementarContador(producto.id)}>+</button>
                                </td>
                                <td><button>Añadir al carrito</button></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <button className='fin'>Finalizar pedido</button>
            </div>
           
        </section>
    );
}

export default Producto;
