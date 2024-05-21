import React, { useEffect } from 'react';
import { PDFViewer } from '@react-pdf/renderer';
import { PDFDOC } from './pdf';
import { Div } from './style-pdf';

const VisualizarPdf = ({ setActivo,activo }) => {

  useEffect(() => {
    setActivo(false);
  }, []);

  const reserva = JSON.parse(localStorage.getItem('reserva'));
  const data = JSON.parse(localStorage.getItem('data'));

console.log("dasdasdad",reserva)
console.log("dataaa",data)
  if (!reserva || !data) {
    return <div>Error: No se encontraron datos.</div>;
  }

  return (
    <Div>
    <PDFViewer width="100%" height="100%">
      <PDFDOC reserva={reserva} data={data} false={activo}/>
    </PDFViewer>
    </Div>
  );
};

export default VisualizarPdf;
