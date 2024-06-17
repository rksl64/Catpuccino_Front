import { StyleSheet } from "@react-pdf/renderer";
import styled from "styled-components";

export const Styles = StyleSheet.create({
  body: {
    paddingTop: 35,
    paddingBottom: 65,
    paddingHorizontal: 35,
    backgroundColor: '#FBE8EB',
  },
  title: {
    fontSize: 24,
    fontFamily: 'Oswald',
    color: '#FD8595',
  },
  author: {
    fontSize: 12,
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 18,
    margin: 12,
    fontFamily: 'Oswald',
    textTransform: 'uppercase',
    color: '#FD8595',
  },
  text: {
    margin: 12,
    fontSize: 14,
    textAlign: 'justify',
    fontFamily: 'Oswald'
  },
  image: {
    width: 45,
  },
  header: {
    fontSize: 12,
    marginBottom: 20,
    textAlign: 'center',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
  pageNumber: {
    position: 'absolute',
    fontSize: 12,
    bottom: 30,
    left: 0,
    right: 0,
    textAlign: 'center',
    color: 'grey',
  },
  caja1: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: 132,
  },
  caja2: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: 132,
  },
  caja3: {
    display: 'flex',
  },
  caja4: {
    display: 'flex',
    height: 415,
  },
  data: {
    fontSize: 24,
    fontFamily: 'Oswald',
    color: '#FD8595',
  },
  contacto: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: 450,
    marginRight: 40,
  },
  footer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    bottom: 0,
  },
  table: {
    display: 'table',
    width: 'auto',
    marginTop: 40,
    borderRadius: 5, 
    overflow: 'hidden', 
    textAlign: 'center',
  },
  tableRow: {
    flexDirection: 'row',
  },
  tableColHeader: {
    width: '20%',
    backgroundColor: '#FD8595',
  },
  tableCol: {
    width: '20%',
  },
  tableCellHeader: {
    margin: 5,
    fontSize: 12,
    fontWeight: 'bold',
  },
  tableCell: {
    margin: 5,
    fontSize: 10,
  },
  cuenta: {
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: "center",
    flexDirection: 'column',
  },
  total: {
    fontSize: 24,
    fontFamily: 'Oswald',
    color: '#FD8595',
    marginTop: 25,
  },
  caja5: {
    display: 'flex',
    height: 800,
    flexDirection: 'column',
  },
  tituloProducto: {
    fontSize: 10,  // Tamaño de la letra reducido
    textDecoration: "underline",
    fontFamily: 'Times-Italic',
    color:"#CE796B",
    margin: 5,
  },
  descripcionProducto: {
    fontSize: 8,  // Tamaño de la letra reducido
    margin: 5,
  },
  precioProducto: {
    fontSize: 8,  // Tamaño de la letra reducido
    margin: 5,
  },
  sectionBebida: {
    marginBottom: 20,
    borderTop: "2px solid #FD8595",
    paddingTop: 10,
    marginTop:-50,
  },
  sectionComida: {
    marginBottom: 20,
    borderTop: "2px solid #FD8595",
    paddingTop: 10,
  },
  sectionPostre: {
    marginBottom: 20,
    borderTop: "2px solid #FD8595",
    paddingTop: 10,
  },
  columnContainer: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  column: {
    width: '50%',  // Ajustado para tres columnas
  },
  footer2: {
    marginTop: -15,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: 'Times-Italic',
    bottom: 0,
  },
  header2: {
    fontSize: 12,
    marginBottom: 20,
    textAlign: 'center',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    marginTop:-10
  },
  author2: {
    fontSize: 12,
    marginBottom: 4,
    fontFamily: 'Times-Italic',
  },
  title2: {
    fontSize: 24,
    fontFamily: 'Times-Italic',
    color: '#FD8595',
  },
});

export const Div = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
