import React, { useEffect, useState } from 'react';
import './styles.css';
import { listarproductos } from '../../Servicios/user.service';
import { agregarProductoAlCarrito } from '../../Servicios/user.service';
import{listaCarrito}  from '../../Servicios/user.service';

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

    //PARA EL CARRITO
    const addToCart = async (id, cantidad) => { 
        try {
            await agregarProductoAlCarrito(id, cantidad); // HAY QUE VER COMO LE METEMOS LA ID DEL USUARIO
            alert('Producto añadido al carrito');
        } catch (error) {
            console.error('Error al añadir el producto al carrito:', error);
            alert('Error al añadir el producto al carrito');
        }
    };

    //INSERTAR CARRITO EN BBDD
    const finalizarPedido = async () => {
        try {
            await listaCarrito(); 
            alert('Pedido finalizado');
        } catch (error) {
            console.error('Error al finalizar el pedido:', error);
            alert('Error al finalizar el pedido');
        }
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
                <button className='fin' onClick={finalizarPedido}>Finalizar pedido</button>
            </div>
           
        </section>
    );
}

export default Producto;
