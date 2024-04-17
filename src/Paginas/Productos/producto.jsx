import React, { useEffect, useState } from "react";
import "./styles.css";
import { listarproductos } from "../../Servicios/user.service";
import { agregarProductoAlCarrito } from "../../Servicios/user.service";
import { listaCarrito } from "../../Servicios/user.service";
import { getToken } from "../../Servicios/Cookies/cookies";
import { verCarrito } from "../../Servicios/user.service";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";


function Producto() {
  const [productos, setProductos] = useState([]);
  const [idUsuario, setId] = useState(0);
  const [carrito, setCarrito] = useState([]);
  //LOS MODALES
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    setId(parseInt(getToken("ID")));
    listarproductos()
      .then((data) => {
        setProductos(data);
      })
      .catch((error) => {
        console.error("Error al obtener los productos:", error);
      });
  }, []);

  //CONTADORES
  const [contadores, setContadores] = useState({});

  const incrementarContador = (id) => {
    setContadores((prevContadores) => ({
      ...prevContadores,
      [id]: (prevContadores[id] || 0) + 1,
    }));
  };

  const decrementarContador = (id) => {
    setContadores((prevContadores) => ({
      ...prevContadores,
      [id]: Math.max((prevContadores[id] || 0) - 1, 0),
    }));
  };

  //PARA EL CARRITO
  const addToCart = async (idProducto, cantidad, idUsuario) => {
    try {
      await agregarProductoAlCarrito(idProducto, cantidad, idUsuario);
      console.log(idProducto, cantidad, idUsuario);
    } catch (error) {
      console.error("Error al añadir el producto al carrito:", error);
      alert("Error al añadir el producto al carrito");
    }
  };

  //INSERTAR CARRITO EN BBDD
  const finalizarPedido = async () => {
    try {
      await listaCarrito();
      alert("Pedido finalizado");
    } catch (error) {
      console.error("Error al finalizar el pedido:", error);
      alert("Error al finalizar el pedido");
    }
  };

  //VER LOS PRODUCTOS QUE HAY EN EL CARRITO
  const verCarritoComponente = async() => {
    try{
      await verCarrito(); // Ahora estás llamando a la función del servicio
    }catch (error){
      console.log("No ha salido bien", error);
    }
  }
  //METERLO EN EL USE EFFECT Y LUEGO QUE SALGA YA EN EL MODAL
  

  return (
    <section className="body">
      <div className="contenedor">
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
            {productos.map((producto) => (
              <tr key={producto.id}>
                <td>{producto.nombre}</td>
                <td>{producto.descripcion}</td>
                <td>{producto.precio}</td>
                <td>{producto.tipo}</td>
                <td>
                  <button onClick={() => decrementarContador(producto.id)}>
                    -
                  </button>
                  <span>{contadores[producto.id] || 0}</span>
                  <button onClick={() => incrementarContador(producto.id)}>
                    +
                  </button>
                </td>
                <td>
                  <button
                    onClick={() =>
                      addToCart(
                        producto.id,
                        contadores[producto.id] || 0,
                        idUsuario
                      )
                    }
                  >
                    Añadir al carrito
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <button className="fin" onClick={finalizarPedido}>
          Finalizar pedido
        </button>
        <button className="fin" onClick={verCarrito}>
          Ver pedido
        </button>
        <Button variant="primary" onClick={handleShow}>
          Launch demo modal
        </Button>

        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </section>
  );
}

export default Producto;
