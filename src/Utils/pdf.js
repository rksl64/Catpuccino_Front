import React from "react";
import { Document, Font, Image, Page, Text, View } from "@react-pdf/renderer";
import logito from "../assets/logito.jpg";
import barrita from "../assets/img/barrita_separadora.png";
import { Styles as styles } from "../Utils/style-pdf";

export const PDFDOC = ({ reserva, data, activo }) => {
  if (activo == false) {
    localStorage.removeItem("reserva");
    localStorage.removeItem("data");
  }

  if (!reserva || !data || !data.length) {
    return (
      <Document>
        <Page style={styles.body}>
          <Text style={styles.title}>Error: Datos no disponibles</Text>
        </Page>
      </Document>
    );
  }

  const recordsPerPage = 17;
  const totalPages = Math.ceil(data.length / recordsPerPage);

  const renderTableRows = (pageIndex) => {
    const startIndex = pageIndex * recordsPerPage;
    const endIndex = startIndex + recordsPerPage;
    return data.slice(startIndex, endIndex).map((item, index) => (
      <View key={index} style={styles.tableRow}>
        <View style={styles.tableCol}>
          <Text style={styles.tableCell}>{item.productoDTO.nombre}</Text>
        </View>
        <View style={styles.tableCol}>
          <Text style={styles.tableCell}>{item.productoDTO.tipo}</Text>
        </View>
        <View style={styles.tableCol}>
          <Text style={styles.tableCell}>{item.productoDTO.precio.toFixed(2)}</Text>
        </View>
        <View style={styles.tableCol}>
          <Text style={styles.tableCell}>{item.cantidad}</Text>
        </View>
        <View style={styles.tableCol}>
          <Text style={styles.tableCell}>
            {(item.productoDTO.precio * item.cantidad).toFixed(2)}
          </Text>
        </View>
      </View>
    ));
  };

  return (
    <Document>
      {Array.from({ length: totalPages }, (_, pageIndex) => (
        <Page key={pageIndex} style={styles.body}>
          <View style={styles.header}>
            <View style={styles.caja1}>
              <Text style={styles.title}>Catpuccino</Text>
              <Text style={styles.author}>Cat Café</Text>
            </View>
            <View style={styles.caja2}>
              <Text style={styles.title}>Factura</Text>
              <Text style={styles.author}>{reserva.fecha}</Text>
            </View>
          </View>
          {pageIndex === 0 && (
          <View style={styles.caja3}>
            <Text style={styles.data}>Datos del cliente</Text>
            <Text style={styles.author}>
              Nombre del Usuario: {reserva.usuarioDTO.nombre} {reserva.usuarioDTO.apellidos}
            </Text>
            <Text style={styles.author}>
              Nombre de la Reserva: {reserva.nombre_reserva}
            </Text>
            <Text style={styles.author}>Email: {reserva.usuarioDTO.email}</Text>
            <Text style={styles.author}>Telefono: {reserva.usuarioDTO.telefono}</Text>
            <Text style={styles.author}>Hora: {reserva.hora}</Text>
          </View>
        )}
          <View style={styles.caja4}>
            <View style={styles.table}>
              {/* Table Header */}
              <View style={styles.tableRow}>
                <View style={styles.tableColHeader}>
                  <Text style={styles.tableCellHeader}>PRODUCTO</Text>
                </View>
                <View style={styles.tableColHeader}>
                  <Text style={styles.tableCellHeader}>TIPO PROD.</Text>
                </View>
                <View style={styles.tableColHeader}>
                  <Text style={styles.tableCellHeader}>PRECIO UD.</Text>
                </View>
                <View style={styles.tableColHeader}>
                  <Text style={styles.tableCellHeader}>UDS.</Text>
                </View>
                <View style={styles.tableColHeader}>
                  <Text style={styles.tableCellHeader}>TOTAL</Text>
                </View>
              </View>
              {/* Table Content */}
              {renderTableRows(pageIndex)}
            </View>
            {pageIndex === totalPages - 1 && (
              <>
              <View style={styles.cuenta}>
                <Text style={styles.total}>Total : {reserva.total.toFixed(2)}€</Text>
              </View>
              <View style={styles.caja5}>
              </View>
              </>
            )}
          </View>
          <View style={styles.footer}>
            <Image src={barrita}></Image>
            <Text style={styles.title}>Datos de contacto</Text>
            <View style={styles.contacto}>
              <Text style={styles.author}>catpuccino@gmail.com</Text>
              <Text style={styles.author}>954676869</Text>
            </View>
          </View>
        </Page>
      ))}
    </Document>
  );
};

Font.register({
  family: "Oswald",
  src: "https://fonts.gstatic.com/s/oswald/v13/Y_TKV6o8WovbUd3m_X9aAA.ttf",
});