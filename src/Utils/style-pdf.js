import { StyleSheet } from "@react-pdf/renderer";
import styled from "styled-components";

export const Styles = StyleSheet.create({
    body: {
      paddingTop: 35,
      paddingBottom: 65,
      paddingHorizontal: 35,
    },
    title: {
      fontSize: 24,
      fontFamily: 'Oswald',
      color: '#FF3131',
    },
    author: {
      fontSize: 12,
      marginBottom: 4,
    },
    subtitle: {
      fontSize: 18,
      margin: 12,
      fontFamily: 'Oswald'
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
    caja1:{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: 132,
    },
    caja2:{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: 132,
    },
    caja3:{
      display: 'flex',
    },
    caja4:{
      display: 'flex',
      height:415,
    },
    data: {
      fontSize: 24,
      fontFamily: 'Oswald',
    },
    contacto:{
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      width: 450,
      marginRight: 40,
    
    },
    footer:{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      bottom: 0,

    },
     table: {
    display: 'table',
    width: 'auto',
    borderStyle: 'solid',
    borderWidth: 1,
    borderRightWidth: 0,
    borderBottomWidth: 0,
    marginTop: 40,

  },
  tableRow: {
    flexDirection: 'row',
  },
  tableColHeader: {
    width: '20%',
    borderStyle: 'solid',
    borderWidth: 1,
    borderLeftWidth: 0,
    borderTopWidth: 0,
    backgroundColor: '#D3D3D3',
  },
  tableCol: {
    width: '20%',
    borderStyle: 'solid',
    borderWidth: 1,
    borderLeftWidth: 0,
    borderTopWidth: 0,
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
  cuenta:{
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: "center",
    flexDirection: 'column',

  },
  total: {
    fontSize: 24,
    fontFamily: 'Oswald',
    color: '#FF3131',
    marginTop: 10,

  },

  
  });

  export const Div = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  
`;
