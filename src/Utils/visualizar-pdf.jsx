import { PDFViewer } from "@react-pdf/renderer";
import React from "react";
import { PDFDOC } from "./pdf";

function VisualizarPdf({reserva, data}) {
  return (
    <PDFViewer width="100%" height="600">
      <PDFDOC reserva={reserva} data={data}/>
    </PDFViewer>
  );
}

export default VisualizarPdf;
