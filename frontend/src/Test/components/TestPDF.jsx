import { useState } from 'react';
import { PDFViewer, Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';
import styles from "../styles/pdf.module.css";

const PDFView = () => {
  const [showPDF, setShowPDF] = useState(false);

  const handleDownloadPDF = () => {
    setShowPDF(true);
  };

  const datos = JSON.parse(localStorage.getItem('datos'));
  const age = JSON.parse(localStorage.getItem('age'));
  const verbalTest = JSON.parse(localStorage.getItem('verbalTest'));
  const manualTest = JSON.parse(localStorage.getItem('manualTest'));

  const pdfStyles = StyleSheet.create({
    test: {
      backgroundColor: 'rgb(255, 255, 255)',
      padding: '80px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    encabezado: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      height: '300px',
      width: '100%',
      marginBottom: '40px',
    },
    titulo: {
      fontSize: '30px',
      color: 'rgba(0, 0, 0, 0.49)',
      width: '20%',
      margin: '0',
      fontWeight: '800',
    },
    subtitulo: {
      color: '#000',
      fontSize: '18px',
      margin: '0',
      textAlign: 'justify',
    },
    data: {
      width: '100%',
      height: '200px',
    },
    dataText: {
      fontSize: '12px',
    },
  });

  return (
  <PDFViewer style={{ width: '100%', height: '100vh'}}>
    <Document>
      <Page size="A4" style={pdfStyles.test}>
        <View style={pdfStyles.encabezado}>
          <Text style={pdfStyles.titulo}>WISC-R</Text>
          <Text style={pdfStyles.subtitulo}>Escala de Inteligencia de Wechsler para Preescolar y Primaria</Text>
        </View>
        <View>
          <View style={pdfStyles.data}>
            <Text style={pdfStyles.dataText}>Nombres y apellidos: {datos.nombres}</Text>
          </View>
        </View>
      </Page>
    </Document>
  </PDFViewer>
  );
};

export default PDFView;
