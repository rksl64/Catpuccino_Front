import React, { useEffect, useRef, useState } from "react";
import "../../Registro/registro.css";
import { DivFormu, FormBtn, Patata } from "./modals-styles";
import { Toast } from "primereact/toast";
import { Button } from 'primereact/button';
import { DataView } from 'primereact/dataview';
import { classNames } from 'primereact/utils';
import { listarproductos } from "../../../Servicios/user.service";

import { agregarProductoAlCarrito } from "../../../Servicios/user.service";
import { disminuirProductoAlCarrito } from "../../../Servicios/user.service";
import { listaCarrito } from "../../../Servicios/user.service";
import { verCarrito } from "../../../Servicios/user.service";
import { DataScroller } from 'primereact/datascroller';
import { useNavigate } from "react-router-dom"; // Importar useNavigate
import { Splitter, SplitterPanel } from 'primereact/splitter';


function BasicDemo({ id }) {
    const [products, setProducts] = useState([]);
    const [Id, setId] = useState(id);
    const toast = useRef(null);
    const [contador] = useState(1);
    const [carrito, setCarrito] = useState([]);

    useEffect(() => {
        listarproductos().then((data) => setProducts(data));
        verCarrito().then((data) => setCarrito(data));
    }, []);

    useEffect(() => {
        setId(id);
    }, [id]);
  
  const añadirToCart = async (idProducto, cantidad, idUsuario) => {
    try {
        await agregarProductoAlCarrito(idProducto, cantidad, idUsuario);
        toast.current.show({ severity: 'success', summary: 'Cantidad aumentada', detail: ' correctamente' });
        await verCarrito().then((data) => setCarrito(data));
    } catch (error) {
        console.error("Error al añadir el producto al carrito:", error);
        alert("Error al añadir el producto al carrito");
    }
};

const disminuirToCart = async (idProducto, cantidad, idUsuario) => {
    try {
        await disminuirProductoAlCarrito(idProducto, cantidad, idUsuario);
        toast.current.show({ severity: 'success', summary: 'Cantidad disminuida', detail: ' correctamente' });
        await verCarrito().then((data) => setCarrito(data));
    } catch (error) {
        console.error("Error al añadir el producto al carrito:", error);
        alert("Error al añadir el producto al carrito");
    }
};





const itemTemplate = (product, index) => {
  // Encontrar el objeto correspondiente en carrito que tenga el mismo id de producto
  const itemEnCarrito = carrito.find(item => item.productoDTO.id === product.id);

  // Definir la cantidad basada en lo que está en el carrito
  const cantidadEnCarrito = itemEnCarrito ? itemEnCarrito.cantidad : 0;

  return (
      <div className="col-12" key={product.id} style={{ minWidth: '300px' }}>
          <div className={classNames('flex flex-column xl:flex-row xl:align-items-center p-4 gap-4', { 'border-top-1 surface-border': index !== 0 })}>
              <img className="w-9 sm:w-16rem xl:w-10rem shadow-2 block xl:block mx-auto border-round" src={product.imagen} alt={product.nombre} />
              <div className="flex flex-column sm:flex-row justify-content-between align-items-center xl:align-items-start flex-1 gap-4">
                  <div className="flex flex-column align-items-center sm:align-items-start gap-3">
                      <div className="text-2xl font-bold text-900">{product.nombre}</div>
                      <Patata>{product.descripcion}</Patata>
                      <div className="flex align-items-center gap-3">
                          <span className="flex align-items-center gap-2">
                              <i className="pi pi-tag"></i>
                              <span className="font-semibold">{product.tipo}</span>
                          </span>
                      </div>
                  </div>
                  <div className="flex sm:flex-column align-items-center sm:align-items-end gap-3 sm:gap-2">
                      <div className="flex flex-column gap-2">
                          <span className="d-flex align-items-center">
                              <Button
                                  icon="pi pi-minus-circle"
                                  className="p-button-rounded"
                                  onClick={() =>
                                      disminuirToCart(
                                          product.id,
                                          contador,
                                          Id
                                      )
                                  }
                              ></Button>
                              <span className="text-1xl font-semibold mx-2" style={{ whiteSpace: 'nowrap' }}>
                                  cantidad: {cantidadEnCarrito}
                              </span>
                              <Button
                                  icon="pi pi-plus-circle"
                                  className="p-button-rounded"
                                  onClick={() =>
                                      añadirToCart(
                                          product.id,
                                          contador,
                                          Id
                                      )
                                  }
                              ></Button>
                          </span>
                          <Toast ref={toast} />
                      </div>
                  </div>
              </div>
          </div>
      </div>
  );
};


    const listTemplate = (items) => {
        if (!items || items.length === 0) return null;

        let list = items.map((product, index) => {
            return itemTemplate(product, index);
        });

        return <div className="grid grid-nogutter">{list}</div>;
    };

    return (
        <div className="card" style={{ overflowX: 'scroll' }}>
            <DataView value={products} itemTemplate={itemTemplate} />
        </div>
    );
}

function ModalAdopcion({ id }) {
    const [contador] = useState(1);
    const [carrito, setCarrito] = useState([]);
    const toast = useRef(null);
    const navigate = useNavigate();
    const [products, setProducts] = useState([]);

    useEffect(() => {
      listarproductos().then((data) => setProducts(data));
      verCarrito().then((data) => setCarrito(data));
    }, [id]);




    //INSERTAR CARRITO EN BBDD
    const finalizarPedido = async () => {
        try {
            await listaCarrito();
            toast.current.show({ severity: 'success', summary: 'Tu pedido ha sido realizado con éxito', detail: '' });
            setTimeout(() => {
                window.location.reload();
            }, 1000);
        } catch (error) {
            console.error("Error al finalizar el pedido:", error);
            toast.current.show({ severity: 'error', summary: 'Tu pedido no se pudo realizar', detail: 'Avise a su camarero más cercano para más ayuda' });
        }
    };


    return (
        <>
           <DivFormu className="">
           <BasicDemo id={id} />
          {/*<DataScroller  value={carrito} itemTemplate={itemCarrito} rows={34} buffer={0.4} header="Productos del carrito" /> */} 

            <FormBtn className="form-btn" onClick={finalizarPedido}>
                Hacer pedido
            </FormBtn>

           

            
            <Toast ref={toast} />
        </DivFormu>
        
        </>
    );
}

export default ModalAdopcion;
