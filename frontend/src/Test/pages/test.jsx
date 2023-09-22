import { useState, useContext} from "react";

import { Link, useNavigate } from "react-router-dom";
import Nav from "../../UI/components/Nav";

import { BiChevronLeft } from "react-icons/bi";
import { Button } from "reactstrap";
import styles from "../styles/test.module.css";

import DataPatient from "../components/DataPatient";
import DateCalculation from "../components/DateCalculation";
import VerbalTest from "../components/VerbalTest";
import ManualTest from "../components/ManualTest";
import { Linear } from '../components/LinearGrap'

//Contextos

import { TestContext} from "../context/TestContext"; 

export function Test() {
  const navigate = useNavigate();

  const {datos, age, verbalTest, manualTest, tipicaVerbal, tipicaManual} = useContext(TestContext)

  localStorage.setItem('datos', JSON.stringify(datos));
  localStorage.setItem('age', JSON.stringify(age));
  localStorage.setItem('verbalTest', JSON.stringify(verbalTest));
  localStorage.setItem('manualTest', JSON.stringify(manualTest));
  localStorage.setItem('tipicaVerbal', JSON.stringify(tipicaVerbal));
  localStorage.setItem('tipicaManual', JSON.stringify(tipicaManual));


  return (
    <>
      <Nav
        leftIcon={<BiChevronLeft />}
        leftFuctionOnClick={() => navigate("/")}
        // leftIcon={<RxHamburgerMenu />}
        // leftFuctionOnClick={toggleAsideActive}
        title={"Test de Wechsler"}
      />

      <div className="scrollInSpacework">
        <div className="container">
          <div className="d-flex flex-column">
            <div className={styles.section}>
              <h2>Datos del paciente</h2>
              <DataPatient />
            </div>
            <div className={styles.section}>
              <h2>Calculo de la edad</h2>
              <DateCalculation />
            </div>
            <div className={styles.section}>
              <h2>Pruebas Verbales</h2>
              <VerbalTest />
            </div>
            <div className={styles.section}>
              <h2>Pruebas Manipulativas</h2>
              <ManualTest />
            </div>
            <Button className={styles.BtnResultado} href={'./test/resultado'} >Ver resultados</Button>
          </div>
          <Linear />
        </div>
      </div>
    </>
  );
}
