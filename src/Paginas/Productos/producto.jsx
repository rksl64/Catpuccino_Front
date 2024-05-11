import React, { useEffect, useState,useRef } from "react";
import "./styles.css";
import { listarproductos } from "../../Servicios/user.service";
import { Splitter, SplitterPanel } from 'primereact/splitter';
import { DataView, DataViewLayoutOptions } from 'primereact/dataview';
import { Button } from 'primereact/button';
import { classNames } from 'primereact/utils';
import { agregarProductoAlCarrito } from "../../Servicios/user.service";
import { listaCarrito } from "../../Servicios/user.service";
import { getToken } from "../../Servicios/Cookies/cookies";
import { verCarrito } from "../../Servicios/user.service";
import { DataScroller } from 'primereact/datascroller';
import { Toast } from 'primereact/toast';
import { useNavigate } from "react-router-dom";

function Producto() {
  const [products, setProducts] = useState([]);
  const [layout, setLayout] = useState('grid');
  const [idUsuario, setId] = useState(0);
  const [contador, setcontador] = useState(1);
  const [carrito, setCarrito] = useState([]);
  const toast = useRef(null);
  const navigate = useNavigate(); 

  useEffect(() => {
    setId(parseInt(getToken("ID")));
    listarproductos().then((data) => setProducts(data));
    verCarrito().then((data) => setCarrito(data));
  }, []);


  //PARA EL CARRITO

const addToCart = async (idProducto, cantidad, idUsuario) => {
  try {
    await agregarProductoAlCarrito(idProducto, cantidad, idUsuario);
    toast.current.show({ severity:'success', summary: 'Producto añadido al carrito', detail: ' correctamente' });
    await verCarrito().then((data) => setCarrito(data));
  } catch (error) {
    console.error("Error al añadir el producto al carrito:", error);
    alert("Error al añadir el producto al carrito");
  }
};

  //INSERTAR CARRITO EN BBDD
  const finalizarPedido = async () => {
    try {
      await listaCarrito();
      toast.current.show({ severity:'success', summary: 'Tu pedido ha sido realizado con exito', detail: '' });
      setTimeout(() => {
      navigate("/"); // Reemplaza "/nueva-pagina" con la ruta a la que deseas redirigir
    }, 1000);
    } catch (error) {
      console.error("Error al finalizar el pedido:", error);
      toast.current.show({ severity:'error', summary: 'Tu pedido no se pudo realizar', detail: 'Avise a su camarero mas cercano para mas ayuda' });
    }
  };

  const listItem = (product, index) => {
    return (
      <section className="col-12" key={product.id}>
        <div className={classNames('flex flex-column xl:flex-row xl:align-items-start p-4 gap-4', { 'border-top-1 surface-border': index !== 0 })}>
          <img className="w-9 sm:w-16rem xl:w-10rem shadow-2 block xl:block mx-auto border-round" src={product.imagen} alt={product.nombre} />
          <div className="flex flex-column sm:flex-row justify-content-between align-items-center xl:align-items-start flex-1 gap-4">
            <div className="flex flex-column align-items-center sm:align-items-start gap-3">
              <div className="text-2xl font-bold text-900">{product.nombre}</div>
              <div className="text-1xl">{product.descripcion}</div>
              <div className="flex align-items-center gap-3">
                <span className="flex align-items-center gap-2">
                  <i className="pi pi-tag"></i>
                  <span className="font-semibold">{product.tipo}</span>
                </span>
              </div>
            </div>
            <div className="flex sm:flex-column align-items-center sm:align-items-end gap-3 sm:gap-2">
              <span className="text-2xl font-semibold">{product.precio}€</span>
              <Toast ref={toast} />
              <Button icon="pi pi-shopping-cart" className="p-button-rounded"  onClick={() =>
                      addToCart(
                        product.id,
                        contador,
                        idUsuario
                      )
                    }></Button>
            </div>
          </div>
        </div>
      </section>
    );
  };

  const gridItem = (product) => {
    return (
      <div className="col-12 sm:col-6 lg:col-12 xl:col-4 p-2" key={product.id}>
        <div className="p-4 border-1 surface-border surface-card border-round">
          <div className="flex flex-wrap align-items-center justify-content-between gap-2">
            <div className="flex align-items-center gap-2">
              <i className="pi pi-tag"></i>
              <span className="font-semibold">{product.tipo}</span>
            </div>
          </div>
          <div className="flex flex-column align-items-center gap-3 py-5">
            <img className="border-round imagen1 " src={product.imagen} alt={product.nombre} />
            <div className="text-1xl font-bold titulo">{product.nombre}</div>
            <div className="texto">{product.descripcion}</div>
          </div>
          <div className="flex align-items-center justify-content-between">
            <span className="text-2xl font-semibold">{product.precio}€</span>
            <Toast className="pruebita" ref={toast} />
            <Button icon="pi pi-shopping-cart" className="p-button-rounded"  onClick={() =>
                      addToCart(
                        product.id,
                        contador,
                        idUsuario
                      )
                    }></Button>
          </div>
        </div>
      </div>
    );
  };

  const itemTemplate = (product, layout, index) => {
    if (!product) {
      return;
    }

    if (layout === 'list') return listItem(product, index);
    else if (layout === 'grid') return gridItem(product);
  };

  const listTemplate = (products, layout) => {
    return <div className="grid grid-nogutter">{products.map((product, index) => itemTemplate(product, layout, index))}</div>;
  };

  const header = () => {
    return (
      <div className="flex justify-content-end">
        <DataViewLayoutOptions layout={layout} onChange={(e) => setLayout(e.value)} />
      </div>
    );
  };





  const itemCarrito = (data) => {
    return (
        <div className="col-12">
            <div className="flex flex-column xl:flex-row xl:align-items-start p-4 gap-4">
                <img className="w-9 sm:w-16rem xl:w-10rem shadow-2 block xl:block mx-auto border-round" src={data.productoDTO.imagen} alt={data.productoDTO.nombre} />
                <div className="flex flex-column lg:flex-row justify-content-between align-items-center xl:align-items-start lg:flex-1 gap-4">
                    <div className="flex flex-column align-items-center lg:align-items-start gap-3">
                        <div className="flex flex-column gap-1">
                            <div className="text-2xl font-bold text-900">{data.productoDTO.nombre}</div>
                            <div className="text-700">{data.productoDTO.description}</div>
                        </div>
                        <div className="flex flex-column gap-2">
                           
                            <span className="flex align-items-center gap-2">
                                <span className="text-2xl font-semibold">cantidad: {data.cantidad}</span>
                            </span>
                        </div>
                    </div>
                    <div className="flex flex-row lg:flex-column align-items-center lg:align-items-end gap-4 lg:gap-2">
                        <span className="text-2xl font-semibold">{data.productoDTO.precio}€</span>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};









  return (
    
    <section className="body1">
    <section></section>
    <Splitter style={{ height: '750px' }}>
      <SplitterPanel className="flex align-items-center justify-content-center" size={75}>
        <div style={{ height: '100%', overflow: 'auto' }}>
          <div className="card">
            <DataView value={products} listTemplate={listTemplate} layout={layout} header={header()} />
          </div>
        </div>
      </SplitterPanel>
      <SplitterPanel className="flex align-items-center justify-content-center" size={25} minSize={10}>
      {carrito.length > 0 && (
      <div className="card" style={{ height: '100%', overflow: 'auto' }}>
            <DataScroller value={carrito} itemTemplate={itemCarrito} rows={34} buffer={0.4} header="Productos del carrito" />
            <button className="boton" onClick={finalizarPedido}>
               Finalizar pedido
            </button>
      </div>
      )}
      </SplitterPanel>
    </Splitter>
    </section>
  );
}

export default Producto;
