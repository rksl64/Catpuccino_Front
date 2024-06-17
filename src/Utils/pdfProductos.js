import React from "react";
import { Document, Font, Image, Page, Text, View } from "@react-pdf/renderer";
import logito from "../assets/logito.png";
import barrita from "../assets/img/barrita_separadora.png";
import { Styles as styles } from "./style-pdf";

export const MenuPDF = ({ productos }) => {
  const groupedProducts = productos.reduce((groups, producto) => {
    const { tipo } = producto;
    if (!groups[tipo]) {
      groups[tipo] = [];
    }
    groups[tipo].push(producto);
    return groups;
  }, {});

  return (
    <Document>
      <Page style={styles.body}>
        {/* Cabecera del PDF */}
        <View style={styles.header2}>
          <View style={styles.caja1}>
            <Text style={styles.title}>Catpuccino</Text>
            <Text style={styles.author2}>Cat Café</Text>
          </View>
          <View style={styles.caja2}>
            <Text style={styles.title}>Menú</Text>
          </View>
        </View>

        {/* Sección de bebidas */}
        {groupedProducts.BEBIDA && (
          <View style={styles.sectionBebida}>
            <Text style={styles.subtitle}>BEBIDA</Text>
            <View style={styles.columnContainer}>
              {groupedProducts.BEBIDA.map((producto, index) => (
                <View key={producto.id} style={styles.column}>
                  <Text style={styles.tituloProducto}>{producto.nombre}</Text>
                  <Text style={styles.descripcionProducto}>{producto.descripcion}</Text>
                  <Text style={styles.precioProducto}>{producto.precio.toFixed(2)} €</Text>
                </View>
              ))}
            </View>
          </View>
        )}

        {/* Sección de comidas */}
        {groupedProducts.COMIDA && (
          <View style={styles.sectionComida}>
            <Text style={styles.subtitle}>COMIDA</Text>
            <View style={styles.columnContainer}>
              {groupedProducts.COMIDA.map((producto, index) => (
                <View key={producto.id} style={styles.column}>
                  <Text style={styles.tituloProducto}>{producto.nombre}</Text>
                  <Text style={styles.descripcionProducto}>{producto.descripcion}</Text>
                  <Text style={styles.precioProducto}>{producto.precio.toFixed(2)} €</Text>
                </View>
              ))}
            </View>
          </View>
        )}

        {/* Sección de postres */}
        {groupedProducts.POSTRE && (
          <View style={styles.sectionPostre}>
            <Text style={styles.subtitle}>POSTRE</Text>
            <View style={styles.columnContainer}>
              {groupedProducts.POSTRE.map((producto, index) => (
                <View key={producto.id} style={styles.column}>
                  <Text style={styles.tituloProducto}>{producto.nombre}</Text>
                  <Text style={styles.descripcionProducto}>{producto.descripcion}</Text>
                  <Text style={styles.precioProducto}>{producto.precio.toFixed(2)} €</Text>
                </View>
              ))}
            </View>
          </View>
        )}

        {/* Pie de página del PDF */}
        <View style={styles.footer}>
            <Image src={barrita}></Image>
            <Text style={styles.title}>Datos de contacto</Text>
            <View style={styles.contacto}>
              <Text style={styles.author2}>catpuccino@gmail.com</Text>
              <Text style={styles.author2}>954676869</Text>
            </View>
          </View>
      </Page>
    </Document>
  );
};

Font.register({
  family: "Oswald",
  src: "https://fonts.gstatic.com/s/oswald/v13/Y_TKV6o8WovbUd3m_X9aAA.ttf",
});
