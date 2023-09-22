import React, { createContext, useState, useEffect } from "react";

export const TestContext = createContext();

//Falta= Total de las pruebas / CI / Puntuación tipicia
export const TestProvider = ({ children }) => {
  //Información basica

  const [datos, setDatos] = useState({
    nombres: "",
    sexo: "",
    actividad: "",
    curso: "",
    centro: "",
    residencia: "",
    lugarNacimiento: "",
    examinador: "",
  });

  //Estados de los input de edad

  const [age, setAge] = useState({
    years: 0,
    months: 0,
    days: 0,
  });

  //Estados de los inputs del test Verbal

  const [verbalTest, setVerbalTest] = useState({
    informacion: "",
    vocabulario: "",
    aritmetica: "",
    semejanzas: "",
    comprension: "",
    digitos: "",
  });

  const [manualTest, setManualTest] = useState({
    figurasI: "",
    historietas: "",
    cubos: "",
    rompeCabezas: "",
    claves: "",
    laberintos: "",
  });

  //Tipicas

  const [tipicaVerbal, setTipicaVerbal] = useState({
    informacion: "",
    vocabulario: "",
    aritmetica: "",
    semejanzas: "",
    comprension: "",
    digitos: "",
  });

  const [tipicaManual, setTipicaManual] = useState({
    figurasI: "",
    historietas: "",
    cubos: "",
    rompeCabezas: "",
    claves: "",
    laberintos: "",
  });

  //////////////////////////TABLAS///////////////////////

  useEffect(() => {
    //Para guardar las tipicas a actualizar
    let updatedTipicaVerbal = {};
    let updatedTipicaManual = {};

    if (age.years === 6) {
      //////////////////////// Prueba Verbal//////////////////////////

      //Información
      if (!verbalTest.informacion) {
        updatedTipicaVerbal.informacion = "";
      } else if (verbalTest.informacion == 0) {
        updatedTipicaVerbal.informacion = 3;
      } else if (verbalTest.informacion == 1) {
        updatedTipicaVerbal.informacion = 4;
      } else if (verbalTest.informacion == 2) {
        updatedTipicaVerbal.informacion = 5;
      } else if (verbalTest.informacion == 3) {
        updatedTipicaVerbal.informacion = 7;
      } else if (verbalTest.informacion == 4) {
        updatedTipicaVerbal.informacion = 8;
      } else if (verbalTest.informacion == 5) {
        updatedTipicaVerbal.informacion = 10;
      } else if (verbalTest.informacion == 6) {
        updatedTipicaVerbal.informacion = 11;
      } else if (verbalTest.informacion == 7) {
        updatedTipicaVerbal.informacion = 12;
      } else if (verbalTest.informacion == 8) {
        updatedTipicaVerbal.informacion = 14;
      } else if (verbalTest.informacion == 9) {
        updatedTipicaVerbal.informacion = 15;
      } else if (verbalTest.informacion == 10) {
        updatedTipicaVerbal.informacion = 17;
      } else if (verbalTest.informacion == 11) {
        updatedTipicaVerbal.informacion = 18;
      } else if (verbalTest.informacion >= 12 && verbalTest.informacion <= 30) {
        updatedTipicaVerbal.informacion = 19;
      }

      //Vocabulario
      if (!verbalTest.vocabulario) {
        updatedTipicaVerbal.vocabulario = "";
      } else if (verbalTest.vocabulario == 0) {
        updatedTipicaVerbal.vocabulario = 1;
      } else if (verbalTest.vocabulario == 1) {
        updatedTipicaVerbal.vocabulario = 2;
      } else if (verbalTest.vocabulario == 2 || verbalTest.vocabulario == 3) {
        updatedTipicaVerbal.vocabulario = 3;
      } else if (verbalTest.vocabulario == 4) {
        updatedTipicaVerbal.vocabulario = 4;
      } else if (verbalTest.vocabulario == 5 || verbalTest.vocabulario == 6) {
        updatedTipicaVerbal.vocabulario = 5;
      } else if (verbalTest.vocabulario == 7) {
        updatedTipicaVerbal.vocabulario = 6;
      } else if (verbalTest.vocabulario == 8) {
        updatedTipicaVerbal.vocabulario = 7;
      } else if (verbalTest.vocabulario == 9 || verbalTest.vocabulario == 10) {
        updatedTipicaVerbal.vocabulario = 8;
      } else if (verbalTest.vocabulario == 11) {
        updatedTipicaVerbal.vocabulario = 9;
      } else if (verbalTest.vocabulario == 12) {
        updatedTipicaVerbal.vocabulario = 10;
      } else if (verbalTest.vocabulario == 13 || verbalTest.vocabulario == 14) {
        updatedTipicaVerbal.vocabulario = 11;
      } else if (verbalTest.vocabulario == 15) {
        updatedTipicaVerbal.vocabulario = 12;
      } else if (verbalTest.vocabulario == 16 || verbalTest.vocabulario == 17) {
        updatedTipicaVerbal.vocabulario = 13;
      } else if (verbalTest.vocabulario == 18) {
        updatedTipicaVerbal.vocabulario = 14;
      } else if (verbalTest.vocabulario == 19) {
        updatedTipicaVerbal.vocabulario = 15;
      } else if (verbalTest.vocabulario == 20 || verbalTest.vocabulario == 21) {
        updatedTipicaVerbal.vocabulario = 16;
      } else if (verbalTest.vocabulario == 22) {
        updatedTipicaVerbal.vocabulario = 17;
      } else if (verbalTest.vocabulario == 23 || verbalTest.vocabulario == 24) {
        updatedTipicaVerbal.vocabulario = 18;
      } else if (verbalTest.vocabulario >= 25 && verbalTest.vocabulario <= 64) {
        updatedTipicaVerbal.vocabulario = 19;
      }

      //Aritmética
      if (!verbalTest.aritmetica) {
        updatedTipicaVerbal.aritmetica = "";
      } else if (verbalTest.aritmetica == 0) {
        updatedTipicaVerbal.aritmetica = 2;
      } else if (verbalTest.aritmetica == 1) {
        updatedTipicaVerbal.aritmetica = 3;
      } else if (verbalTest.aritmetica == 2) {
        updatedTipicaVerbal.aritmetica = 5;
      } else if (verbalTest.aritmetica == 3) {
        updatedTipicaVerbal.aritmetica = 6;
      } else if (verbalTest.aritmetica == 4) {
        updatedTipicaVerbal.aritmetica = 8;
      } else if (verbalTest.aritmetica == 5) {
        updatedTipicaVerbal.aritmetica = 9;
      } else if (verbalTest.aritmetica == 6) {
        updatedTipicaVerbal.aritmetica = 10;
      } else if (verbalTest.aritmetica == 7) {
        updatedTipicaVerbal.aritmetica = 12;
      } else if (verbalTest.aritmetica == 8) {
        updatedTipicaVerbal.aritmetica = 13;
      } else if (verbalTest.aritmetica == 9) {
        updatedTipicaVerbal.aritmetica = 15;
      } else if (verbalTest.aritmetica == 10) {
        updatedTipicaVerbal.aritmetica = 16;
      } else if (verbalTest.aritmetica == 11) {
        updatedTipicaVerbal.aritmetica = 18;
      } else if (verbalTest.aritmetica >= 12 && verbalTest.aritmetica <= 18) {
        updatedTipicaVerbal.aritmetica = 19;
      }

      //Semejanzas
      if (!verbalTest.semejanzas) {
        updatedTipicaVerbal.semejanzas = "";
      } else if (verbalTest.semejanzas == 0) {
        updatedTipicaVerbal.semejanzas = 5;
      } else if (verbalTest.semejanzas == 1) {
        updatedTipicaVerbal.semejanzas = 6;
      } else if (verbalTest.semejanzas == 2) {
        updatedTipicaVerbal.semejanzas = 7;
      } else if (verbalTest.semejanzas == 3) {
        updatedTipicaVerbal.semejanzas = 8;
      } else if (verbalTest.semejanzas == 4) {
        updatedTipicaVerbal.semejanzas = 9;
      } else if (verbalTest.semejanzas == 5) {
        updatedTipicaVerbal.semejanzas = 10;
      } else if (verbalTest.semejanzas == 6) {
        updatedTipicaVerbal.semejanzas = 11;
      } else if (verbalTest.semejanzas == 7) {
        updatedTipicaVerbal.semejanzas = 12;
      } else if (verbalTest.semejanzas == 8) {
        updatedTipicaVerbal.semejanzas = 13;
      } else if (verbalTest.semejanzas == 9) {
        updatedTipicaVerbal.semejanzas = 14;
      } else if (verbalTest.semejanzas == 10) {
        updatedTipicaVerbal.semejanzas = 15;
      } else if (verbalTest.semejanzas == 11) {
        updatedTipicaVerbal.semejanzas = 16;
      } else if (verbalTest.semejanzas == 12) {
        updatedTipicaVerbal.semejanzas = 17;
      } else if (verbalTest.semejanzas == 13) {
        updatedTipicaVerbal.semejanzas = 18;
      } else if (verbalTest.semejanzas >= 14 && verbalTest.semejanzas <= 30) {
        updatedTipicaVerbal.semejanzas = 19;
      }

      //Comprension
      if (!verbalTest.comprension) {
        updatedTipicaVerbal.comprension = "";
      } else if (verbalTest.comprension == 0) {
        updatedTipicaVerbal.comprension = 2;
      } else if (verbalTest.comprension == 1) {
        updatedTipicaVerbal.comprension = 3;
      } else if (verbalTest.comprension == 2) {
        updatedTipicaVerbal.comprension = 4;
      } else if (verbalTest.comprension == 3) {
        updatedTipicaVerbal.comprension = 5;
      } else if (verbalTest.comprension == 4) {
        updatedTipicaVerbal.comprension = 6;
      } else if (verbalTest.comprension == 5) {
        updatedTipicaVerbal.comprension = 7;
      } else if (verbalTest.comprension == 6) {
        updatedTipicaVerbal.comprension = 9;
      } else if (verbalTest.comprension == 7) {
        updatedTipicaVerbal.comprension = 10;
      } else if (verbalTest.comprension == 8) {
        updatedTipicaVerbal.comprension = 11;
      } else if (verbalTest.comprension == 9) {
        updatedTipicaVerbal.comprension = 12;
      } else if (verbalTest.comprension == 10) {
        updatedTipicaVerbal.comprension = 13;
      } else if (verbalTest.comprension == 11) {
        updatedTipicaVerbal.comprension = 14;
      } else if (verbalTest.comprension == 12) {
        updatedTipicaVerbal.comprension = 15;
      } else if (verbalTest.comprension == 13) {
        updatedTipicaVerbal.comprension = 16;
      } else if (verbalTest.comprension == 14) {
        updatedTipicaVerbal.comprension = 17;
      } else if (verbalTest.comprension == 15) {
        updatedTipicaVerbal.comprension = 18;
      } else if (verbalTest.comprension >= 16 && verbalTest.comprension <= 34) {
        updatedTipicaVerbal.comprension = 19;
      }

      //Dígitos
      if (!verbalTest.digitos) {
        updatedTipicaVerbal.digitos = "";
      } else if (verbalTest.digitos == 0) {
        updatedTipicaVerbal.digitos = 1;
      } else if (verbalTest.digitos == 1) {
        updatedTipicaVerbal.digitos = 2;
      } else if (verbalTest.digitos == 2) {
        updatedTipicaVerbal.digitos = 3;
      } else if (verbalTest.digitos == 3) {
        updatedTipicaVerbal.digitos = 5;
      } else if (verbalTest.digitos == 4) {
        updatedTipicaVerbal.digitos = 6;
      } else if (verbalTest.digitos == 5) {
        updatedTipicaVerbal.digitos = 7;
      } else if (verbalTest.digitos == 6) {
        updatedTipicaVerbal.digitos = 9;
      } else if (verbalTest.digitos == 7) {
        updatedTipicaVerbal.digitos = 10;
      } else if (verbalTest.digitos == 8) {
        updatedTipicaVerbal.digitos = 12;
      } else if (verbalTest.digitos == 9) {
        updatedTipicaVerbal.digitos = 13;
      } else if (verbalTest.digitos == 10) {
        updatedTipicaVerbal.digitos = 14;
      } else if (verbalTest.digitos == 11) {
        updatedTipicaVerbal.digitos = 16;
      } else if (verbalTest.digitos == 12) {
        updatedTipicaVerbal.digitos = 17;
      } else if (verbalTest.digitos >= 13 && verbalTest.digitos <= 28) {
        updatedTipicaVerbal.digitos = 19;
      }

      //////////////////////// Prueba Manual//////////////////////////

      //Figuras Incompletas
      if (!manualTest.figurasI) {
        updatedTipicaManual.figurasI = "";
      } else if (manualTest.figurasI == 0) {
        updatedTipicaManual.figurasI = 3;
      } else if (manualTest.figurasI == 1 || manualTest.figurasI == 2) {
        updatedTipicaManual.figurasI = 4;
      } else if (manualTest.figurasI == 3) {
        updatedTipicaManual.figurasI = 5;
      } else if (manualTest.figurasI == 4) {
        updatedTipicaManual.figurasI = 6;
      } else if (manualTest.figurasI == 5) {
        updatedTipicaManual.figurasI = 7;
      } else if (manualTest.figurasI == 6 || manualTest.figurasI == 7) {
        updatedTipicaManual.figurasI = 8;
      } else if (manualTest.figurasI == 8) {
        updatedTipicaManual.figurasI = 9;
      } else if (manualTest.figurasI == 9) {
        updatedTipicaManual.figurasI = 10;
      } else if (manualTest.figurasI == 10) {
        updatedTipicaManual.figurasI = 11;
      } else if (manualTest.figurasI == 11 || manualTest.figurasI == 12) {
        updatedTipicaManual.figurasI = 12;
      } else if (manualTest.figurasI == 13) {
        updatedTipicaManual.figurasI = 13;
      } else if (manualTest.figurasI == 14) {
        updatedTipicaManual.figurasI = 14;
      } else if (manualTest.figurasI == 15 || manualTest.figurasI == 16) {
        updatedTipicaManual.figurasI = 15;
      } else if (manualTest.figurasI == 17) {
        updatedTipicaManual.figurasI = 16;
      } else if (manualTest.figurasI == 18) {
        updatedTipicaManual.figurasI = 17;
      } else if (manualTest.figurasI == 19) {
        updatedTipicaManual.figurasI = 18;
      } else if (manualTest.figurasI >= 20 && manualTest.figurasI <= 26) {
        updatedTipicaManual.figurasI = 19;
      }

      //Historietas
      if (!manualTest.historietas) {
        updatedTipicaManual.historietas = "";
      } else if (manualTest.historietas >= 0 && manualTest.historietas <= 2) {
        updatedTipicaManual.historietas = 6;
      } else if (manualTest.historietas == 3 || manualTest.historietas == 4) {
        updatedTipicaManual.historietas = 7;
      } else if (manualTest.historietas >= 5 && manualTest.historietas <= 7) {
        updatedTipicaManual.historietas = 8;
      } else if (manualTest.historietas >= 8 && manualTest.historietas <= 10) {
        updatedTipicaManual.historietas = 9;
      } else if (manualTest.historietas == 11 || manualTest.historietas == 12) {
        updatedTipicaManual.historietas = 10;
      } else if (manualTest.historietas >= 13 && manualTest.historietas <= 15) {
        updatedTipicaManual.historietas = 11;
      } else if (manualTest.historietas >= 16 && manualTest.historietas <= 18) {
        updatedTipicaManual.historietas = 12;
      } else if (manualTest.historietas == 19 || manualTest.historietas == 20) {
        updatedTipicaManual.historietas = 13;
      } else if (manualTest.historietas >= 21 && manualTest.historietas <= 23) {
        updatedTipicaManual.historietas = 14;
      } else if (manualTest.historietas == 24 || manualTest.historietas == 25) {
        updatedTipicaManual.historietas = 15;
      } else if (manualTest.historietas >= 26 && manualTest.historietas <= 28) {
        updatedTipicaManual.historietas = 16;
      } else if (manualTest.historietas >= 29 && manualTest.historietas <= 31) {
        updatedTipicaManual.historietas = 17;
      } else if (manualTest.historietas == 32 || manualTest.historietas == 33) {
        updatedTipicaManual.historietas = 18;
      } else if (manualTest.historietas >= 34 && manualTest.historietas <= 48) {
        updatedTipicaManual.historietas = 19;
      } else if (manualTest.historietas >= 20 && manualTest.historietas <= 26) {
        updatedTipicaManual.historietas = 19;
      }

      //Cubos
      if (!manualTest.cubos) {
        updatedTipicaManual.cubos = "";
      } else if (manualTest.cubos == 0) {
        updatedTipicaManual.cubos = 5;
      } else if (manualTest.cubos == 1 || manualTest.cubos == 2) {
        updatedTipicaManual.cubos = 6;
      } else if (manualTest.cubos >= 3 && manualTest.cubos <= 5) {
        updatedTipicaManual.cubos = 7;
      } else if (manualTest.cubos == 6 || manualTest.cubos == 7) {
        updatedTipicaManual.cubos = 8;
      } else if (manualTest.cubos >= 8 && manualTest.cubos <= 10) {
        updatedTipicaManual.cubos = 9;
      } else if (manualTest.cubos == 11 || manualTest.cubos == 12) {
        updatedTipicaManual.cubos = 10;
      } else if (manualTest.cubos == 13 || manualTest.cubos == 14) {
        updatedTipicaManual.cubos = 11;
      } else if (manualTest.cubos >= 15 && manualTest.cubos <= 17) {
        updatedTipicaManual.cubos = 12;
      } else if (manualTest.cubos == 18 || manualTest.cubos == 19) {
        updatedTipicaManual.cubos = 13;
      } else if (manualTest.cubos >= 20 && manualTest.cubos <= 22) {
        updatedTipicaManual.cubos = 14;
      } else if (manualTest.cubos == 23 || manualTest.cubos == 24) {
        updatedTipicaManual.cubos = 15;
      } else if (manualTest.cubos >= 25 && manualTest.cubos <= 27) {
        updatedTipicaManual.cubos = 16;
      } else if (manualTest.cubos == 28 || manualTest.cubos == 29) {
        updatedTipicaManual.cubos = 17;
      } else if (manualTest.cubos >= 30 && manualTest.cubos <= 32) {
        updatedTipicaManual.cubos = 18;
      } else if (manualTest.cubos >= 33 || manualTest.cubos <= 62) {
        updatedTipicaManual.cubos = 19;
      }

      //Rompecabezas
      if (!manualTest.rompeCabezas) {
        updatedTipicaManual.rompeCabezas = "";
      } else if (manualTest.rompeCabezas == 0) {
        updatedTipicaManual.rompeCabezas = 2;
      } else if (manualTest.rompeCabezas == 1 || manualTest.rompeCabezas == 2) {
        updatedTipicaManual.rompeCabezas = 3;
      } else if (manualTest.rompeCabezas == 3 || manualTest.rompeCabezas == 4) {
        updatedTipicaManual.rompeCabezas = 4;
      } else if (manualTest.rompeCabezas == 5) {
        updatedTipicaManual.rompeCabezas = 5;
      } else if (manualTest.rompeCabezas == 6 || manualTest.rompeCabezas == 7) {
        updatedTipicaManual.rompeCabezas = 6;
      } else if (manualTest.rompeCabezas == 8 || manualTest.rompeCabezas == 9) {
        updatedTipicaManual.rompeCabezas = 7;
      } else if (
        manualTest.rompeCabezas == 10 ||
        manualTest.rompeCabezas == 11
      ) {
        updatedTipicaManual.rompeCabezas = 8;
      } else if (
        manualTest.rompeCabezas == 12 ||
        manualTest.rompeCabezas == 13
      ) {
        updatedTipicaManual.rompeCabezas = 9;
      } else if (manualTest.rompeCabezas == 14) {
        updatedTipicaManual.rompeCabezas = 10;
      } else if (
        manualTest.rompeCabezas == 15 ||
        manualTest.rompeCabezas == 16
      ) {
        updatedTipicaManual.rompeCabezas = 11;
      } else if (
        manualTest.rompeCabezas == 17 ||
        manualTest.rompeCabezas == 18
      ) {
        updatedTipicaManual.rompeCabezas = 12;
      } else if (
        manualTest.rompeCabezas == 19 ||
        manualTest.rompeCabezas == 20
      ) {
        updatedTipicaManual.rompeCabezas = 13;
      } else if (
        manualTest.rompeCabezas == 21 ||
        manualTest.rompeCabezas == 22
      ) {
        updatedTipicaManual.rompeCabezas = 14;
      } else if (manualTest.rompeCabezas == 23) {
        updatedTipicaManual.rompeCabezas = 15;
      } else if (
        manualTest.rompeCabezas == 24 ||
        manualTest.rompeCabezas == 25
      ) {
        updatedTipicaManual.rompeCabezas = 16;
      } else if (
        manualTest.rompeCabezas == 26 ||
        manualTest.rompeCabezas == 27
      ) {
        updatedTipicaManual.rompeCabezas = 17;
      } else if (
        manualTest.rompeCabezas == 28 ||
        manualTest.rompeCabezas == 29
      ) {
        updatedTipicaManual.rompeCabezas = 18;
      } else if (
        manualTest.rompeCabezas >= 30 &&
        manualTest.rompeCabezas <= 33
      ) {
        updatedTipicaManual.rompeCabezas = 19;
      }

      //Claves
      if (!manualTest.claves) {
        updatedTipicaManual.claves = "";
      } else if (manualTest.claves == 0) {
        updatedTipicaManual.claves = 2;
      } else if (manualTest.claves >= 1 && manualTest.claves <= 4) {
        updatedTipicaManual.claves = 3;
      } else if (manualTest.claves >= 5 && manualTest.claves <= 7) {
        updatedTipicaManual.claves = 4;
      } else if (manualTest.claves >= 8 && manualTest.claves <= 11) {
        updatedTipicaManual.claves = 5;
      } else if (manualTest.claves >= 12 && manualTest.claves <= 14) {
        updatedTipicaManual.claves = 6;
      } else if (manualTest.claves >= 15 && manualTest.claves <= 18) {
        updatedTipicaManual.claves = 7;
      } else if (manualTest.claves >= 19 && manualTest.claves <= 22) {
        updatedTipicaManual.claves = 8;
      } else if (manualTest.claves >= 23 && manualTest.claves <= 25) {
        updatedTipicaManual.claves = 9;
      } else if (manualTest.claves >= 26 && manualTest.claves <= 29) {
        updatedTipicaManual.claves = 10;
      } else if (manualTest.claves >= 30 && manualTest.claves <= 32) {
        updatedTipicaManual.claves = 11;
      } else if (manualTest.claves >= 33 && manualTest.claves <= 36) {
        updatedTipicaManual.claves = 12;
      } else if (manualTest.claves >= 37 && manualTest.claves <= 39) {
        updatedTipicaManual.claves = 13;
      } else if (manualTest.claves >= 40 && manualTest.claves <= 43) {
        updatedTipicaManual.claves = 14;
      } else if (manualTest.claves >= 44 && manualTest.claves <= 46) {
        updatedTipicaManual.claves = 15;
      } else if (manualTest.claves >= 47 && manualTest.claves <= 50) {
        updatedTipicaManual.claves = 16;
      }

      //Laberintos
      if (!manualTest.laberintos) {
        updatedTipicaManual.laberintos = "";
      } else if (manualTest.laberintos == 0 || manualTest.laberintos == 1) {
        updatedTipicaManual.laberintos = 2;
      } else if (manualTest.laberintos == 2) {
        updatedTipicaManual.laberintos = 3;
      } else if (manualTest.laberintos == 3 || manualTest.laberintos == 4) {
        updatedTipicaManual.laberintos = 4;
      } else if (manualTest.laberintos == 5) {
        updatedTipicaManual.laberintos = 5;
      } else if (manualTest.laberintos == 6 || manualTest.laberintos == 7) {
        updatedTipicaManual.laberintos = 6;
      } else if (manualTest.laberintos == 8) {
        updatedTipicaManual.laberintos = 7;
      } else if (manualTest.laberintos == 9 || manualTest.laberintos == 10) {
        updatedTipicaManual.laberintos = 8;
      } else if (manualTest.laberintos == 11) {
        updatedTipicaManual.laberintos = 9;
      } else if (manualTest.laberintos == 12 || manualTest.laberintos == 13) {
        updatedTipicaManual.laberintos = 10;
      } else if (manualTest.laberintos == 14 || manualTest.laberintos == 15) {
        updatedTipicaManual.laberintos = 11;
      } else if (manualTest.laberintos == 16) {
        updatedTipicaManual.laberintos = 12;
      } else if (manualTest.laberintos == 17 || manualTest.laberintos == 18) {
        updatedTipicaManual.laberintos = 13;
      } else if (manualTest.laberintos == 19) {
        updatedTipicaManual.laberintos = 14;
      } else if (manualTest.laberintos == 20 || manualTest.laberintos == 21) {
        updatedTipicaManual.laberintos = 15;
      } else if (manualTest.laberintos == 22) {
        updatedTipicaManual.laberintos = 16;
      } else if (manualTest.laberintos == 23 || manualTest.laberintos == 24) {
        updatedTipicaManual.laberintos = 17;
      } else if (manualTest.laberintos == 25) {
        updatedTipicaManual.laberintos = 18;
      } else if (manualTest.laberintos >= 26 && manualTest.laberintos <= 30) {
        updatedTipicaManual.laberintos = 19;
      }
    } else if (age.years === 7) {
      //Información
      if (!verbalTest.informacion) {
        updatedTipicaVerbal.informacion = "";
      } else if (verbalTest.informacion == 0 || verbalTest.informacion == 1) {
        updatedTipicaVerbal.informacion = 1;
      } else if (verbalTest.informacion == 2) {
        updatedTipicaVerbal.informacion = 2;
      } else if (verbalTest.informacion == 3) {
        updatedTipicaVerbal.informacion = 3;
      } else if (verbalTest.informacion == 4) {
        updatedTipicaVerbal.informacion = 4;
      } else if (verbalTest.informacion == 5) {
        updatedTipicaVerbal.informacion = 6;
      } else if (verbalTest.informacion == 6) {
        updatedTipicaVerbal.informacion = 7;
      } else if (verbalTest.informacion == 7) {
        updatedTipicaVerbal.informacion = 8;
      } else if (verbalTest.informacion == 8) {
        updatedTipicaVerbal.informacion = 9;
      } else if (verbalTest.informacion == 9) {
        updatedTipicaVerbal.informacion = 10;
      } else if (verbalTest.informacion == 10) {
        updatedTipicaVerbal.informacion = 11;
      } else if (verbalTest.informacion == 11) {
        updatedTipicaVerbal.informacion = 12;
      } else if (verbalTest.informacion == 12) {
        updatedTipicaVerbal.informacion = 13;
      } else if (verbalTest.informacion == 13) {
        updatedTipicaVerbal.informacion = 14;
      } else if (verbalTest.informacion == 14) {
        updatedTipicaVerbal.informacion = 15;
      } else if (verbalTest.informacion == 15) {
        updatedTipicaVerbal.informacion = 17;
      } else if (verbalTest.informacion == 16) {
        updatedTipicaVerbal.informacion = 18;
      } else if (verbalTest.informacion >= 17 && verbalTest.informacion <= 30) {
        updatedTipicaVerbal.informacion = 19;
      }

      //Vocabulario
      if (!verbalTest.vocabulario) {
        updatedTipicaVerbal.vocabulario = "";
      } else if (verbalTest.vocabulario == 0) {
        updatedTipicaVerbal.vocabulario = 2;
      } else if (verbalTest.vocabulario == 1 || verbalTest.vocabulario == 2) {
        updatedTipicaVerbal.vocabulario = 3;
      } else if (verbalTest.vocabulario == 3 || verbalTest.vocabulario == 4) {
        updatedTipicaVerbal.vocabulario = 4;
      } else if (verbalTest.vocabulario == 5 || verbalTest.vocabulario == 6) {
        updatedTipicaVerbal.vocabulario = 5;
      } else if (verbalTest.vocabulario == 7 || verbalTest.vocabulario == 8) {
        updatedTipicaVerbal.vocabulario = 6;
      } else if (verbalTest.vocabulario == 9 || verbalTest.vocabulario == 10) {
        updatedTipicaVerbal.vocabulario = 7;
      } else if (verbalTest.vocabulario == 11 || verbalTest.vocabulario == 12) {
        updatedTipicaVerbal.vocabulario = 8;
      } else if (verbalTest.vocabulario == 13 || verbalTest.vocabulario == 14) {
        updatedTipicaVerbal.vocabulario = 9;
      } else if (verbalTest.vocabulario == 15 || verbalTest.vocabulario == 16) {
        updatedTipicaVerbal.vocabulario = 10;
      } else if (verbalTest.vocabulario == 17 || verbalTest.vocabulario == 18) {
        updatedTipicaVerbal.vocabulario = 11;
      } else if (verbalTest.vocabulario == 19 || verbalTest.vocabulario == 20) {
        updatedTipicaVerbal.vocabulario = 12;
      } else if (verbalTest.vocabulario == 21 || verbalTest.vocabulario == 22) {
        updatedTipicaVerbal.vocabulario = 13;
      } else if (verbalTest.vocabulario == 23 || verbalTest.vocabulario == 24) {
        updatedTipicaVerbal.vocabulario = 14;
      } else if (verbalTest.vocabulario == 25 || verbalTest.vocabulario == 26) {
        updatedTipicaVerbal.vocabulario = 15;
      } else if (verbalTest.vocabulario == 27 || verbalTest.vocabulario == 28) {
        updatedTipicaVerbal.vocabulario = 16;
      } else if (verbalTest.vocabulario == 29 || verbalTest.vocabulario == 30) {
        updatedTipicaVerbal.vocabulario = 17;
      } else if (verbalTest.vocabulario == 31 || verbalTest.vocabulario == 32) {
        updatedTipicaVerbal.vocabulario = 18;
      } else if (verbalTest.vocabulario >= 33 && verbalTest.vocabulario <= 64) {
        updatedTipicaVerbal.vocabulario = 19;
      }

      //Aritmética
      if (!verbalTest.aritmetica) {
        updatedTipicaVerbal.aritmetica = "";
      } else if (verbalTest.aritmetica >= 0 && verbalTest.aritmetica <= 4) {
        updatedTipicaVerbal.aritmetica = 1;
      } else if (verbalTest.aritmetica == 5) {
        updatedTipicaVerbal.aritmetica = 3;
      } else if (verbalTest.aritmetica == 6) {
        updatedTipicaVerbal.aritmetica = 4;
      } else if (verbalTest.aritmetica == 7) {
        updatedTipicaVerbal.aritmetica = 6;
      } else if (verbalTest.aritmetica == 8) {
        updatedTipicaVerbal.aritmetica = 8;
      } else if (verbalTest.aritmetica == 9) {
        updatedTipicaVerbal.aritmetica = 10;
      } else if (verbalTest.aritmetica == 10) {
        updatedTipicaVerbal.aritmetica = 11;
      } else if (verbalTest.aritmetica == 11) {
        updatedTipicaVerbal.aritmetica = 13;
      } else if (verbalTest.aritmetica == 12) {
        updatedTipicaVerbal.aritmetica = 15;
      } else if (verbalTest.aritmetica == 13) {
        updatedTipicaVerbal.aritmetica = 17;
      } else if (verbalTest.aritmetica == 14) {
        updatedTipicaVerbal.aritmetica = 18;
      } else if (verbalTest.aritmetica >= 15 && verbalTest.aritmetica <= 18) {
        updatedTipicaVerbal.aritmetica = 19;
      }

      //Semejanzas
      if (!verbalTest.semejanzas) {
        updatedTipicaVerbal.semejanzas = "";
      } else if (verbalTest.semejanzas == 0 || verbalTest.semejanzas == 1) {
        updatedTipicaVerbal.semejanzas = 3;
      } else if (verbalTest.semejanzas == 2) {
        updatedTipicaVerbal.semejanzas = 4;
      } else if (verbalTest.semejanzas == 3) {
        updatedTipicaVerbal.semejanzas = 5;
      } else if (verbalTest.semejanzas == 4) {
        updatedTipicaVerbal.semejanzas = 6;
      } else if (verbalTest.semejanzas == 5) {
        updatedTipicaVerbal.semejanzas = 7;
      } else if (verbalTest.semejanzas == 6) {
        updatedTipicaVerbal.semejanzas = 8;
      } else if (verbalTest.semejanzas == 7) {
        updatedTipicaVerbal.semejanzas = 9;
      } else if (verbalTest.semejanzas == 8) {
        updatedTipicaVerbal.semejanzas = 10;
      } else if (verbalTest.semejanzas == 9 || verbalTest.semejanzas == 10) {
        updatedTipicaVerbal.semejanzas = 11;
      } else if (verbalTest.semejanzas == 11) {
        updatedTipicaVerbal.semejanzas = 12;
      } else if (verbalTest.semejanzas == 12) {
        updatedTipicaVerbal.semejanzas = 13;
      } else if (verbalTest.semejanzas == 13) {
        updatedTipicaVerbal.semejanzas = 14;
      } else if (verbalTest.semejanzas == 14) {
        updatedTipicaVerbal.semejanzas = 15;
      } else if (verbalTest.semejanzas == 15) {
        updatedTipicaVerbal.semejanzas = 16;
      } else if (verbalTest.semejanzas == 16) {
        updatedTipicaVerbal.semejanzas = 17;
      } else if (verbalTest.semejanzas == 17) {
        updatedTipicaVerbal.semejanzas = 18;
      } else if (verbalTest.semejanzas >= 18 && verbalTest.semejanzas <= 30) {
        updatedTipicaVerbal.semejanzas = 19;
      }

      //Comprension
      if (!verbalTest.comprension) {
        updatedTipicaVerbal.comprension = "";
      } else if (verbalTest.comprension == 0 || verbalTest.comprension == 1) {
        updatedTipicaVerbal.comprension = 1;
      } else if (verbalTest.comprension == 2) {
        updatedTipicaVerbal.comprension = 2;
      } else if (verbalTest.comprension == 3) {
        updatedTipicaVerbal.comprension = 3;
      } else if (verbalTest.comprension == 4) {
        updatedTipicaVerbal.comprension = 4;
      } else if (verbalTest.comprension == 5) {
        updatedTipicaVerbal.comprension = 5;
      } else if (verbalTest.comprension == 6) {
        updatedTipicaVerbal.comprension = 6;
      } else if (verbalTest.comprension == 7) {
        updatedTipicaVerbal.comprension = 7;
      } else if (verbalTest.comprension == 8) {
        updatedTipicaVerbal.comprension = 8;
      } else if (verbalTest.comprension == 9) {
        updatedTipicaVerbal.comprension = 9;
      } else if (verbalTest.comprension == 10) {
        updatedTipicaVerbal.comprension = 10;
      } else if (verbalTest.comprension == 11) {
        updatedTipicaVerbal.comprension = 12;
      } else if (verbalTest.comprension == 12) {
        updatedTipicaVerbal.comprension = 13;
      } else if (verbalTest.comprension == 13) {
        updatedTipicaVerbal.comprension = 14;
      } else if (verbalTest.comprension == 15) {
        updatedTipicaVerbal.comprension = 16;
      } else if (verbalTest.comprension == 16) {
        updatedTipicaVerbal.comprension = 17;
      } else if (verbalTest.comprension == 17) {
        updatedTipicaVerbal.comprension = 18;
      } else if (verbalTest.comprension >= 18 && verbalTest.comprension <= 34) {
        updatedTipicaVerbal.comprension = 19;
      }

      //Dígitos
      if (!verbalTest.digitos) {
        updatedTipicaVerbal.digitos = "";
      } else if (verbalTest.digitos >= 0 && verbalTest.digitos <= 3) {
        updatedTipicaVerbal.digitos = 1;
      } else if (verbalTest.digitos == 4) {
        updatedTipicaVerbal.digitos = 3;
      } else if (verbalTest.digitos == 5) {
        updatedTipicaVerbal.digitos = 4;
      } else if (verbalTest.digitos == 6) {
        updatedTipicaVerbal.digitos = 5;
      } else if (verbalTest.digitos == 7) {
        updatedTipicaVerbal.digitos = 7;
      } else if (verbalTest.digitos == 8) {
        updatedTipicaVerbal.digitos = 8;
      } else if (verbalTest.digitos == 9) {
        updatedTipicaVerbal.digitos = 10;
      } else if (verbalTest.digitos == 10) {
        updatedTipicaVerbal.digitos = 11;
      } else if (verbalTest.digitos == 11) {
        updatedTipicaVerbal.digitos = 12;
      } else if (verbalTest.digitos == 12) {
        updatedTipicaVerbal.digitos = 14;
      } else if (verbalTest.digitos == 13) {
        updatedTipicaVerbal.digitos = 15;
      } else if (verbalTest.digitos == 14) {
        updatedTipicaVerbal.digitos = 17;
      } else if (verbalTest.digitos == 15) {
        updatedTipicaVerbal.digitos = 18;
      } else if (verbalTest.digitos >= 16 && verbalTest.digitos <= 28) {
        updatedTipicaVerbal.digitos = 19;
      }

      //////////////////////// Prueba Manual//////////////////////////

      //Figuras Incompletas
      if (!manualTest.figurasI) {
        updatedTipicaManual.figurasI = "";
      } else if (manualTest.figurasI >= 0 && manualTest.figurasI <= 2) {
        updatedTipicaManual.figurasI = 1;
      } else if (manualTest.figurasI == 3) {
        updatedTipicaManual.figurasI = 2;
      } else if (manualTest.figurasI == 4 || manualTest.figurasI == 5) {
        updatedTipicaManual.figurasI = 3;
      } else if (manualTest.figurasI == 6) {
        updatedTipicaManual.figurasI = 4;
      } else if (manualTest.figurasI == 7) {
        updatedTipicaManual.figurasI = 5;
      } else if (manualTest.figurasI == 8) {
        updatedTipicaManual.figurasI = 6;
      } else if (manualTest.figurasI == 9) {
        updatedTipicaManual.figurasI = 7;
      } else if (manualTest.figurasI == 10 || manualTest.figurasI == 11) {
        updatedTipicaManual.figurasI = 8;
      } else if (manualTest.figurasI == 12) {
        updatedTipicaManual.figurasI = 9;
      } else if (manualTest.figurasI == 13) {
        updatedTipicaManual.figurasI = 10;
      } else if (manualTest.figurasI == 14) {
        updatedTipicaManual.figurasI = 11;
      } else if (manualTest.figurasI == 15 || manualTest.figurasI == 16) {
        updatedTipicaManual.figurasI = 12;
      } else if (manualTest.figurasI == 17) {
        updatedTipicaManual.figurasI = 13;
      } else if (manualTest.figurasI == 18) {
        updatedTipicaManual.figurasI = 14;
      } else if (manualTest.figurasI == 19) {
        updatedTipicaManual.figurasI = 15;
      } else if (manualTest.figurasI == 20 || manualTest.figurasI == 21) {
        updatedTipicaManual.figurasI = 16;
      } else if (manualTest.figurasI == 22) {
        updatedTipicaManual.figurasI = 17;
      } else if (manualTest.figurasI == 23) {
        updatedTipicaManual.figurasI = 18;
      } else if (manualTest.figurasI >= 24 && manualTest.figurasI <= 26) {
        updatedTipicaManual.figurasI = 19;
      }

      //Historietas
      if (!manualTest.historietas) {
        updatedTipicaManual.historietas = "";
      } else if (manualTest.historietas == 0) {
        updatedTipicaManual.historietas = 2;
      } else if (manualTest.historietas == 1 || manualTest.historietas == 2) {
        updatedTipicaManual.historietas = 3;
      } else if (manualTest.historietas >= 3 && manualTest.historietas <= 5) {
        updatedTipicaManual.historietas = 4;
      } else if (manualTest.historietas == 6 || manualTest.historietas == 7) {
        updatedTipicaManual.historietas = 5;
      } else if (manualTest.historietas >= 8 && manualTest.historietas <= 10) {
        updatedTipicaManual.historietas = 6;
      } else if (manualTest.historietas == 11 || manualTest.historietas == 12) {
        updatedTipicaManual.historietas = 7;
      } else if (manualTest.historietas >= 13 && manualTest.historietas <= 15) {
        updatedTipicaManual.historietas = 8;
      } else if (manualTest.historietas == 16 || manualTest.historietas == 17) {
        updatedTipicaManual.historietas = 9;
      } else if (manualTest.historietas >= 18 && manualTest.historietas <= 20) {
        updatedTipicaManual.historietas = 10;
      } else if (manualTest.historietas == 21 || manualTest.historietas == 22) {
        updatedTipicaManual.historietas = 11;
      } else if (manualTest.historietas == 23 && manualTest.historietas == 24) {
        updatedTipicaManual.historietas = 12;
      } else if (manualTest.historietas >= 25 && manualTest.historietas <= 27) {
        updatedTipicaManual.historietas = 13;
      } else if (manualTest.historietas == 28 || manualTest.historietas == 29) {
        updatedTipicaManual.historietas = 14;
      } else if (manualTest.historietas >= 30 && manualTest.historietas <= 32) {
        updatedTipicaManual.historietas = 15;
      } else if (manualTest.historietas == 33 || manualTest.historietas == 34) {
        updatedTipicaManual.historietas = 16;
      } else if (manualTest.historietas >= 35 && manualTest.historietas <= 37) {
        updatedTipicaManual.historietas = 17;
      } else if (manualTest.historietas == 38 || manualTest.historietas == 39) {
        updatedTipicaManual.historietas = 18;
      } else if (manualTest.historietas >= 40 && manualTest.historietas <= 48) {
        updatedTipicaManual.historietas = 19;
      }

      //Cubos
      if (!manualTest.cubos) {
        updatedTipicaManual.cubos = "";
      } else if (manualTest.cubos == 0 && manualTest.cubos == 1) {
        updatedTipicaManual.cubos = 4;
      } else if (manualTest.cubos >= 2 && manualTest.cubos <= 4) {
        updatedTipicaManual.cubos = 5;
      } else if (manualTest.cubos >= 5 && manualTest.cubos <= 7) {
        updatedTipicaManual.cubos = 6;
      } else if (manualTest.cubos >= 8 && manualTest.cubos <= 10) {
        updatedTipicaManual.cubos = 7;
      } else if (manualTest.cubos >= 11 && manualTest.cubos <= 13) {
        updatedTipicaManual.cubos = 8;
      } else if (manualTest.cubos >= 14 && manualTest.cubos <= 16) {
        updatedTipicaManual.cubos = 9;
      } else if (manualTest.cubos >= 17 && manualTest.cubos <= 19) {
        updatedTipicaManual.cubos = 10;
      } else if (manualTest.cubos >= 20 && manualTest.cubos <= 22) {
        updatedTipicaManual.cubos = 11;
      } else if (manualTest.cubos >= 23 && manualTest.cubos <= 25) {
        updatedTipicaManual.cubos = 12;
      } else if (manualTest.cubos >= 26 && manualTest.cubos <= 28) {
        updatedTipicaManual.cubos = 13;
      } else if (manualTest.cubos >= 29 && manualTest.cubos <= 31) {
        updatedTipicaManual.cubos = 14;
      } else if (manualTest.cubos >= 32 && manualTest.cubos <= 34) {
        updatedTipicaManual.cubos = 15;
      } else if (manualTest.cubos >= 35 && manualTest.cubos <= 37) {
        updatedTipicaManual.cubos = 16;
      } else if (manualTest.cubos >= 38 && manualTest.cubos <= 40) {
        updatedTipicaManual.cubos = 17;
      } else if (manualTest.cubos >= 41 && manualTest.cubos <= 43) {
        updatedTipicaManual.cubos = 18;
      } else if (manualTest.cubos >= 44 || manualTest.cubos <= 62) {
        updatedTipicaManual.cubos = 19;
      }

      //Rompecabezas
      if (!manualTest.rompeCabezas) {
        updatedTipicaManual.rompeCabezas = "";
      } else if (manualTest.rompeCabezas == 0 || manualTest.rompeCabezas == 1) {
        updatedTipicaManual.rompeCabezas = 2;
      } else if (manualTest.rompeCabezas == 2 || manualTest.rompeCabezas == 3) {
        updatedTipicaManual.rompeCabezas = 3;
      } else if (manualTest.rompeCabezas == 4 || manualTest.rompeCabezas == 5) {
        updatedTipicaManual.rompeCabezas = 4;
      } else if (manualTest.rompeCabezas == 6 || manualTest.rompeCabezas == 7) {
        updatedTipicaManual.rompeCabezas = 5;
      } else if (manualTest.rompeCabezas == 8 || manualTest.rompeCabezas == 9) {
        updatedTipicaManual.rompeCabezas = 6;
      } else if (
        manualTest.rompeCabezas == 10 ||
        manualTest.rompeCabezas == 11
      ) {
        updatedTipicaManual.rompeCabezas = 7;
      } else if (manualTest.rompeCabezas == 12) {
        updatedTipicaManual.rompeCabezas = 8;
      } else if (
        manualTest.rompeCabezas == 13 ||
        manualTest.rompeCabezas == 14
      ) {
        updatedTipicaManual.rompeCabezas = 9;
      } else if (manualTest.rompeCabezas == 15 || manualTest == 16) {
        updatedTipicaManual.rompeCabezas = 10;
      } else if (
        manualTest.rompeCabezas == 17 ||
        manualTest.rompeCabezas == 18
      ) {
        updatedTipicaManual.rompeCabezas = 11;
      } else if (
        manualTest.rompeCabezas == 19 ||
        manualTest.rompeCabezas == 20
      ) {
        updatedTipicaManual.rompeCabezas = 12;
      } else if (
        manualTest.rompeCabezas == 21 ||
        manualTest.rompeCabezas == 22
      ) {
        updatedTipicaManual.rompeCabezas = 13;
      } else if (
        manualTest.rompeCabezas == 23 ||
        manualTest.rompeCabezas == 24
      ) {
        updatedTipicaManual.rompeCabezas = 14;
      } else if (
        manualTest.rompeCabezas == 25 ||
        manualTest.rompeCabezas == 26
      ) {
        updatedTipicaManual.rompeCabezas = 15;
      } else if (
        manualTest.rompeCabezas == 27 ||
        manualTest.rompeCabezas == 28
      ) {
        updatedTipicaManual.rompeCabezas = 16;
      } else if (
        manualTest.rompeCabezas == 29 ||
        manualTest.rompeCabezas == 30
      ) {
        updatedTipicaManual.rompeCabezas = 17;
      } else if (
        manualTest.rompeCabezas == 31 ||
        manualTest.rompeCabezas == 32
      ) {
        updatedTipicaManual.rompeCabezas = 18;
      } else if (manualTest.rompeCabezas == 33) {
        updatedTipicaManual.rompeCabezas = 19;
      }

      //Claves
      if (!manualTest.claves) {
        updatedTipicaManual.claves = "";
      } else if (manualTest.claves >= 0 && manualTest.claves <= 13) {
        updatedTipicaManual.claves = 1;
      } else if (manualTest.claves >= 14 && manualTest.claves <= 16) {
        updatedTipicaManual.claves = 2;
      } else if (manualTest.claves >= 17 && manualTest.claves <= 19) {
        updatedTipicaManual.claves = 3;
      } else if (manualTest.claves >= 20 && manualTest.claves <= 22) {
        updatedTipicaManual.claves = 4;
      } else if (manualTest.claves == 23 || manualTest.claves == 24) {
        updatedTipicaManual.claves = 5;
      } else if (manualTest.claves >= 25 && manualTest.claves <= 27) {
        updatedTipicaManual.claves = 6;
      } else if (manualTest.claves >= 28 && manualTest.claves <= 30) {
        updatedTipicaManual.claves = 7;
      } else if (manualTest.claves >= 31 && manualTest.claves <= 33) {
        updatedTipicaManual.claves = 8;
      } else if (manualTest.claves >= 34 && manualTest.claves <= 36) {
        updatedTipicaManual.claves = 9;
      } else if (manualTest.claves == 37 || manualTest.claves == 38) {
        updatedTipicaManual.claves = 10;
      } else if (manualTest.claves >= 39 && manualTest.claves <= 41) {
        updatedTipicaManual.claves = 11;
      } else if (manualTest.claves >= 42 && manualTest.claves <= 44) {
        updatedTipicaManual.claves = 12;
      } else if (manualTest.claves >= 45 && manualTest.claves <= 47) {
        updatedTipicaManual.claves = 13;
      } else if (manualTest.claves >= 48 && manualTest.claves <= 50) {
        updatedTipicaManual.claves = 14;
      }

      //Laberintos
      if (!manualTest.laberintos) {
        updatedTipicaManual.laberintos = "";
      } else if (manualTest.laberintos == 0) {
        updatedTipicaManual.laberintos = 1;
      } else if (manualTest.laberintos == 1 || manualTest.laberintos == 2) {
        updatedTipicaManual.laberintos = 2;
      } else if (manualTest.laberintos == 3 || manualTest.laberintos == 4) {
        updatedTipicaManual.laberintos = 3;
      } else if (manualTest.laberintos == 5 || manualTest.laberintos == 6) {
        updatedTipicaManual.laberintos = 4;
      } else if (manualTest.laberintos == 7 || manualTest.laberintos == 8) {
        updatedTipicaManual.laberintos = 5;
      } else if (manualTest.laberintos == 9) {
        updatedTipicaManual.laberintos = 6;
      } else if (manualTest.laberintos == 10 || manualTest.laberintos == 11) {
        updatedTipicaManual.laberintos = 7;
      } else if (manualTest.laberintos == 12 || manualTest.laberintos == 13) {
        updatedTipicaManual.laberintos = 8;
      } else if (manualTest.laberintos == 14 || manualTest.laberintos == 15) {
        updatedTipicaManual.laberintos = 9;
      } else if (manualTest.laberintos == 16 || manualTest.laberintos == 17) {
        updatedTipicaManual.laberintos = 10;
      } else if (manualTest.laberintos == 18) {
        updatedTipicaManual.laberintos = 11;
      } else if (manualTest.laberintos == 19 || manualTest.laberintos == 20) {
        updatedTipicaManual.laberintos = 12;
      } else if (manualTest.laberintos == 21 || manualTest.laberintos == 22) {
        updatedTipicaManual.laberintos = 13;
      } else if (manualTest.laberintos == 23 || manualTest.laberintos == 24) {
        updatedTipicaManual.laberintos = 14;
      } else if (manualTest.laberintos == 25 || manualTest.laberintos == 26) {
        updatedTipicaManual.laberintos = 15;
      } else if (manualTest.laberintos == 27 || manualTest.laberintos == 28) {
        updatedTipicaManual.laberintos = 16;
      } else if (manualTest.laberintos == 29) {
        updatedTipicaManual.laberintos = 17;
      } else if (manualTest.laberintos == 30) {
        updatedTipicaManual.laberintos = 18;
      }
    } else if (age.years === 8) {
      //Información
      if (!verbalTest.informacion) {
        updatedTipicaVerbal.informacion = "";
      } else if (verbalTest.informacion >= 0 && verbalTest.informacion <= 4) {
        updatedTipicaVerbal.informacion = 1;
      } else if (verbalTest.informacion == 5) {
        updatedTipicaVerbal.informacion = 2;
      } else if (verbalTest.informacion == 6) {
        updatedTipicaVerbal.informacion = 3;
      } else if (verbalTest.informacion == 7) {
        updatedTipicaVerbal.informacion = 4;
      } else if (verbalTest.informacion == 8) {
        updatedTipicaVerbal.informacion = 6;
      } else if (verbalTest.informacion == 9) {
        updatedTipicaVerbal.informacion = 7;
      } else if (verbalTest.informacion == 10) {
        updatedTipicaVerbal.informacion = 8;
      } else if (verbalTest.informacion == 11) {
        updatedTipicaVerbal.informacion = 10;
      } else if (verbalTest.informacion == 12) {
        updatedTipicaVerbal.informacion = 11;
      } else if (verbalTest.informacion == 13) {
        updatedTipicaVerbal.informacion = 12;
      } else if (verbalTest.informacion == 14) {
        updatedTipicaVerbal.informacion = 13;
      } else if (verbalTest.informacion == 15) {
        updatedTipicaVerbal.informacion = 14;
      } else if (verbalTest.informacion == 16) {
        updatedTipicaVerbal.informacion = 16;
      } else if (verbalTest.informacion == 17) {
        updatedTipicaVerbal.informacion = 17;
      } else if (verbalTest.informacion == 18) {
        updatedTipicaVerbal.informacion = 18;
      } else if (verbalTest.informacion >= 19 && verbalTest.informacion <= 30) {
        updatedTipicaVerbal.informacion = 19;
      }

      //Vocabulario
      if (!verbalTest.vocabulario) {
        updatedTipicaVerbal.vocabulario = "";
      } else if (verbalTest.vocabulario == 0 || verbalTest.vocabulario == 1) {
        updatedTipicaVerbal.vocabulario = 2;
      } else if (verbalTest.vocabulario >= 2 && verbalTest.vocabulario <= 4) {
        updatedTipicaVerbal.vocabulario = 3;
      } else if (verbalTest.vocabulario >= 5 && verbalTest.vocabulario <= 7) {
        updatedTipicaVerbal.vocabulario = 4;
      } else if (verbalTest.vocabulario == 8 || verbalTest.vocabulario == 9) {
        updatedTipicaVerbal.vocabulario = 5;
      } else if (verbalTest.vocabulario >= 10 && verbalTest.vocabulario <= 12) {
        updatedTipicaVerbal.vocabulario = 6;
      } else if (verbalTest.vocabulario >= 13 && verbalTest.vocabulario <= 15) {
        updatedTipicaVerbal.vocabulario = 7;
      } else if (verbalTest.vocabulario >= 16 && verbalTest.vocabulario <= 18) {
        updatedTipicaVerbal.vocabulario = 8;
      } else if (verbalTest.vocabulario == 19 || verbalTest.vocabulario == 20) {
        updatedTipicaVerbal.vocabulario = 9;
      } else if (verbalTest.vocabulario >= 21 && verbalTest.vocabulario <= 23) {
        updatedTipicaVerbal.vocabulario = 10;
      } else if (verbalTest.vocabulario >= 24 && verbalTest.vocabulario <= 26) {
        updatedTipicaVerbal.vocabulario = 11;
      } else if (verbalTest.vocabulario >= 27 && verbalTest.vocabulario <= 29) {
        updatedTipicaVerbal.vocabulario = 12;
      } else if (verbalTest.vocabulario >= 30 && verbalTest.vocabulario <= 32) {
        updatedTipicaVerbal.vocabulario = 13;
      } else if (verbalTest.vocabulario == 33 || verbalTest.vocabulario == 34) {
        updatedTipicaVerbal.vocabulario = 14;
      } else if (verbalTest.vocabulario >= 35 && verbalTest.vocabulario <= 37) {
        updatedTipicaVerbal.vocabulario = 15;
      } else if (verbalTest.vocabulario >= 38 && verbalTest.vocabulario <= 40) {
        updatedTipicaVerbal.vocabulario = 16;
      } else if (verbalTest.vocabulario >= 41 && verbalTest.vocabulario <= 43) {
        updatedTipicaVerbal.vocabulario = 17;
      } else if (verbalTest.vocabulario == 44 || verbalTest.vocabulario == 45) {
        updatedTipicaVerbal.vocabulario = 18;
      } else if (verbalTest.vocabulario >= 46 && verbalTest.vocabulario <= 64) {
        updatedTipicaVerbal.vocabulario = 19;
      }

      //Aritmética
      if (!verbalTest.aritmetica) {
        updatedTipicaVerbal.aritmetica = "";
      } else if (verbalTest.aritmetica >= 0 && verbalTest.aritmetica <= 5) {
        updatedTipicaVerbal.aritmetica = 1;
      } else if (verbalTest.aritmetica == 6) {
        updatedTipicaVerbal.aritmetica = 3;
      } else if (verbalTest.aritmetica == 7) {
        updatedTipicaVerbal.aritmetica = 5;
      } else if (verbalTest.aritmetica == 8) {
        updatedTipicaVerbal.aritmetica = 7;
      } else if (verbalTest.aritmetica == 9) {
        updatedTipicaVerbal.aritmetica = 9;
      } else if (verbalTest.aritmetica == 10) {
        updatedTipicaVerbal.aritmetica = 10;
      } else if (verbalTest.aritmetica == 11) {
        updatedTipicaVerbal.aritmetica = 12;
      } else if (verbalTest.aritmetica == 12) {
        updatedTipicaVerbal.aritmetica = 14;
      } else if (verbalTest.aritmetica == 13) {
        updatedTipicaVerbal.aritmetica = 16;
      } else if (verbalTest.aritmetica == 14) {
        updatedTipicaVerbal.aritmetica = 18;
      } else if (verbalTest.aritmetica >= 15 && verbalTest.aritmetica <= 18) {
        updatedTipicaVerbal.aritmetica = 19;
      }

      //Semejanzas
      if (!verbalTest.semejanzas) {
        updatedTipicaVerbal.semejanzas = "";
      } else if (verbalTest.semejanzas >= 0 && verbalTest.semejanzas <= 2) {
        updatedTipicaVerbal.semejanzas = 1;
      } else if (verbalTest.semejanzas == 3) {
        updatedTipicaVerbal.semejanzas = 2;
      } else if (verbalTest.semejanzas == 4) {
        updatedTipicaVerbal.semejanzas = 3;
      } else if (verbalTest.semejanzas == 5) {
        updatedTipicaVerbal.semejanzas = 4;
      } else if (verbalTest.semejanzas == 6) {
        updatedTipicaVerbal.semejanzas = 5;
      } else if (verbalTest.semejanzas == 7) {
        updatedTipicaVerbal.semejanzas = 7;
      } else if (verbalTest.semejanzas == 8) {
        updatedTipicaVerbal.semejanzas = 8;
      } else if (verbalTest.semejanzas == 9) {
        updatedTipicaVerbal.semejanzas = 9;
      } else if (verbalTest.semejanzas == 10) {
        updatedTipicaVerbal.semejanzas = 10;
      } else if (verbalTest.semejanzas == 11) {
        updatedTipicaVerbal.semejanzas = 11;
      } else if (verbalTest.semejanzas == 12) {
        updatedTipicaVerbal.semejanzas = 12;
      } else if (verbalTest.semejanzas == 13) {
        updatedTipicaVerbal.semejanzas = 14;
      } else if (verbalTest.semejanzas == 14) {
        updatedTipicaVerbal.semejanzas = 15;
      } else if (verbalTest.semejanzas == 15) {
        updatedTipicaVerbal.semejanzas = 16;
      } else if (verbalTest.semejanzas == 16) {
        updatedTipicaVerbal.semejanzas = 17;
      } else if (verbalTest.semejanzas == 17) {
        updatedTipicaVerbal.semejanzas = 18;
      } else if (verbalTest.semejanzas >= 18 && verbalTest.semejanzas <= 30) {
        updatedTipicaVerbal.semejanzas = 19;
      }

      //Comprension
      if (!verbalTest.comprension) {
        updatedTipicaVerbal.comprension = "";
      } else if (verbalTest.comprension == 0 || verbalTest.comprension == 1) {
        updatedTipicaVerbal.comprension = 1;
      } else if (verbalTest.comprension == 2 || verbalTest.comprension == 3) {
        updatedTipicaVerbal.comprension = 2;
      } else if (verbalTest.comprension == 4) {
        updatedTipicaVerbal.comprension = 3;
      } else if (verbalTest.comprension == 5) {
        updatedTipicaVerbal.comprension = 4;
      } else if (verbalTest.comprension == 6) {
        updatedTipicaVerbal.comprension = 5;
      } else if (verbalTest.comprension == 7) {
        updatedTipicaVerbal.comprension = 6;
      } else if (verbalTest.comprension == 8 || verbalTest.comprension == 9) {
        updatedTipicaVerbal.comprension = 7;
      } else if (verbalTest.comprension == 10) {
        updatedTipicaVerbal.comprension = 8;
      } else if (verbalTest.comprension == 11) {
        updatedTipicaVerbal.comprension = 9;
      } else if (verbalTest.comprension == 12) {
        updatedTipicaVerbal.comprension = 10;
      } else if (verbalTest.comprension == 13) {
        updatedTipicaVerbal.comprension = 11;
      } else if (verbalTest.comprension == 14 || verbalTest.comprension == 15) {
        updatedTipicaVerbal.comprension = 12;
      } else if (verbalTest.comprension == 16) {
        updatedTipicaVerbal.comprension = 13;
      } else if (verbalTest.comprension == 17) {
        updatedTipicaVerbal.comprension = 14;
      } else if (verbalTest.comprension == 18) {
        updatedTipicaVerbal.comprension = 15;
      } else if (verbalTest.comprension == 19) {
        updatedTipicaVerbal.comprension = 16;
      } else if (verbalTest.comprension == 20 || verbalTest.comprension == 21) {
        updatedTipicaVerbal.comprension = 17;
      } else if (verbalTest.comprension == 22) {
        updatedTipicaVerbal.comprension = 18;
      } else if (verbalTest.comprension >= 23 && verbalTest.comprension <= 34) {
        updatedTipicaVerbal.comprension = 19;
      }

      //Dígitos
      if (!verbalTest.digitos) {
        updatedTipicaVerbal.digitos = "";
      } else if (verbalTest.digitos >= 0 && verbalTest.digitos <= 3) {
        updatedTipicaVerbal.digitos = 1;
      } else if (verbalTest.digitos == 4) {
        updatedTipicaVerbal.digitos = 2;
      } else if (verbalTest.digitos == 5) {
        updatedTipicaVerbal.digitos = 4;
      } else if (verbalTest.digitos == 6) {
        updatedTipicaVerbal.digitos = 5;
      } else if (verbalTest.digitos == 7) {
        updatedTipicaVerbal.digitos = 6;
      } else if (verbalTest.digitos == 8) {
        updatedTipicaVerbal.digitos = 7;
      } else if (verbalTest.digitos == 9) {
        updatedTipicaVerbal.digitos = 9;
      } else if (verbalTest.digitos == 10) {
        updatedTipicaVerbal.digitos = 10;
      } else if (verbalTest.digitos == 11) {
        updatedTipicaVerbal.digitos = 11;
      } else if (verbalTest.digitos == 12) {
        updatedTipicaVerbal.digitos = 13;
      } else if (verbalTest.digitos == 13) {
        updatedTipicaVerbal.digitos = 14;
      } else if (verbalTest.digitos == 14) {
        updatedTipicaVerbal.digitos = 15;
      } else if (verbalTest.digitos == 15) {
        updatedTipicaVerbal.digitos = 16;
      } else if (verbalTest.digitos == 16) {
        updatedTipicaVerbal.digitos = 18;
      } else if (verbalTest.digitos >= 17 && verbalTest.digitos <= 28) {
        updatedTipicaVerbal.digitos = 19;
      }

      //////////////////////// Prueba Manual//////////////////////////

      //Figuras Incompletas
      if (!manualTest.figurasI) {
        updatedTipicaManual.figurasI = "";
      } else if (manualTest.figurasI >= 0 && manualTest.figurasI <= 3) {
        updatedTipicaManual.figurasI = 1;
      } else if (manualTest.figurasI == 4 || manualTest.figurasI == 5) {
        updatedTipicaManual.figurasI = 2;
      } else if (manualTest.figurasI == 6) {
        updatedTipicaManual.figurasI = 3;
      } else if (manualTest.figurasI == 7) {
        updatedTipicaManual.figurasI = 4;
      } else if (manualTest.figurasI == 8 || manualTest.figurasI == 9) {
        updatedTipicaManual.figurasI = 5;
      } else if (manualTest.figurasI == 10) {
        updatedTipicaManual.figurasI = 6;
      } else if (manualTest.figurasI == 11 || manualTest.figurasI == 12) {
        updatedTipicaManual.figurasI = 7;
      } else if (manualTest.figurasI == 13) {
        updatedTipicaManual.figurasI = 8;
      } else if (manualTest.figurasI == 14) {
        updatedTipicaManual.figurasI = 9;
      } else if (manualTest.figurasI == 15 || manualTest.figurasI == 16) {
        updatedTipicaManual.figurasI = 10;
      } else if (manualTest.figurasI == 17) {
        updatedTipicaManual.figurasI = 11;
      } else if (manualTest.figurasI == 18) {
        updatedTipicaManual.figurasI = 12;
      } else if (manualTest.figurasI == 19 || manualTest.figurasI == 20) {
        updatedTipicaManual.figurasI = 13;
      } else if (manualTest.figurasI == 21) {
        updatedTipicaManual.figurasI = 14;
      } else if (manualTest.figurasI == 22) {
        updatedTipicaManual.figurasI = 15;
      } else if (manualTest.figurasI == 23 || manualTest.figurasI == 24) {
        updatedTipicaManual.figurasI = 16;
      } else if (manualTest.figurasI == 25) {
        updatedTipicaManual.figurasI = 17;
      } else if (manualTest.figurasI == 26) {
        updatedTipicaManual.figurasI = 18;
      }

      //Historietas
      if (!manualTest.historietas) {
        updatedTipicaManual.historietas = "";
      } else if (manualTest.historietas >= 0 && manualTest.historietas <= 10) {
        updatedTipicaManual.historietas = 1;
      } else if (manualTest.historietas == 11) {
        updatedTipicaManual.historietas = 2;
      } else if (manualTest.historietas == 12 || manualTest.historietas == 13) {
        updatedTipicaManual.historietas = 3;
      } else if (manualTest.historietas == 14) {
        updatedTipicaManual.historietas = 4;
      } else if (manualTest.historietas == 15 || manualTest.historietas == 16) {
        updatedTipicaManual.historietas = 5;
      } else if (manualTest.historietas == 17) {
        updatedTipicaManual.historietas = 6;
      } else if (manualTest.historietas == 18 || manualTest.historietas == 19) {
        updatedTipicaManual.historietas = 7;
      } else if (manualTest.historietas == 20) {
        updatedTipicaManual.historietas = 8;
      } else if (manualTest.historietas == 21 || manualTest.historietas == 22) {
        updatedTipicaManual.historietas = 9;
      } else if (manualTest.historietas == 23 || manualTest.historietas == 24) {
        updatedTipicaManual.historietas = 10;
      } else if (manualTest.historietas == 25) {
        updatedTipicaManual.historietas = 11;
      } else if (manualTest.historietas == 26 || manualTest.historietas == 27) {
        updatedTipicaManual.historietas = 12;
      } else if (manualTest.historietas == 28) {
        updatedTipicaManual.historietas = 13;
      } else if (manualTest.historietas == 29 || manualTest.historietas == 30) {
        updatedTipicaManual.historietas = 14;
      } else if (manualTest.historietas == 31) {
        updatedTipicaManual.historietas = 15;
      } else if (
        manualTest.historietas == 32 ||
        manualTest.historietas === 33
      ) {
        updatedTipicaManual.historietas = 16;
      } else if (manualTest.historietas == 34) {
        updatedTipicaManual.historietas = 17;
      } else if (
        manualTest.historietas == 35 ||
        manualTest.historietas === 36
      ) {
        updatedTipicaManual.historietas = 18;
      } else if (manualTest.historietas >= 37 && manualTest.historietas <= 48) {
        updatedTipicaManual.historietas = 19;
      }

      //Cubos
      if (!manualTest.cubos) {
        updatedTipicaManual.cubos = "";
      } else if (manualTest.cubos == 0 && manualTest.cubos == 1) {
        updatedTipicaManual.cubos = 2;
      } else if (manualTest.cubos == 2) {
        updatedTipicaManual.cubos = 3;
      } else if (manualTest.cubos >= 3 && manualTest.cubos <= 6) {
        updatedTipicaManual.cubos = 4;
      } else if (manualTest.cubos >= 7 && manualTest.cubos <= 10) {
        updatedTipicaManual.cubos = 5;
      } else if (manualTest.cubos >= 11 && manualTest.cubos <= 13) {
        updatedTipicaManual.cubos = 6;
      } else if (manualTest.cubos >= 14 && manualTest.cubos <= 17) {
        updatedTipicaManual.cubos = 7;
      } else if (manualTest.cubos >= 18 && manualTest.cubos <= 21) {
        updatedTipicaManual.cubos = 8;
      } else if (manualTest.cubos >= 22 && manualTest.cubos <= 24) {
        updatedTipicaManual.cubos = 9;
      } else if (manualTest.cubos >= 25 && manualTest.cubos <= 29) {
        updatedTipicaManual.cubos = 10;
      } else if (manualTest.cubos == 30 || manualTest.cubos == 31) {
        updatedTipicaManual.cubos = 11;
      } else if (manualTest.cubos >= 32 && manualTest.cubos <= 35) {
        updatedTipicaManual.cubos = 12;
      } else if (manualTest.cubos >= 36 && manualTest.cubos <= 40) {
        updatedTipicaManual.cubos = 13;
      } else if (manualTest.cubos >= 41 && manualTest.cubos <= 43) {
        updatedTipicaManual.cubos = 14;
      } else if (manualTest.cubos >= 44 && manualTest.cubos <= 47) {
        updatedTipicaManual.cubos = 15;
      } else if (manualTest.cubos >= 48 && manualTest.cubos <= 50) {
        updatedTipicaManual.cubos = 16;
      } else if (manualTest.cubos >= 51 && manualTest.cubos <= 54) {
        updatedTipicaManual.cubos = 17;
      } else if (manualTest.cubos >= 55 && manualTest.cubos <= 58) {
        updatedTipicaManual.cubos = 18;
      } else if (manualTest.cubos >= 59 || manualTest.cubos <= 62) {
        updatedTipicaManual.cubos = 19;
      }

      //Rompecabezas
      if (!manualTest.rompeCabezas) {
        updatedTipicaManual.rompeCabezas = "";
      } else if (manualTest.rompeCabezas >= 0 && manualTest.rompeCabezas <= 8) {
        updatedTipicaManual.rompeCabezas = 1;
      } else if (manualTest.rompeCabezas == 9) {
        updatedTipicaManual.rompeCabezas = 2;
      } else if (manualTest.rompeCabezas == 10) {
        updatedTipicaManual.rompeCabezas = 3;
      } else if (
        manualTest.rompeCabezas == 11 ||
        manualTest.rompeCabezas == 12
      ) {
        updatedTipicaManual.rompeCabezas = 4;
      } else if (manualTest.rompeCabezas == 13) {
        updatedTipicaManual.rompeCabezas = 5;
      } else if (manualTest.rompeCabezas == 14) {
        updatedTipicaManual.rompeCabezas = 6;
      } else if (manualTest.rompeCabezas == 15) {
        updatedTipicaManual.rompeCabezas = 7;
      } else if (
        manualTest.rompeCabezas == 16 ||
        manualTest.rompeCabezas == 17
      ) {
        updatedTipicaManual.rompeCabezas = 8;
      } else if (manualTest.rompeCabezas == 18) {
        updatedTipicaManual.rompeCabezas = 9;
      } else if (manualTest.rompeCabezas == 19) {
        updatedTipicaManual.rompeCabezas = 10;
      } else if (
        manualTest.rompeCabezas == 20 ||
        manualTest.rompeCabezas == 21
      ) {
        updatedTipicaManual.rompeCabezas = 11;
      } else if (manualTest.rompeCabezas == 22) {
        updatedTipicaManual.rompeCabezas = 12;
      } else if (manualTest.rompeCabezas == 23) {
        updatedTipicaManual.rompeCabezas = 13;
      } else if (
        manualTest.rompeCabezas == 24 ||
        manualTest.rompeCabezas == 25
      ) {
        updatedTipicaManual.rompeCabezas = 14;
      } else if (manualTest.rompeCabezas == 26) {
        updatedTipicaManual.rompeCabezas = 15;
      } else if (manualTest.rompeCabezas == 27) {
        updatedTipicaManual.rompeCabezas = 16;
      } else if (manualTest.rompeCabezas == 28) {
        updatedTipicaManual.rompeCabezas = 17;
      } else if (
        manualTest.rompeCabezas == 29 ||
        manualTest.rompeCabezas == 30
      ) {
        updatedTipicaManual.rompeCabezas = 18;
      } else if (
        manualTest.rompeCabezas >= 31 &&
        manualTest.rompeCabezas <= 33
      ) {
        updatedTipicaManual.rompeCabezas = 19;
      }

      //Claves
      if (!manualTest.claves) {
        updatedTipicaManual.claves = "";
      } else if (manualTest.claves >= 0 && manualTest.claves <= 12) {
        updatedTipicaManual.claves = 1;
      } else if (manualTest.claves == 13) {
        updatedTipicaManual.claves = 2;
      } else if (manualTest.claves == 14 || manualTest.claves == 15) {
        updatedTipicaManual.claves = 3;
      } else if (manualTest.claves == 16 || manualTest.claves == 17) {
        updatedTipicaManual.claves = 4;
      } else if (manualTest.claves == 18 || manualTest.claves == 19) {
        updatedTipicaManual.claves = 5;
      } else if (manualTest.claves == 20 || manualTest.claves == 21) {
        updatedTipicaManual.claves = 6;
      } else if (manualTest.claves == 22 || manualTest.claves == 23) {
        updatedTipicaManual.claves = 7;
      } else if (manualTest.claves == 24 || manualTest.claves == 25) {
        updatedTipicaManual.claves = 8;
      } else if (manualTest.claves == 26 || manualTest.claves == 27) {
        updatedTipicaManual.claves = 9;
      } else if (manualTest.claves == 28 || manualTest.claves == 29) {
        updatedTipicaManual.claves = 10;
      } else if (manualTest.claves == 30 || manualTest.claves == 31) {
        updatedTipicaManual.claves = 11;
      } else if (manualTest.claves == 32 || manualTest.claves == 33) {
        updatedTipicaManual.claves = 12;
      } else if (manualTest.claves == 34 || manualTest.claves == 35) {
        updatedTipicaManual.claves = 13;
      } else if (manualTest.claves == 36 || manualTest.claves == 37) {
        updatedTipicaManual.claves = 14;
      } else if (manualTest.claves == 38 || manualTest.claves == 39) {
        updatedTipicaManual.claves = 15;
      } else if (manualTest.claves == 40 || manualTest.claves == 41) {
        updatedTipicaManual.claves = 16;
      } else if (manualTest.claves == 42 || manualTest.claves == 43) {
        updatedTipicaManual.claves = 17;
      } else if (manualTest.claves == 44 || manualTest.claves == 45) {
        updatedTipicaManual.claves = 18;
      } else if (manualTest.claves >= 46 && manualTest.claves <= 93) {
        updatedTipicaManual.claves = 19;
      }

      //Laberintos
      if (!manualTest.laberintos) {
        updatedTipicaManual.laberintos = "";
      } else if (manualTest.laberintos >= 0 && manualTest.laberintos <= 6) {
        updatedTipicaManual.laberintos = 1;
      } else if (manualTest.laberintos == 7 || manualTest.laberintos == 8) {
        updatedTipicaManual.laberintos = 2;
      } else if (manualTest.laberintos == 9) {
        updatedTipicaManual.laberintos = 3;
      } else if (manualTest.laberintos == 10 || manualTest.laberintos == 11) {
        updatedTipicaManual.laberintos = 4;
      } else if (manualTest.laberintos == 12) {
        updatedTipicaManual.laberintos = 5;
      } else if (manualTest.laberintos == 13) {
        updatedTipicaManual.laberintos = 6;
      } else if (manualTest.laberintos == 14 || manualTest.laberintos == 15) {
        updatedTipicaManual.laberintos = 7;
      } else if (manualTest.laberintos == 16) {
        updatedTipicaManual.laberintos = 8;
      } else if (manualTest.laberintos == 17 || manualTest.laberintos == 18) {
        updatedTipicaManual.laberintos = 9;
      } else if (manualTest.laberintos == 19) {
        updatedTipicaManual.laberintos = 10;
      } else if (manualTest.laberintos == 20 || manualTest.laberintos == 21) {
        updatedTipicaManual.laberintos = 11;
      } else if (manualTest.laberintos == 22) {
        updatedTipicaManual.laberintos = 12;
      } else if (manualTest.laberintos == 23) {
        updatedTipicaManual.laberintos = 13;
      } else if (manualTest.laberintos == 24 || manualTest.laberintos == 25) {
        updatedTipicaManual.laberintos = 14;
      } else if (manualTest.laberintos == 26) {
        updatedTipicaManual.laberintos = 15;
      } else if (manualTest.laberintos == 27 || manualTest.laberintos == 28) {
        updatedTipicaManual.laberintos = 16;
      } else if (manualTest.laberintos == 29) {
        updatedTipicaManual.laberintos = 17;
      } else if (manualTest.laberintos == 30) {
        updatedTipicaManual.laberintos = 18;
      }
    } else if (age.years === 9) {
      //Información
      if (!verbalTest.informacion) {
        updatedTipicaVerbal.informacion = "";
      } else if (verbalTest.informacion >= 0 && verbalTest.informacion <= 4) {
        updatedTipicaVerbal.informacion = 1;
      } else if (verbalTest.informacion == 5) {
        updatedTipicaVerbal.informacion = 2;
      } else if (verbalTest.informacion == 6) {
        updatedTipicaVerbal.informacion = 3;
      } else if (verbalTest.informacion == 7) {
        updatedTipicaVerbal.informacion = 4;
      } else if (verbalTest.informacion == 8) {
        updatedTipicaVerbal.informacion = 5;
      } else if (verbalTest.informacion == 9) {
        updatedTipicaVerbal.informacion = 6;
      } else if (verbalTest.informacion == 10) {
        updatedTipicaVerbal.informacion = 7;
      } else if (verbalTest.informacion == 11) {
        updatedTipicaVerbal.informacion = 8;
      } else if (verbalTest.informacion == 12) {
        updatedTipicaVerbal.informacion = 9;
      } else if (verbalTest.informacion == 13) {
        updatedTipicaVerbal.informacion = 10;
      } else if (verbalTest.informacion == 14) {
        updatedTipicaVerbal.informacion = 11;
      } else if (verbalTest.informacion == 15) {
        updatedTipicaVerbal.informacion = 12;
      } else if (verbalTest.informacion == 16) {
        updatedTipicaVerbal.informacion = 13;
      } else if (verbalTest.informacion == 17) {
        updatedTipicaVerbal.informacion = 14;
      } else if (verbalTest.informacion == 18) {
        updatedTipicaVerbal.informacion = 15;
      } else if (verbalTest.informacion == 19) {
        updatedTipicaVerbal.informacion = 16;
      } else if (verbalTest.informacion == 20) {
        updatedTipicaVerbal.informacion = 17;
      } else if (verbalTest.informacion == 21) {
        updatedTipicaVerbal.informacion = 18;
      } else if (verbalTest.informacion >= 22 && verbalTest.informacion <= 30) {
        updatedTipicaVerbal.informacion = 19;
      }

      //Vocabulario
      if (!verbalTest.vocabulario) {
        updatedTipicaVerbal.vocabulario = "";
      } else if (verbalTest.vocabulario >= 0 && verbalTest.vocabulario <= 9) {
        updatedTipicaVerbal.vocabulario = 1;
      } else if (verbalTest.vocabulario == 10 || verbalTest.vocabulario == 11) {
        updatedTipicaVerbal.vocabulario = 2;
      } else if (verbalTest.vocabulario == 12 || verbalTest.vocabulario == 13) {
        updatedTipicaVerbal.vocabulario = 3;
      } else if (verbalTest.vocabulario >= 14 && verbalTest.vocabulario <= 16) {
        updatedTipicaVerbal.vocabulario = 4;
      } else if (verbalTest.vocabulario == 17 || verbalTest.vocabulario == 18) {
        updatedTipicaVerbal.vocabulario = 5;
      } else if (verbalTest.vocabulario >= 19 && verbalTest.vocabulario <= 21) {
        updatedTipicaVerbal.vocabulario = 6;
      } else if (verbalTest.vocabulario == 22 || verbalTest.vocabulario == 23) {
        updatedTipicaVerbal.vocabulario = 7;
      } else if (verbalTest.vocabulario == 24 || verbalTest.vocabulario == 25) {
        updatedTipicaVerbal.vocabulario = 8;
      } else if (verbalTest.vocabulario >= 26 && verbalTest.vocabulario <= 28) {
        updatedTipicaVerbal.vocabulario = 9;
      } else if (verbalTest.vocabulario == 29 || verbalTest.vocabulario == 30) {
        updatedTipicaVerbal.vocabulario = 10;
      } else if (verbalTest.vocabulario == 31 || verbalTest.vocabulario == 32) {
        updatedTipicaVerbal.vocabulario = 11;
      } else if (verbalTest.vocabulario >= 33 && verbalTest.vocabulario <= 35) {
        updatedTipicaVerbal.vocabulario = 12;
      } else if (verbalTest.vocabulario == 36 || verbalTest.vocabulario == 37) {
        updatedTipicaVerbal.vocabulario = 13;
      } else if (verbalTest.vocabulario >= 38 && verbalTest.vocabulario <= 40) {
        updatedTipicaVerbal.vocabulario = 14;
      } else if (verbalTest.vocabulario == 41 || verbalTest.vocabulario == 42) {
        updatedTipicaVerbal.vocabulario = 15;
      } else if (verbalTest.vocabulario == 43 || verbalTest.vocabulario == 44) {
        updatedTipicaVerbal.vocabulario = 16;
      } else if (verbalTest.vocabulario == 45 || verbalTest.vocabulario == 47) {
        updatedTipicaVerbal.vocabulario = 17;
      } else if (verbalTest.vocabulario == 48 || verbalTest.vocabulario == 49) {
        updatedTipicaVerbal.vocabulario = 18;
      } else if (verbalTest.vocabulario >= 50 && verbalTest.vocabulario <= 64) {
        updatedTipicaVerbal.vocabulario = 19;
      }

      //Aritmética
      if (!verbalTest.aritmetica) {
        updatedTipicaVerbal.aritmetica = "";
      } else if (verbalTest.aritmetica >= 0 && verbalTest.aritmetica <= 6) {
        updatedTipicaVerbal.aritmetica = 1;
      } else if (verbalTest.aritmetica == 7) {
        updatedTipicaVerbal.aritmetica = 2;
      } else if (verbalTest.aritmetica == 8) {
        updatedTipicaVerbal.aritmetica = 4;
      } else if (verbalTest.aritmetica == 9) {
        updatedTipicaVerbal.aritmetica = 6;
      } else if (verbalTest.aritmetica == 10) {
        updatedTipicaVerbal.aritmetica = 8;
      } else if (verbalTest.aritmetica == 11) {
        updatedTipicaVerbal.aritmetica = 10;
      } else if (verbalTest.aritmetica == 12) {
        updatedTipicaVerbal.aritmetica = 11;
      } else if (verbalTest.aritmetica == 13) {
        updatedTipicaVerbal.aritmetica = 13;
      } else if (verbalTest.aritmetica == 14) {
        updatedTipicaVerbal.aritmetica = 15;
      } else if (verbalTest.aritmetica == 15) {
        updatedTipicaVerbal.aritmetica = 17;
      } else if (verbalTest.aritmetica >= 16 && verbalTest.aritmetica <= 18) {
        updatedTipicaVerbal.aritmetica = 19;
      }

      //Semejanzas
      if (!verbalTest.semejanzas) {
        updatedTipicaVerbal.semejanzas = "";
      } else if (verbalTest.semejanzas >= 0 && verbalTest.semejanzas <= 2) {
        updatedTipicaVerbal.semejanzas = 1;
      } else if (verbalTest.semejanzas == 3) {
        updatedTipicaVerbal.semejanzas = 2;
      } else if (verbalTest.semejanzas == 4) {
        updatedTipicaVerbal.semejanzas = 3;
      } else if (verbalTest.semejanzas == 5) {
        updatedTipicaVerbal.semejanzas = 4;
      } else if (verbalTest.semejanzas == 6) {
        updatedTipicaVerbal.semejanzas = 5;
      } else if (verbalTest.semejanzas == 7) {
        updatedTipicaVerbal.semejanzas = 6;
      } else if (verbalTest.semejanzas == 8) {
        updatedTipicaVerbal.semejanzas = 7;
      } else if (verbalTest.semejanzas == 9) {
        updatedTipicaVerbal.semejanzas = 8;
      } else if (verbalTest.semejanzas == 10) {
        updatedTipicaVerbal.semejanzas = 9;
      } else if (verbalTest.semejanzas == 11 || verbalTest.semejanzas == 12) {
        updatedTipicaVerbal.semejanzas = 10;
      } else if (verbalTest.semejanzas == 13) {
        updatedTipicaVerbal.semejanzas = 11;
      } else if (verbalTest.semejanzas == 14) {
        updatedTipicaVerbal.semejanzas = 12;
      } else if (verbalTest.semejanzas == 15 || verbalTest.semejanzas == 16) {
        updatedTipicaVerbal.semejanzas = 13;
      } else if (verbalTest.semejanzas == 17) {
        updatedTipicaVerbal.semejanzas = 14;
      } else if (verbalTest.semejanzas == 18) {
        updatedTipicaVerbal.semejanzas = 15;
      } else if (verbalTest.semejanzas == 19 || verbalTest.semejanzas == 20) {
        updatedTipicaVerbal.semejanzas = 16;
      } else if (verbalTest.semejanzas == 21) {
        updatedTipicaVerbal.semejanzas = 17;
      } else if (verbalTest.semejanzas == 22 || verbalTest.semejanzas == 23) {
        updatedTipicaVerbal.semejanzas = 18;
      } else if (verbalTest.semejanzas >= 24 && verbalTest.semejanzas <= 30) {
        updatedTipicaVerbal.semejanzas = 19;
      }

      //Comprension
      if (!verbalTest.comprension) {
        updatedTipicaVerbal.comprension = "";
      } else if (verbalTest.comprension >= 0 && verbalTest.comprension <= 6) {
        updatedTipicaVerbal.comprension = 1;
      } else if (verbalTest.comprension == 7) {
        updatedTipicaVerbal.comprension = 3;
      } else if (verbalTest.comprension == 8) {
        updatedTipicaVerbal.comprension = 4;
      } else if (verbalTest.comprension == 9) {
        updatedTipicaVerbal.comprension = 5;
      } else if (verbalTest.comprension == 10) {
        updatedTipicaVerbal.comprension = 6;
      } else if (verbalTest.comprension == 11) {
        updatedTipicaVerbal.comprension = 7;
      } else if (verbalTest.comprension == 12) {
        updatedTipicaVerbal.comprension = 8;
      } else if (verbalTest.comprension == 13) {
        updatedTipicaVerbal.comprension = 9;
      } else if (verbalTest.comprension == 14) {
        updatedTipicaVerbal.comprension = 10;
      } else if (verbalTest.comprension == 15) {
        updatedTipicaVerbal.comprension = 11;
      } else if (verbalTest.comprension == 16) {
        updatedTipicaVerbal.comprension = 12;
      } else if (verbalTest.comprension == 17) {
        updatedTipicaVerbal.comprension = 13;
      } else if (verbalTest.comprension == 18) {
        updatedTipicaVerbal.comprension = 14;
      } else if (verbalTest.comprension == 19) {
        updatedTipicaVerbal.comprension = 15;
      } else if (verbalTest.comprension == 20) {
        updatedTipicaVerbal.comprension = 16;
      } else if (verbalTest.comprension == 21) {
        updatedTipicaVerbal.comprension = 17;
      } else if (verbalTest.comprension == 22) {
        updatedTipicaVerbal.comprension = 18;
      } else if (verbalTest.comprension >= 23 && verbalTest.comprension <= 34) {
        updatedTipicaVerbal.comprension = 19;
      }

      //Dígitos
      if (!verbalTest.digitos) {
        updatedTipicaVerbal.digitos = "";
      } else if (verbalTest.digitos >= 0 && verbalTest.digitos <= 4) {
        updatedTipicaVerbal.digitos = 1;
      } else if (verbalTest.digitos == 5) {
        updatedTipicaVerbal.digitos = 3;
      } else if (verbalTest.digitos == 6) {
        updatedTipicaVerbal.digitos = 4;
      } else if (verbalTest.digitos == 7) {
        updatedTipicaVerbal.digitos = 6;
      } else if (verbalTest.digitos == 8) {
        updatedTipicaVerbal.digitos = 7;
      } else if (verbalTest.digitos == 9) {
        updatedTipicaVerbal.digitos = 8;
      } else if (verbalTest.digitos == 10) {
        updatedTipicaVerbal.digitos = 10;
      } else if (verbalTest.digitos == 11) {
        updatedTipicaVerbal.digitos = 11;
      } else if (verbalTest.digitos == 12) {
        updatedTipicaVerbal.digitos = 13;
      } else if (verbalTest.digitos == 13) {
        updatedTipicaVerbal.digitos = 14;
      } else if (verbalTest.digitos == 14) {
        updatedTipicaVerbal.digitos = 16;
      } else if (verbalTest.digitos == 15) {
        updatedTipicaVerbal.digitos = 17;
      } else if (verbalTest.digitos == 16) {
        updatedTipicaVerbal.digitos = 18;
      } else if (verbalTest.digitos >= 17 && verbalTest.digitos <= 28) {
        updatedTipicaVerbal.digitos = 19;
      }

      //////////////////////// Prueba Manual//////////////////////////

      //Figuras Incompletas
      if (!manualTest.figurasI) {
        updatedTipicaManual.figurasI = "";
      } else if (manualTest.figurasI >= 0 && manualTest.figurasI <= 7) {
        updatedTipicaManual.figurasI = 1;
      } else if (manualTest.figurasI == 8) {
        updatedTipicaManual.figurasI = 2;
      } else if (manualTest.figurasI == 9) {
        updatedTipicaManual.figurasI = 3;
      } else if (manualTest.figurasI == 10) {
        updatedTipicaManual.figurasI = 4;
      } else if (manualTest.figurasI == 11) {
        updatedTipicaManual.figurasI = 5;
      } else if (manualTest.figurasI == 12) {
        updatedTipicaManual.figurasI = 6;
      } else if (manualTest.figurasI == 13 || manualTest.figurasI == 14) {
        updatedTipicaManual.figurasI = 7;
      } else if (manualTest.figurasI == 15) {
        updatedTipicaManual.figurasI = 8;
      } else if (manualTest.figurasI == 16) {
        updatedTipicaManual.figurasI = 9;
      } else if (manualTest.figurasI == 17) {
        updatedTipicaManual.figurasI = 10;
      } else if (manualTest.figurasI == 18) {
        updatedTipicaManual.figurasI = 11;
      } else if (manualTest.figurasI == 19) {
        updatedTipicaManual.figurasI = 12;
      } else if (manualTest.figurasI == 20) {
        updatedTipicaManual.figurasI = 13;
      } else if (manualTest.figurasI == 21) {
        updatedTipicaManual.figurasI = 14;
      } else if (manualTest.figurasI == 22) {
        updatedTipicaManual.figurasI = 15;
      } else if (manualTest.figurasI == 23 || manualTest.figurasI == 24) {
        updatedTipicaManual.figurasI = 16;
      } else if (manualTest.figurasI == 25) {
        updatedTipicaManual.figurasI = 17;
      } else if (manualTest.figurasI == 26) {
        updatedTipicaManual.figurasI = 18;
      }

      //Historietas
      if (!manualTest.historietas) {
        updatedTipicaManual.historietas = "";
      } else if (manualTest.historietas >= 0 && manualTest.historietas <= 7) {
        updatedTipicaManual.historietas = 1;
      } else if (manualTest.historietas >= 8 && manualTest.historietas <= 10) {
        updatedTipicaManual.historietas = 2;
      } else if (manualTest.historietas == 11 || manualTest.historietas == 12) {
        updatedTipicaManual.historietas = 3;
      } else if (manualTest.historietas == 13 || manualTest.historietas == 14) {
        updatedTipicaManual.historietas = 4;
      } else if (manualTest.historietas == 15 || manualTest.historietas == 16) {
        updatedTipicaManual.historietas = 5;
      } else if (manualTest.historietas == 17 || manualTest.historietas == 18) {
        updatedTipicaManual.historietas = 6;
      } else if (manualTest.historietas == 19 || manualTest.historietas == 20) {
        updatedTipicaManual.historietas = 7;
      } else if (manualTest.historietas >= 21 && manualTest.historietas <= 23) {
        updatedTipicaManual.historietas = 8;
      } else if (manualTest.historietas == 24 || manualTest.historietas == 25) {
        updatedTipicaManual.historietas = 9;
      } else if (manualTest.historietas == 26 || manualTest.historietas == 27) {
        updatedTipicaManual.historietas = 10;
      } else if (manualTest.historietas == 28 || manualTest.historietas == 29) {
        updatedTipicaManual.historietas = 11;
      } else if (manualTest.historietas == 30 || manualTest.historietas == 31) {
        updatedTipicaManual.historietas = 12;
      } else if (manualTest.historietas == 32 || manualTest.historietas == 33) {
        updatedTipicaManual.historietas = 13;
      } else if (manualTest.historietas == 34 || manualTest.historietas == 35) {
        updatedTipicaManual.historietas = 14;
      } else if (manualTest.historietas >= 36 && manualTest.historietas <= 38) {
        updatedTipicaManual.historietas = 15;
      } else if (manualTest.historietas == 39 || manualTest.historietas == 40) {
        updatedTipicaManual.historietas = 16;
      } else if (manualTest.historietas == 41 || manualTest.historietas == 42) {
        updatedTipicaManual.historietas = 17;
      } else if (manualTest.historietas == 43 || manualTest.historietas == 44) {
        updatedTipicaManual.historietas = 18;
      } else if (manualTest.historietas >= 45 && manualTest.historietas <= 48) {
        updatedTipicaManual.historietas = 19;
      }

      //Cubos
      if (!manualTest.cubos) {
        updatedTipicaManual.cubos = "";
      } else if (manualTest.cubos == 0 || manualTest.cubos == 1) {
        updatedTipicaManual.cubos = 2;
      } else if (manualTest.cubos >= 2 && manualTest.cubos <= 4) {
        updatedTipicaManual.cubos = 3;
      } else if (manualTest.cubos >= 5 && manualTest.cubos <= 7) {
        updatedTipicaManual.cubos = 4;
      } else if (manualTest.cubos >= 8 && manualTest.cubos <= 11) {
        updatedTipicaManual.cubos = 5;
      } else if (manualTest.cubos >= 12 && manualTest.cubos <= 14) {
        updatedTipicaManual.cubos = 6;
      } else if (manualTest.cubos >= 15 && manualTest.cubos <= 17) {
        updatedTipicaManual.cubos = 7;
      } else if (manualTest.cubos >= 18 && manualTest.cubos <= 21) {
        updatedTipicaManual.cubos = 8;
      } else if (manualTest.cubos >= 22 && manualTest.cubos <= 24) {
        updatedTipicaManual.cubos = 9;
      } else if (manualTest.cubos >= 25 && manualTest.cubos <= 29) {
        updatedTipicaManual.cubos = 10;
      } else if (manualTest.cubos == 30 || manualTest.cubos == 31) {
        updatedTipicaManual.cubos = 11;
      } else if (manualTest.cubos >= 32 && manualTest.cubos <= 35) {
        updatedTipicaManual.cubos = 12;
      } else if (manualTest.cubos >= 36 && manualTest.cubos <= 40) {
        updatedTipicaManual.cubos = 13;
      } else if (manualTest.cubos >= 41 && manualTest.cubos <= 43) {
        updatedTipicaManual.cubos = 14;
      } else if (manualTest.cubos >= 44 && manualTest.cubos <= 48) {
        updatedTipicaManual.cubos = 15;
      } else if (manualTest.cubos >= 49 && manualTest.cubos <= 51) {
        updatedTipicaManual.cubos = 16;
      } else if (manualTest.cubos >= 52 && manualTest.cubos <= 55) {
        updatedTipicaManual.cubos = 17;
      } else if (manualTest.cubos >= 56 && manualTest.cubos <= 59) {
        updatedTipicaManual.cubos = 18;
      } else if (manualTest.cubos >= 60 && manualTest.cubos <= 62) {
        updatedTipicaManual.cubos = 19;
      }

      //Rompecabezas
      if (!manualTest.rompeCabezas) {
        updatedTipicaManual.rompeCabezas = "";
      } else if (manualTest.rompeCabezas >= 0 && manualTest.rompeCabezas <= 6) {
        updatedTipicaManual.rompeCabezas = 1;
      } else if (manualTest.rompeCabezas == 7 || manualTest.rompeCabezas == 8) {
        updatedTipicaManual.rompeCabezas = 2;
      } else if (manualTest.rompeCabezas == 9) {
        updatedTipicaManual.rompeCabezas = 3;
      } else if (
        manualTest.rompeCabezas == 10 ||
        manualTest.rompeCabezas == 11
      ) {
        updatedTipicaManual.rompeCabezas = 4;
      } else if (manualTest.rompeCabezas == 12) {
        updatedTipicaManual.rompeCabezas = 5;
      } else if (
        manualTest.rompeCabezas == 13 ||
        manualTest.rompeCabezas == 14
      ) {
        updatedTipicaManual.rompeCabezas = 6;
      } else if (manualTest.rompeCabezas == 15) {
        updatedTipicaManual.rompeCabezas = 7;
      } else if (
        manualTest.rompeCabezas == 16 ||
        manualTest.rompeCabezas == 17
      ) {
        updatedTipicaManual.rompeCabezas = 8;
      } else if (manualTest.rompeCabezas == 18) {
        updatedTipicaManual.rompeCabezas = 9;
      } else if (
        manualTest.rompeCabezas == 19 ||
        manualTest.rompeCabezas == 20
      ) {
        updatedTipicaManual.rompeCabezas = 10;
      } else if (manualTest.rompeCabezas == 21) {
        updatedTipicaManual.rompeCabezas = 11;
      } else if (
        manualTest.rompeCabezas == 22 ||
        manualTest.rompeCabezas == 23
      ) {
        updatedTipicaManual.rompeCabezas = 12;
      } else if (manualTest.rompeCabezas == 24) {
        updatedTipicaManual.rompeCabezas = 13;
      } else if (
        manualTest.rompeCabezas == 25 ||
        manualTest.rompeCabezas == 26
      ) {
        updatedTipicaManual.rompeCabezas = 14;
      } else if (manualTest.rompeCabezas == 27) {
        updatedTipicaManual.rompeCabezas = 15;
      } else if (
        manualTest.rompeCabezas == 28 ||
        manualTest.rompeCabezas == 29
      ) {
        updatedTipicaManual.rompeCabezas = 16;
      } else if (manualTest.rompeCabezas == 30) {
        updatedTipicaManual.rompeCabezas = 17;
      } else if (
        manualTest.rompeCabezas == 31 ||
        manualTest.rompeCabezas == 32
      ) {
        updatedTipicaManual.rompeCabezas = 18;
      } else if (manualTest.rompeCabezas == 33) {
        updatedTipicaManual.rompeCabezas = 19;
      }

      //Claves
      if (!manualTest.claves) {
        updatedTipicaManual.claves = "";
      } else if (manualTest.claves >= 0 && manualTest.claves <= 8) {
        updatedTipicaManual.claves = 1;
      } else if (manualTest.claves >= 9 && manualTest.claves <= 12) {
        updatedTipicaManual.claves = 2;
      } else if (manualTest.claves >= 13 && manualTest.claves <= 15) {
        updatedTipicaManual.claves = 3;
      } else if (manualTest.claves >= 16 && manualTest.claves <= 18) {
        updatedTipicaManual.claves = 4;
      } else if (manualTest.claves >= 19 && manualTest.claves <= 22) {
        updatedTipicaManual.claves = 5;
      } else if (manualTest.claves >= 23 && manualTest.claves <= 25) {
        updatedTipicaManual.claves = 6;
      } else if (manualTest.claves >= 26 && manualTest.claves <= 28) {
        updatedTipicaManual.claves = 7;
      } else if (manualTest.claves >= 29 && manualTest.claves <= 32) {
        updatedTipicaManual.claves = 8;
      } else if (manualTest.claves >= 33 && manualTest.claves <= 35) {
        updatedTipicaManual.claves = 9;
      } else if (manualTest.claves >= 36 && manualTest.claves <= 38) {
        updatedTipicaManual.claves = 10;
      } else if (manualTest.claves >= 39 && manualTest.claves <= 42) {
        updatedTipicaManual.claves = 11;
      } else if (manualTest.claves >= 43 && manualTest.claves <= 45) {
        updatedTipicaManual.claves = 12;
      } else if (manualTest.claves >= 46 && manualTest.claves <= 48) {
        updatedTipicaManual.claves = 13;
      } else if (manualTest.claves >= 49 && manualTest.claves <= 52) {
        updatedTipicaManual.claves = 14;
      } else if (manualTest.claves >= 53 && manualTest.claves <= 55) {
        updatedTipicaManual.claves = 15;
      } else if (manualTest.claves >= 56 && manualTest.claves <= 58) {
        updatedTipicaManual.claves = 16;
      } else if (manualTest.claves >= 59 && manualTest.claves <= 62) {
        updatedTipicaManual.claves = 17;
      } else if (manualTest.claves >= 63 && manualTest.claves <= 65) {
        updatedTipicaManual.claves = 18;
      } else if (manualTest.claves >= 66 && manualTest.claves <= 93) {
        updatedTipicaManual.claves = 19;
      }

      //Laberintos
      if (!manualTest.laberintos) {
        updatedTipicaManual.laberintos = "";
      } else if (manualTest.laberintos >= 0 && manualTest.laberintos <= 9) {
        updatedTipicaManual.laberintos = 1;
      } else if (manualTest.laberintos == 10) {
        updatedTipicaManual.laberintos = 2;
      } else if (manualTest.laberintos == 11 || manualTest.laberintos == 12) {
        updatedTipicaManual.laberintos = 3;
      } else if (manualTest.laberintos == 13) {
        updatedTipicaManual.laberintos = 4;
      } else if (manualTest.laberintos == 14) {
        updatedTipicaManual.laberintos = 5;
      } else if (manualTest.laberintos == 15) {
        updatedTipicaManual.laberintos = 6;
      } else if (manualTest.laberintos == 16 || manualTest.laberintos == 17) {
        updatedTipicaManual.laberintos = 7;
      } else if (manualTest.laberintos == 18) {
        updatedTipicaManual.laberintos = 8;
      } else if (manualTest.laberintos == 19) {
        updatedTipicaManual.laberintos = 9;
      } else if (manualTest.laberintos == 20) {
        updatedTipicaManual.laberintos = 10;
      } else if (manualTest.laberintos == 21) {
        updatedTipicaManual.laberintos = 11;
      } else if (manualTest.laberintos == 22 || manualTest.laberintos == 23) {
        updatedTipicaManual.laberintos = 12;
      } else if (manualTest.laberintos == 24) {
        updatedTipicaManual.laberintos = 13;
      } else if (manualTest.laberintos == 25) {
        updatedTipicaManual.laberintos = 14;
      } else if (manualTest.laberintos == 26) {
        updatedTipicaManual.laberintos = 15;
      } else if (manualTest.laberintos == 27) {
        updatedTipicaManual.laberintos = 16;
      } else if (manualTest.laberintos == 28 || manualTest.laberintos == 29) {
        updatedTipicaManual.laberintos = 17;
      } else if (manualTest.laberintos == 30) {
        updatedTipicaManual.laberintos = 18;
      }
    } else if (age.years === 10) {
      //Información
      if (!verbalTest.informacion) {
        updatedTipicaVerbal.informacion = "";
      } else if (verbalTest.informacion >= 0 && verbalTest.informacion <= 4) {
        updatedTipicaVerbal.informacion = 1;
      } else if (verbalTest.informacion == 5) {
        updatedTipicaVerbal.informacion = 2;
      } else if (verbalTest.informacion == 6 || verbalTest.informacion == 7) {
        updatedTipicaVerbal.informacion = 3;
      } else if (verbalTest.informacion == 8) {
        updatedTipicaVerbal.informacion = 4;
      } else if (verbalTest.informacion == 9) {
        updatedTipicaVerbal.informacion = 5;
      } else if (verbalTest.informacion == 10) {
        updatedTipicaVerbal.informacion = 6;
      } else if (verbalTest.informacion == 11) {
        updatedTipicaVerbal.informacion = 7;
      } else if (verbalTest.informacion == 12) {
        updatedTipicaVerbal.informacion = 8;
      } else if (verbalTest.informacion == 13 || verbalTest.informacion == 14) {
        updatedTipicaVerbal.informacion = 9;
      } else if (verbalTest.informacion == 15) {
        updatedTipicaVerbal.informacion = 10;
      } else if (verbalTest.informacion == 16) {
        updatedTipicaVerbal.informacion = 11;
      } else if (verbalTest.informacion == 17) {
        updatedTipicaVerbal.informacion = 12;
      } else if (verbalTest.informacion == 18) {
        updatedTipicaVerbal.informacion = 13;
      } else if (verbalTest.informacion == 19) {
        updatedTipicaVerbal.informacion = 14;
      } else if (verbalTest.informacion == 20 || verbalTest.informacion == 21) {
        updatedTipicaVerbal.informacion = 15;
      } else if (verbalTest.informacion == 22) {
        updatedTipicaVerbal.informacion = 16;
      } else if (verbalTest.informacion == 23) {
        updatedTipicaVerbal.informacion = 17;
      } else if (verbalTest.informacion == 24) {
        updatedTipicaVerbal.informacion = 18;
      } else if (verbalTest.informacion >= 25 && verbalTest.informacion <= 30) {
        updatedTipicaVerbal.informacion = 19;
      }

      //Vocabulario
      if (!verbalTest.vocabulario) {
        updatedTipicaVerbal.vocabulario = "";
      } else if (verbalTest.vocabulario >= 0 && verbalTest.vocabulario <= 7) {
        updatedTipicaVerbal.vocabulario = 1;
      } else if (verbalTest.vocabulario >= 8 && verbalTest.vocabulario <= 10) {
        updatedTipicaVerbal.vocabulario = 2;
      } else if (verbalTest.vocabulario >= 11 && verbalTest.vocabulario <= 13) {
        updatedTipicaVerbal.vocabulario = 3;
      } else if (verbalTest.vocabulario >= 14 && verbalTest.vocabulario <= 16) {
        updatedTipicaVerbal.vocabulario = 4;
      } else if (verbalTest.vocabulario >= 16 && verbalTest.vocabulario <= 18) {
        updatedTipicaVerbal.vocabulario = 5;
      } else if (verbalTest.vocabulario >= 19 && verbalTest.vocabulario <= 21) {
        updatedTipicaVerbal.vocabulario = 6;
      } else if (verbalTest.vocabulario >= 22 && verbalTest.vocabulario <= 24) {
        updatedTipicaVerbal.vocabulario = 7;
      } else if (verbalTest.vocabulario == 25 || verbalTest.vocabulario == 26) {
        updatedTipicaVerbal.vocabulario = 8;
      } else if (verbalTest.vocabulario >= 27 && verbalTest.vocabulario <= 29) {
        updatedTipicaVerbal.vocabulario = 9;
      } else if (verbalTest.vocabulario >= 30 && verbalTest.vocabulario <= 32) {
        updatedTipicaVerbal.vocabulario = 10;
      } else if (verbalTest.vocabulario == 33 || verbalTest.vocabulario == 34) {
        updatedTipicaVerbal.vocabulario = 11;
      } else if (verbalTest.vocabulario >= 35 && verbalTest.vocabulario <= 37) {
        updatedTipicaVerbal.vocabulario = 12;
      } else if (verbalTest.vocabulario >= 38 && verbalTest.vocabulario <= 40) {
        updatedTipicaVerbal.vocabulario = 13;
      } else if (verbalTest.vocabulario == 41 || verbalTest.vocabulario == 42) {
        updatedTipicaVerbal.vocabulario = 14;
      } else if (verbalTest.vocabulario >= 43 && verbalTest.vocabulario <= 45) {
        updatedTipicaVerbal.vocabulario = 15;
      } else if (verbalTest.vocabulario >= 46 && verbalTest.vocabulario <= 48) {
        updatedTipicaVerbal.vocabulario = 16;
      } else if (verbalTest.vocabulario >= 49 && verbalTest.vocabulario <= 51) {
        updatedTipicaVerbal.vocabulario = 17;
      } else if (verbalTest.vocabulario == 52 || verbalTest.vocabulario == 53) {
        updatedTipicaVerbal.vocabulario = 18;
      } else if (verbalTest.vocabulario >= 54 && verbalTest.vocabulario <= 64) {
        updatedTipicaVerbal.vocabulario = 19;
      }

      //Aritmética
      if (!verbalTest.aritmetica) {
        updatedTipicaVerbal.aritmetica = "";
      } else if (verbalTest.aritmetica >= 0 && verbalTest.aritmetica <= 6) {
        updatedTipicaVerbal.aritmetica = 1;
      } else if (verbalTest.aritmetica == 7) {
        updatedTipicaVerbal.aritmetica = 2;
      } else if (verbalTest.aritmetica == 8) {
        updatedTipicaVerbal.aritmetica = 4;
      } else if (verbalTest.aritmetica == 9) {
        updatedTipicaVerbal.aritmetica = 5;
      } else if (verbalTest.aritmetica == 10) {
        updatedTipicaVerbal.aritmetica = 7;
      } else if (verbalTest.aritmetica == 11) {
        updatedTipicaVerbal.aritmetica = 8;
      } else if (verbalTest.aritmetica == 12) {
        updatedTipicaVerbal.aritmetica = 10;
      } else if (verbalTest.aritmetica == 13) {
        updatedTipicaVerbal.aritmetica = 11;
      } else if (verbalTest.aritmetica == 14) {
        updatedTipicaVerbal.aritmetica = 12;
      } else if (verbalTest.aritmetica == 15) {
        updatedTipicaVerbal.aritmetica = 13;
      } else if (verbalTest.aritmetica == 16) {
        updatedTipicaVerbal.aritmetica = 15;
      } else if (verbalTest.aritmetica == 17) {
        updatedTipicaVerbal.aritmetica = 16;
      } else if (verbalTest.aritmetica == 18) {
        updatedTipicaVerbal.aritmetica = 18;
      }

      //Semejanzas
      if (!verbalTest.semejanzas) {
        updatedTipicaVerbal.semejanzas = "";
      } else if (verbalTest.semejanzas >= 0 && verbalTest.semejanzas <= 2) {
        updatedTipicaVerbal.semejanzas = 1;
      } else if (verbalTest.semejanzas == 3) {
        updatedTipicaVerbal.semejanzas = 2;
      } else if (verbalTest.semejanzas == 4) {
        updatedTipicaVerbal.semejanzas = 3;
      } else if (verbalTest.semejanzas == 5 || verbalTest.semejanzas == 6) {
        updatedTipicaVerbal.semejanzas = 4;
      } else if (verbalTest.semejanzas == 7) {
        updatedTipicaVerbal.semejanzas = 5;
      } else if (verbalTest.semejanzas == 8) {
        updatedTipicaVerbal.semejanzas = 6;
      } else if (verbalTest.semejanzas == 9 || verbalTest.semejanzas == 10) {
        updatedTipicaVerbal.semejanzas = 7;
      } else if (verbalTest.semejanzas == 11) {
        updatedTipicaVerbal.semejanzas = 8;
      } else if (verbalTest.semejanzas == 12) {
        updatedTipicaVerbal.semejanzas = 9;
      } else if (verbalTest.semejanzas == 13 || verbalTest.semejanzas == 14) {
        updatedTipicaVerbal.semejanzas = 10;
      } else if (verbalTest.semejanzas == 15) {
        updatedTipicaVerbal.semejanzas = 11;
      } else if (verbalTest.semejanzas == 16) {
        updatedTipicaVerbal.semejanzas = 12;
      } else if (verbalTest.semejanzas == 17 || verbalTest.semejanzas == 18) {
        updatedTipicaVerbal.semejanzas = 13;
      } else if (verbalTest.semejanzas == 19) {
        updatedTipicaVerbal.semejanzas = 14;
      } else if (verbalTest.semejanzas == 20) {
        updatedTipicaVerbal.semejanzas = 15;
      } else if (verbalTest.semejanzas == 21) {
        updatedTipicaVerbal.semejanzas = 16;
      } else if (verbalTest.semejanzas == 22 || verbalTest.semejanzas == 23) {
        updatedTipicaVerbal.semejanzas = 17;
      } else if (verbalTest.semejanzas == 24) {
        updatedTipicaVerbal.semejanzas = 18;
      } else if (verbalTest.semejanzas >= 25 && verbalTest.semejanzas <= 30) {
        updatedTipicaVerbal.semejanzas = 19;
      }

      //Comprension
      if (!verbalTest.comprension) {
        updatedTipicaVerbal.comprension = "";
      } else if (verbalTest.comprension >= 0 && verbalTest.comprension <= 7) {
        updatedTipicaVerbal.comprension = 1;
      } else if (verbalTest.comprension == 8) {
        updatedTipicaVerbal.comprension = 2;
      } else if (verbalTest.comprension == 9) {
        updatedTipicaVerbal.comprension = 3;
      } else if (verbalTest.comprension == 10) {
        updatedTipicaVerbal.comprension = 4;
      } else if (verbalTest.comprension == 11) {
        updatedTipicaVerbal.comprension = 5;
      } else if (verbalTest.comprension == 12) {
        updatedTipicaVerbal.comprension = 6;
      } else if (verbalTest.comprension == 13) {
        updatedTipicaVerbal.comprension = 8;
      } else if (verbalTest.comprension == 14) {
        updatedTipicaVerbal.comprension = 9;
      } else if (verbalTest.comprension == 15) {
        updatedTipicaVerbal.comprension = 10;
      } else if (verbalTest.comprension == 16) {
        updatedTipicaVerbal.comprension = 11;
      } else if (verbalTest.comprension == 17) {
        updatedTipicaVerbal.comprension = 12;
      } else if (verbalTest.comprension == 18) {
        updatedTipicaVerbal.comprension = 13;
      } else if (verbalTest.comprension == 19) {
        updatedTipicaVerbal.comprension = 14;
      } else if (verbalTest.comprension == 20) {
        updatedTipicaVerbal.comprension = 16;
      } else if (verbalTest.comprension == 21) {
        updatedTipicaVerbal.comprension = 18;
      } else if (verbalTest.comprension == 22) {
        updatedTipicaVerbal.comprension = 18;
      } else if (verbalTest.comprension >= 23 && verbalTest.comprension <= 34) {
        updatedTipicaVerbal.comprension = 19;
      }

      //Dígitos
      if (!verbalTest.digitos) {
        updatedTipicaVerbal.digitos = "";
      } else if (verbalTest.digitos == 0 || verbalTest.digitos == 1) {
        updatedTipicaVerbal.digitos = 1;
      } else if (verbalTest.digitos == 2) {
        updatedTipicaVerbal.digitos = 2;
      } else if (verbalTest.digitos == 3 || verbalTest.digitos == 4) {
        updatedTipicaVerbal.digitos = 3;
      } else if (verbalTest.digitos == 5) {
        updatedTipicaVerbal.digitos = 4;
      } else if (verbalTest.digitos == 6) {
        updatedTipicaVerbal.digitos = 5;
      } else if (verbalTest.digitos == 7) {
        updatedTipicaVerbal.digitos = 6;
      } else if (verbalTest.digitos == 8) {
        updatedTipicaVerbal.digitos = 7;
      } else if (verbalTest.digitos == 9 || verbalTest.informacion == 10) {
        updatedTipicaVerbal.digitos = 8;
      } else if (verbalTest.digitos == 11) {
        updatedTipicaVerbal.digitos = 9;
      } else if (verbalTest.digitos == 12) {
        updatedTipicaVerbal.digitos = 10;
      } else if (verbalTest.digitos == 13) {
        updatedTipicaVerbal.digitos = 11;
      } else if (verbalTest.digitos == 14) {
        updatedTipicaVerbal.digitos = 12;
      } else if (verbalTest.digitos == 15 || verbalTest.digitos == 16) {
        updatedTipicaVerbal.digitos = 13;
      } else if (verbalTest.digitos == 17) {
        updatedTipicaVerbal.digitos = 14;
      } else if (verbalTest.digitos == 18) {
        updatedTipicaVerbal.digitos = 15;
      } else if (verbalTest.digitos == 19) {
        updatedTipicaVerbal.digitos = 16;
      } else if (verbalTest.digitos == 20) {
        updatedTipicaVerbal.digitos = 17;
      } else if (verbalTest.digitos == 21) {
        updatedTipicaVerbal.digitos = 18;
      } else if (verbalTest.digitos >= 22 && verbalTest.digitos <= 28) {
        updatedTipicaVerbal.digitos = 19;
      }

      //////////////////////// Prueba Manual//////////////////////////

      //Figuras Incompletas
      if (!manualTest.figurasI) {
        updatedTipicaManual.figurasI = "";
      } else if (manualTest.figurasI >= 0 && manualTest.figurasI <= 7) {
        updatedTipicaManual.figurasI = 1;
      } else if (manualTest.figurasI == 8) {
        updatedTipicaManual.figurasI = 2;
      } else if (manualTest.figurasI == 9) {
        updatedTipicaManual.figurasI = 3;
      } else if (manualTest.figurasI == 10) {
        updatedTipicaManual.figurasI = 4;
      } else if (manualTest.figurasI == 11) {
        updatedTipicaManual.figurasI = 5;
      } else if (manualTest.figurasI == 12 || manualTest.figurasI == 13) {
        updatedTipicaManual.figurasI = 6;
      } else if (manualTest.figurasI == 14) {
        updatedTipicaManual.figurasI = 7;
      } else if (manualTest.figurasI == 15) {
        updatedTipicaManual.figurasI = 8;
      } else if (manualTest.figurasI == 16) {
        updatedTipicaManual.figurasI = 9;
      } else if (manualTest.figurasI == 17) {
        updatedTipicaManual.figurasI = 10;
      } else if (manualTest.figurasI == 18) {
        updatedTipicaManual.figurasI = 11;
      } else if (manualTest.figurasI == 19 || manualTest.figurasI == 20) {
        updatedTipicaManual.figurasI = 12;
      } else if (manualTest.figurasI == 21) {
        updatedTipicaManual.figurasI = 13;
      } else if (manualTest.figurasI == 22) {
        updatedTipicaManual.figurasI = 14;
      } else if (manualTest.figurasI == 23) {
        updatedTipicaManual.figurasI = 15;
      } else if (manualTest.figurasI == 24) {
        updatedTipicaManual.figurasI = 16;
      } else if (manualTest.figurasI == 25) {
        updatedTipicaManual.figurasI = 17;
      } else if (manualTest.figurasI == 26) {
        updatedTipicaManual.figurasI = 18;
      }

      //Historietas
      if (!manualTest.historietas) {
        updatedTipicaManual.historietas = "";
      } else if (manualTest.historietas >= 0 && manualTest.historietas <= 8) {
        updatedTipicaManual.historietas = 1;
      } else if (manualTest.historietas >= 9 && manualTest.historietas <= 11) {
        updatedTipicaManual.historietas = 2;
      } else if (manualTest.historietas == 12 || manualTest.historietas == 13) {
        updatedTipicaManual.historietas = 3;
      } else if (manualTest.historietas == 14 || manualTest.historietas == 15) {
        updatedTipicaManual.historietas = 4;
      } else if (manualTest.historietas == 16 || manualTest.historietas == 17) {
        updatedTipicaManual.historietas = 5;
      } else if (manualTest.historietas >= 18 && manualTest.historietas <= 20) {
        updatedTipicaManual.historietas = 6;
      } else if (manualTest.historietas == 21 || manualTest.historietas == 22) {
        updatedTipicaManual.historietas = 7;
      } else if (manualTest.historietas == 23 || manualTest.historietas == 24) {
        updatedTipicaManual.historietas = 8;
      } else if (manualTest.historietas == 25 || manualTest.historietas == 26) {
        updatedTipicaManual.historietas = 9;
      } else if (manualTest.historietas >= 27 && manualTest.historietas <= 29) {
        updatedTipicaManual.historietas = 10;
      } else if (manualTest.historietas == 30 || manualTest.historietas == 31) {
        updatedTipicaManual.historietas = 11;
      } else if (manualTest.historietas == 32 || manualTest.historietas == 33) {
        updatedTipicaManual.historietas = 12;
      } else if (manualTest.historietas >= 34 && manualTest.historietas <= 36) {
        updatedTipicaManual.historietas = 13;
      } else if (manualTest.historietas == 37 || manualTest.historietas == 38) {
        updatedTipicaManual.historietas = 14;
      } else if (manualTest.historietas == 39 || manualTest.historietas == 40) {
        updatedTipicaManual.historietas = 15;
      } else if (manualTest.historietas == 41 || manualTest.historietas == 42) {
        updatedTipicaManual.historietas = 16;
      } else if (manualTest.historietas >= 43 && manualTest.historietas <= 45) {
        updatedTipicaManual.historietas = 17;
      } else if (manualTest.historietas == 46 || manualTest.historietas == 47) {
        updatedTipicaManual.historietas = 18;
      } else if (manualTest.historietas == 48) {
        updatedTipicaManual.historietas = 19;
      }

      //Cubos
      if (!manualTest.cubos) {
        updatedTipicaManual.cubos = "";
      } else if (manualTest.cubos >= 0 && manualTest.cubos <= 3) {
        updatedTipicaManual.cubos = 2;
      } else if (manualTest.cubos >= 4 && manualTest.cubos <= 7) {
        updatedTipicaManual.cubos = 3;
      } else if (manualTest.cubos >= 8 && manualTest.cubos <= 10) {
        updatedTipicaManual.cubos = 4;
      } else if (manualTest.cubos >= 11 && manualTest.cubos <= 14) {
        updatedTipicaManual.cubos = 5;
      } else if (manualTest.cubos >= 15 && manualTest.cubos <= 18) {
        updatedTipicaManual.cubos = 6;
      } else if (manualTest.cubos >= 19 && manualTest.cubos <= 22) {
        updatedTipicaManual.cubos = 7;
      } else if (manualTest.cubos >= 23 && manualTest.cubos <= 25) {
        updatedTipicaManual.cubos = 8;
      } else if (manualTest.cubos >= 26 && manualTest.cubos <= 29) {
        updatedTipicaManual.cubos = 9;
      } else if (manualTest.cubos >= 30 && manualTest.cubos <= 33) {
        updatedTipicaManual.cubos = 10;
      } else if (manualTest.cubos >= 34 && manualTest.cubos <= 36) {
        updatedTipicaManual.cubos = 11;
      } else if (manualTest.cubos >= 37 && manualTest.cubos <= 40) {
        updatedTipicaManual.cubos = 12;
      } else if (manualTest.cubos >= 41 && manualTest.cubos <= 44) {
        updatedTipicaManual.cubos = 13;
      } else if (manualTest.cubos >= 45 && manualTest.cubos <= 47) {
        updatedTipicaManual.cubos = 14;
      } else if (manualTest.cubos >= 48 && manualTest.cubos <= 51) {
        updatedTipicaManual.cubos = 15;
      } else if (manualTest.cubos >= 52 && manualTest.cubos <= 55) {
        updatedTipicaManual.cubos = 16;
      } else if (manualTest.cubos >= 56 && manualTest.cubos <= 59) {
        updatedTipicaManual.cubos = 17;
      } else if (manualTest.cubos >= 60 && manualTest.cubos <= 62) {
        updatedTipicaManual.cubos = 18;
      }

      //Rompecabezas
      if (!manualTest.rompeCabezas) {
        updatedTipicaManual.rompeCabezas = "";
      } else if (manualTest.rompeCabezas >= 0 && manualTest.rompeCabezas <= 6) {
        updatedTipicaManual.rompeCabezas = 1;
      } else if (manualTest.rompeCabezas == 7 || manualTest.rompeCabezas == 8) {
        updatedTipicaManual.rompeCabezas = 2;
      } else if (
        manualTest.rompeCabezas == 9 ||
        manualTest.rompeCabezas == 10
      ) {
        updatedTipicaManual.rompeCabezas = 3;
      } else if (manualTest.rompeCabezas == 11) {
        updatedTipicaManual.rompeCabezas = 4;
      } else if (
        manualTest.rompeCabezas == 12 ||
        manualTest.rompeCabezas == 13
      ) {
        updatedTipicaManual.rompeCabezas = 5;
      } else if (
        manualTest.rompeCabezas == 14 ||
        manualTest.rompeCabezas == 15
      ) {
        updatedTipicaManual.rompeCabezas = 6;
      } else if (manualTest.rompeCabezas == 16) {
        updatedTipicaManual.rompeCabezas = 7;
      } else if (
        manualTest.rompeCabezas == 17 ||
        manualTest.rompeCabezas == 18
      ) {
        updatedTipicaManual.rompeCabezas = 8;
      } else if (
        manualTest.rompeCabezas == 19 ||
        manualTest.rompeCabezas == 20
      ) {
        updatedTipicaManual.rompeCabezas = 9;
      } else if (
        manualTest.rompeCabezas == 21 ||
        manualTest.rompeCabezas == 22
      ) {
        updatedTipicaManual.rompeCabezas = 10;
      } else if (manualTest.rompeCabezas == 23) {
        updatedTipicaManual.rompeCabezas = 11;
      } else if (
        manualTest.rompeCabezas == 24 ||
        manualTest.rompeCabezas == 25
      ) {
        updatedTipicaManual.rompeCabezas = 12;
      } else if (
        manualTest.rompeCabezas == 26 ||
        manualTest.rompeCabezas == 27
      ) {
        updatedTipicaManual.rompeCabezas = 13;
      } else if (manualTest.rompeCabezas == 28) {
        updatedTipicaManual.rompeCabezas = 14;
      } else if (
        manualTest.rompeCabezas == 29 ||
        manualTest.rompeCabezas == 30
      ) {
        updatedTipicaManual.rompeCabezas = 15;
      } else if (
        manualTest.rompeCabezas == 31 ||
        manualTest.rompeCabezas == 32
      ) {
        updatedTipicaManual.rompeCabezas = 16;
      } else if (manualTest.rompeCabezas == 33) {
        updatedTipicaManual.rompeCabezas = 17;
      }

      //Claves
      if (!manualTest.claves) {
        updatedTipicaManual.claves = "";
      } else if (manualTest.claves >= 0 && manualTest.claves <= 17) {
        updatedTipicaManual.claves = 1;
      } else if (manualTest.claves >= 18 && manualTest.claves <= 20) {
        updatedTipicaManual.claves = 2;
      } else if (manualTest.claves >= 21 && manualTest.claves <= 23) {
        updatedTipicaManual.claves = 3;
      } else if (manualTest.claves >= 24 && manualTest.claves <= 26) {
        updatedTipicaManual.claves = 4;
      } else if (manualTest.claves >= 27 && manualTest.claves <= 30) {
        updatedTipicaManual.claves = 5;
      } else if (manualTest.claves >= 31 && manualTest.claves <= 33) {
        updatedTipicaManual.claves = 6;
      } else if (manualTest.claves >= 34 && manualTest.claves <= 36) {
        updatedTipicaManual.claves = 7;
      } else if (manualTest.claves >= 37 && manualTest.claves <= 39) {
        updatedTipicaManual.claves = 8;
      } else if (manualTest.claves >= 40 && manualTest.claves <= 42) {
        updatedTipicaManual.claves = 9;
      } else if (manualTest.claves >= 43 && manualTest.claves <= 45) {
        updatedTipicaManual.claves = 10;
      } else if (manualTest.claves >= 46 && manualTest.claves <= 49) {
        updatedTipicaManual.claves = 11;
      } else if (manualTest.claves >= 50 && manualTest.claves <= 52) {
        updatedTipicaManual.claves = 12;
      } else if (manualTest.claves >= 53 && manualTest.claves <= 55) {
        updatedTipicaManual.claves = 13;
      } else if (manualTest.claves >= 56 && manualTest.claves <= 58) {
        updatedTipicaManual.claves = 14;
      } else if (manualTest.claves >= 59 && manualTest.claves <= 61) {
        updatedTipicaManual.claves = 15;
      } else if (manualTest.claves >= 62 && manualTest.claves <= 64) {
        updatedTipicaManual.claves = 16;
      } else if (manualTest.claves >= 65 && manualTest.claves <= 68) {
        updatedTipicaManual.claves = 17;
      } else if (manualTest.claves >= 69 && manualTest.claves <= 71) {
        updatedTipicaManual.claves = 18;
      } else if (manualTest.claves >= 72 && manualTest.claves <= 93) {
        updatedTipicaManual.claves = 19;
      }

      //Laberintos
      if (!manualTest.laberintos) {
        updatedTipicaManual.laberintos = "";
      } else if (manualTest.laberintos >= 0 && manualTest.laberintos <= 5) {
        updatedTipicaManual.laberintos = 1;
      } else if (manualTest.laberintos == 6 || manualTest.laberintos == 7) {
        updatedTipicaManual.laberintos = 2;
      } else if (manualTest.laberintos == 8 || manualTest.laberintos == 9) {
        updatedTipicaManual.laberintos = 3;
      } else if (manualTest.laberintos == 10) {
        updatedTipicaManual.laberintos = 4;
      } else if (manualTest.laberintos == 11 || manualTest.laberintos == 12) {
        updatedTipicaManual.laberintos = 5;
      } else if (manualTest.laberintos == 13 || manualTest.laberintos == 14) {
        updatedTipicaManual.laberintos = 6;
      } else if (manualTest.laberintos == 15) {
        updatedTipicaManual.laberintos = 7;
      } else if (manualTest.laberintos == 16 || manualTest.laberintos == 17) {
        updatedTipicaManual.laberintos = 8;
      } else if (manualTest.laberintos == 18 || manualTest.laberintos == 19) {
        updatedTipicaManual.laberintos = 9;
      } else if (manualTest.laberintos == 20 || manualTest.laberintos == 21) {
        updatedTipicaManual.laberintos = 10;
      } else if (manualTest.laberintos == 22) {
        updatedTipicaManual.laberintos = 11;
      } else if (manualTest.laberintos == 23 || manualTest.laberintos == 24) {
        updatedTipicaManual.laberintos = 12;
      } else if (manualTest.laberintos == 25 || manualTest.laberintos == 26) {
        updatedTipicaManual.laberintos = 13;
      } else if (manualTest.laberintos == 27) {
        updatedTipicaManual.laberintos = 14;
      } else if (manualTest.laberintos == 28 || manualTest.laberintos == 29) {
        updatedTipicaManual.laberintos = 15;
      } else if (manualTest.laberintos == 30) {
        updatedTipicaManual.laberintos = 16;
      }
    } else if (age.years === 11) {

      //Información
      if (!verbalTest.informacion) {
        updatedTipicaVerbal.informacion = "";
      } else if (verbalTest.informacion >= 0 && verbalTest.informacion <= 7) {
        updatedTipicaVerbal.informacion = 1;
      } else if (verbalTest.informacion == 8) {
        updatedTipicaVerbal.informacion = 2;
      } else if (verbalTest.informacion == 9) {
        updatedTipicaVerbal.informacion = 3;
      } else if (verbalTest.informacion == 10) {
        updatedTipicaVerbal.informacion = 4;
      } else if (verbalTest.informacion == 11) {
        updatedTipicaVerbal.informacion = 5;
      } else if (verbalTest.informacion == 12) {
        updatedTipicaVerbal.informacion = 6;
      } else if (verbalTest.informacion == 13) {
        updatedTipicaVerbal.informacion = 7;
      } else if (verbalTest.informacion == 14) {
        updatedTipicaVerbal.informacion = 8;
      } else if (verbalTest.informacion == 15) {
        updatedTipicaVerbal.informacion = 9;
      } else if (verbalTest.informacion == 16) {
        updatedTipicaVerbal.informacion = 10;
      } else if (verbalTest.informacion == 17) {
        updatedTipicaVerbal.informacion = 11;
      } else if (verbalTest.informacion == 18) {
        updatedTipicaVerbal.informacion = 12;
      } else if (verbalTest.informacion == 19) {
        updatedTipicaVerbal.informacion = 13;
      } else if (verbalTest.informacion == 20) {
        updatedTipicaVerbal.informacion = 14;
      } else if (verbalTest.informacion == 21) {
        updatedTipicaVerbal.informacion = 15;
      } else if (verbalTest.informacion == 22) {
        updatedTipicaVerbal.informacion = 16;
      } else if (verbalTest.informacion == 23) {
        updatedTipicaVerbal.informacion = 17;
      } else if (verbalTest.informacion == 24) {
        updatedTipicaVerbal.informacion = 18;
      } else if (verbalTest.informacion >= 25 && verbalTest.informacion <= 30) {
        updatedTipicaVerbal.informacion = 19;
      }

      //Vocabulario
      if (!verbalTest.vocabulario) {
        updatedTipicaVerbal.vocabulario = "";
      } else if (verbalTest.vocabulario >= 0 && verbalTest.vocabulario <= 10) {
        updatedTipicaVerbal.vocabulario = 1;
      } else if (verbalTest.vocabulario >= 11 && verbalTest.vocabulario <= 13) {
        updatedTipicaVerbal.vocabulario = 2;
      } else if (verbalTest.vocabulario >= 14 && verbalTest.vocabulario <= 16) {
        updatedTipicaVerbal.vocabulario = 3;
      } else if (verbalTest.vocabulario >= 17 && verbalTest.vocabulario <= 19) {
        updatedTipicaVerbal.vocabulario = 4;
      } else if (verbalTest.vocabulario == 20 || verbalTest.vocabulario == 21) {
        updatedTipicaVerbal.vocabulario = 5;
      } else if (verbalTest.vocabulario >= 22 && verbalTest.vocabulario <= 24) {
        updatedTipicaVerbal.vocabulario = 6;
      } else if (verbalTest.vocabulario >= 25 && verbalTest.vocabulario <= 27) {
        updatedTipicaVerbal.vocabulario = 7;
      } else if (verbalTest.vocabulario >= 28 && verbalTest.vocabulario <= 30) {
        updatedTipicaVerbal.vocabulario = 8;
      } else if (verbalTest.vocabulario == 31 || verbalTest.vocabulario == 32) {
        updatedTipicaVerbal.vocabulario = 9;
      } else if (verbalTest.vocabulario >= 33 && verbalTest.vocabulario <= 35) {
        updatedTipicaVerbal.vocabulario = 10;
      } else if (verbalTest.vocabulario >= 36 && verbalTest.vocabulario <= 38) {
        updatedTipicaVerbal.vocabulario = 11;
      } else if (verbalTest.vocabulario >= 39 && verbalTest.vocabulario <= 41) {
        updatedTipicaVerbal.vocabulario = 12;
      } else if (verbalTest.vocabulario >= 42 && verbalTest.vocabulario <= 44) {
        updatedTipicaVerbal.vocabulario = 13;
      } else if (verbalTest.vocabulario == 45 || verbalTest.vocabulario == 46) {
        updatedTipicaVerbal.vocabulario = 14;
      } else if (verbalTest.vocabulario >= 47 && verbalTest.vocabulario <= 49) {
        updatedTipicaVerbal.vocabulario = 15;
      } else if (verbalTest.vocabulario >= 50 && verbalTest.vocabulario <= 52) {
        updatedTipicaVerbal.vocabulario = 16;
      } else if (verbalTest.vocabulario >= 53 && verbalTest.vocabulario <= 55) {
        updatedTipicaVerbal.vocabulario = 17;
      } else if (verbalTest.vocabulario == 56 || verbalTest.vocabulario == 57) {
        updatedTipicaVerbal.vocabulario = 18;
      } else if (verbalTest.vocabulario >= 58 && verbalTest.vocabulario <= 64) {
        updatedTipicaVerbal.vocabulario = 19;
      }

      //Aritmética
      if (!verbalTest.aritmetica) {
        updatedTipicaVerbal.aritmetica = "";
      } else if (verbalTest.aritmetica >= 0 && verbalTest.aritmetica <= 6) {
        updatedTipicaVerbal.aritmetica = 1;
      } else if (verbalTest.aritmetica == 7) {
        updatedTipicaVerbal.aritmetica = 2;
      } else if (verbalTest.aritmetica == 8) {
        updatedTipicaVerbal.aritmetica = 4;
      } else if (verbalTest.aritmetica == 9) {
        updatedTipicaVerbal.aritmetica = 5;
      } else if (verbalTest.aritmetica == 10) {
        updatedTipicaVerbal.aritmetica = 7;
      } else if (verbalTest.aritmetica == 11) {
        updatedTipicaVerbal.aritmetica = 8;
      } else if (verbalTest.aritmetica == 12) {
        updatedTipicaVerbal.aritmetica = 10;
      } else if (verbalTest.aritmetica == 13) {
        updatedTipicaVerbal.aritmetica = 11;
      } else if (verbalTest.aritmetica == 14) {
        updatedTipicaVerbal.aritmetica = 12;
      } else if (verbalTest.aritmetica == 15) {
        updatedTipicaVerbal.aritmetica = 13;
      } else if (verbalTest.aritmetica == 16) {
        updatedTipicaVerbal.aritmetica = 14;
      } else if (verbalTest.aritmetica == 17) {
        updatedTipicaVerbal.aritmetica = 16;
      } else if (verbalTest.aritmetica == 18) {
        updatedTipicaVerbal.aritmetica = 17;
      }

      //Semejanzas
      if (!verbalTest.semejanzas) {
        updatedTipicaVerbal.semejanzas = "";
      } else if (verbalTest.semejanzas >= 0 && verbalTest.semejanzas <= 4) {
        updatedTipicaVerbal.semejanzas = 1;
      } else if (verbalTest.semejanzas == 5) {
        updatedTipicaVerbal.semejanzas = 2;
      } else if (verbalTest.semejanzas == 6) {
        updatedTipicaVerbal.semejanzas = 3;
      } else if (verbalTest.semejanzas == 7) {
        updatedTipicaVerbal.semejanzas = 4;
      } else if (verbalTest.semejanzas == 8) {
        updatedTipicaVerbal.semejanzas = 5;
      } else if (verbalTest.semejanzas == 9) {
        updatedTipicaVerbal.semejanzas = 6;
      } else if (verbalTest.semejanzas == 10 || verbalTest.semejanzas == 11) {
        updatedTipicaVerbal.semejanzas = 7;
      } else if (verbalTest.semejanzas == 12) {
        updatedTipicaVerbal.semejanzas = 8;
      } else if (verbalTest.semejanzas == 13) {
        updatedTipicaVerbal.semejanzas = 9;
      } else if (verbalTest.semejanzas == 14) {
        updatedTipicaVerbal.semejanzas = 10;
      } else if (verbalTest.semejanzas == 15) {
        updatedTipicaVerbal.semejanzas = 11;
      } else if (verbalTest.semejanzas == 16) {
        updatedTipicaVerbal.semejanzas = 12;
      } else if (verbalTest.semejanzas == 17 || verbalTest.semejanzas == 18) {
        updatedTipicaVerbal.semejanzas = 13;
      } else if (verbalTest.semejanzas == 19) {
        updatedTipicaVerbal.semejanzas = 14;
      } else if (verbalTest.semejanzas == 20) {
        updatedTipicaVerbal.semejanzas = 15;
      } else if (verbalTest.semejanzas == 21) {
        updatedTipicaVerbal.semejanzas = 16;
      } else if (verbalTest.semejanzas == 23) {
        updatedTipicaVerbal.semejanzas = 17;
      } else if (verbalTest.semejanzas == 24) {
        updatedTipicaVerbal.semejanzas = 18;
      } else if (verbalTest.semejanzas >= 25 && verbalTest.semejanzas <= 30) {
        updatedTipicaVerbal.semejanzas = 19;
      }

      //Comprension
      if (!verbalTest.comprension) {
        updatedTipicaVerbal.comprension = "";
      } else if (verbalTest.comprension >= 0 && verbalTest.comprension <= 6) {
        updatedTipicaVerbal.comprension = 1;
      } else if (verbalTest.comprension == 7 || verbalTest.comprension == 8) {
        updatedTipicaVerbal.comprension = 2;
      } else if (verbalTest.comprension == 9) {
        updatedTipicaVerbal.comprension = 3;
      } else if (verbalTest.comprension == 10) {
        updatedTipicaVerbal.comprension = 4;
      } else if (verbalTest.comprension == 11) {
        updatedTipicaVerbal.comprension = 5;
      } else if (verbalTest.comprension == 12) {
        updatedTipicaVerbal.comprension = 6;
      } else if (verbalTest.comprension == 13 || verbalTest.comprension == 14) {
        updatedTipicaVerbal.comprension = 7;
      } else if (verbalTest.comprension == 15) {
        updatedTipicaVerbal.comprension = 8;
      } else if (verbalTest.comprension == 16) {
        updatedTipicaVerbal.comprension = 9;
      } else if (verbalTest.comprension == 17) {
        updatedTipicaVerbal.comprension = 10;
      } else if (verbalTest.comprension == 18) {
        updatedTipicaVerbal.comprension = 11;
      } else if (verbalTest.comprension == 19) {
        updatedTipicaVerbal.comprension = 12;
      } else if (verbalTest.comprension == 20 || verbalTest.comprension == 21) {
        updatedTipicaVerbal.comprension = 13;
      } else if (verbalTest.comprension == 22) {
        updatedTipicaVerbal.comprension = 14;
      } else if (verbalTest.comprension == 23) {
        updatedTipicaVerbal.comprension = 15;
      } else if (verbalTest.comprension == 24) {
        updatedTipicaVerbal.comprension = 16;
      }else if (verbalTest.comprension == 25) {
        updatedTipicaVerbal.comprension = 17;
      }else if (verbalTest.comprension == 26 || verbalTest.comprension == 27) {
        updatedTipicaVerbal.comprension = 18;
      } else if (verbalTest.comprension >= 28 && verbalTest.comprension <= 34) {
        updatedTipicaVerbal.comprension = 19;
      }

      //Dígitos
      if (!verbalTest.digitos) {
        updatedTipicaVerbal.digitos = "";
      } else if (verbalTest.digitos >= 0 && verbalTest.digitos <= 2) {
        updatedTipicaVerbal.digitos = 1;
      } else if (verbalTest.digitos == 3) {
        updatedTipicaVerbal.digitos = 2;
      } else if (verbalTest.digitos == 4) {
        updatedTipicaVerbal.digitos = 3;
      } else if (verbalTest.digitos == 5 || verbalTest.digitos == 6) {
        updatedTipicaVerbal.digitos = 4;
      } else if (verbalTest.digitos == 7) {
        updatedTipicaVerbal.digitos = 5;
      } else if (verbalTest.digitos == 8) {
        updatedTipicaVerbal.digitos = 6;
      } else if (verbalTest.digitos == 9) {
        updatedTipicaVerbal.digitos = 7;
      } else if (verbalTest.digitos == 10) {
        updatedTipicaVerbal.digitos = 8;
      } else if (verbalTest.digitos == 11) {
        updatedTipicaVerbal.digitos = 9;
      } else if (verbalTest.digitos == 12) {
        updatedTipicaVerbal.digitos = 10;
      } else if (verbalTest.digitos == 13) {
        updatedTipicaVerbal.digitos = 11;
      } else if (verbalTest.digitos == 14) {
        updatedTipicaVerbal.digitos = 12;
      } else if (verbalTest.digitos == 15 || verbalTest.digitos == 16) {
        updatedTipicaVerbal.digitos = 13;
      } else if (verbalTest.digitos == 17) {
        updatedTipicaVerbal.digitos = 14;
      } else if (verbalTest.digitos == 18) {
        updatedTipicaVerbal.digitos = 15;
      } else if (verbalTest.digitos == 19) {
        updatedTipicaVerbal.digitos = 16;
      } else if (verbalTest.digitos == 20) {
        updatedTipicaVerbal.digitos = 17;
      } else if (verbalTest.digitos == 21) {
        updatedTipicaVerbal.digitos = 18;
      } else if (verbalTest.digitos >= 22 && verbalTest.digitos <= 28) {
        updatedTipicaVerbal.digitos = 19;
      }

      //////////////////////// Prueba Manual//////////////////////////

      //Figuras Incompletas
      if (!manualTest.figurasI) {
        updatedTipicaManual.figurasI = "";
      } else if (manualTest.figurasI >= 0 && manualTest.figurasI <= 8) {
        updatedTipicaManual.figurasI = 1;
      } else if (manualTest.figurasI == 9) {
        updatedTipicaManual.figurasI = 2;
      } else if (manualTest.figurasI == 10) {
        updatedTipicaManual.figurasI = 3;
      } else if (manualTest.figurasI == 11) {
        updatedTipicaManual.figurasI = 4;
      } else if (manualTest.figurasI == 12 || manualTest.figurasI == 13) {
        updatedTipicaManual.figurasI = 5;
      } else if (manualTest.figurasI == 14) {
        updatedTipicaManual.figurasI = 6;
      } else if (manualTest.figurasI == 15) {
        updatedTipicaManual.figurasI = 7;
      } else if (manualTest.figurasI == 16) {
        updatedTipicaManual.figurasI = 8;
      } else if (manualTest.figurasI == 17) {
        updatedTipicaManual.figurasI = 9;
      } else if (manualTest.figurasI == 18) {
        updatedTipicaManual.figurasI = 10;
      } else if (manualTest.figurasI == 19) {
        updatedTipicaManual.figurasI = 11;
      } else if (manualTest.figurasI == 20 || manualTest.figurasI == 21) {
        updatedTipicaManual.figurasI = 12;
      } else if (manualTest.figurasI == 22) {
        updatedTipicaManual.figurasI = 13;
      } else if (manualTest.figurasI == 23) {
        updatedTipicaManual.figurasI = 14;
      } else if (manualTest.figurasI == 24) {
        updatedTipicaManual.figurasI = 15;
      } else if (manualTest.figurasI == 25) {
        updatedTipicaManual.figurasI = 16;
      } else if (manualTest.figurasI == 26) {
        updatedTipicaManual.figurasI = 17;
      } 

      //Historietas
      if (!manualTest.historietas) {
        updatedTipicaManual.historietas = "";
      } else if (manualTest.historietas >= 0 && manualTest.historietas <= 8) {
        updatedTipicaManual.historietas = 1;
      } else if (manualTest.historietas == 9 || manualTest.historietas == 10) {
        updatedTipicaManual.historietas = 2;
      } else if (manualTest.historietas >= 11 && manualTest.historietas <= 13) {
        updatedTipicaManual.historietas = 3;
      } else if (manualTest.historietas == 14 || manualTest.historietas == 15) {
        updatedTipicaManual.historietas = 4;
      } else if (manualTest.historietas == 16 || manualTest.historietas == 17) {
        updatedTipicaManual.historietas = 5;
      } else if (manualTest.historietas >= 18 && manualTest.historietas <= 20) {
        updatedTipicaManual.historietas = 6;
      } else if (manualTest.historietas == 21 || manualTest.historietas == 22) {
        updatedTipicaManual.historietas = 7;
      } else if (manualTest.historietas == 23 || manualTest.historietas == 24) {
        updatedTipicaManual.historietas = 8;
      } else if (manualTest.historietas >= 25 && manualTest.historietas <= 27) {
        updatedTipicaManual.historietas = 9;
      } else if (manualTest.historietas == 28 || manualTest.historietas == 29) {
        updatedTipicaManual.historietas = 10;
      } else if (manualTest.historietas == 30 || manualTest.historietas == 31) {
        updatedTipicaManual.historietas = 11;
      } else if (manualTest.historietas >= 32 && manualTest.historietas <= 34) {
        updatedTipicaManual.historietas = 12;
      } else if (manualTest.historietas == 35 || manualTest.historietas == 36) {
        updatedTipicaManual.historietas = 13;
      } else if (manualTest.historietas == 37 || manualTest.historietas == 38) {
        updatedTipicaManual.historietas = 14;
      } else if (manualTest.historietas >= 39 && manualTest.historietas <= 41) {
        updatedTipicaManual.historietas = 15;
      } else if (manualTest.historietas == 42 || manualTest.historietas == 43) {
        updatedTipicaManual.historietas = 16;
      } else if (manualTest.historietas == 44 || manualTest.historietas == 45) {
        updatedTipicaManual.historietas = 17;
      } else if (manualTest.historietas >= 46 && manualTest.historietas <= 48) {
        updatedTipicaManual.historietas = 18;
      } 

      //Cubos
      if (!manualTest.cubos) {
        updatedTipicaManual.cubos = "";
      }else if (manualTest.cubos == 0) {
        updatedTipicaManual.cubos = 1;
      } else if (manualTest.cubos >= 1 && manualTest.cubos <= 4) {
        updatedTipicaManual.cubos = 2;
      } else if (manualTest.cubos >= 5 && manualTest.cubos <= 8) {
        updatedTipicaManual.cubos = 3;
      } else if (manualTest.cubos >= 9 && manualTest.cubos <= 12) {
        updatedTipicaManual.cubos = 4;
      } else if (manualTest.cubos >= 13 && manualTest.cubos <= 16) {
        updatedTipicaManual.cubos = 5;
      } else if (manualTest.cubos >= 17 && manualTest.cubos <= 20) {
        updatedTipicaManual.cubos = 6;
      } else if (manualTest.cubos >= 21 && manualTest.cubos <= 24) {
        updatedTipicaManual.cubos = 7;
      } else if (manualTest.cubos >= 25 && manualTest.cubos <= 28) {
        updatedTipicaManual.cubos = 8;
      } else if (manualTest.cubos >= 29 && manualTest.cubos <= 32) {
        updatedTipicaManual.cubos = 9;
      } else if (manualTest.cubos >= 33 && manualTest.cubos <= 36) {
        updatedTipicaManual.cubos = 10;
      } else if (manualTest.cubos >= 37 && manualTest.cubos <= 40) {
        updatedTipicaManual.cubos = 11;
      } else if (manualTest.cubos >= 41 && manualTest.cubos <= 44) {
        updatedTipicaManual.cubos = 12;
      } else if (manualTest.cubos >= 45 && manualTest.cubos <= 48) {
        updatedTipicaManual.cubos = 13;
      } else if (manualTest.cubos >= 49 && manualTest.cubos <= 52) {
        updatedTipicaManual.cubos = 14;
      } else if (manualTest.cubos >= 53 && manualTest.cubos <= 56) {
        updatedTipicaManual.cubos = 15;
      } else if (manualTest.cubos >= 57 && manualTest.cubos <= 60) {
        updatedTipicaManual.cubos = 16;
      } else if (manualTest.cubos == 61 || manualTest.cubos == 62) {
        updatedTipicaManual.cubos = 17;
      } 

      //Rompecabezas
      if (!manualTest.rompeCabezas) {
        updatedTipicaManual.rompeCabezas = "";
      } else if (manualTest.rompeCabezas >= 0 && manualTest.rompeCabezas <= 9) {
        updatedTipicaManual.rompeCabezas = 1;
      } else if (manualTest.rompeCabezas == 10) {
        updatedTipicaManual.rompeCabezas = 2;
      } else if (manualTest.rompeCabezas == 11 || manualTest.rompeCabezas == 12) {
        updatedTipicaManual.rompeCabezas = 3;
      } else if (manualTest.rompeCabezas == 13 || manualTest.rompeCabezas == 14) {
        updatedTipicaManual.rompeCabezas = 4;
      } else if (manualTest.rompeCabezas == 15) {
        updatedTipicaManual.rompeCabezas = 5;
      } else if (manualTest.rompeCabezas == 16 || manualTest.rompeCabezas == 17) {
        updatedTipicaManual.rompeCabezas = 6;
      } else if (manualTest.rompeCabezas == 18) {
        updatedTipicaManual.rompeCabezas = 7;
      } else if (
        manualTest.rompeCabezas == 19 ||
        manualTest.rompeCabezas == 20
      ) {
        updatedTipicaManual.rompeCabezas = 8;
      } else if (
        manualTest.rompeCabezas == 21 ||
        manualTest.rompeCabezas == 22
      ) {
        updatedTipicaManual.rompeCabezas = 9;
      } else if (manualTest.rompeCabezas == 23) {
        updatedTipicaManual.rompeCabezas = 10;
      } else if (manualTest.rompeCabezas == 24 || manualTest.rompeCabezas == 25) {
        updatedTipicaManual.rompeCabezas = 11;
      } else if (manualTest.rompeCabezas == 26) {
        updatedTipicaManual.rompeCabezas = 12;
      } else if (
        manualTest.rompeCabezas == 27 ||
        manualTest.rompeCabezas == 28
      ) {
        updatedTipicaManual.rompeCabezas = 13;
      } else if (manualTest.rompeCabezas == 29 || manualTest.rompeCabezas == 30) {
        updatedTipicaManual.rompeCabezas = 14;
      } else if (manualTest.rompeCabezas == 31) {
        updatedTipicaManual.rompeCabezas = 15;
      } else if (
        manualTest.rompeCabezas == 32 ||
        manualTest.rompeCabezas == 33
      ) {
        updatedTipicaManual.rompeCabezas = 16;
      } 

      //Claves
      if (!manualTest.claves) {
        updatedTipicaManual.claves = "";
      } else if (manualTest.claves >= 0 && manualTest.claves <= 19) {
        updatedTipicaManual.claves = 1;
      } else if (manualTest.claves >= 20 && manualTest.claves <= 22) {
        updatedTipicaManual.claves = 2;
      } else if (manualTest.claves >= 23 && manualTest.claves <= 25) {
        updatedTipicaManual.claves = 3;
      } else if (manualTest.claves >= 26 && manualTest.claves <= 30) {
        updatedTipicaManual.claves = 4;
      } else if (manualTest.claves >= 30 && manualTest.claves <= 32) {
        updatedTipicaManual.claves = 5;
      } else if (manualTest.claves >= 33 && manualTest.claves <= 36) {
        updatedTipicaManual.claves = 6;
      } else if (manualTest.claves >= 37 && manualTest.claves <= 39) {
        updatedTipicaManual.claves = 7;
      } else if (manualTest.claves >= 40 && manualTest.claves <= 42) {
        updatedTipicaManual.claves = 8;
      } else if (manualTest.claves >= 43 && manualTest.claves <= 46) {
        updatedTipicaManual.claves = 9;
      } else if (manualTest.claves >= 47 && manualTest.claves <= 49) {
        updatedTipicaManual.claves = 10;
      } else if (manualTest.claves >= 50 && manualTest.claves <= 53) {
        updatedTipicaManual.claves = 11;
      } else if (manualTest.claves >= 54 && manualTest.claves <= 56) {
        updatedTipicaManual.claves = 12;
      } else if (manualTest.claves >= 57 && manualTest.claves <= 59) {
        updatedTipicaManual.claves = 13;
      } else if (manualTest.claves >= 60 && manualTest.claves <= 63) {
        updatedTipicaManual.claves = 14;
      } else if (manualTest.claves >= 64 && manualTest.claves <= 66) {
        updatedTipicaManual.claves = 15;
      } else if (manualTest.claves >= 67 && manualTest.claves <= 70) {
        updatedTipicaManual.claves = 16;
      } else if (manualTest.claves >= 71 && manualTest.claves <= 73) {
        updatedTipicaManual.claves = 17;
      } else if (manualTest.claves >= 74 && manualTest.claves <= 76) {
        updatedTipicaManual.claves = 18;
      } else if (manualTest.claves >= 77 && manualTest.claves <= 93) {
        updatedTipicaManual.claves = 19;
      }

      //Laberintos
      if (!manualTest.laberintos) {
        updatedTipicaManual.laberintos = "";
      } else if (manualTest.laberintos >= 0 && manualTest.laberintos <= 12) {
        updatedTipicaManual.laberintos = 1;
      } else if (manualTest.laberintos == 13) {
        updatedTipicaManual.laberintos = 2;
      } else if (manualTest.laberintos == 14) {
        updatedTipicaManual.laberintos = 3;
      } else if (manualTest.laberintos == 15) {
        updatedTipicaManual.laberintos = 4;
      } else if (manualTest.laberintos == 16 || manualTest.laberintos == 17) {
        updatedTipicaManual.laberintos = 5;
      } else if (manualTest.laberintos == 18) {
        updatedTipicaManual.laberintos = 6;
      } else if (manualTest.laberintos == 19) {
        updatedTipicaManual.laberintos = 7;
      } else if (manualTest.laberintos == 20) {
        updatedTipicaManual.laberintos = 8;
      } else if (manualTest.laberintos == 21) {
        updatedTipicaManual.laberintos = 9;
      } else if (manualTest.laberintos == 22) {
        updatedTipicaManual.laberintos = 10;
      } else if (manualTest.laberintos == 23) {
        updatedTipicaManual.laberintos = 11;
      } else if (manualTest.laberintos == 24) {
        updatedTipicaManual.laberintos = 12;
      } else if (manualTest.laberintos == 25 || manualTest.laberintos == 26) {
        updatedTipicaManual.laberintos = 13;
      } else if (manualTest.laberintos == 27) {
        updatedTipicaManual.laberintos = 14;
      } else if (manualTest.laberintos == 28) {
        updatedTipicaManual.laberintos = 15;
      } else if (manualTest.laberintos == 29) {
        updatedTipicaManual.laberintos = 16;
      }else if (manualTest.laberintos == 30) {
        updatedTipicaManual.laberintos = 17;
      }
    } else if (age.years === 12) {

      //Información
      if (!verbalTest.informacion) {
        updatedTipicaVerbal.informacion = "";
      } else if (verbalTest.informacion >= 0 && verbalTest.informacion <= 8) {
        updatedTipicaVerbal.informacion = 1;
      } else if (verbalTest.informacion == 9) {
        updatedTipicaVerbal.informacion = 2;
      } else if (verbalTest.informacion == 10) {
        updatedTipicaVerbal.informacion = 3;
      } else if (verbalTest.informacion == 11) {
        updatedTipicaVerbal.informacion = 4;
      } else if (verbalTest.informacion == 12) {
        updatedTipicaVerbal.informacion = 5;
      } else if (verbalTest.informacion == 13) {
        updatedTipicaVerbal.informacion = 6;
      } else if (verbalTest.informacion == 14) {
        updatedTipicaVerbal.informacion = 7;
      } else if (verbalTest.informacion == 15 || verbalTest.informacion == 16) {
        updatedTipicaVerbal.informacion = 8;
      } else if (verbalTest.informacion == 17) {
        updatedTipicaVerbal.informacion = 9;
      } else if (verbalTest.informacion == 18) {
        updatedTipicaVerbal.informacion = 10;
      } else if (verbalTest.informacion == 19) {
        updatedTipicaVerbal.informacion = 11;
      } else if (verbalTest.informacion == 20) {
        updatedTipicaVerbal.informacion = 12;
      } else if (verbalTest.informacion == 21) {
        updatedTipicaVerbal.informacion = 13;
      } else if (verbalTest.informacion == 22) {
        updatedTipicaVerbal.informacion = 14;
      } else if (verbalTest.informacion == 23) {
        updatedTipicaVerbal.informacion = 15;
      } else if (verbalTest.informacion == 24) {
        updatedTipicaVerbal.informacion = 16;
      } else if (verbalTest.informacion == 25) {
        updatedTipicaVerbal.informacion = 17;
      } else if (verbalTest.informacion == 26) {
        updatedTipicaVerbal.informacion = 18;
      } else if (verbalTest.informacion >= 27 && verbalTest.informacion <= 30) {
        updatedTipicaVerbal.informacion = 19;
      }

      //Vocabulario
      if (!verbalTest.vocabulario) {
        updatedTipicaVerbal.vocabulario = "";
      } else if (verbalTest.vocabulario >= 0 && verbalTest.vocabulario <= 19) {
        updatedTipicaVerbal.vocabulario = 1;
      } else if (verbalTest.vocabulario == 20 || verbalTest.vocabulario == 21) {
        updatedTipicaVerbal.vocabulario = 2;
      } else if (verbalTest.vocabulario == 22 || verbalTest.vocabulario == 23) {
        updatedTipicaVerbal.vocabulario = 3;
      } else if (verbalTest.vocabulario >= 24 && verbalTest.vocabulario <= 26) {
        updatedTipicaVerbal.vocabulario = 4;
      } else if (verbalTest.vocabulario == 27 || verbalTest.vocabulario == 28) {
        updatedTipicaVerbal.vocabulario = 5;
      } else if (verbalTest.vocabulario == 29 || verbalTest.vocabulario == 30) {
        updatedTipicaVerbal.vocabulario = 6;
      } else if (verbalTest.vocabulario == 31 || verbalTest.vocabulario == 32) {
        updatedTipicaVerbal.vocabulario = 7;
      } else if (verbalTest.vocabulario >= 33 && verbalTest.vocabulario <= 35) {
        updatedTipicaVerbal.vocabulario = 8;
      } else if (verbalTest.vocabulario == 36 || verbalTest.vocabulario == 37) {
        updatedTipicaVerbal.vocabulario = 9;
      } else if (verbalTest.vocabulario == 38 || verbalTest.vocabulario == 39) {
        updatedTipicaVerbal.vocabulario = 10;
      } else if (verbalTest.vocabulario == 40 || verbalTest.vocabulario == 41) {
        updatedTipicaVerbal.vocabulario = 11;
      } else if (verbalTest.vocabulario >= 42 && verbalTest.vocabulario <= 44) {
        updatedTipicaVerbal.vocabulario = 12;
      } else if (verbalTest.vocabulario == 45 || verbalTest.vocabulario == 46) {
        updatedTipicaVerbal.vocabulario = 13;
      } else if (verbalTest.vocabulario == 47 || verbalTest.vocabulario == 48) {
        updatedTipicaVerbal.vocabulario = 14;
      } else if (verbalTest.vocabulario == 49 || verbalTest.vocabulario == 50) {
        updatedTipicaVerbal.vocabulario = 15;
      } else if (verbalTest.vocabulario >= 51 && verbalTest.vocabulario <= 53) {
        updatedTipicaVerbal.vocabulario = 16;
      } else if (verbalTest.vocabulario == 54 || verbalTest.vocabulario == 55) {
        updatedTipicaVerbal.vocabulario = 17;
      } else if (verbalTest.vocabulario == 56 || verbalTest.vocabulario == 57) {
        updatedTipicaVerbal.vocabulario = 18;
      } else if (verbalTest.vocabulario >= 58 && verbalTest.vocabulario <= 64) {
        updatedTipicaVerbal.vocabulario = 19;
      }

      //Aritmética
      if (!verbalTest.aritmetica) {
        updatedTipicaVerbal.aritmetica = "";
      } else if (verbalTest.aritmetica >= 0 && verbalTest.aritmetica <= 7) {
        updatedTipicaVerbal.aritmetica = 1;
      } else if (verbalTest.aritmetica == 8) {
        updatedTipicaVerbal.aritmetica = 2;
      } else if (verbalTest.aritmetica == 9) {
        updatedTipicaVerbal.aritmetica = 3;
      } else if (verbalTest.aritmetica == 10) {
        updatedTipicaVerbal.aritmetica = 5;
      } else if (verbalTest.aritmetica == 11) {
        updatedTipicaVerbal.aritmetica = 6;
      } else if (verbalTest.aritmetica == 12) {
        updatedTipicaVerbal.aritmetica = 8;
      } else if (verbalTest.aritmetica == 13) {
        updatedTipicaVerbal.aritmetica = 10;
      } else if (verbalTest.aritmetica == 14) {
        updatedTipicaVerbal.aritmetica = 11;
      } else if (verbalTest.aritmetica == 15) {
        updatedTipicaVerbal.aritmetica = 12;
      } else if (verbalTest.aritmetica == 16) {
        updatedTipicaVerbal.aritmetica = 14;
      } else if (verbalTest.aritmetica == 17) {
        updatedTipicaVerbal.aritmetica = 16;
      } else if (verbalTest.aritmetica == 18) {
        updatedTipicaVerbal.aritmetica = 17;
      }

      //Semejanzas
      if (!verbalTest.semejanzas) {
        updatedTipicaVerbal.semejanzas = "";
      } else if (verbalTest.semejanzas >= 0 && verbalTest.semejanzas <= 6) {
        updatedTipicaVerbal.semejanzas = 1;
      } else if (verbalTest.semejanzas == 7) {
        updatedTipicaVerbal.semejanzas = 2;
      } else if (verbalTest.semejanzas == 8) {
        updatedTipicaVerbal.semejanzas = 3;
      } else if (verbalTest.semejanzas == 9) {
        updatedTipicaVerbal.semejanzas = 4;
      } else if (verbalTest.semejanzas == 10) {
        updatedTipicaVerbal.semejanzas = 5;
      } else if (verbalTest.semejanzas == 11) {
        updatedTipicaVerbal.semejanzas = 6;
      } else if (verbalTest.semejanzas == 12 || verbalTest.semejanzas == 13) {
        updatedTipicaVerbal.semejanzas = 7;
      } else if (verbalTest.semejanzas == 14) {
        updatedTipicaVerbal.semejanzas = 8;
      } else if (verbalTest.semejanzas == 15) {
        updatedTipicaVerbal.semejanzas = 9;
      } else if (verbalTest.semejanzas == 16) {
        updatedTipicaVerbal.semejanzas = 10;
      } else if (verbalTest.semejanzas == 17) {
        updatedTipicaVerbal.semejanzas = 11;
      } else if (verbalTest.semejanzas == 18 || verbalTest.semejanzas == 19) {
        updatedTipicaVerbal.semejanzas = 12;
      } else if (verbalTest.semejanzas == 20) {
        updatedTipicaVerbal.semejanzas = 13;
      } else if (verbalTest.semejanzas == 21) {
        updatedTipicaVerbal.semejanzas = 14;
      } else if (verbalTest.semejanzas == 22) {
        updatedTipicaVerbal.semejanzas = 15;
      } else if (verbalTest.semejanzas == 23) {
        updatedTipicaVerbal.semejanzas = 16;
      } else if (verbalTest.semejanzas == 24) {
        updatedTipicaVerbal.semejanzas = 17;
      } else if (verbalTest.semejanzas == 25 || verbalTest.semejanzas == 26) {
        updatedTipicaVerbal.semejanzas = 18;
      } else if (verbalTest.semejanzas >= 27 && verbalTest.semejanzas <= 30) {
        updatedTipicaVerbal.semejanzas = 19;
      }

      //Comprension
      if (!verbalTest.comprension) {
        updatedTipicaVerbal.comprension = "";
      } else if (verbalTest.comprension >= 0 && verbalTest.comprension <= 7) {
        updatedTipicaVerbal.comprension = 1;
      } else if (verbalTest.comprension == 8) {
        updatedTipicaVerbal.comprension = 2;
      } else if (verbalTest.comprension == 9 || verbalTest.comprension == 10) {
        updatedTipicaVerbal.comprension = 3;
      } else if (verbalTest.comprension == 11) {
        updatedTipicaVerbal.comprension = 4;
      } else if (verbalTest.comprension == 12) {
        updatedTipicaVerbal.comprension = 5;
      } else if (verbalTest.comprension == 13) {
        updatedTipicaVerbal.comprension = 6;
      } else if (verbalTest.comprension == 14) {
        updatedTipicaVerbal.comprension = 7;
      } else if (verbalTest.comprension == 15) {
        updatedTipicaVerbal.comprension = 8;
      } else if (verbalTest.comprension == 16 || verbalTest.comprension == 17) {
        updatedTipicaVerbal.comprension = 9;
      } else if (verbalTest.comprension == 18) {
        updatedTipicaVerbal.comprension = 10;
      } else if (verbalTest.comprension == 19) {
        updatedTipicaVerbal.comprension = 11;
      } else if (verbalTest.comprension == 20) {
        updatedTipicaVerbal.comprension = 12;
      } else if (verbalTest.comprension == 21) {
        updatedTipicaVerbal.comprension = 13;
      } else if (verbalTest.comprension == 22 || verbalTest.comprension == 23) {
        updatedTipicaVerbal.comprension = 14;
      } else if (verbalTest.comprension == 24) {
        updatedTipicaVerbal.comprension = 15;
      } else if (verbalTest.comprension == 25) {
        updatedTipicaVerbal.comprension = 16;
      }else if (verbalTest.comprension == 26) {
        updatedTipicaVerbal.comprension = 17;
      }else if (verbalTest.comprension == 27) {
        updatedTipicaVerbal.comprension = 18;
      } else if (verbalTest.comprension >= 28 && verbalTest.comprension <= 34) {
        updatedTipicaVerbal.comprension = 19;
      }

      //Dígitos
      if (!verbalTest.digitos) {
        updatedTipicaVerbal.digitos = "";
      } else if (verbalTest.digitos >= 0 && verbalTest.digitos <= 2) {
        updatedTipicaVerbal.digitos = 1;
      } else if (verbalTest.digitos == 3) {
        updatedTipicaVerbal.digitos = 2;
      } else if (verbalTest.digitos == 4) {
        updatedTipicaVerbal.digitos = 3;
      } else if (verbalTest.digitos == 5 || verbalTest.digitos == 6) {
        updatedTipicaVerbal.digitos = 4;
      } else if (verbalTest.digitos == 7) {
        updatedTipicaVerbal.digitos = 5;
      } else if (verbalTest.digitos == 8) {
        updatedTipicaVerbal.digitos = 6;
      } else if (verbalTest.digitos == 9) {
        updatedTipicaVerbal.digitos = 7;
      } else if (verbalTest.digitos == 10) {
        updatedTipicaVerbal.digitos = 8;
      } else if (verbalTest.digitos == 11) {
        updatedTipicaVerbal.digitos = 9;
      } else if (verbalTest.digitos == 12) {
        updatedTipicaVerbal.digitos = 10;
      } else if (verbalTest.digitos == 13) {
        updatedTipicaVerbal.digitos = 11;
      } else if (verbalTest.digitos == 14) {
        updatedTipicaVerbal.digitos = 12;
      } else if (verbalTest.digitos == 15 || verbalTest.digitos == 16) {
        updatedTipicaVerbal.digitos = 13;
      } else if (verbalTest.digitos == 17) {
        updatedTipicaVerbal.digitos = 14;
      } else if (verbalTest.digitos == 18) {
        updatedTipicaVerbal.digitos = 15;
      } else if (verbalTest.digitos == 19) {
        updatedTipicaVerbal.digitos = 16;
      } else if (verbalTest.digitos == 20) {
        updatedTipicaVerbal.digitos = 17;
      } else if (verbalTest.digitos == 21) {
        updatedTipicaVerbal.digitos = 18;
      } else if (verbalTest.digitos >= 22 && verbalTest.digitos <= 28) {
        updatedTipicaVerbal.digitos = 19;
      }

      //////////////////////// Prueba Manual//////////////////////////

      //Figuras Incompletas
      if (!manualTest.figurasI) {
        updatedTipicaManual.figurasI = "";
      } else if (manualTest.figurasI >= 0 && manualTest.figurasI <= 10) {
        updatedTipicaManual.figurasI = 1;
      } else if (manualTest.figurasI == 11) {
        updatedTipicaManual.figurasI = 2;
      } else if (manualTest.figurasI == 12) {
        updatedTipicaManual.figurasI = 3;
      } else if (manualTest.figurasI == 13) {
        updatedTipicaManual.figurasI = 4;
      } else if (manualTest.figurasI == 14) {
        updatedTipicaManual.figurasI = 5;
      } else if (manualTest.figurasI == 15) {
        updatedTipicaManual.figurasI = 6;
      } else if (manualTest.figurasI == 16) {
        updatedTipicaManual.figurasI = 7;
      } else if (manualTest.figurasI == 17) {
        updatedTipicaManual.figurasI = 8;
      } else if (manualTest.figurasI == 18) {
        updatedTipicaManual.figurasI = 9;
      } else if (manualTest.figurasI == 19) {
        updatedTipicaManual.figurasI = 10;
      } else if (manualTest.figurasI == 20) {
        updatedTipicaManual.figurasI = 11;
      } else if (manualTest.figurasI == 21) {
        updatedTipicaManual.figurasI = 12;
      } else if (manualTest.figurasI == 22) {
        updatedTipicaManual.figurasI = 13;
      } else if (manualTest.figurasI == 23) {
        updatedTipicaManual.figurasI = 14;
      } else if (manualTest.figurasI == 24) {
        updatedTipicaManual.figurasI = 15;
      } else if (manualTest.figurasI == 25) {
        updatedTipicaManual.figurasI = 16;
      } else if (manualTest.figurasI == 26) {
        updatedTipicaManual.figurasI = 17;
      } 

      //Historietas
      if (!manualTest.historietas) {
        updatedTipicaManual.historietas = "";
      } else if (manualTest.historietas >= 0 && manualTest.historietas <= 10) {
        updatedTipicaManual.historietas = 1;
      } else if (manualTest.historietas == 11 || manualTest.historietas == 12) {
        updatedTipicaManual.historietas = 2;
      } else if (manualTest.historietas == 13 || manualTest.historietas == 14) {
        updatedTipicaManual.historietas = 3;
      } else if (manualTest.historietas == 15 || manualTest.historietas == 16) {
        updatedTipicaManual.historietas = 4;
      } else if (manualTest.historietas >= 17 && manualTest.historietas <= 19) {
        updatedTipicaManual.historietas = 5;
      } else if (manualTest.historietas == 20 || manualTest.historietas == 21) {
        updatedTipicaManual.historietas = 6;
      } else if (manualTest.historietas == 22 || manualTest.historietas == 23) {
        updatedTipicaManual.historietas = 7;
      } else if (manualTest.historietas >= 24 && manualTest.historietas <= 26) {
        updatedTipicaManual.historietas = 8;
      } else if (manualTest.historietas == 27 || manualTest.historietas == 28) {
        updatedTipicaManual.historietas = 9;
      } else if (manualTest.historietas == 29 || manualTest.historietas == 30) {
        updatedTipicaManual.historietas = 10;
      } else if (manualTest.historietas == 31 || manualTest.historietas == 32) {
        updatedTipicaManual.historietas = 11;
      } else if (manualTest.historietas == 33 || manualTest.historietas == 34) {
        updatedTipicaManual.historietas = 12;
      } else if (manualTest.historietas >= 35 && manualTest.historietas <= 37) {
        updatedTipicaManual.historietas = 13;
      } else if (manualTest.historietas == 38 || manualTest.historietas == 39) {
        updatedTipicaManual.historietas = 14;
      } else if (manualTest.historietas == 40 || manualTest.historietas == 41) {
        updatedTipicaManual.historietas = 15;
      } else if (manualTest.historietas == 42 || manualTest.historietas == 43) {
        updatedTipicaManual.historietas = 16;
      } else if (manualTest.historietas == 44 || manualTest.historietas == 45) {
        updatedTipicaManual.historietas = 17;
      } else if (manualTest.historietas == 46 || manualTest.historietas == 47) {
        updatedTipicaManual.historietas = 18;
      } else if (manualTest.historietas == 48) {
        updatedTipicaManual.historietas = 19;
      } 

      //Cubos
      if (!manualTest.cubos) {
        updatedTipicaManual.cubos = "";
      }else if (manualTest.cubos >= 0 && manualTest.cubos <= 13) {
        updatedTipicaManual.cubos = 1;
      } else if (manualTest.cubos >= 14 && manualTest.cubos <= 17) {
        updatedTipicaManual.cubos = 2;
      } else if (manualTest.cubos >= 18 && manualTest.cubos <= 20) {
        updatedTipicaManual.cubos = 3;
      } else if (manualTest.cubos >= 21 && manualTest.cubos <= 23) {
        updatedTipicaManual.cubos = 4;
      } else if (manualTest.cubos >= 24 && manualTest.cubos <= 26) {
        updatedTipicaManual.cubos = 5;
      } else if (manualTest.cubos >= 27 && manualTest.cubos <= 29) {
        updatedTipicaManual.cubos = 6;
      } else if (manualTest.cubos >= 30 && manualTest.cubos <= 32) {
        updatedTipicaManual.cubos = 7;
      } else if (manualTest.cubos >= 33 && manualTest.cubos <= 35) {
        updatedTipicaManual.cubos = 8;
      } else if (manualTest.cubos >= 36 && manualTest.cubos <= 38) {
        updatedTipicaManual.cubos = 9;
      } else if (manualTest.cubos >= 39 && manualTest.cubos <= 41) {
        updatedTipicaManual.cubos = 10;
      } else if (manualTest.cubos >= 42 && manualTest.cubos <= 44) {
        updatedTipicaManual.cubos = 11;
      } else if (manualTest.cubos >= 45 && manualTest.cubos <= 47) {
        updatedTipicaManual.cubos = 12;
      } else if (manualTest.cubos >= 48 && manualTest.cubos <= 50) {
        updatedTipicaManual.cubos = 13;
      } else if (manualTest.cubos >= 51 && manualTest.cubos <= 53) {
        updatedTipicaManual.cubos = 14;
      } else if (manualTest.cubos >= 54 && manualTest.cubos <= 57) {
        updatedTipicaManual.cubos = 15;
      } else if (manualTest.cubos >= 58 && manualTest.cubos <= 60) {
        updatedTipicaManual.cubos = 16;
      } else if (manualTest.cubos == 61 || manualTest.cubos == 62) {
        updatedTipicaManual.cubos = 17;
      } 

      //Rompecabezas
      if (!manualTest.rompeCabezas) {
        updatedTipicaManual.rompeCabezas = "";
      } else if (manualTest.rompeCabezas >= 0 && manualTest.rompeCabezas <= 13) {
        updatedTipicaManual.rompeCabezas = 1;
      } else if (manualTest.rompeCabezas == 14) {
        updatedTipicaManual.rompeCabezas = 2;
      } else if (manualTest.rompeCabezas == 15) {
        updatedTipicaManual.rompeCabezas = 3;
      } else if (manualTest.rompeCabezas == 16 || manualTest.rompeCabezas == 17) {
        updatedTipicaManual.rompeCabezas = 4;
      } else if (manualTest.rompeCabezas == 18) {
        updatedTipicaManual.rompeCabezas = 5;
      } else if (manualTest.rompeCabezas == 19) {
        updatedTipicaManual.rompeCabezas = 6;
      } else if (manualTest.rompeCabezas == 20 || manualTest.rompeCabezas == 21) {
        updatedTipicaManual.rompeCabezas = 7;
      } else if (manualTest.rompeCabezas == 22){
        updatedTipicaManual.rompeCabezas = 8;
      } else if (manualTest.rompeCabezas == 23){
        updatedTipicaManual.rompeCabezas = 9;
      } else if (manualTest.rompeCabezas == 24 || manualTest.rompeCabezas == 25) {
        updatedTipicaManual.rompeCabezas = 10;
      } else if (manualTest.rompeCabezas == 26) {
        updatedTipicaManual.rompeCabezas = 11;
      } else if (manualTest.rompeCabezas == 27) {
        updatedTipicaManual.rompeCabezas = 12;
      } else if (
        manualTest.rompeCabezas == 28 ||
        manualTest.rompeCabezas == 29
      ) {
        updatedTipicaManual.rompeCabezas = 13;
      } else if (manualTest.rompeCabezas == 30) {
        updatedTipicaManual.rompeCabezas = 14;
      } else if (manualTest.rompeCabezas == 31) {
        updatedTipicaManual.rompeCabezas = 15;
      } else if (manualTest.rompeCabezas == 32) {
        updatedTipicaManual.rompeCabezas = 16;
      }  else if (manualTest.rompeCabezas == 33) {
        updatedTipicaManual.rompeCabezas = 17;
      } 

      //Claves
      if (!manualTest.claves) {
        updatedTipicaManual.claves = "";
      } else if (manualTest.claves >= 0 && manualTest.claves <= 22) {
        updatedTipicaManual.claves = 1;
      } else if (manualTest.claves >= 23 && manualTest.claves <= 25) {
        updatedTipicaManual.claves = 2;
      } else if (manualTest.claves >= 26 && manualTest.claves <= 29) {
        updatedTipicaManual.claves = 3;
      } else if (manualTest.claves >= 30 && manualTest.claves <= 32) {
        updatedTipicaManual.claves = 4;
      } else if (manualTest.claves >= 33 && manualTest.claves <= 36) {
        updatedTipicaManual.claves = 5;
      } else if (manualTest.claves >= 37 && manualTest.claves <= 40) {
        updatedTipicaManual.claves = 6;
      } else if (manualTest.claves >= 41 && manualTest.claves <= 43) {
        updatedTipicaManual.claves = 7;
      } else if (manualTest.claves >= 44 && manualTest.claves <= 47) {
        updatedTipicaManual.claves = 8;
      } else if (manualTest.claves >= 48 && manualTest.claves <= 50) {
        updatedTipicaManual.claves = 9;
      } else if (manualTest.claves >= 51 && manualTest.claves <= 54) {
        updatedTipicaManual.claves = 10;
      } else if (manualTest.claves >= 55 && manualTest.claves <= 58) {
        updatedTipicaManual.claves = 11;
      } else if (manualTest.claves >= 59 && manualTest.claves <= 61) {
        updatedTipicaManual.claves = 12;
      } else if (manualTest.claves >= 62 && manualTest.claves <= 65) {
        updatedTipicaManual.claves = 13;
      } else if (manualTest.claves >= 66 && manualTest.claves <= 69) {
        updatedTipicaManual.claves = 14;
      } else if (manualTest.claves >= 70 && manualTest.claves <= 72) {
        updatedTipicaManual.claves = 15;
      } else if (manualTest.claves >= 73 && manualTest.claves <= 76) {
        updatedTipicaManual.claves = 16;
      } else if (manualTest.claves >= 77 && manualTest.claves <= 79) {
        updatedTipicaManual.claves = 17;
      } else if (manualTest.claves >= 80 && manualTest.claves <= 83) {
        updatedTipicaManual.claves = 18;
      } else if (manualTest.claves >= 84 && manualTest.claves <= 93) {
        updatedTipicaManual.claves = 19;
      }

      //Laberintos
      if (!manualTest.laberintos) {
        updatedTipicaManual.laberintos = "";
      } else if (manualTest.laberintos >= 0 && manualTest.laberintos <= 10) {
        updatedTipicaManual.laberintos = 1;
      } else if (manualTest.laberintos == 11 || manualTest.laberintos == 12) {
        updatedTipicaManual.laberintos = 2;
      } else if (manualTest.laberintos == 13) {
        updatedTipicaManual.laberintos = 3;
      } else if (manualTest.laberintos == 14) {
        updatedTipicaManual.laberintos = 4;
      } else if (manualTest.laberintos == 15 || manualTest.laberintos == 16) {
        updatedTipicaManual.laberintos = 5;
      } else if (manualTest.laberintos == 17) {
        updatedTipicaManual.laberintos = 6;
      } else if (manualTest.laberintos == 18) {
        updatedTipicaManual.laberintos = 7;
      } else if (manualTest.laberintos == 19 || manualTest.laberintos == 20) {
        updatedTipicaManual.laberintos = 8;
      } else if (manualTest.laberintos == 21) {
        updatedTipicaManual.laberintos = 9;
      } else if (manualTest.laberintos == 22) {
        updatedTipicaManual.laberintos = 10;
      } else if (manualTest.laberintos == 23 || manualTest.laberintos == 24) {
        updatedTipicaManual.laberintos = 11;
      } else if (manualTest.laberintos == 25) {
        updatedTipicaManual.laberintos = 12;
      } else if (manualTest.laberintos == 26) {
        updatedTipicaManual.laberintos = 13;
      } else if (manualTest.laberintos == 27 || manualTest.laberintos == 28) {
        updatedTipicaManual.laberintos = 14;
      } else if (manualTest.laberintos == 29) {
        updatedTipicaManual.laberintos = 15;
      } else if (manualTest.laberintos == 30) {
        updatedTipicaManual.laberintos = 16;
      }
    } else if (age.years === 13) {

      //Información
      if (!verbalTest.informacion) {
        updatedTipicaVerbal.informacion = "";
      } else if (verbalTest.informacion >= 0 && verbalTest.informacion <= 8) {
        updatedTipicaVerbal.informacion = 1;
      } else if (verbalTest.informacion == 9) {
        updatedTipicaVerbal.informacion = 2;
      } else if (verbalTest.informacion == 10) {
        updatedTipicaVerbal.informacion = 3;
      } else if (verbalTest.informacion == 11 || verbalTest.informacion == 12) {
        updatedTipicaVerbal.informacion = 4;
      } else if (verbalTest.informacion == 13) {
        updatedTipicaVerbal.informacion = 5;
      } else if (verbalTest.informacion == 14) {
        updatedTipicaVerbal.informacion = 6;
      } else if (verbalTest.informacion == 15) {
        updatedTipicaVerbal.informacion = 7;
      } else if (verbalTest.informacion == 16) {
        updatedTipicaVerbal.informacion = 8;
      } else if (verbalTest.informacion == 17) {
        updatedTipicaVerbal.informacion = 9;
      } else if (verbalTest.informacion == 18) {
        updatedTipicaVerbal.informacion = 10;
      } else if (verbalTest.informacion == 19) {
        updatedTipicaVerbal.informacion = 11;
      } else if (verbalTest.informacion == 20) {
        updatedTipicaVerbal.informacion = 12;
      } else if (verbalTest.informacion == 21 || verbalTest.informacion == 22) {
        updatedTipicaVerbal.informacion = 13;
      } else if (verbalTest.informacion == 23) {
        updatedTipicaVerbal.informacion = 14;
      } else if (verbalTest.informacion == 24) {
        updatedTipicaVerbal.informacion = 15;
      } else if (verbalTest.informacion == 25) {
        updatedTipicaVerbal.informacion = 16;
      } else if (verbalTest.informacion == 26) {
        updatedTipicaVerbal.informacion = 17;
      } else if (verbalTest.informacion == 27) {
        updatedTipicaVerbal.informacion = 18;
      } else if (verbalTest.informacion >= 28 && verbalTest.informacion <= 30) {
        updatedTipicaVerbal.informacion = 19;
      }

      //Vocabulario
      if (!verbalTest.vocabulario) {
        updatedTipicaVerbal.vocabulario = "";
      } else if (verbalTest.vocabulario >= 0 && verbalTest.vocabulario <= 19) {
        updatedTipicaVerbal.vocabulario = 1;
      } else if (verbalTest.vocabulario >= 20 && verbalTest.vocabulario <= 22) {
        updatedTipicaVerbal.vocabulario = 2;
      } else if (verbalTest.vocabulario == 23 || verbalTest.vocabulario == 24) {
        updatedTipicaVerbal.vocabulario = 3;
      } else if (verbalTest.vocabulario >= 25 && verbalTest.vocabulario <= 27) {
        updatedTipicaVerbal.vocabulario = 4;
      } else if (verbalTest.vocabulario == 28 || verbalTest.vocabulario == 29) {
        updatedTipicaVerbal.vocabulario = 5;
      } else if (verbalTest.vocabulario >= 30 && verbalTest.vocabulario <= 32) {
        updatedTipicaVerbal.vocabulario = 6;
      } else if (verbalTest.vocabulario == 33 || verbalTest.vocabulario == 34) {
        updatedTipicaVerbal.vocabulario = 7;
      } else if (verbalTest.vocabulario >= 35 && verbalTest.vocabulario <= 37) {
        updatedTipicaVerbal.vocabulario = 8;
      } else if (verbalTest.vocabulario == 38 || verbalTest.vocabulario == 39) {
        updatedTipicaVerbal.vocabulario = 9;
      } else if (verbalTest.vocabulario >= 40 && verbalTest.vocabulario <= 42) {
        updatedTipicaVerbal.vocabulario = 10;
      } else if (verbalTest.vocabulario == 43 || verbalTest.vocabulario == 44) {
        updatedTipicaVerbal.vocabulario = 11;
      } else if (verbalTest.vocabulario >= 45 && verbalTest.vocabulario <= 47) {
        updatedTipicaVerbal.vocabulario = 12;
      } else if (verbalTest.vocabulario >= 48 && verbalTest.vocabulario <= 50) {
        updatedTipicaVerbal.vocabulario = 13;
      } else if (verbalTest.vocabulario == 51 || verbalTest.vocabulario == 52) {
        updatedTipicaVerbal.vocabulario = 14;
      } else if (verbalTest.vocabulario >= 53 && verbalTest.vocabulario <= 55) {
        updatedTipicaVerbal.vocabulario = 15;
      } else if (verbalTest.vocabulario == 56 || verbalTest.vocabulario == 57) {
        updatedTipicaVerbal.vocabulario = 16;
      } else if (verbalTest.vocabulario >= 58 && verbalTest.vocabulario <= 60) {
        updatedTipicaVerbal.vocabulario = 17;
      } else if (verbalTest.vocabulario == 61 || verbalTest.vocabulario == 62) {
        updatedTipicaVerbal.vocabulario = 18;
      } else if (verbalTest.vocabulario == 63 || verbalTest.vocabulario == 64) {
        updatedTipicaVerbal.vocabulario = 19;
      }

      //Aritmética
      if (!verbalTest.aritmetica) {
        updatedTipicaVerbal.aritmetica = "";
      } else if (verbalTest.aritmetica >= 0 && verbalTest.aritmetica <= 7) {
        updatedTipicaVerbal.aritmetica = 1;
      } else if (verbalTest.aritmetica == 8) {
        updatedTipicaVerbal.aritmetica = 2;
      } else if (verbalTest.aritmetica == 9) {
        updatedTipicaVerbal.aritmetica = 3;
      } else if (verbalTest.aritmetica == 10) {
        updatedTipicaVerbal.aritmetica = 5;
      } else if (verbalTest.aritmetica == 11) {
        updatedTipicaVerbal.aritmetica = 7;
      } else if (verbalTest.aritmetica == 12) {
        updatedTipicaVerbal.aritmetica = 8;
      } else if (verbalTest.aritmetica == 13) {
        updatedTipicaVerbal.aritmetica = 9;
      } else if (verbalTest.aritmetica == 14) {
        updatedTipicaVerbal.aritmetica = 10;
      } else if (verbalTest.aritmetica == 15) {
        updatedTipicaVerbal.aritmetica = 11;
      } else if (verbalTest.aritmetica == 16) {
        updatedTipicaVerbal.aritmetica = 13;
      } else if (verbalTest.aritmetica == 17) {
        updatedTipicaVerbal.aritmetica = 14;
      } else if (verbalTest.aritmetica == 18) {
        updatedTipicaVerbal.aritmetica = 15;
      }

      //Semejanzas
      if (!verbalTest.semejanzas) {
        updatedTipicaVerbal.semejanzas = "";
      } else if (verbalTest.semejanzas >= 0 && verbalTest.semejanzas <= 6) {
        updatedTipicaVerbal.semejanzas = 1;
      } else if (verbalTest.semejanzas == 7) {
        updatedTipicaVerbal.semejanzas = 2;
      } else if (verbalTest.semejanzas == 8) {
        updatedTipicaVerbal.semejanzas = 3;
      } else if (verbalTest.semejanzas == 9) {
        updatedTipicaVerbal.semejanzas = 4;
      } else if (verbalTest.semejanzas == 10) {
        updatedTipicaVerbal.semejanzas = 5;
      } else if (verbalTest.semejanzas == 11 || verbalTest.semejanzas == 12) {
        updatedTipicaVerbal.semejanzas = 6;
      } else if (verbalTest.semejanzas == 13) {
        updatedTipicaVerbal.semejanzas = 7;
      } else if (verbalTest.semejanzas == 14) {
        updatedTipicaVerbal.semejanzas = 8;
      } else if (verbalTest.semejanzas == 15) {
        updatedTipicaVerbal.semejanzas = 9;
      } else if (verbalTest.semejanzas == 16) {
        updatedTipicaVerbal.semejanzas = 10;
      } else if (verbalTest.semejanzas == 17) {
        updatedTipicaVerbal.semejanzas = 11;
      } else if (verbalTest.semejanzas == 18 || verbalTest.semejanzas == 19) {
        updatedTipicaVerbal.semejanzas = 12;
      } else if (verbalTest.semejanzas == 20) {
        updatedTipicaVerbal.semejanzas = 13;
      } else if (verbalTest.semejanzas == 21) {
        updatedTipicaVerbal.semejanzas = 14;
      } else if (verbalTest.semejanzas == 22) {
        updatedTipicaVerbal.semejanzas = 15;
      } else if (verbalTest.semejanzas == 23) {
        updatedTipicaVerbal.semejanzas = 16;
      } else if (verbalTest.semejanzas == 24) {
        updatedTipicaVerbal.semejanzas = 17;
      } else if (verbalTest.semejanzas == 25 || verbalTest.semejanzas == 26) {
        updatedTipicaVerbal.semejanzas = 18;
      } else if (verbalTest.semejanzas >= 27 && verbalTest.semejanzas <= 30) {
        updatedTipicaVerbal.semejanzas = 19;
      }

      //Comprension
      if (!verbalTest.comprension) {
        updatedTipicaVerbal.comprension = "";
      } else if (verbalTest.comprension >= 0 && verbalTest.comprension <= 8) {
        updatedTipicaVerbal.comprension = 1;
      } else if (verbalTest.comprension == 9) {
        updatedTipicaVerbal.comprension = 2;
      } else if (verbalTest.comprension == 10 || verbalTest.comprension == 11) {
        updatedTipicaVerbal.comprension = 3;
      } else if (verbalTest.comprension == 12) {
        updatedTipicaVerbal.comprension = 4;
      } else if (verbalTest.comprension == 13) {
        updatedTipicaVerbal.comprension = 5;
      } else if (verbalTest.comprension == 14) {
        updatedTipicaVerbal.comprension = 6;
      } else if (verbalTest.comprension == 15 || verbalTest.comprension == 16) {
        updatedTipicaVerbal.comprension = 7;
      } else if (verbalTest.comprension == 17) {
        updatedTipicaVerbal.comprension = 8;
      } else if (verbalTest.comprension == 18) {
        updatedTipicaVerbal.comprension = 9;
      } else if (verbalTest.comprension == 19) {
        updatedTipicaVerbal.comprension = 10;
      } else if (verbalTest.comprension == 20 || verbalTest.comprension == 21) {
        updatedTipicaVerbal.comprension = 11;
      } else if (verbalTest.comprension == 22) {
        updatedTipicaVerbal.comprension = 12;
      } else if (verbalTest.comprension == 23) {
        updatedTipicaVerbal.comprension = 13;
      } else if (verbalTest.comprension == 24) {
        updatedTipicaVerbal.comprension = 14;
      } else if (verbalTest.comprension == 25 || verbalTest.comprension == 26) {
        updatedTipicaVerbal.comprension = 15;
      } else if (verbalTest.comprension == 27) {
        updatedTipicaVerbal.comprension = 16;
      }else if (verbalTest.comprension == 28) {
        updatedTipicaVerbal.comprension = 17;
      }else if (verbalTest.comprension == 29) {
        updatedTipicaVerbal.comprension = 18;
      } else if (verbalTest.comprension >= 30 && verbalTest.comprension <= 34) {
        updatedTipicaVerbal.comprension = 19;
      }

      //Dígitos
      if (!verbalTest.digitos) {
        updatedTipicaVerbal.digitos = "";
      } else if (verbalTest.digitos >= 0 && verbalTest.digitos <= 2) {
        updatedTipicaVerbal.digitos = 1;
      } else if (verbalTest.digitos == 3) {
        updatedTipicaVerbal.digitos = 2;
      } else if (verbalTest.digitos == 4) {
        updatedTipicaVerbal.digitos = 3;
      } else if (verbalTest.digitos == 5 || verbalTest.digitos == 6) {
        updatedTipicaVerbal.digitos = 4;
      } else if (verbalTest.digitos == 7) {
        updatedTipicaVerbal.digitos = 5;
      } else if (verbalTest.digitos == 8) {
        updatedTipicaVerbal.digitos = 6;
      } else if (verbalTest.digitos == 9) {
        updatedTipicaVerbal.digitos = 7;
      } else if (verbalTest.digitos == 10) {
        updatedTipicaVerbal.digitos = 8;
      } else if (verbalTest.digitos == 11 || verbalTest.digitos == 12) {
        updatedTipicaVerbal.digitos = 9;
      } else if (verbalTest.digitos == 13) {
        updatedTipicaVerbal.digitos = 10;
      } else if (verbalTest.digitos == 14) {
        updatedTipicaVerbal.digitos = 11;
      } else if (verbalTest.digitos == 15) {
        updatedTipicaVerbal.digitos = 12;
      } else if (verbalTest.digitos == 16) {
        updatedTipicaVerbal.digitos = 13;
      } else if (verbalTest.digitos == 17) {
        updatedTipicaVerbal.digitos = 14;
      } else if (verbalTest.digitos == 18 || verbalTest.digitos == 19) {
        updatedTipicaVerbal.digitos = 15;
      } else if (verbalTest.digitos == 20) {
        updatedTipicaVerbal.digitos = 16;
      } else if (verbalTest.digitos == 21) {
        updatedTipicaVerbal.digitos = 17;
      } else if (verbalTest.digitos == 22) {
        updatedTipicaVerbal.digitos = 18;
      } else if (verbalTest.digitos >= 23 && verbalTest.digitos <= 28) {
        updatedTipicaVerbal.digitos = 19;
      }

      //////////////////////// Prueba Manual//////////////////////////

      //Figuras Incompletas
      if (!manualTest.figurasI) {
        updatedTipicaManual.figurasI = "";
      } else if (manualTest.figurasI >= 0 && manualTest.figurasI <= 11) {
        updatedTipicaManual.figurasI = 1;
      } else if (manualTest.figurasI == 12 || manualTest.figurasI == 13) {
        updatedTipicaManual.figurasI = 2;
      } else if (manualTest.figurasI == 14) {
        updatedTipicaManual.figurasI = 3;
      } else if (manualTest.figurasI == 15) {
        updatedTipicaManual.figurasI = 4;
      } else if (manualTest.figurasI == 16) {
        updatedTipicaManual.figurasI = 5;
      } else if (manualTest.figurasI == 17) {
        updatedTipicaManual.figurasI = 6;
      } else if (manualTest.figurasI == 18) {
        updatedTipicaManual.figurasI = 7;
      } else if (manualTest.figurasI == 19) {
        updatedTipicaManual.figurasI = 8;
      } else if (manualTest.figurasI == 20) {
        updatedTipicaManual.figurasI = 10;
      } else if (manualTest.figurasI == 21) {
        updatedTipicaManual.figurasI = 11;
      } else if (manualTest.figurasI == 22) {
        updatedTipicaManual.figurasI = 12;
      } else if (manualTest.figurasI == 23) {
        updatedTipicaManual.figurasI = 13;
      } else if (manualTest.figurasI == 24) {
        updatedTipicaManual.figurasI = 14;
      } else if (manualTest.figurasI == 25) {
        updatedTipicaManual.figurasI = 15;
      } else if (manualTest.figurasI == 26) {
        updatedTipicaManual.figurasI = 16;
      } 

      //Historietas
      if (!manualTest.historietas) {
        updatedTipicaManual.historietas = "";
      } else if (manualTest.historietas >= 0 && manualTest.historietas <= 10) {
        updatedTipicaManual.historietas = 1;
      } else if (manualTest.historietas == 11 || manualTest.historietas == 12) {
        updatedTipicaManual.historietas = 2;
      } else if (manualTest.historietas == 13 || manualTest.historietas == 14) {
        updatedTipicaManual.historietas = 3;
      } else if (manualTest.historietas == 15 || manualTest.historietas == 16) {
        updatedTipicaManual.historietas = 4;
      } else if (manualTest.historietas >= 17 && manualTest.historietas <= 19) {
        updatedTipicaManual.historietas = 5;
      } else if (manualTest.historietas == 20 || manualTest.historietas == 21) {
        updatedTipicaManual.historietas = 6;
      } else if (manualTest.historietas == 22 || manualTest.historietas == 23) {
        updatedTipicaManual.historietas = 7;
      } else if (manualTest.historietas >= 24 && manualTest.historietas <= 26) {
        updatedTipicaManual.historietas = 8;
      } else if (manualTest.historietas == 27 || manualTest.historietas == 28) {
        updatedTipicaManual.historietas = 9;
      } else if (manualTest.historietas == 29 || manualTest.historietas == 30) {
        updatedTipicaManual.historietas = 10;
      } else if (manualTest.historietas >= 31 && manualTest.historietas <= 33) {
        updatedTipicaManual.historietas = 11;
      } else if (manualTest.historietas == 34 || manualTest.historietas == 35) {
        updatedTipicaManual.historietas = 12;
      } else if (manualTest.historietas == 36 || manualTest.historietas == 37) {
        updatedTipicaManual.historietas = 13;
      } else if (manualTest.historietas >= 38 && manualTest.historietas <= 40) {
        updatedTipicaManual.historietas = 14;
      } else if (manualTest.historietas == 41 || manualTest.historietas == 42) {
        updatedTipicaManual.historietas = 15;
      } else if (manualTest.historietas >= 43 && manualTest.historietas <= 45) {
        updatedTipicaManual.historietas = 16;
      } else if (manualTest.historietas == 46 || manualTest.historietas == 47) {
        updatedTipicaManual.historietas = 17;
      } else if (manualTest.historietas == 48) {
        updatedTipicaManual.historietas = 18;
      } 


      //Cubos
      if (!manualTest.cubos) {
        updatedTipicaManual.cubos = "";
      }else if (manualTest.cubos >= 0 && manualTest.cubos <= 14) {
        updatedTipicaManual.cubos = 1;
      } else if (manualTest.cubos >= 15 && manualTest.cubos <= 17) {
        updatedTipicaManual.cubos = 2;
      } else if (manualTest.cubos >= 18 && manualTest.cubos <= 21) {
        updatedTipicaManual.cubos = 3;
      } else if (manualTest.cubos >= 22 && manualTest.cubos <= 24) {
        updatedTipicaManual.cubos = 4;
      } else if (manualTest.cubos >= 25 && manualTest.cubos <= 27) {
        updatedTipicaManual.cubos = 5;
      } else if (manualTest.cubos >= 28 && manualTest.cubos <= 31) {
        updatedTipicaManual.cubos = 6;
      } else if (manualTest.cubos >= 32 && manualTest.cubos <= 34) {
        updatedTipicaManual.cubos = 7;
      } else if (manualTest.cubos >= 35 && manualTest.cubos <= 38) {
        updatedTipicaManual.cubos = 8;
      } else if (manualTest.cubos >= 39 && manualTest.cubos <= 41) {
        updatedTipicaManual.cubos = 9;
      } else if (manualTest.cubos >= 42 && manualTest.cubos <= 45) {
        updatedTipicaManual.cubos = 10;
      } else if (manualTest.cubos >= 46 && manualTest.cubos <= 48) {
        updatedTipicaManual.cubos = 11;
      } else if (manualTest.cubos >= 49 && manualTest.cubos <= 52) {
        updatedTipicaManual.cubos = 12;
      } else if (manualTest.cubos >= 53 && manualTest.cubos <= 55) {
        updatedTipicaManual.cubos = 13;
      } else if (manualTest.cubos >= 56 && manualTest.cubos <= 58) {
        updatedTipicaManual.cubos = 14;
      } else if (manualTest.cubos >= 59 && manualTest.cubos <= 62) {
        updatedTipicaManual.cubos = 15;
      } 

      //Rompecabezas
      if (!manualTest.rompeCabezas) {
        updatedTipicaManual.rompeCabezas = "";
      } else if (manualTest.rompeCabezas >= 0 && manualTest.rompeCabezas <= 13) {
        updatedTipicaManual.rompeCabezas = 1;
      } else if (manualTest.rompeCabezas == 14 || manualTest.rompeCabezas == 15) {
        updatedTipicaManual.rompeCabezas = 2;
      } else if (manualTest.rompeCabezas == 16) {
        updatedTipicaManual.rompeCabezas = 3;
      } else if (manualTest.rompeCabezas == 17) {
        updatedTipicaManual.rompeCabezas = 4;
      } else if (manualTest.rompeCabezas == 18 || manualTest.rompeCabezas == 19) {
        updatedTipicaManual.rompeCabezas = 5;
      } else if (manualTest.rompeCabezas == 20) {
        updatedTipicaManual.rompeCabezas = 6;
      } else if (manualTest.rompeCabezas == 21) {
        updatedTipicaManual.rompeCabezas = 7;
      } else if (manualTest.rompeCabezas == 22){
        updatedTipicaManual.rompeCabezas = 8;
      } else if (manualTest.rompeCabezas == 23 || manualTest.rompeCabezas == 24){
        updatedTipicaManual.rompeCabezas = 9;
      } else if (manualTest.rompeCabezas == 25) {
        updatedTipicaManual.rompeCabezas = 10;
      } else if (manualTest.rompeCabezas == 26) {
        updatedTipicaManual.rompeCabezas = 11;
      } else if (manualTest.rompeCabezas == 27 || manualTest.rompeCabezas == 28) {
        updatedTipicaManual.rompeCabezas = 12;
      } else if (manualTest.rompeCabezas == 29) {
        updatedTipicaManual.rompeCabezas = 13;
      } else if (manualTest.rompeCabezas == 30) {
        updatedTipicaManual.rompeCabezas = 14;
      } else if (manualTest.rompeCabezas == 31 || manualTest.rompeCabezas == 32) {
        updatedTipicaManual.rompeCabezas = 15;
      } else if (manualTest.rompeCabezas == 33) {
        updatedTipicaManual.rompeCabezas = 16;
      }  

      //Claves
      if (!manualTest.claves) {
        updatedTipicaManual.claves = "";
      } else if (manualTest.claves >= 0 && manualTest.claves <= 30) {
        updatedTipicaManual.claves = 1;
      } else if (manualTest.claves >= 31 && manualTest.claves <= 34) {
        updatedTipicaManual.claves = 2;
      } else if (manualTest.claves >= 35 && manualTest.claves <= 37) {
        updatedTipicaManual.claves = 3;
      } else if (manualTest.claves >= 38 && manualTest.claves <= 40) {
        updatedTipicaManual.claves = 4;
      } else if (manualTest.claves >= 41 && manualTest.claves <= 43) {
        updatedTipicaManual.claves = 5;
      } else if (manualTest.claves >= 44 && manualTest.claves <= 46) {
        updatedTipicaManual.claves = 6;
      } else if (manualTest.claves >= 47 && manualTest.claves <= 50) {
        updatedTipicaManual.claves = 7;
      } else if (manualTest.claves >= 51 && manualTest.claves <= 53) {
        updatedTipicaManual.claves = 8;
      } else if (manualTest.claves >= 54 && manualTest.claves <= 56) {
        updatedTipicaManual.claves = 9;
      } else if (manualTest.claves >= 57 && manualTest.claves <= 59) {
        updatedTipicaManual.claves = 10;
      } else if (manualTest.claves >= 60 && manualTest.claves <= 62) {
        updatedTipicaManual.claves = 11;
      } else if (manualTest.claves >= 63 && manualTest.claves <= 65) {
        updatedTipicaManual.claves = 12;
      } else if (manualTest.claves >= 66 && manualTest.claves <= 69) {
        updatedTipicaManual.claves = 13;
      } else if (manualTest.claves >= 70 && manualTest.claves <= 72) {
        updatedTipicaManual.claves = 14;
      } else if (manualTest.claves >= 73 && manualTest.claves <= 75) {
        updatedTipicaManual.claves = 15;
      } else if (manualTest.claves >= 76 && manualTest.claves <= 78) {
        updatedTipicaManual.claves = 16;
      } else if (manualTest.claves >= 79 && manualTest.claves <= 81) {
        updatedTipicaManual.claves = 17;
      } else if (manualTest.claves >= 82 && manualTest.claves <= 84) {
        updatedTipicaManual.claves = 18;
      } else if (manualTest.claves >= 85 && manualTest.claves <= 93) {
        updatedTipicaManual.claves = 19;
      }

      //Laberintos
      if (!manualTest.laberintos) {
        updatedTipicaManual.laberintos = "";
      } else if (manualTest.laberintos >= 0 && manualTest.laberintos <= 11) {
        updatedTipicaManual.laberintos = 1;
      } else if (manualTest.laberintos == 12) {
        updatedTipicaManual.laberintos = 2;
      } else if (manualTest.laberintos == 13 || manualTest.laberintos == 14) {
        updatedTipicaManual.laberintos = 3;
      } else if (manualTest.laberintos == 15) {
        updatedTipicaManual.laberintos = 4;
      } else if (manualTest.laberintos == 16) {
        updatedTipicaManual.laberintos = 5;
      } else if (manualTest.laberintos == 17 || manualTest.laberintos == 18) {
        updatedTipicaManual.laberintos = 6;
      } else if (manualTest.laberintos == 19) {
        updatedTipicaManual.laberintos = 7;
      } else if (manualTest.laberintos == 20) {
        updatedTipicaManual.laberintos = 8;
      } else if (manualTest.laberintos == 21 || manualTest.laberintos == 22) {
        updatedTipicaManual.laberintos = 9;
      } else if (manualTest.laberintos == 23) {
        updatedTipicaManual.laberintos = 10;
      } else if (manualTest.laberintos == 24) {
        updatedTipicaManual.laberintos = 11;
      } else if (manualTest.laberintos == 25 || manualTest.laberintos == 26) {
        updatedTipicaManual.laberintos = 12;
      } else if (manualTest.laberintos == 27) {
        updatedTipicaManual.laberintos = 13;
      } else if (manualTest.laberintos == 28) {
        updatedTipicaManual.laberintos = 14;
      } else if (manualTest.laberintos == 29) {
        updatedTipicaManual.laberintos = 15;
      } else if (manualTest.laberintos == 30) {
        updatedTipicaManual.laberintos = 16;
      }
    } else if (age.years === 14) {

      //Información
      if (!verbalTest.informacion) {
        updatedTipicaVerbal.informacion = "";
      } else if (verbalTest.informacion >= 0 && verbalTest.informacion <= 8) {
        updatedTipicaVerbal.informacion = 1;
      } else if (verbalTest.informacion == 9) {
        updatedTipicaVerbal.informacion = 2;
      } else if (verbalTest.informacion == 10) {
        updatedTipicaVerbal.informacion = 3;
      } else if (verbalTest.informacion == 11 || verbalTest.informacion == 12) {
        updatedTipicaVerbal.informacion = 4;
      } else if (verbalTest.informacion == 13) {
        updatedTipicaVerbal.informacion = 5;
      } else if (verbalTest.informacion == 14) {
        updatedTipicaVerbal.informacion = 6;
      } else if (verbalTest.informacion == 15) {
        updatedTipicaVerbal.informacion = 7;
      } else if (verbalTest.informacion == 16) {
        updatedTipicaVerbal.informacion = 8;
      } else if (verbalTest.informacion == 17) {
        updatedTipicaVerbal.informacion = 9;
      } else if (verbalTest.informacion == 18) {
        updatedTipicaVerbal.informacion = 10;
      } else if (verbalTest.informacion == 19) {
        updatedTipicaVerbal.informacion = 11;
      } else if (verbalTest.informacion == 20 || verbalTest.informacion == 21) {
        updatedTipicaVerbal.informacion = 12;
      } else if (verbalTest.informacion == 22) {
        updatedTipicaVerbal.informacion = 13;
      } else if (verbalTest.informacion == 23) {
        updatedTipicaVerbal.informacion = 14;
      } else if (verbalTest.informacion == 24) {
        updatedTipicaVerbal.informacion = 15;
      } else if (verbalTest.informacion == 25) {
        updatedTipicaVerbal.informacion = 16;
      } else if (verbalTest.informacion == 26) {
        updatedTipicaVerbal.informacion = 17;
      } else if (verbalTest.informacion == 27) {
        updatedTipicaVerbal.informacion = 18;
      } else if (verbalTest.informacion >= 28 && verbalTest.informacion <= 30) {
        updatedTipicaVerbal.informacion = 19;
      }

      //Vocabulario
      if (!verbalTest.vocabulario) {
        updatedTipicaVerbal.vocabulario = "";
      } else if (verbalTest.vocabulario >= 0 && verbalTest.vocabulario <= 22) {
        updatedTipicaVerbal.vocabulario = 1;
      } else if (verbalTest.vocabulario == 23 || verbalTest.vocabulario == 24) {
        updatedTipicaVerbal.vocabulario = 2;
      } else if (verbalTest.vocabulario >= 25 && verbalTest.vocabulario <= 27) {
        updatedTipicaVerbal.vocabulario = 3;
      } else if (verbalTest.vocabulario == 28 || verbalTest.vocabulario == 29) {
        updatedTipicaVerbal.vocabulario = 4;
      } else if (verbalTest.vocabulario == 30 || verbalTest.vocabulario == 31) {
        updatedTipicaVerbal.vocabulario = 5;
      } else if (verbalTest.vocabulario >= 32 && verbalTest.vocabulario <= 34) {
        updatedTipicaVerbal.vocabulario = 6;
      } else if (verbalTest.vocabulario == 35 || verbalTest.vocabulario == 36) {
        updatedTipicaVerbal.vocabulario = 7;
      } else if (verbalTest.vocabulario == 37 || verbalTest.vocabulario == 38) {
        updatedTipicaVerbal.vocabulario = 8;
      } else if (verbalTest.vocabulario >= 39 && verbalTest.vocabulario <= 41) {
        updatedTipicaVerbal.vocabulario = 9;
      } else if (verbalTest.vocabulario == 42 || verbalTest.vocabulario == 43) {
        updatedTipicaVerbal.vocabulario = 10;
      } else if (verbalTest.vocabulario >= 44 && verbalTest.vocabulario <= 46) {
        updatedTipicaVerbal.vocabulario = 11;
      } else if (verbalTest.vocabulario == 47 || verbalTest.vocabulario == 48) {
        updatedTipicaVerbal.vocabulario = 12;
      } else if (verbalTest.vocabulario == 49 || verbalTest.vocabulario == 50) {
        updatedTipicaVerbal.vocabulario = 13;
      } else if (verbalTest.vocabulario >= 51 && verbalTest.vocabulario <= 53) {
        updatedTipicaVerbal.vocabulario = 14;
      } else if (verbalTest.vocabulario == 54 || verbalTest.vocabulario == 55) {
        updatedTipicaVerbal.vocabulario = 15;
      } else if (verbalTest.vocabulario == 56 || verbalTest.vocabulario == 57) {
        updatedTipicaVerbal.vocabulario = 16;
      } else if (verbalTest.vocabulario >= 58 && verbalTest.vocabulario <= 60) {
        updatedTipicaVerbal.vocabulario = 17;
      } else if (verbalTest.vocabulario == 61 || verbalTest.vocabulario == 62) {
        updatedTipicaVerbal.vocabulario = 18;
      } else if (verbalTest.vocabulario == 63 || verbalTest.vocabulario == 64) {
        updatedTipicaVerbal.vocabulario = 19;
      }

      //Aritmética
      if (!verbalTest.aritmetica) {
        updatedTipicaVerbal.aritmetica = "";
      } else if (verbalTest.aritmetica >= 0 && verbalTest.aritmetica <= 7) {
        updatedTipicaVerbal.aritmetica = 1;
      } else if (verbalTest.aritmetica == 8) {
        updatedTipicaVerbal.aritmetica = 2;
      } else if (verbalTest.aritmetica == 9) {
        updatedTipicaVerbal.aritmetica = 3;
      } else if (verbalTest.aritmetica == 10) {
        updatedTipicaVerbal.aritmetica = 5;
      } else if (verbalTest.aritmetica == 11) {
        updatedTipicaVerbal.aritmetica = 6;
      } else if (verbalTest.aritmetica == 12) {
        updatedTipicaVerbal.aritmetica = 8;
      } else if (verbalTest.aritmetica == 13) {
        updatedTipicaVerbal.aritmetica = 9;
      } else if (verbalTest.aritmetica == 14) {
        updatedTipicaVerbal.aritmetica = 10;
      } else if (verbalTest.aritmetica == 15) {
        updatedTipicaVerbal.aritmetica = 11;
      } else if (verbalTest.aritmetica == 16) {
        updatedTipicaVerbal.aritmetica = 13;
      } else if (verbalTest.aritmetica == 17) {
        updatedTipicaVerbal.aritmetica = 14;
      } else if (verbalTest.aritmetica == 18) {
        updatedTipicaVerbal.aritmetica = 15;
      }

      //Semejanzas
      if (!verbalTest.semejanzas) {
        updatedTipicaVerbal.semejanzas = "";
      } else if (verbalTest.semejanzas >= 0 && verbalTest.semejanzas <= 7) {
        updatedTipicaVerbal.semejanzas = 1;
      } else if (verbalTest.semejanzas == 8) {
        updatedTipicaVerbal.semejanzas = 2;
      } else if (verbalTest.semejanzas == 9) {
        updatedTipicaVerbal.semejanzas = 3;
      } else if (verbalTest.semejanzas == 10) {
        updatedTipicaVerbal.semejanzas = 4;
      } else if (verbalTest.semejanzas == 11) {
        updatedTipicaVerbal.semejanzas = 5;
      } else if (verbalTest.semejanzas == 12) {
        updatedTipicaVerbal.semejanzas = 6;
      } else if (verbalTest.semejanzas == 13 || verbalTest.semejanzas == 14) {
        updatedTipicaVerbal.semejanzas = 7;
      } else if (verbalTest.semejanzas == 15) {
        updatedTipicaVerbal.semejanzas = 8;
      } else if (verbalTest.semejanzas == 16) {
        updatedTipicaVerbal.semejanzas = 9;
      } else if (verbalTest.semejanzas == 17) {
        updatedTipicaVerbal.semejanzas = 10;
      } else if (verbalTest.semejanzas == 18) {
        updatedTipicaVerbal.semejanzas = 11;
      } else if (verbalTest.semejanzas == 19) {
        updatedTipicaVerbal.semejanzas = 12;
      } else if (verbalTest.semejanzas == 20 || verbalTest.semejanzas == 21) {
        updatedTipicaVerbal.semejanzas = 13;
      } else if (verbalTest.semejanzas == 22) {
        updatedTipicaVerbal.semejanzas = 14;
      } else if (verbalTest.semejanzas == 23) {
        updatedTipicaVerbal.semejanzas = 15;
      } else if (verbalTest.semejanzas == 24) {
        updatedTipicaVerbal.semejanzas = 16;
      } else if (verbalTest.semejanzas == 25) {
        updatedTipicaVerbal.semejanzas = 17;
      } else if (verbalTest.semejanzas == 26 || verbalTest.semejanzas == 27) {
        updatedTipicaVerbal.semejanzas = 18;
      } else if (verbalTest.semejanzas >= 28 && verbalTest.semejanzas <= 30) {
        updatedTipicaVerbal.semejanzas = 19;
      }

      //Comprension
      if (!verbalTest.comprension) {
        updatedTipicaVerbal.comprension = "";
      } else if (verbalTest.comprension >= 0 && verbalTest.comprension <= 10) {
        updatedTipicaVerbal.comprension = 1;
      } else if (verbalTest.comprension == 11) {
        updatedTipicaVerbal.comprension = 2;
      } else if (verbalTest.comprension == 12) {
        updatedTipicaVerbal.comprension = 3;
      } else if (verbalTest.comprension == 13) {
        updatedTipicaVerbal.comprension = 4;
      } else if (verbalTest.comprension == 14) {
        updatedTipicaVerbal.comprension = 5;
      } else if (verbalTest.comprension == 15) {
        updatedTipicaVerbal.comprension = 6;
      } else if (verbalTest.comprension == 16) {
        updatedTipicaVerbal.comprension = 7;
      } else if (verbalTest.comprension == 17) {
        updatedTipicaVerbal.comprension = 8;
      } else if (verbalTest.comprension == 18) {
        updatedTipicaVerbal.comprension = 9;
      } else if (verbalTest.comprension == 19) {
        updatedTipicaVerbal.comprension = 10;
      } else if (verbalTest.comprension == 20 || verbalTest.comprension == 21) {
        updatedTipicaVerbal.comprension = 11;
      } else if (verbalTest.comprension == 22) {
        updatedTipicaVerbal.comprension = 12;
      } else if (verbalTest.comprension == 23) {
        updatedTipicaVerbal.comprension = 13;
      } else if (verbalTest.comprension == 24) {
        updatedTipicaVerbal.comprension = 14;
      } else if (verbalTest.comprension == 25 || verbalTest.comprension == 26) {
        updatedTipicaVerbal.comprension = 15;
      } else if (verbalTest.comprension == 27) {
        updatedTipicaVerbal.comprension = 16;
      }else if (verbalTest.comprension == 28) {
        updatedTipicaVerbal.comprension = 17;
      }else if (verbalTest.comprension == 29) {
        updatedTipicaVerbal.comprension = 18;
      } else if (verbalTest.comprension >= 30 && verbalTest.comprension <= 34) {
        updatedTipicaVerbal.comprension = 19;
      }

      //Dígitos
      if (!verbalTest.digitos) {
        updatedTipicaVerbal.digitos = "";
      } else if (verbalTest.digitos >= 0 && verbalTest.digitos <= 2) {
        updatedTipicaVerbal.digitos = 1;
      } else if (verbalTest.digitos == 3) {
        updatedTipicaVerbal.digitos = 2;
      } else if (verbalTest.digitos == 4) {
        updatedTipicaVerbal.digitos = 3;
      } else if (verbalTest.digitos == 5 || verbalTest.digitos == 6) {
        updatedTipicaVerbal.digitos = 4;
      } else if (verbalTest.digitos == 7) {
        updatedTipicaVerbal.digitos = 5;
      } else if (verbalTest.digitos == 8) {
        updatedTipicaVerbal.digitos = 6;
      } else if (verbalTest.digitos == 9) {
        updatedTipicaVerbal.digitos = 7;
      } else if (verbalTest.digitos == 10) {
        updatedTipicaVerbal.digitos = 8;
      } else if (verbalTest.digitos == 11 || verbalTest.digitos == 12) {
        updatedTipicaVerbal.digitos = 9;
      } else if (verbalTest.digitos == 13) {
        updatedTipicaVerbal.digitos = 10;
      } else if (verbalTest.digitos == 14) {
        updatedTipicaVerbal.digitos = 11;
      } else if (verbalTest.digitos == 15) {
        updatedTipicaVerbal.digitos = 12;
      } else if (verbalTest.digitos == 16) {
        updatedTipicaVerbal.digitos = 13;
      } else if (verbalTest.digitos == 17) {
        updatedTipicaVerbal.digitos = 14;
      } else if (verbalTest.digitos == 18 || verbalTest.digitos == 19) {
        updatedTipicaVerbal.digitos = 15;
      } else if (verbalTest.digitos == 20) {
        updatedTipicaVerbal.digitos = 16;
      } else if (verbalTest.digitos == 21) {
        updatedTipicaVerbal.digitos = 17;
      } else if (verbalTest.digitos == 22) {
        updatedTipicaVerbal.digitos = 18;
      } else if (verbalTest.digitos >= 23 && verbalTest.digitos <= 28) {
        updatedTipicaVerbal.digitos = 19;
      }

      //////////////////////// Prueba Manual//////////////////////////

      //Figuras Incompletas
      if (!manualTest.figurasI) {
        updatedTipicaManual.figurasI = "";
      } else if (manualTest.figurasI >= 0 && manualTest.figurasI <= 11) {
        updatedTipicaManual.figurasI = 1;
      } else if (manualTest.figurasI == 12 || manualTest.figurasI == 13) {
        updatedTipicaManual.figurasI = 2;
      } else if (manualTest.figurasI == 14) {
        updatedTipicaManual.figurasI = 3;
      } else if (manualTest.figurasI == 15) {
        updatedTipicaManual.figurasI = 4;
      } else if (manualTest.figurasI == 16) {
        updatedTipicaManual.figurasI = 5;
      } else if (manualTest.figurasI == 17) {
        updatedTipicaManual.figurasI = 6;
      } else if (manualTest.figurasI == 18) {
        updatedTipicaManual.figurasI = 7;
      } else if (manualTest.figurasI == 19) {
        updatedTipicaManual.figurasI = 8;
      } else if (manualTest.figurasI == 20) {
        updatedTipicaManual.figurasI = 9;
      } else if (manualTest.figurasI == 21) {
        updatedTipicaManual.figurasI = 10;
      } else if (manualTest.figurasI == 22) {
        updatedTipicaManual.figurasI = 12;
      } else if (manualTest.figurasI == 23) {
        updatedTipicaManual.figurasI = 13;
      } else if (manualTest.figurasI == 24 || manualTest.figurasI == 25) {
        updatedTipicaManual.figurasI = 14;
      } else if (manualTest.figurasI == 26) {
        updatedTipicaManual.figurasI = 15;
      } 

      //Historietas
      if (!manualTest.historietas) {
        updatedTipicaManual.historietas = "";
      } else if (manualTest.historietas >= 0 && manualTest.historietas <= 10) {
        updatedTipicaManual.historietas = 1;
      } else if (manualTest.historietas == 11 || manualTest.historietas == 12) {
        updatedTipicaManual.historietas = 2;
      } else if (manualTest.historietas == 13 || manualTest.historietas == 14) {
        updatedTipicaManual.historietas = 3;
      } else if (manualTest.historietas == 15 || manualTest.historietas == 16) {
        updatedTipicaManual.historietas = 4;
      } else if (manualTest.historietas >= 17 && manualTest.historietas <= 19) {
        updatedTipicaManual.historietas = 5;
      } else if (manualTest.historietas == 20 || manualTest.historietas == 21) {
        updatedTipicaManual.historietas = 6;
      } else if (manualTest.historietas == 22 || manualTest.historietas == 23) {
        updatedTipicaManual.historietas = 7;
      } else if (manualTest.historietas >= 24 && manualTest.historietas <= 26) {
        updatedTipicaManual.historietas = 8;
      } else if (manualTest.historietas == 27 || manualTest.historietas == 28) {
        updatedTipicaManual.historietas = 9;
      } else if (manualTest.historietas == 29 || manualTest.historietas == 30) {
        updatedTipicaManual.historietas = 10;
      } else if (manualTest.historietas >= 31 && manualTest.historietas <= 33) {
        updatedTipicaManual.historietas = 11;
      } else if (manualTest.historietas == 34 || manualTest.historietas == 35) {
        updatedTipicaManual.historietas = 12;
      } else if (manualTest.historietas == 36 || manualTest.historietas == 37) {
        updatedTipicaManual.historietas = 13;
      } else if (manualTest.historietas >= 38 && manualTest.historietas <= 40) {
        updatedTipicaManual.historietas = 14;
      } else if (manualTest.historietas == 41 || manualTest.historietas == 42) {
        updatedTipicaManual.historietas = 15;
      } else if (manualTest.historietas >= 43 && manualTest.historietas <= 45) {
        updatedTipicaManual.historietas = 16;
      } else if (manualTest.historietas == 46 || manualTest.historietas == 47) {
        updatedTipicaManual.historietas = 17;
      } else if (manualTest.historietas == 48) {
        updatedTipicaManual.historietas = 18;
      } 


      //Cubos
      if (!manualTest.cubos) {
        updatedTipicaManual.cubos = "";
      }else if (manualTest.cubos >= 0 && manualTest.cubos <= 14) {
        updatedTipicaManual.cubos = 1;
      } else if (manualTest.cubos >= 15 && manualTest.cubos <= 17) {
        updatedTipicaManual.cubos = 2;
      } else if (manualTest.cubos >= 18 && manualTest.cubos <= 21) {
        updatedTipicaManual.cubos = 3;
      } else if (manualTest.cubos >= 22 && manualTest.cubos <= 24) {
        updatedTipicaManual.cubos = 4;
      } else if (manualTest.cubos >= 25 && manualTest.cubos <= 28) {
        updatedTipicaManual.cubos = 5;
      } else if (manualTest.cubos >= 29 && manualTest.cubos <= 31) {
        updatedTipicaManual.cubos = 6;
      } else if (manualTest.cubos >= 32 && manualTest.cubos <= 34) {
        updatedTipicaManual.cubos = 7;
      } else if (manualTest.cubos >= 35 && manualTest.cubos <= 38) {
        updatedTipicaManual.cubos = 8;
      } else if (manualTest.cubos >= 39 && manualTest.cubos <= 41) {
        updatedTipicaManual.cubos = 9;
      } else if (manualTest.cubos >= 42 && manualTest.cubos <= 45) {
        updatedTipicaManual.cubos = 10;
      } else if (manualTest.cubos >= 46 && manualTest.cubos <= 48) {
        updatedTipicaManual.cubos = 11;
      } else if (manualTest.cubos >= 49 && manualTest.cubos <= 52) {
        updatedTipicaManual.cubos = 12;
      } else if (manualTest.cubos >= 53 && manualTest.cubos <= 55) {
        updatedTipicaManual.cubos = 13;
      } else if (manualTest.cubos >= 56 && manualTest.cubos <= 58) {
        updatedTipicaManual.cubos = 14;
      } else if (manualTest.cubos >= 59 && manualTest.cubos <= 62) {
        updatedTipicaManual.cubos = 15;
      } 

      //Rompecabezas
      if (!manualTest.rompeCabezas) {
        updatedTipicaManual.rompeCabezas = "";
      } else if (manualTest.rompeCabezas >= 0 && manualTest.rompeCabezas <= 13) {
        updatedTipicaManual.rompeCabezas = 1;
      } else if (manualTest.rompeCabezas == 14 || manualTest.rompeCabezas == 15) {
        updatedTipicaManual.rompeCabezas = 2;
      } else if (manualTest.rompeCabezas == 16) {
        updatedTipicaManual.rompeCabezas = 3;
      } else if (manualTest.rompeCabezas == 17) {
        updatedTipicaManual.rompeCabezas = 4;
      } else if (manualTest.rompeCabezas == 18 || manualTest.rompeCabezas == 19) {
        updatedTipicaManual.rompeCabezas = 5;
      } else if (manualTest.rompeCabezas == 20) {
        updatedTipicaManual.rompeCabezas = 6;
      } else if (manualTest.rompeCabezas == 21) {
        updatedTipicaManual.rompeCabezas = 7;
      } else if (manualTest.rompeCabezas == 22){
        updatedTipicaManual.rompeCabezas = 8;
      } else if (manualTest.rompeCabezas == 23 || manualTest.rompeCabezas == 24){
        updatedTipicaManual.rompeCabezas = 9;
      } else if (manualTest.rompeCabezas == 25) {
        updatedTipicaManual.rompeCabezas = 10;
      } else if (manualTest.rompeCabezas == 26) {
        updatedTipicaManual.rompeCabezas = 11;
      } else if (manualTest.rompeCabezas == 27 || manualTest.rompeCabezas == 28) {
        updatedTipicaManual.rompeCabezas = 12;
      } else if (manualTest.rompeCabezas == 29 || manualTest.rompeCabezas == 30) {
        updatedTipicaManual.rompeCabezas = 13;
      }  else if (manualTest.rompeCabezas == 31 || manualTest.rompeCabezas == 32) {
        updatedTipicaManual.rompeCabezas = 14;
      } else if (manualTest.rompeCabezas == 33) {
        updatedTipicaManual.rompeCabezas = 15;
      }  

      //Claves
      if (!manualTest.claves) {
        updatedTipicaManual.claves = "";
      } else if (manualTest.claves >= 0 && manualTest.claves <= 30) {
        updatedTipicaManual.claves = 1;
      } else if (manualTest.claves >= 31 && manualTest.claves <= 34) {
        updatedTipicaManual.claves = 2;
      } else if (manualTest.claves >= 35 && manualTest.claves <= 37) {
        updatedTipicaManual.claves = 3;
      } else if (manualTest.claves >= 38 && manualTest.claves <= 40) {
        updatedTipicaManual.claves = 4;
      } else if (manualTest.claves >= 41 && manualTest.claves <= 43) {
        updatedTipicaManual.claves = 5;
      } else if (manualTest.claves >= 44 && manualTest.claves <= 47) {
        updatedTipicaManual.claves = 6;
      } else if (manualTest.claves >= 48 && manualTest.claves <= 50) {
        updatedTipicaManual.claves = 7;
      } else if (manualTest.claves >= 51 && manualTest.claves <= 53) {
        updatedTipicaManual.claves = 8;
      } else if (manualTest.claves >= 54 && manualTest.claves <= 57) {
        updatedTipicaManual.claves = 9;
      } else if (manualTest.claves >= 58 && manualTest.claves <= 61) {
        updatedTipicaManual.claves = 10;
      } else if (manualTest.claves >= 62 && manualTest.claves <= 66) {
        updatedTipicaManual.claves = 11;
      } else if (manualTest.claves >= 67 && manualTest.claves <= 70) {
        updatedTipicaManual.claves = 12;
      } else if (manualTest.claves >= 71 && manualTest.claves <= 74) {
        updatedTipicaManual.claves = 13;
      } else if (manualTest.claves >= 75 && manualTest.claves <= 79) {
        updatedTipicaManual.claves = 14;
      } else if (manualTest.claves >= 80 && manualTest.claves <= 83) {
        updatedTipicaManual.claves = 15;
      } else if (manualTest.claves >= 84 && manualTest.claves <= 87) {
        updatedTipicaManual.claves = 16;
      } else if (manualTest.claves >= 88 && manualTest.claves <= 92) {
        updatedTipicaManual.claves = 17;
      } else if (manualTest.claves == 93) {
        updatedTipicaManual.claves = 18;
      } 

      //Laberintos
      if (!manualTest.laberintos) {
        updatedTipicaManual.laberintos = "";
      } else if (manualTest.laberintos >= 0 && manualTest.laberintos <= 11) {
        updatedTipicaManual.laberintos = 1;
      } else if (manualTest.laberintos == 12 || manualTest.laberintos == 13) {
        updatedTipicaManual.laberintos = 2;
      } else if (manualTest.laberintos == 14) {
        updatedTipicaManual.laberintos = 3;
      } else if (manualTest.laberintos == 15) {
        updatedTipicaManual.laberintos = 4;
      } else if (manualTest.laberintos == 16) {
        updatedTipicaManual.laberintos = 5;
      } else if (manualTest.laberintos == 17 || manualTest.laberintos == 18) {
        updatedTipicaManual.laberintos = 6;
      } else if (manualTest.laberintos == 19) {
        updatedTipicaManual.laberintos = 7;
      } else if (manualTest.laberintos == 20) {
        updatedTipicaManual.laberintos = 8;
      } else if (manualTest.laberintos == 21 || manualTest.laberintos == 22) {
        updatedTipicaManual.laberintos = 9;
      } else if (manualTest.laberintos == 23) {
        updatedTipicaManual.laberintos = 10;
      } else if (manualTest.laberintos == 24) {
        updatedTipicaManual.laberintos = 11;
      } else if (manualTest.laberintos == 25 || manualTest.laberintos == 26) {
        updatedTipicaManual.laberintos = 12;
      } else if (manualTest.laberintos == 27) {
        updatedTipicaManual.laberintos = 13;
      } else if (manualTest.laberintos == 28) {
        updatedTipicaManual.laberintos = 14;
      } else if (manualTest.laberintos == 29) {
        updatedTipicaManual.laberintos = 15;
      } else if (manualTest.laberintos == 30) {
        updatedTipicaManual.laberintos = 16;
      }
    } else if (age.years === 15) {

      //Información
      if (!verbalTest.informacion) {
        updatedTipicaVerbal.informacion = "";
      } else if (verbalTest.informacion >= 0 && verbalTest.informacion <= 11) {
        updatedTipicaVerbal.informacion = 1;
      } else if (verbalTest.informacion == 12) {
        updatedTipicaVerbal.informacion = 2;
      } else if (verbalTest.informacion == 13) {
        updatedTipicaVerbal.informacion = 3;
      } else if (verbalTest.informacion == 14) {
        updatedTipicaVerbal.informacion = 4;
      } else if (verbalTest.informacion == 15) {
        updatedTipicaVerbal.informacion = 5;
      } else if (verbalTest.informacion == 16) {
        updatedTipicaVerbal.informacion = 6;
      } else if (verbalTest.informacion == 17) {
        updatedTipicaVerbal.informacion = 7;
      } else if (verbalTest.informacion == 18) {
        updatedTipicaVerbal.informacion = 8;
      } else if (verbalTest.informacion == 19) {
        updatedTipicaVerbal.informacion = 9;
      } else if (verbalTest.informacion == 20) {
        updatedTipicaVerbal.informacion = 10;
      } else if (verbalTest.informacion == 21) {
        updatedTipicaVerbal.informacion = 11;
      } else if (verbalTest.informacion == 22) {
        updatedTipicaVerbal.informacion = 12;
      } else if (verbalTest.informacion == 23) {
        updatedTipicaVerbal.informacion = 13;
      } else if (verbalTest.informacion == 24) {
        updatedTipicaVerbal.informacion = 14;
      } else if (verbalTest.informacion == 25 || verbalTest.informacion == 26) {
        updatedTipicaVerbal.informacion = 15;
      } else if (verbalTest.informacion == 27) {
        updatedTipicaVerbal.informacion = 16;
      } else if (verbalTest.informacion == 28) {
        updatedTipicaVerbal.informacion = 17;
      } else if (verbalTest.informacion == 29) {
        updatedTipicaVerbal.informacion = 18;
      } else if (verbalTest.informacion == 30) {
        updatedTipicaVerbal.informacion = 19;
      }

      //Vocabulario
      if (!verbalTest.vocabulario) {
        updatedTipicaVerbal.vocabulario = "";
      } else if (verbalTest.vocabulario >= 0 && verbalTest.vocabulario <= 28) {
        updatedTipicaVerbal.vocabulario = 1;
      } else if (verbalTest.vocabulario >= 29 && verbalTest.vocabulario <= 31) {
        updatedTipicaVerbal.vocabulario = 2;
      } else if (verbalTest.vocabulario == 32 || verbalTest.vocabulario == 33) {
        updatedTipicaVerbal.vocabulario = 3;
      } else if (verbalTest.vocabulario == 34 || verbalTest.vocabulario == 35) {
        updatedTipicaVerbal.vocabulario = 4;
      } else if (verbalTest.vocabulario == 36 || verbalTest.vocabulario == 37) {
        updatedTipicaVerbal.vocabulario = 5;
      } else if (verbalTest.vocabulario == 38 || verbalTest.vocabulario == 39) {
        updatedTipicaVerbal.vocabulario = 6;
      } else if (verbalTest.vocabulario == 40 || verbalTest.vocabulario == 41) {
        updatedTipicaVerbal.vocabulario = 7;
      } else if (verbalTest.vocabulario == 42 || verbalTest.vocabulario == 43) {
        updatedTipicaVerbal.vocabulario = 8;
      } else if (verbalTest.vocabulario == 44 || verbalTest.vocabulario == 45) {
        updatedTipicaVerbal.vocabulario = 9;
      } else if (verbalTest.vocabulario == 46 || verbalTest.vocabulario == 47) {
        updatedTipicaVerbal.vocabulario = 10;
      } else if (verbalTest.vocabulario == 48 || verbalTest.vocabulario == 49) {
        updatedTipicaVerbal.vocabulario = 11;
      } else if (verbalTest.vocabulario == 50 || verbalTest.vocabulario == 51) {
        updatedTipicaVerbal.vocabulario = 12;
      } else if (verbalTest.vocabulario == 52 || verbalTest.vocabulario == 53) {
        updatedTipicaVerbal.vocabulario = 13;
      } else if (verbalTest.vocabulario == 54 || verbalTest.vocabulario == 55) {
        updatedTipicaVerbal.vocabulario = 14;
      } else if (verbalTest.vocabulario == 56 || verbalTest.vocabulario == 57) {
        updatedTipicaVerbal.vocabulario = 15;
      } else if (verbalTest.vocabulario == 58 || verbalTest.vocabulario == 59) {
        updatedTipicaVerbal.vocabulario = 16;
      } else if (verbalTest.vocabulario == 60) {
        updatedTipicaVerbal.vocabulario = 17;
      } else if (verbalTest.vocabulario == 61 || verbalTest.vocabulario == 62) {
        updatedTipicaVerbal.vocabulario = 18;
      } else if (verbalTest.vocabulario == 63 || verbalTest.vocabulario == 64) {
        updatedTipicaVerbal.vocabulario = 19;
      }

      //Aritmética
      if (!verbalTest.aritmetica) {
        updatedTipicaVerbal.aritmetica = "";
      } else if (verbalTest.aritmetica >= 0 && verbalTest.aritmetica <= 9) {
        updatedTipicaVerbal.aritmetica = 1;
      } else if (verbalTest.aritmetica == 10) {
        updatedTipicaVerbal.aritmetica = 2;
      } else if (verbalTest.aritmetica == 11) {
        updatedTipicaVerbal.aritmetica = 4;
      } else if (verbalTest.aritmetica == 12) {
        updatedTipicaVerbal.aritmetica = 6;
      } else if (verbalTest.aritmetica == 13) {
        updatedTipicaVerbal.aritmetica = 7;
      } else if (verbalTest.aritmetica == 14) {
        updatedTipicaVerbal.aritmetica = 9;
      } else if (verbalTest.aritmetica == 15) {
        updatedTipicaVerbal.aritmetica = 11;
      } else if (verbalTest.aritmetica == 16) {
        updatedTipicaVerbal.aritmetica = 12;
      } else if (verbalTest.aritmetica == 17) {
        updatedTipicaVerbal.aritmetica = 14;
      } else if (verbalTest.aritmetica == 18) {
        updatedTipicaVerbal.aritmetica = 15;
      } 

      //Semejanzas
      if (!verbalTest.semejanzas) {
        updatedTipicaVerbal.semejanzas = "";
      } else if (verbalTest.semejanzas >= 0 && verbalTest.semejanzas <= 10) {
        updatedTipicaVerbal.semejanzas = 1;
      } else if (verbalTest.semejanzas == 11 || verbalTest.semejanzas == 12) {
        updatedTipicaVerbal.semejanzas = 2;
      } else if (verbalTest.semejanzas == 13) {
        updatedTipicaVerbal.semejanzas = 3;
      } else if (verbalTest.semejanzas == 14) {
        updatedTipicaVerbal.semejanzas = 4;
      } else if (verbalTest.semejanzas == 15) {
        updatedTipicaVerbal.semejanzas = 5;
      } else if (verbalTest.semejanzas == 16) {
        updatedTipicaVerbal.semejanzas = 7;
      } else if (verbalTest.semejanzas == 17) {
        updatedTipicaVerbal.semejanzas = 8;
      } else if (verbalTest.semejanzas == 18) {
        updatedTipicaVerbal.semejanzas = 9;
      } else if (verbalTest.semejanzas == 19) {
        updatedTipicaVerbal.semejanzas = 10;
      } else if (verbalTest.semejanzas == 20) {
        updatedTipicaVerbal.semejanzas = 11;
      } else if (verbalTest.semejanzas == 21) {
        updatedTipicaVerbal.semejanzas = 12;
      } else if (verbalTest.semejanzas == 22) {
        updatedTipicaVerbal.semejanzas = 13;
      } else if (verbalTest.semejanzas == 23) {
        updatedTipicaVerbal.semejanzas = 14;
      } else if (verbalTest.semejanzas == 24) {
        updatedTipicaVerbal.semejanzas = 15;
      } else if (verbalTest.semejanzas == 25) {
        updatedTipicaVerbal.semejanzas = 16;
      } else if (verbalTest.semejanzas == 26) {
        updatedTipicaVerbal.semejanzas = 17;
      } else if (verbalTest.semejanzas == 27) {
        updatedTipicaVerbal.semejanzas = 18;
      } else if (verbalTest.semejanzas >= 28 && verbalTest.semejanzas <= 30) {
        updatedTipicaVerbal.semejanzas = 19;
      } 

      //Comprension
      if (!verbalTest.comprension) {
        updatedTipicaVerbal.comprension = "";
      } else if (verbalTest.comprension >= 0 && verbalTest.comprension <= 10) {
        updatedTipicaVerbal.comprension = 1;
      } else if (verbalTest.comprension == 11) {
        updatedTipicaVerbal.comprension = 2;
      } else if (verbalTest.comprension == 12) {
        updatedTipicaVerbal.comprension = 3;
      } else if (verbalTest.comprension == 13 || verbalTest.comprension == 14) {
        updatedTipicaVerbal.comprension = 4;
      } else if (verbalTest.comprension == 15) {
        updatedTipicaVerbal.comprension = 5;
      } else if (verbalTest.comprension == 16) {
        updatedTipicaVerbal.comprension = 6;
      } else if (verbalTest.comprension == 17) {
        updatedTipicaVerbal.comprension = 7;
      } else if (verbalTest.comprension == 18 || verbalTest.comprension == 19) {
        updatedTipicaVerbal.comprension = 8;
      } else if (verbalTest.comprension == 20) {
        updatedTipicaVerbal.comprension = 9;
      } else if (verbalTest.comprension == 21) {
        updatedTipicaVerbal.comprension = 10;
      } else if (verbalTest.comprension == 22 || verbalTest.comprension == 23) {
        updatedTipicaVerbal.comprension = 11;
      } else if (verbalTest.comprension == 24) {
        updatedTipicaVerbal.comprension = 12;
      } else if (verbalTest.comprension == 25) {
        updatedTipicaVerbal.comprension = 13;
      } else if (verbalTest.comprension == 26) {
        updatedTipicaVerbal.comprension = 14;
      } else if (verbalTest.comprension == 27 || verbalTest.comprension == 28) {
        updatedTipicaVerbal.comprension = 15;
      } else if (verbalTest.comprension == 29) {
        updatedTipicaVerbal.comprension = 16;
      }else if (verbalTest.comprension == 30) {
        updatedTipicaVerbal.comprension = 17;
      }else if (verbalTest.comprension == 31) {
        updatedTipicaVerbal.comprension = 18;
      } else if (verbalTest.comprension >= 32 && verbalTest.comprension <= 34) {
        updatedTipicaVerbal.comprension = 19;
      }

      //Dígitos
      if (!verbalTest.digitos) {
        updatedTipicaVerbal.digitos = "";
      } else if (verbalTest.digitos >= 0 && verbalTest.digitos <= 3) {
        updatedTipicaVerbal.digitos = 1;
      } else if (verbalTest.digitos == 4) {
        updatedTipicaVerbal.digitos = 2;
      } else if (verbalTest.digitos == 5) {
        updatedTipicaVerbal.digitos = 3;
      } else if (verbalTest.digitos == 6 || verbalTest.digitos == 7) {
        updatedTipicaVerbal.digitos = 4;
      } else if (verbalTest.digitos == 8) {
        updatedTipicaVerbal.digitos = 5;
      } else if (verbalTest.digitos == 9) {
        updatedTipicaVerbal.digitos = 6;
      } else if (verbalTest.digitos == 10) {
        updatedTipicaVerbal.digitos = 7;
      } else if (verbalTest.digitos == 11 || verbalTest.digitos == 12) {
        updatedTipicaVerbal.digitos = 8;
      } else if (verbalTest.digitos == 13) {
        updatedTipicaVerbal.digitos = 9;
      } else if (verbalTest.digitos == 14) {
        updatedTipicaVerbal.digitos = 10;
      } else if (verbalTest.digitos == 15 || verbalTest.digitos == 16) {
        updatedTipicaVerbal.digitos = 11;
      } else if (verbalTest.digitos == 17) {
        updatedTipicaVerbal.digitos = 12;
      } else if (verbalTest.digitos == 18) {
        updatedTipicaVerbal.digitos = 13;
      } else if (verbalTest.digitos == 19) {
        updatedTipicaVerbal.digitos = 14;
      } else if (verbalTest.digitos == 20 || verbalTest.digitos == 21) {
        updatedTipicaVerbal.digitos = 15;
      } else if (verbalTest.digitos == 22) {
        updatedTipicaVerbal.digitos = 16;
      } else if (verbalTest.digitos == 23) {
        updatedTipicaVerbal.digitos = 17;
      } else if (verbalTest.digitos == 24 || verbalTest.digitos == 25) {
        updatedTipicaVerbal.digitos = 18;
      } else if (verbalTest.digitos >= 26 && verbalTest.digitos <= 28) {
        updatedTipicaVerbal.digitos = 19;
      }

      //////////////////////// Prueba Manual//////////////////////////

      //Figuras Incompletas
      if (!manualTest.figurasI) {
        updatedTipicaManual.figurasI = "";
      } else if (manualTest.figurasI >= 0 && manualTest.figurasI <= 13) {
        updatedTipicaManual.figurasI = 1;
      } else if (manualTest.figurasI == 14) {
        updatedTipicaManual.figurasI = 2;
      } else if (manualTest.figurasI == 15) {
        updatedTipicaManual.figurasI = 3;
      } else if (manualTest.figurasI == 16) {
        updatedTipicaManual.figurasI = 4;
      } else if (manualTest.figurasI == 17) {
        updatedTipicaManual.figurasI = 5;
      } else if (manualTest.figurasI == 18) {
        updatedTipicaManual.figurasI = 6;
      } else if (manualTest.figurasI == 19) {
        updatedTipicaManual.figurasI = 7;
      } else if (manualTest.figurasI == 20) {
        updatedTipicaManual.figurasI = 8;
      } else if (manualTest.figurasI == 21) {
        updatedTipicaManual.figurasI = 9;
      } else if (manualTest.figurasI == 22) {
        updatedTipicaManual.figurasI = 10;
      } else if (manualTest.figurasI == 23) {
        updatedTipicaManual.figurasI = 12;
      } else if (manualTest.figurasI == 24) {
        updatedTipicaManual.figurasI = 13;
      } else if (manualTest.figurasI == 25) {
        updatedTipicaManual.figurasI = 14;
      } else if (manualTest.figurasI == 26) {
        updatedTipicaManual.figurasI = 15;
      } 

      //Historietas
      if (!manualTest.historietas) {
        updatedTipicaManual.historietas = "";
      } else if (manualTest.historietas >= 0 && manualTest.historietas <= 11) {
        updatedTipicaManual.historietas = 1;
      } else if (manualTest.historietas >= 12 && manualTest.historietas <= 14) {
        updatedTipicaManual.historietas = 2;
      } else if (manualTest.historietas == 15 || manualTest.historietas == 16) {
        updatedTipicaManual.historietas = 3;
      } else if (manualTest.historietas == 17 || manualTest.historietas == 18) {
        updatedTipicaManual.historietas = 4;
      } else if (manualTest.historietas == 19 || manualTest.historietas == 20) {
        updatedTipicaManual.historietas = 5;
      } else if (manualTest.historietas >= 21 && manualTest.historietas <= 23) {
        updatedTipicaManual.historietas = 6;
      } else if (manualTest.historietas == 24 || manualTest.historietas == 25) {
        updatedTipicaManual.historietas = 7;
      } else if (manualTest.historietas == 26 || manualTest.historietas == 27) {
        updatedTipicaManual.historietas = 8;
      } else if (manualTest.historietas == 28 || manualTest.historietas == 29) {
        updatedTipicaManual.historietas = 9;
      } else if (manualTest.historietas >= 30 && manualTest.historietas <= 32) {
        updatedTipicaManual.historietas = 10;
      } else if (manualTest.historietas == 33 || manualTest.historietas == 34) {
        updatedTipicaManual.historietas = 11;
      } else if (manualTest.historietas == 35 || manualTest.historietas == 36) {
        updatedTipicaManual.historietas = 12;
      } else if (manualTest.historietas >= 37 && manualTest.historietas <= 39) {
        updatedTipicaManual.historietas = 13;
      } else if (manualTest.historietas == 40 || manualTest.historietas == 41) {
        updatedTipicaManual.historietas = 14;
      } else if (manualTest.historietas == 42 || manualTest.historietas == 43) {
        updatedTipicaManual.historietas = 15;
      } else if (manualTest.historietas == 44 || manualTest.historietas == 45) {
        updatedTipicaManual.historietas = 16;
      } else if (manualTest.historietas >= 46 && manualTest.historietas <= 48) {
        updatedTipicaManual.historietas = 17;
      } 


      //Cubos
      if (!manualTest.cubos) {
        updatedTipicaManual.cubos = "";
      }else if (manualTest.cubos >= 0 && manualTest.cubos <= 18) {
        updatedTipicaManual.cubos = 1;
      } else if (manualTest.cubos >= 19 && manualTest.cubos <= 21) {
        updatedTipicaManual.cubos = 2;
      } else if (manualTest.cubos >= 22 && manualTest.cubos <= 24) {
        updatedTipicaManual.cubos = 3;
      } else if (manualTest.cubos >= 25 && manualTest.cubos <= 28) {
        updatedTipicaManual.cubos = 4;
      } else if (manualTest.cubos >= 29 && manualTest.cubos <= 31) {
        updatedTipicaManual.cubos = 5;
      } else if (manualTest.cubos >= 32 && manualTest.cubos <= 34) {
        updatedTipicaManual.cubos = 6;
      } else if (manualTest.cubos >= 35 && manualTest.cubos <= 38) {
        updatedTipicaManual.cubos = 7;
      } else if (manualTest.cubos >= 39 && manualTest.cubos <= 41) {
        updatedTipicaManual.cubos = 8;
      } else if (manualTest.cubos >= 42 && manualTest.cubos <= 44) {
        updatedTipicaManual.cubos = 9;
      } else if (manualTest.cubos >= 45 && manualTest.cubos <= 48) {
        updatedTipicaManual.cubos = 10;
      } else if (manualTest.cubos >= 49 && manualTest.cubos <= 51) {
        updatedTipicaManual.cubos = 11;
      } else if (manualTest.cubos >= 52 && manualTest.cubos <= 54) {
        updatedTipicaManual.cubos = 12;
      } else if (manualTest.cubos >= 55 && manualTest.cubos <= 58) {
        updatedTipicaManual.cubos = 13;
      } else if (manualTest.cubos >= 59 && manualTest.cubos <= 61) {
        updatedTipicaManual.cubos = 14;
      } else if (manualTest.cubos == 62) {
        updatedTipicaManual.cubos = 15;
      } 

      //Rompecabezas
      if (!manualTest.rompeCabezas) {
        updatedTipicaManual.rompeCabezas = "";
      } else if (manualTest.rompeCabezas >= 0 && manualTest.rompeCabezas <= 13) {
        updatedTipicaManual.rompeCabezas = 1;
      } else if (manualTest.rompeCabezas == 14 || manualTest.rompeCabezas == 15) {
        updatedTipicaManual.rompeCabezas = 2;
      } else if (manualTest.rompeCabezas == 16) {
        updatedTipicaManual.rompeCabezas = 3;
      } else if (manualTest.rompeCabezas == 17 || manualTest.rompeCabezas == 18) {
        updatedTipicaManual.rompeCabezas = 4;
      } else if (manualTest.rompeCabezas == 19) {
        updatedTipicaManual.rompeCabezas = 5;
      } else if (manualTest.rompeCabezas == 20 || manualTest.rompeCabezas == 21) {
        updatedTipicaManual.rompeCabezas = 6;
      } else if (manualTest.rompeCabezas == 22) {
        updatedTipicaManual.rompeCabezas = 7;
      } else if (manualTest.rompeCabezas == 23){
        updatedTipicaManual.rompeCabezas = 8;
      } else if (manualTest.rompeCabezas == 24 || manualTest.rompeCabezas == 25){
        updatedTipicaManual.rompeCabezas = 9;
      } else if (manualTest.rompeCabezas == 26) {
        updatedTipicaManual.rompeCabezas = 10;
      } else if (manualTest.rompeCabezas == 27 || manualTest.rompeCabezas == 28) {
        updatedTipicaManual.rompeCabezas = 11;
      } else if (manualTest.rompeCabezas == 29) {
        updatedTipicaManual.rompeCabezas = 12;
      } else if (manualTest.rompeCabezas == 30 || manualTest.rompeCabezas == 31) {
        updatedTipicaManual.rompeCabezas = 13;
      }  else if (manualTest.rompeCabezas == 32) {
        updatedTipicaManual.rompeCabezas = 14;
      } else if (manualTest.rompeCabezas == 33) {
        updatedTipicaManual.rompeCabezas = 15;
      }  

      //Claves
      if (!manualTest.claves) {
        updatedTipicaManual.claves = "";
      } else if (manualTest.claves >= 0 && manualTest.claves <= 36) {
        updatedTipicaManual.claves = 1;
      } else if (manualTest.claves >= 37 && manualTest.claves <= 40) {
        updatedTipicaManual.claves = 2;
      } else if (manualTest.claves >= 41 && manualTest.claves <= 43) {
        updatedTipicaManual.claves = 3;
      } else if (manualTest.claves >= 44 && manualTest.claves <= 47) {
        updatedTipicaManual.claves = 4;
      } else if (manualTest.claves >= 48 && manualTest.claves <= 51) {
        updatedTipicaManual.claves = 5;
      } else if (manualTest.claves >= 52 && manualTest.claves <= 55) {
        updatedTipicaManual.claves = 6;
      } else if (manualTest.claves >= 56 && manualTest.claves <= 59) {
        updatedTipicaManual.claves = 7;
      } else if (manualTest.claves >= 60 && manualTest.claves <= 63) {
        updatedTipicaManual.claves = 8;
      } else if (manualTest.claves >= 64 && manualTest.claves <= 67) {
        updatedTipicaManual.claves = 9;
      } else if (manualTest.claves >= 68 && manualTest.claves <= 71) {
        updatedTipicaManual.claves = 10;
      } else if (manualTest.claves >= 72 && manualTest.claves <= 75) {
        updatedTipicaManual.claves = 11;
      } else if (manualTest.claves >= 76 && manualTest.claves <= 79) {
        updatedTipicaManual.claves = 12;
      } else if (manualTest.claves >= 80 && manualTest.claves <= 83) {
        updatedTipicaManual.claves = 13;
      } else if (manualTest.claves >= 84 && manualTest.claves <= 86) {
        updatedTipicaManual.claves = 14;
      } else if (manualTest.claves >= 87 && manualTest.claves <= 90) {
        updatedTipicaManual.claves = 15;
      } else if (manualTest.claves >= 91 && manualTest.claves <= 93) {
        updatedTipicaManual.claves = 16;
      } 

      //Laberintos
      if (!manualTest.laberintos) {
        updatedTipicaManual.laberintos = "";
      } else if (manualTest.laberintos >= 0 && manualTest.laberintos <= 11) {
        updatedTipicaManual.laberintos = 1;
      } else if (manualTest.laberintos == 12 || manualTest.laberintos == 13) {
        updatedTipicaManual.laberintos = 2;
      } else if (manualTest.laberintos == 14) {
        updatedTipicaManual.laberintos = 3;
      } else if (manualTest.laberintos == 15) {
        updatedTipicaManual.laberintos = 4;
      } else if (manualTest.laberintos == 16) {
        updatedTipicaManual.laberintos = 5;
      } else if (manualTest.laberintos == 17 || manualTest.laberintos == 18) {
        updatedTipicaManual.laberintos = 6;
      } else if (manualTest.laberintos == 19) {
        updatedTipicaManual.laberintos = 7;
      } else if (manualTest.laberintos == 20 || manualTest.laberintos == 21) {
        updatedTipicaManual.laberintos = 8;
      } else if (manualTest.laberintos == 22) {
        updatedTipicaManual.laberintos = 9;
      } else if (manualTest.laberintos == 23) {
        updatedTipicaManual.laberintos = 10;
      } else if (manualTest.laberintos == 24 || manualTest.laberintos == 25) {
        updatedTipicaManual.laberintos = 11;
      } else if (manualTest.laberintos == 26) {
        updatedTipicaManual.laberintos = 12;
      } else if (manualTest.laberintos == 27) {
        updatedTipicaManual.laberintos = 13;
      } else if (manualTest.laberintos == 28 || manualTest.laberintos == 29) {
        updatedTipicaManual.laberintos = 14;
      } else if (manualTest.laberintos == 30) {
        updatedTipicaManual.laberintos = 15;
      }
    } else if (age.years === 16) {

      //Información
      if (!verbalTest.informacion) {
        updatedTipicaVerbal.informacion = "";
      } else if (verbalTest.informacion >= 0 && verbalTest.informacion <= 11) {
        updatedTipicaVerbal.informacion = 1;
      } else if (verbalTest.informacion == 12) {
        updatedTipicaVerbal.informacion = 2;
      } else if (verbalTest.informacion == 13) {
        updatedTipicaVerbal.informacion = 3;
      } else if (verbalTest.informacion == 14) {
        updatedTipicaVerbal.informacion = 4;
      } else if (verbalTest.informacion == 15) {
        updatedTipicaVerbal.informacion = 5;
      } else if (verbalTest.informacion == 16) {
        updatedTipicaVerbal.informacion = 6;
      } else if (verbalTest.informacion == 17) {
        updatedTipicaVerbal.informacion = 7;
      } else if (verbalTest.informacion == 18) {
        updatedTipicaVerbal.informacion = 8;
      } else if (verbalTest.informacion == 19) {
        updatedTipicaVerbal.informacion = 9;
      } else if (verbalTest.informacion == 20) {
        updatedTipicaVerbal.informacion = 10;
      } else if (verbalTest.informacion == 21) {
        updatedTipicaVerbal.informacion = 11;
      } else if (verbalTest.informacion == 22) {
        updatedTipicaVerbal.informacion = 12;
      } else if (verbalTest.informacion == 23) {
        updatedTipicaVerbal.informacion = 13;
      } else if (verbalTest.informacion == 24 || verbalTest.informacion == 25) {
        updatedTipicaVerbal.informacion = 14;
      } else if (verbalTest.informacion == 26) {
        updatedTipicaVerbal.informacion = 15;
      } else if (verbalTest.informacion == 27) {
        updatedTipicaVerbal.informacion = 16;
      } else if (verbalTest.informacion == 28) {
        updatedTipicaVerbal.informacion = 17;
      } else if (verbalTest.informacion == 29) {
        updatedTipicaVerbal.informacion = 18;
      } else if (verbalTest.informacion == 30) {
        updatedTipicaVerbal.informacion = 19;
      }

      //Vocabulario
      if (!verbalTest.vocabulario) {
        updatedTipicaVerbal.vocabulario = "";
      } else if (verbalTest.vocabulario >= 0 && verbalTest.vocabulario <= 28) {
        updatedTipicaVerbal.vocabulario = 1;
      } else if (verbalTest.vocabulario >= 29 && verbalTest.vocabulario <= 31) {
        updatedTipicaVerbal.vocabulario = 2;
      } else if (verbalTest.vocabulario == 32 || verbalTest.vocabulario == 33) {
        updatedTipicaVerbal.vocabulario = 3;
      } else if (verbalTest.vocabulario == 34 || verbalTest.vocabulario == 35) {
        updatedTipicaVerbal.vocabulario = 4;
      } else if (verbalTest.vocabulario == 36 || verbalTest.vocabulario == 37) {
        updatedTipicaVerbal.vocabulario = 5;
      } else if (verbalTest.vocabulario == 38 || verbalTest.vocabulario == 39) {
        updatedTipicaVerbal.vocabulario = 6;
      } else if (verbalTest.vocabulario >= 40 && verbalTest.vocabulario <= 42) {
        updatedTipicaVerbal.vocabulario = 7;
      } else if (verbalTest.vocabulario == 43 || verbalTest.vocabulario == 44) {
        updatedTipicaVerbal.vocabulario = 8;
      } else if (verbalTest.vocabulario == 45 || verbalTest.vocabulario == 46) {
        updatedTipicaVerbal.vocabulario = 9;
      } else if (verbalTest.vocabulario == 47 || verbalTest.vocabulario == 48) {
        updatedTipicaVerbal.vocabulario = 10;
      } else if (verbalTest.vocabulario == 49 || verbalTest.vocabulario == 50) {
        updatedTipicaVerbal.vocabulario = 11;
      } else if (verbalTest.vocabulario == 51 || verbalTest.vocabulario == 52) {
        updatedTipicaVerbal.vocabulario = 12;
      } else if (verbalTest.vocabulario == 53 || verbalTest.vocabulario == 54) {
        updatedTipicaVerbal.vocabulario = 13;
      } else if (verbalTest.vocabulario == 55 || verbalTest.vocabulario == 56) {
        updatedTipicaVerbal.vocabulario = 14;
      } else if (verbalTest.vocabulario == 57 || verbalTest.vocabulario == 58) {
        updatedTipicaVerbal.vocabulario = 15;
      } else if (verbalTest.vocabulario == 59 || verbalTest.vocabulario == 60) {
        updatedTipicaVerbal.vocabulario = 16;
      } else if (verbalTest.vocabulario == 61) {
        updatedTipicaVerbal.vocabulario = 17;
      } else if (verbalTest.vocabulario == 62 || verbalTest.vocabulario == 63) {
        updatedTipicaVerbal.vocabulario = 18;
      } else if (verbalTest.vocabulario == 64) {
        updatedTipicaVerbal.vocabulario = 19;
      }

      //Aritmética
      if (!verbalTest.aritmetica) {
        updatedTipicaVerbal.aritmetica = "";
      } else if (verbalTest.aritmetica >= 0 && verbalTest.aritmetica <= 9) {
        updatedTipicaVerbal.aritmetica = 1;
      } else if (verbalTest.aritmetica == 10) {
        updatedTipicaVerbal.aritmetica = 2;
      } else if (verbalTest.aritmetica == 11) {
        updatedTipicaVerbal.aritmetica = 4;
      } else if (verbalTest.aritmetica == 12) {
        updatedTipicaVerbal.aritmetica = 6;
      } else if (verbalTest.aritmetica == 13) {
        updatedTipicaVerbal.aritmetica = 7;
      } else if (verbalTest.aritmetica == 14) {
        updatedTipicaVerbal.aritmetica = 9;
      } else if (verbalTest.aritmetica == 15) {
        updatedTipicaVerbal.aritmetica = 11;
      } else if (verbalTest.aritmetica == 16) {
        updatedTipicaVerbal.aritmetica = 12;
      } else if (verbalTest.aritmetica == 17) {
        updatedTipicaVerbal.aritmetica = 14;
      } else if (verbalTest.aritmetica == 16) {
        updatedTipicaVerbal.aritmetica = 13;
      } else if (verbalTest.aritmetica == 17) {
        updatedTipicaVerbal.aritmetica = 14;
      } else if (verbalTest.aritmetica == 18) {
        updatedTipicaVerbal.aritmetica = 15;
      }

      //Semejanzas
      if (!verbalTest.semejanzas) {
        updatedTipicaVerbal.semejanzas = "";
      } else if (verbalTest.semejanzas >= 0 && verbalTest.semejanzas <= 10) {
        updatedTipicaVerbal.semejanzas = 1;
      } else if (verbalTest.semejanzas == 11 || verbalTest.semejanzas == 12) {
        updatedTipicaVerbal.semejanzas = 2;
      } else if (verbalTest.semejanzas == 13) {
        updatedTipicaVerbal.semejanzas = 3;
      } else if (verbalTest.semejanzas == 14) {
        updatedTipicaVerbal.semejanzas = 4;
      } else if (verbalTest.semejanzas == 15) {
        updatedTipicaVerbal.semejanzas = 5;
      } else if (verbalTest.semejanzas == 16) {
        updatedTipicaVerbal.semejanzas = 7;
      } else if (verbalTest.semejanzas == 17) {
        updatedTipicaVerbal.semejanzas = 8;
      } else if (verbalTest.semejanzas == 18) {
        updatedTipicaVerbal.semejanzas = 9;
      } else if (verbalTest.semejanzas == 19) {
        updatedTipicaVerbal.semejanzas = 10;
      } else if (verbalTest.semejanzas == 20) {
        updatedTipicaVerbal.semejanzas = 11;
      } else if (verbalTest.semejanzas == 21) {
        updatedTipicaVerbal.semejanzas = 12;
      } else if (verbalTest.semejanzas == 22) {
        updatedTipicaVerbal.semejanzas = 13;
      } else if (verbalTest.semejanzas == 23) {
        updatedTipicaVerbal.semejanzas = 14;
      } else if (verbalTest.semejanzas == 24) {
        updatedTipicaVerbal.semejanzas = 15;
      } else if (verbalTest.semejanzas == 25 || verbalTest.semejanzas == 26) {
        updatedTipicaVerbal.semejanzas = 16;
      } else if (verbalTest.semejanzas == 27) {
        updatedTipicaVerbal.semejanzas = 17;
      } else if (verbalTest.semejanzas == 28) {
        updatedTipicaVerbal.semejanzas = 18;
      } else if (verbalTest.semejanzas == 29 || verbalTest.semejanzas == 30) {
        updatedTipicaVerbal.semejanzas = 19;
      } 

      //Comprension
      if (!verbalTest.comprension) {
        updatedTipicaVerbal.comprension = "";
      } else if (verbalTest.comprension >= 0 && verbalTest.comprension <= 10) {
        updatedTipicaVerbal.comprension = 1;
      } else if (verbalTest.comprension == 11) {
        updatedTipicaVerbal.comprension = 2;
      } else if (verbalTest.comprension == 12) {
        updatedTipicaVerbal.comprension = 3;
      } else if (verbalTest.comprension == 13 || verbalTest.comprension == 14) {
        updatedTipicaVerbal.comprension = 4;
      } else if (verbalTest.comprension == 15) {
        updatedTipicaVerbal.comprension = 5;
      } else if (verbalTest.comprension == 16) {
        updatedTipicaVerbal.comprension = 6;
      } else if (verbalTest.comprension == 17) {
        updatedTipicaVerbal.comprension = 7;
      } else if (verbalTest.comprension == 18 || verbalTest.comprension == 19) {
        updatedTipicaVerbal.comprension = 8;
      } else if (verbalTest.comprension == 20) {
        updatedTipicaVerbal.comprension = 9;
      } else if (verbalTest.comprension == 21) {
        updatedTipicaVerbal.comprension = 10;
      } else if (verbalTest.comprension == 22 || verbalTest.comprension == 23) {
        updatedTipicaVerbal.comprension = 11;
      } else if (verbalTest.comprension == 24) {
        updatedTipicaVerbal.comprension = 12;
      } else if (verbalTest.comprension == 25) {
        updatedTipicaVerbal.comprension = 13;
      } else if (verbalTest.comprension == 26) {
        updatedTipicaVerbal.comprension = 14;
      } else if (verbalTest.comprension == 27 || verbalTest.comprension == 28) {
        updatedTipicaVerbal.comprension = 15;
      } else if (verbalTest.comprension == 29 || verbalTest.comprension == 30) {
        updatedTipicaVerbal.comprension = 16;
      }else if (verbalTest.comprension == 31) {
        updatedTipicaVerbal.comprension = 17;
      }else if (verbalTest.comprension == 32) {
        updatedTipicaVerbal.comprension = 18;
      } else if (verbalTest.comprension == 33 || verbalTest.comprension == 34) {
        updatedTipicaVerbal.comprension = 19;
      }

      //Dígitos
      if (!verbalTest.digitos) {
        updatedTipicaVerbal.digitos = "";
      } else if (verbalTest.digitos >= 0 && verbalTest.digitos <= 3) {
        updatedTipicaVerbal.digitos = 1;
      } else if (verbalTest.digitos == 4) {
        updatedTipicaVerbal.digitos = 2;
      } else if (verbalTest.digitos == 5) {
        updatedTipicaVerbal.digitos = 3;
      } else if (verbalTest.digitos == 6 || verbalTest.digitos == 7) {
        updatedTipicaVerbal.digitos = 4;
      } else if (verbalTest.digitos == 8) {
        updatedTipicaVerbal.digitos = 5;
      } else if (verbalTest.digitos == 9) {
        updatedTipicaVerbal.digitos = 6;
      } else if (verbalTest.digitos == 10) {
        updatedTipicaVerbal.digitos = 7;
      } else if (verbalTest.digitos == 11 || verbalTest.digitos == 12) {
        updatedTipicaVerbal.digitos = 8;
      } else if (verbalTest.digitos == 13) {
        updatedTipicaVerbal.digitos = 9;
      } else if (verbalTest.digitos == 14 || verbalTest.digitos == 15) {
        updatedTipicaVerbal.digitos = 10;
      } else if (verbalTest.digitos == 16) {
        updatedTipicaVerbal.digitos = 11;
      } else if (verbalTest.digitos == 17 || verbalTest.digitos == 18) {
        updatedTipicaVerbal.digitos = 12;
      } else if (verbalTest.digitos == 19) {
        updatedTipicaVerbal.digitos = 13;
      } else if (verbalTest.digitos == 20) {
        updatedTipicaVerbal.digitos = 14;
      } else if (verbalTest.digitos == 21 || verbalTest.digitos == 22) {
        updatedTipicaVerbal.digitos = 15;
      } else if (verbalTest.digitos == 23) {
        updatedTipicaVerbal.digitos = 16;
      } else if (verbalTest.digitos == 24 || verbalTest.digitos == 25) {
        updatedTipicaVerbal.digitos = 17;
      } else if (verbalTest.digitos == 26) {
        updatedTipicaVerbal.digitos = 18;
      } else if (verbalTest.digitos == 27 || verbalTest.digitos == 28) {
        updatedTipicaVerbal.digitos = 19;
      }

      //////////////////////// Prueba Manual//////////////////////////

      //Figuras Incompletas
      if (!manualTest.figurasI) {
        updatedTipicaManual.figurasI = "";
      } else if (manualTest.figurasI >= 0 && manualTest.figurasI <= 13) {
        updatedTipicaManual.figurasI = 1;
      } else if (manualTest.figurasI == 14) {
        updatedTipicaManual.figurasI = 2;
      } else if (manualTest.figurasI == 15) {
        updatedTipicaManual.figurasI = 3;
      } else if (manualTest.figurasI == 16) {
        updatedTipicaManual.figurasI = 4;
      } else if (manualTest.figurasI == 17) {
        updatedTipicaManual.figurasI = 5;
      } else if (manualTest.figurasI == 18) {
        updatedTipicaManual.figurasI = 6;
      } else if (manualTest.figurasI == 19) {
        updatedTipicaManual.figurasI = 7;
      } else if (manualTest.figurasI == 20) {
        updatedTipicaManual.figurasI = 8;
      } else if (manualTest.figurasI == 21) {
        updatedTipicaManual.figurasI = 9;
      } else if (manualTest.figurasI == 22) {
        updatedTipicaManual.figurasI = 10;
      } else if (manualTest.figurasI == 23) {
        updatedTipicaManual.figurasI = 12;
      } else if (manualTest.figurasI == 24) {
        updatedTipicaManual.figurasI = 13;
      } else if (manualTest.figurasI == 25) {
        updatedTipicaManual.figurasI = 14;
      } else if (manualTest.figurasI == 26) {
        updatedTipicaManual.figurasI = 15;
      } 

      //Historietas
      if (!manualTest.historietas) {
        updatedTipicaManual.historietas = "";
      } else if (manualTest.historietas >= 0 && manualTest.historietas <= 13) {
        updatedTipicaManual.historietas = 1;
      } else if (manualTest.historietas == 14 || manualTest.historietas == 15) {
        updatedTipicaManual.historietas = 2;
      } else if (manualTest.historietas == 16 || manualTest.historietas == 17) {
        updatedTipicaManual.historietas = 3;
      } else if (manualTest.historietas == 18 || manualTest.historietas == 19) {
        updatedTipicaManual.historietas = 4;
      } else if (manualTest.historietas == 20 || manualTest.historietas == 21) {
        updatedTipicaManual.historietas = 5;
      } else if (manualTest.historietas >= 22 && manualTest.historietas <= 24) {
        updatedTipicaManual.historietas = 6;
      } else if (manualTest.historietas == 25 || manualTest.historietas == 26) {
        updatedTipicaManual.historietas = 7;
      } else if (manualTest.historietas == 27 || manualTest.historietas == 28) {
        updatedTipicaManual.historietas = 8;
      } else if (manualTest.historietas == 29 || manualTest.historietas == 30) {
        updatedTipicaManual.historietas = 9;
      } else if (manualTest.historietas == 31 || manualTest.historietas == 32) {
        updatedTipicaManual.historietas = 10;
      } else if (manualTest.historietas == 33 || manualTest.historietas == 34) {
        updatedTipicaManual.historietas = 11;
      } else if (manualTest.historietas == 35 || manualTest.historietas == 36) {
        updatedTipicaManual.historietas = 12;
      } else if (manualTest.historietas >= 37 && manualTest.historietas <= 39) {
        updatedTipicaManual.historietas = 13;
      } else if (manualTest.historietas == 40 || manualTest.historietas == 41) {
        updatedTipicaManual.historietas = 14;
      } else if (manualTest.historietas == 42 || manualTest.historietas == 43) {
        updatedTipicaManual.historietas = 15;
      } else if (manualTest.historietas == 44 || manualTest.historietas == 45) {
        updatedTipicaManual.historietas = 16;
      } else if (manualTest.historietas >= 46 && manualTest.historietas <= 48) {
        updatedTipicaManual.historietas = 17;
      } 


      //Cubos
      if (!manualTest.cubos) {
        updatedTipicaManual.cubos = "";
      }else if (manualTest.cubos >= 0 && manualTest.cubos <= 18) {
        updatedTipicaManual.cubos = 1;
      } else if (manualTest.cubos >= 19 && manualTest.cubos <= 21) {
        updatedTipicaManual.cubos = 2;
      } else if (manualTest.cubos >= 22 && manualTest.cubos <= 24) {
        updatedTipicaManual.cubos = 3;
      } else if (manualTest.cubos >= 25 && manualTest.cubos <= 28) {
        updatedTipicaManual.cubos = 4;
      } else if (manualTest.cubos >= 29 && manualTest.cubos <= 31) {
        updatedTipicaManual.cubos = 5;
      } else if (manualTest.cubos >= 32 && manualTest.cubos <= 34) {
        updatedTipicaManual.cubos = 6;
      } else if (manualTest.cubos >= 35 && manualTest.cubos <= 38) {
        updatedTipicaManual.cubos = 7;
      } else if (manualTest.cubos >= 39 && manualTest.cubos <= 41) {
        updatedTipicaManual.cubos = 8;
      } else if (manualTest.cubos >= 42 && manualTest.cubos <= 44) {
        updatedTipicaManual.cubos = 9;
      } else if (manualTest.cubos >= 45 && manualTest.cubos <= 48) {
        updatedTipicaManual.cubos = 10;
      } else if (manualTest.cubos >= 49 && manualTest.cubos <= 51) {
        updatedTipicaManual.cubos = 11;
      } else if (manualTest.cubos >= 52 && manualTest.cubos <= 55) {
        updatedTipicaManual.cubos = 12;
      } else if (manualTest.cubos >= 56 && manualTest.cubos <= 58) {
        updatedTipicaManual.cubos = 13;
      } else if (manualTest.cubos >= 59 && manualTest.cubos <= 61) {
        updatedTipicaManual.cubos = 14;
      } else if (manualTest.cubos == 62) {
        updatedTipicaManual.cubos = 15;
      } 

      //Rompecabezas
      if (!manualTest.rompeCabezas) {
        updatedTipicaManual.rompeCabezas = "";
      } else if (manualTest.rompeCabezas >= 0 && manualTest.rompeCabezas <= 13) {
        updatedTipicaManual.rompeCabezas = 1;
      } else if (manualTest.rompeCabezas == 14 || manualTest.rompeCabezas == 15) {
        updatedTipicaManual.rompeCabezas = 2;
      } else if (manualTest.rompeCabezas == 16) {
        updatedTipicaManual.rompeCabezas = 3;
      } else if (manualTest.rompeCabezas == 17 || manualTest.rompeCabezas == 18) {
        updatedTipicaManual.rompeCabezas = 4;
      } else if (manualTest.rompeCabezas == 19) {
        updatedTipicaManual.rompeCabezas = 5;
      } else if (manualTest.rompeCabezas == 20 || manualTest.rompeCabezas == 21) {
        updatedTipicaManual.rompeCabezas = 6;
      } else if (manualTest.rompeCabezas == 22) {
        updatedTipicaManual.rompeCabezas = 7;
      } else if (manualTest.rompeCabezas == 23){
        updatedTipicaManual.rompeCabezas = 8;
      } else if (manualTest.rompeCabezas == 24 || manualTest.rompeCabezas == 25){
        updatedTipicaManual.rompeCabezas = 9;
      } else if (manualTest.rompeCabezas == 26) {
        updatedTipicaManual.rompeCabezas = 10;
      } else if (manualTest.rompeCabezas == 27 || manualTest.rompeCabezas == 28) {
        updatedTipicaManual.rompeCabezas = 11;
      } else if (manualTest.rompeCabezas == 29) {
        updatedTipicaManual.rompeCabezas = 12;
      } else if (manualTest.rompeCabezas == 30 || manualTest.rompeCabezas == 31) {
        updatedTipicaManual.rompeCabezas = 13;
      }  else if (manualTest.rompeCabezas == 32) {
        updatedTipicaManual.rompeCabezas = 14;
      } else if (manualTest.rompeCabezas == 33) {
        updatedTipicaManual.rompeCabezas = 15;
      }  

      //Claves
      if (!manualTest.claves) {
        updatedTipicaManual.claves = "";
      } else if (manualTest.claves >= 0 && manualTest.claves <= 36) {
        updatedTipicaManual.claves = 1;
      } else if (manualTest.claves >= 37 && manualTest.claves <= 40) {
        updatedTipicaManual.claves = 2;
      } else if (manualTest.claves >= 41 && manualTest.claves <= 44) {
        updatedTipicaManual.claves = 3;
      } else if (manualTest.claves >= 45 && manualTest.claves <= 48) {
        updatedTipicaManual.claves = 4;
      } else if (manualTest.claves >= 49 && manualTest.claves <= 52) {
        updatedTipicaManual.claves = 5;
      } else if (manualTest.claves >= 53 && manualTest.claves <= 56) {
        updatedTipicaManual.claves = 6;
      } else if (manualTest.claves >= 57 && manualTest.claves <= 60) {
        updatedTipicaManual.claves = 7;
      } else if (manualTest.claves >= 61 && manualTest.claves <= 64) {
        updatedTipicaManual.claves = 8;
      } else if (manualTest.claves >= 65 && manualTest.claves <= 69) {
        updatedTipicaManual.claves = 9;
      } else if (manualTest.claves >= 70 && manualTest.claves <= 73) {
        updatedTipicaManual.claves = 10;
      } else if (manualTest.claves >= 74 && manualTest.claves <= 77) {
        updatedTipicaManual.claves = 11;
      } else if (manualTest.claves >= 78 && manualTest.claves <= 81) {
        updatedTipicaManual.claves = 12;
      } else if (manualTest.claves >= 82 && manualTest.claves <= 85) {
        updatedTipicaManual.claves = 13;
      } else if (manualTest.claves >= 86 && manualTest.claves <= 89) {
        updatedTipicaManual.claves = 14;
      } else if (manualTest.claves >= 90 && manualTest.claves <= 93) {
        updatedTipicaManual.claves = 15;
      } 

      //Laberintos
      if (!manualTest.laberintos) {
        updatedTipicaManual.laberintos = "";
      } else if (manualTest.laberintos >= 0 && manualTest.laberintos <= 11) {
        updatedTipicaManual.laberintos = 1;
      } else if (manualTest.laberintos == 12 || manualTest.laberintos == 13) {
        updatedTipicaManual.laberintos = 2;
      } else if (manualTest.laberintos == 14) {
        updatedTipicaManual.laberintos = 3;
      } else if (manualTest.laberintos == 15) {
        updatedTipicaManual.laberintos = 4;
      } else if (manualTest.laberintos == 16) {
        updatedTipicaManual.laberintos = 5;
      } else if (manualTest.laberintos == 17 || manualTest.laberintos == 18) {
        updatedTipicaManual.laberintos = 6;
      } else if (manualTest.laberintos == 19) {
        updatedTipicaManual.laberintos = 7;
      } else if (manualTest.laberintos == 20 || manualTest.laberintos == 21) {
        updatedTipicaManual.laberintos = 8;
      } else if (manualTest.laberintos == 22) {
        updatedTipicaManual.laberintos = 9;
      } else if (manualTest.laberintos == 23) {
        updatedTipicaManual.laberintos = 10;
      } else if (manualTest.laberintos == 24 || manualTest.laberintos == 25) {
        updatedTipicaManual.laberintos = 11;
      } else if (manualTest.laberintos == 26) {
        updatedTipicaManual.laberintos = 12;
      } else if (manualTest.laberintos == 27 || manualTest.laberintos == 28) {
        updatedTipicaManual.laberintos = 13;
      } else if (manualTest.laberintos == 29 || manualTest.laberintos == 30) {
        updatedTipicaManual.laberintos = 14;
      }
    }

    //Asignación de los valores
    setTipicaVerbal(updatedTipicaVerbal);
    setTipicaManual(updatedTipicaManual);
  }, [verbalTest, manualTest, age]);

  /////////////////////////TOTALES///////////////////////

  //Total de las pruebas
  //Verbal
  const [totalVerbalTestD, setTotalVerbalTestD] = useState(0);

  const [totalVerbalTestT, setTotalVerbalTestT] = useState(0);

  //manual
  const [totalManualTestD, setTotalManualTestD] = useState(0);
  const [totalManualTestT, setTotalManualTestT] = useState(0);

  //Total de la prueba verbal

  useEffect(() => {
    const values = Object.values(verbalTest)
      .filter((value) => value.length > 0)
      .map((value) => parseInt(value));
    const total = values.reduce(
      (accumulator, currentValue) => accumulator + currentValue,
      0
    );
    setTotalVerbalTestD(total);
  }, [verbalTest]);

  useEffect(() => {
    const values = Object.values(tipicaVerbal)
      .filter((value) => value !== "" && !isNaN(parseInt(value)))
      .map((value) => parseInt(value));
    const total = values.reduce(
      (accumulator, currentValue) => accumulator + currentValue,
      0
    );
    setTotalVerbalTestT(total);
  }, [tipicaVerbal]);

  console.log("total de la verbal:", totalVerbalTestT);
  //Total de la prueba manual

  useEffect(() => {
    const values = Object.values(manualTest)
      .filter((value) => value.length > 0)
      .map((value) => parseInt(value));
    const total = values.reduce(
      (accumulator, currentValue) => accumulator + currentValue,
      0
    );
    setTotalManualTestD(total);
  }, [manualTest]);

  useEffect(() => {
    const values = Object.values(tipicaManual)
      .filter((value) => value !== "" && !isNaN(parseInt(value)))
      .map((value) => parseInt(value));
    const total = values.reduce(
      (accumulator, currentValue) => accumulator + currentValue,
      0
    );
    setTotalManualTestT(total);
  }, [tipicaManual]);

  console.log("total de la manual:", totalManualTestT);
  ////////////////////CI////////////////////

  //Total de las pruebas tipicas
  const [totalTipica, setTotalTipica] = useState(0);

  useEffect(() => {
    setTotalTipica(totalVerbalTestT + totalManualTestT);
  }, [totalManualTestT, totalVerbalTestT]);

  console.log("total general", totalTipica);
  //CI verbal

  const [CiVerbal, setCIVerbal] = useState("");

  //CI manual

  const [CiManual, setCIManual] = useState("");

  //CI total

  const [CiTotal, setCITotal] = useState("");

  ///////TABLA CI Verbal

  useEffect(() => {
    if (totalVerbalTestT == 9) {
      setCIVerbal(44);
    } else if (totalVerbalTestT == 10) {
      setCIVerbal(46);
    } else if (totalVerbalTestT == 11) {
      setCIVerbal(47);
    } else if (totalVerbalTestT == 12) {
      setCIVerbal(49);
    } else if (totalVerbalTestT == 13) {
      setCIVerbal(50);
    } else if (totalVerbalTestT == 14) {
      setCIVerbal(51);
    } else if (totalVerbalTestT == 15) {
      setCIVerbal(53);
    } else if (totalVerbalTestT == 16) {
      setCIVerbal(54);
    } else if (totalVerbalTestT == 17) {
      setCIVerbal(55);
    } else if (totalVerbalTestT == 18) {
      setCIVerbal(57);
    } else if (totalVerbalTestT == 19) {
      setCIVerbal(58);
    } else if (totalVerbalTestT == 20) {
      setCIVerbal(59);
    } else if (totalVerbalTestT == 21) {
      setCIVerbal(61);
    } else if (totalVerbalTestT == 22) {
      setCIVerbal(62);
    } else if (totalVerbalTestT == 23) {
      setCIVerbal(63);
    } else if (totalVerbalTestT == 24) {
      setCIVerbal(65);
    } else if (totalVerbalTestT == 25) {
      setCIVerbal(66);
    } else if (totalVerbalTestT == 26) {
      setCIVerbal(67);
    } else if (totalVerbalTestT == 27) {
      setCIVerbal(69);
    } else if (totalVerbalTestT == 28) {
      setCIVerbal(70);
    } else if (totalVerbalTestT == 29) {
      setCIVerbal(72);
    } else if (totalVerbalTestT == 30) {
      setCIVerbal(73);
    } else if (totalVerbalTestT == 31) {
      setCIVerbal(74);
    } else if (totalVerbalTestT == 32) {
      setCIVerbal(76);
    } else if (totalVerbalTestT == 33) {
      setCIVerbal(77);
    } else if (totalVerbalTestT == 34) {
      setCIVerbal(78);
    } else if (totalVerbalTestT == 35) {
      setCIVerbal(80);
    } else if (totalVerbalTestT == 36) {
      setCIVerbal(81);
    } else if (totalVerbalTestT == 37) {
      setCIVerbal(82);
    } else if (totalVerbalTestT == 38) {
      setCIVerbal(84);
    } else if (totalVerbalTestT == 39) {
      setCIVerbal(85);
    } else if (totalVerbalTestT == 40) {
      setCIVerbal(86);
    } else if (totalVerbalTestT == 41) {
      setCIVerbal(88);
    } else if (totalVerbalTestT == 42) {
      setCIVerbal(89);
    } else if (totalVerbalTestT == 43) {
      setCIVerbal(91);
    } else if (totalVerbalTestT == 44) {
      setCIVerbal(92);
    } else if (totalVerbalTestT == 45) {
      setCIVerbal(93);
    } else if (totalVerbalTestT == 46) {
      setCIVerbal(95);
    } else if (totalVerbalTestT == 47) {
      setCIVerbal(96);
    } else if (totalVerbalTestT == 48) {
      setCIVerbal(97);
    } else if (totalVerbalTestT == 49) {
      setCIVerbal(99);
    } else if (totalVerbalTestT == 50) {
      setCIVerbal(100);
    } else if (totalVerbalTestT == 51) {
      setCIVerbal(101);
    } else if (totalVerbalTestT == 52) {
      setCIVerbal(103);
    } else if (totalVerbalTestT == 53) {
      setCIVerbal(104);
    } else if (totalVerbalTestT == 54) {
      setCIVerbal(105);
    } else if (totalVerbalTestT == 55) {
      setCIVerbal(107);
    } else if (totalVerbalTestT == 56) {
      setCIVerbal(108);
    } else if (totalVerbalTestT == 57) {
      setCIVerbal(109);
    } else if (totalVerbalTestT == 58) {
      setCIVerbal(111);
    } else if (totalVerbalTestT == 59) {
      setCIVerbal(112);
    } else if (totalVerbalTestT == 60) {
      setCIVerbal(114);
    } else if (totalVerbalTestT == 61) {
      setCIVerbal(115);
    } else if (totalVerbalTestT == 62) {
      setCIVerbal(116);
    } else if (totalVerbalTestT == 63) {
      setCIVerbal(118);
    } else if (totalVerbalTestT == 64) {
      setCIVerbal(119);
    } else if (totalVerbalTestT == 65) {
      setCIVerbal(120);
    } else if (totalVerbalTestT == 66) {
      setCIVerbal(122);
    } else if (totalVerbalTestT == 67) {
      setCIVerbal(123);
    } else if (totalVerbalTestT == 68) {
      setCIVerbal(124);
    } else if (totalVerbalTestT == 69) {
      setCIVerbal(126);
    } else if (totalVerbalTestT == 70) {
      setCIVerbal(127);
    } else if (totalVerbalTestT == 71) {
      setCIVerbal(128);
    } else if (totalVerbalTestT == 72) {
      setCIVerbal(130);
    } else if (totalVerbalTestT == 73) {
      setCIVerbal(131);
    } else if (totalVerbalTestT == 74) {
      setCIVerbal(132);
    } else if (totalVerbalTestT == 75) {
      setCIVerbal(134);
    } else if (totalVerbalTestT == 76) {
      setCIVerbal(135);
    } else if (totalVerbalTestT == 77) {
      setCIVerbal(137);
    } else if (totalVerbalTestT == 78) {
      setCIVerbal(138);
    } else if (totalVerbalTestT == 79) {
      setCIVerbal(139);
    } else if (totalVerbalTestT == 80) {
      setCIVerbal(141);
    } else if (totalVerbalTestT == 81) {
      setCIVerbal(142);
    } else if (totalVerbalTestT == 82) {
      setCIVerbal(143);
    } else if (totalVerbalTestT == 83) {
      setCIVerbal(145);
    } else if (totalVerbalTestT == 84) {
      setCIVerbal(146);
    } else if (totalVerbalTestT == 85) {
      setCIVerbal(147);
    } else if (totalVerbalTestT == 86) {
      setCIVerbal(149);
    } else if (totalVerbalTestT == 87) {
      setCIVerbal(150);
    } else if (totalVerbalTestT == 88) {
      setCIVerbal(151);
    } else if (totalVerbalTestT == 89) {
      setCIVerbal(153);
    } else if (totalVerbalTestT == 90) {
      setCIVerbal(154);
    } else if (totalVerbalTestT == 91) {
      setCIVerbal(155);
    } else {
      setCIVerbal("");
    }
  }, [totalVerbalTestT]);

  console.log("CI de la verbal:", CiVerbal);
  ///////TABLA CI Manual

  useEffect(() => {
    if (totalManualTestT == 14) {
      setCIManual(44);
    } else if (totalManualTestT == 15) {
      setCIManual(46);
    } else if (totalManualTestT == 16) {
      setCIManual(47);
    } else if (totalManualTestT == 17) {
      setCIManual(49);
    } else if (totalManualTestT == 18) {
      setCIManual(50);
    } else if (totalManualTestT == 19) {
      setCIManual(52);
    } else if (totalManualTestT == 20) {
      setCIManual(54);
    } else if (totalManualTestT == 21) {
      setCIManual(55);
    } else if (totalManualTestT == 22) {
      setCIManual(57);
    } else if (totalManualTestT == 23) {
      setCIManual(58);
    } else if (totalManualTestT == 24) {
      setCIManual(60);
    } else if (totalManualTestT == 25) {
      setCIManual(61);
    } else if (totalManualTestT == 26) {
      setCIManual(63);
    } else if (totalManualTestT == 27) {
      setCIManual(64);
    } else if (totalManualTestT == 28) {
      setCIManual(66);
    } else if (totalManualTestT == 29) {
      setCIManual(67);
    } else if (totalManualTestT == 30) {
      setCIManual(69);
    } else if (totalManualTestT == 31) {
      setCIManual(71);
    } else if (totalManualTestT == 32) {
      setCIManual(72);
    } else if (totalManualTestT == 33) {
      setCIManual(74);
    } else if (totalManualTestT == 34) {
      setCIManual(75);
    } else if (totalManualTestT == 35) {
      setCIManual(77);
    } else if (totalManualTestT == 36) {
      setCIManual(78);
    } else if (totalManualTestT == 37) {
      setCIManual(80);
    } else if (totalManualTestT == 38) {
      setCIManual(81);
    } else if (totalManualTestT == 39) {
      setCIManual(83);
    } else if (totalManualTestT == 40) {
      setCIManual(84);
    } else if (totalManualTestT == 41) {
      setCIManual(86);
    } else if (totalManualTestT == 42) {
      setCIManual(88);
    } else if (totalManualTestT == 43) {
      setCIManual(89);
    } else if (totalManualTestT == 44) {
      setCIManual(91);
    } else if (totalManualTestT == 45) {
      setCIManual(92);
    } else if (totalManualTestT == 46) {
      setCIManual(94);
    } else if (totalManualTestT == 47) {
      setCIManual(95);
    } else if (totalManualTestT == 48) {
      setCIManual(97);
    } else if (totalManualTestT == 49) {
      setCIManual(98);
    } else if (totalManualTestT == 50) {
      setCIManual(100);
    } else if (totalManualTestT == 51) {
      setCIManual(101);
    } else if (totalManualTestT == 52) {
      setCIManual(103);
    } else if (totalManualTestT == 53) {
      setCIManual(104);
    } else if (totalManualTestT == 54) {
      setCIManual(106);
    } else if (totalManualTestT == 55) {
      setCIManual(108);
    } else if (totalManualTestT == 56) {
      setCIManual(109);
    } else if (totalManualTestT == 57) {
      setCIManual(111);
    } else if (totalManualTestT == 58) {
      setCIManual(112);
    } else if (totalManualTestT == 59) {
      setCIManual(114);
    } else if (totalManualTestT == 60) {
      setCIManual(115);
    } else if (totalManualTestT == 61) {
      setCIManual(117);
    } else if (totalManualTestT == 62) {
      setCIManual(118);
    } else if (totalManualTestT == 63) {
      setCIManual(120);
    } else if (totalManualTestT == 64) {
      setCIManual(121);
    } else if (totalManualTestT == 65) {
      setCIManual(123);
    } else if (totalManualTestT == 66) {
      setCIManual(125);
    } else if (totalManualTestT == 67) {
      setCIManual(126);
    } else if (totalManualTestT == 68) {
      setCIManual(128);
    } else if (totalManualTestT == 69) {
      setCIManual(129);
    } else if (totalManualTestT == 70) {
      setCIManual(131);
    } else if (totalManualTestT == 71) {
      setCIManual(132);
    } else if (totalManualTestT == 72) {
      setCIManual(134);
    } else if (totalManualTestT == 73) {
      setCIManual(135);
    } else if (totalManualTestT == 74) {
      setCIManual(137);
    } else if (totalManualTestT == 75) {
      setCIManual(138);
    } else if (totalManualTestT == 76) {
      setCIManual(140);
    } else if (totalManualTestT == 77) {
      setCIManual(142);
    } else if (totalManualTestT == 78) {
      setCIManual(143);
    } else if (totalManualTestT == 79) {
      setCIManual(145);
    } else if (totalManualTestT == 80) {
      setCIManual(146);
    } else if (totalManualTestT == 81) {
      setCIManual(148);
    } else if (totalManualTestT == 82) {
      setCIManual(149);
    } else if (totalManualTestT == 83) {
      setCIManual(151);
    } else if (totalManualTestT == 84) {
      setCIManual(152);
    } else if (totalManualTestT == 85) {
      setCIManual(154);
    } else if (totalManualTestT == 86) {
      setCIManual(155);
    } else {
      setCIManual("");
    }
  }, [totalManualTestT]);

  console.log("CI de la manual:", CiManual);
  //////TABLA CI Total tipicas

  useEffect(() => {
    if (totalTipica == 27) {
      setCITotal(40);
    } else if (totalTipica == 28) {
      setCITotal(41);
    } else if (totalTipica == 29) {
      setCITotal(41);
    } else if (totalTipica == 30) {
      setCITotal(42);
    } else if (totalTipica == 31) {
      setCITotal(43);
    } else if (totalTipica == 32) {
      setCITotal(44);
    } else if (totalTipica == 33) {
      setCITotal(45);
    } else if (totalTipica == 34) {
      setCITotal(46);
    } else if (totalTipica == 35) {
      setCITotal(46);
    } else if (totalTipica == 36) {
      setCITotal(47);
    } else if (totalTipica == 37) {
      setCITotal(48);
    } else if (totalTipica == 38) {
      setCITotal(49);
    } else if (totalTipica == 39) {
      setCITotal(50);
    } else if (totalTipica == 40) {
      setCITotal(50);
    } else if (totalTipica == 41) {
      setCITotal(51);
    } else if (totalTipica == 42) {
      setCITotal(52);
    } else if (totalTipica == 43) {
      setCITotal(53);
    } else if (totalTipica == 44) {
      setCITotal(54);
    } else if (totalTipica == 45) {
      setCITotal(55);
    } else if (totalTipica == 46) {
      setCITotal(55);
    } else if (totalTipica == 47) {
      setCITotal(56);
    } else if (totalTipica == 48) {
      setCITotal(57);
    } else if (totalTipica == 49) {
      setCITotal(58);
    } else if (totalTipica == 50) {
      setCITotal(59);
    } else if (totalTipica == 51) {
      setCITotal(60);
    } else if (totalTipica == 52) {
      setCITotal(60);
    } else if (totalTipica == 53) {
      setCITotal(61);
    } else if (totalTipica == 54) {
      setCITotal(62);
    } else if (totalTipica == 55) {
      setCITotal(63);
    } else if (totalTipica == 56) {
      setCITotal(64);
    } else if (totalTipica == 57) {
      setCITotal(64);
    } else if (totalTipica == 58) {
      setCITotal(65);
    } else if (totalTipica == 59) {
      setCITotal(66);
    } else if (totalTipica == 60) {
      setCITotal(67);
    } else if (totalTipica == 61) {
      setCITotal(68);
    } else if (totalTipica == 62) {
      setCITotal(69);
    } else if (totalTipica == 63) {
      setCITotal(69);
    } else if (totalTipica == 64) {
      setCITotal(70);
    } else if (totalTipica == 65) {
      setCITotal(71);
    } else if (totalTipica == 66) {
      setCITotal(72);
    } else if (totalTipica == 67) {
      setCITotal(73);
    } else if (totalTipica == 68) {
      setCITotal(74);
    } else if (totalTipica == 69) {
      setCITotal(74);
    } else if (totalTipica == 70) {
      setCITotal(75);
    } else if (totalTipica == 71) {
      setCITotal(76);
    } else if (totalTipica == 72) {
      setCITotal(77);
    } else if (totalTipica == 73) {
      setCITotal(78);
    } else if (totalTipica == 74) {
      setCITotal(78);
    } else if (totalTipica == 75) {
      setCITotal(79);
    } else if (totalTipica == 76) {
      setCITotal(80);
    } else if (totalTipica == 77) {
      setCITotal(81);
    } else if (totalTipica == 78) {
      setCITotal(82);
    } else if (totalTipica == 79) {
      setCITotal(83);
    } else if (totalTipica == 80) {
      setCITotal(83);
    } else if (totalTipica == 81) {
      setCITotal(84);
    } else if (totalTipica == 82) {
      setCITotal(85);
    } else if (totalTipica == 83) {
      setCITotal(86);
    } else if (totalTipica == 84) {
      setCITotal(87);
    } else if (totalTipica == 85) {
      setCITotal(88);
    } else if (totalTipica == 86) {
      setCITotal(88);
    } else if (totalTipica == 87) {
      setCITotal(89);
    } else if (totalTipica == 88) {
      setCITotal(90);
    } else if (totalTipica == 89) {
      setCITotal(91);
    } else if (totalTipica == 90) {
      setCITotal(92);
    } else if (totalTipica == 91) {
      setCITotal(92);
    } else if (totalTipica == 92) {
      setCITotal(93);
    } else if (totalTipica == 93) {
      setCITotal(94);
    } else if (totalTipica == 94) {
      setCITotal(95);
    } else if (totalTipica == 95) {
      setCITotal(96);
    } else if (totalTipica == 96) {
      setCITotal(97);
    } else if (totalTipica == 97) {
      setCITotal(97);
    } else if (totalTipica == 98) {
      setCITotal(98);
    } else if (totalTipica == 99) {
      setCITotal(99);
    } else if (totalTipica == 100) {
      setCITotal(100);
    } else if (totalTipica == 101) {
      setCITotal(101);
    } else if (totalTipica == 102) {
      setCITotal(102);
    } else if (totalTipica == 103) {
      setCITotal(102);
    } else if (totalTipica == 104) {
      setCITotal(103);
    } else if (totalTipica == 105) {
      setCITotal(104);
    } else if (totalTipica == 106) {
      setCITotal(105);
    } else if (totalTipica == 107) {
      setCITotal(106);
    } else if (totalTipica == 108) {
      setCITotal(107);
    } else if (totalTipica == 109) {
      setCITotal(107);
    } else if (totalTipica == 110) {
      setCITotal(108);
    } else if (totalTipica == 111) {
      setCITotal(109);
    } else if (totalTipica == 112) {
      setCITotal(110);
    } else if (totalTipica == 113) {
      setCITotal(111);
    } else if (totalTipica == 114) {
      setCITotal(111);
    } else if (totalTipica == 115) {
      setCITotal(112);
    } else if (totalTipica == 116) {
      setCITotal(113);
    } else if (totalTipica == 117) {
      setCITotal(114);
    } else if (totalTipica == 118) {
      setCITotal(115);
    } else if (totalTipica == 119) {
      setCITotal(116);
    } else if (totalTipica == 120) {
      setCITotal(116);
    } else if (totalTipica == 121) {
      setCITotal(117);
    } else if (totalTipica == 122) {
      setCITotal(118);
    } else if (totalTipica == 123) {
      setCITotal(119);
    } else if (totalTipica == 124) {
      setCITotal(120);
    } else if (totalTipica == 125) {
      setCITotal(121);
    } else if (totalTipica == 126) {
      setCITotal(121);
    } else if (totalTipica == 127) {
      setCITotal(122);
    } else if (totalTipica == 128) {
      setCITotal(123);
    } else if (totalTipica == 129) {
      setCITotal(124);
    } else if (totalTipica == 130) {
      setCITotal(125);
    } else if (totalTipica == 131) {
      setCITotal(125);
    } else if (totalTipica == 132) {
      setCITotal(126);
    } else if (totalTipica == 133) {
      setCITotal(127);
    } else if (totalTipica == 134) {
      setCITotal(128);
    } else if (totalTipica == 135) {
      setCITotal(129);
    } else if (totalTipica == 136) {
      setCITotal(130);
    } else if (totalTipica == 137) {
      setCITotal(130);
    } else if (totalTipica == 138) {
      setCITotal(131);
    } else if (totalTipica == 139) {
      setCITotal(132);
    } else if (totalTipica == 140) {
      setCITotal(133);
    } else if (totalTipica == 141) {
      setCITotal(134);
    } else if (totalTipica == 142) {
      setCITotal(135);
    } else if (totalTipica == 143) {
      setCITotal(135);
    } else if (totalTipica == 144) {
      setCITotal(136);
    } else if (totalTipica == 145) {
      setCITotal(137);
    } else if (totalTipica == 146) {
      setCITotal(138);
    } else if (totalTipica == 147) {
      setCITotal(139);
    } else if (totalTipica == 148) {
      setCITotal(139);
    } else if (totalTipica == 149) {
      setCITotal(140);
    } else if (totalTipica == 150) {
      setCITotal(141);
    } else if (totalTipica == 151) {
      setCITotal(142);
    } else if (totalTipica == 152) {
      setCITotal(143);
    } else if (totalTipica == 153) {
      setCITotal(144);
    } else if (totalTipica == 154) {
      setCITotal(144);
    } else if (totalTipica == 155) {
      setCITotal(145);
    } else if (totalTipica == 156) {
      setCITotal(146);
    } else if (totalTipica == 157) {
      setCITotal(147);
    } else if (totalTipica == 158) {
      setCITotal(148);
    } else if (totalTipica == 159) {
      setCITotal(149);
    } else if (totalTipica == 160) {
      setCITotal(149);
    } else if (totalTipica == 161) {
      setCITotal(150);
    } else if (totalTipica == 162) {
      setCITotal(151);
    } else if (totalTipica == 163) {
      setCITotal(152);
    } else if (totalTipica == 164) {
      setCITotal(153);
    } else if (totalTipica == 165) {
      setCITotal(153);
    } else if (totalTipica == 166) {
      setCITotal(154);
    } else if (totalTipica == 167) {
      setCITotal(155);
    } else if (totalTipica == 168) {
      setCITotal(156);
    } else if (totalTipica == 169) {
      setCITotal(157);
    } else if (totalTipica == 170) {
      setCITotal(158);
    } else if (totalTipica == 171) {
      setCITotal(158);
    } else if (totalTipica == 172) {
      setCITotal(159);
    } else if (totalTipica == 173) {
      setCITotal(160);
    } else {
      setCITotal("");
    }
  }, [totalTipica]);

  console.log("CI del total:", CiTotal);
  return (
    <TestContext.Provider
      value={{
        datos,
        setDatos,
        age,
        setAge,
        verbalTest,
        setVerbalTest,
        manualTest,
        setManualTest,
        tipicaVerbal,
        tipicaManual,
      }}
    >
      {children}
    </TestContext.Provider>
  );
};

export default TestProvider;
