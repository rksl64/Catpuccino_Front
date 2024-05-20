import { StyleSheet } from "@react-pdf/renderer";

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
      marginRight: 40
    
    },
    footer:{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',


    }
  });