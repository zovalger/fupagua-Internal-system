import { useState, useRef, useContext } from "react";

import { TestContext } from "../context/TestContext";

import { Button, FormGroup, Input, Label } from "reactstrap";
import styles from "../styles/form.module.css";

const VerbalTest = () => {

  const {verbalTest, setVerbalTest, tipicaVerbal} = useContext(TestContext)

  const inputs = useRef([]);

  function handleKeyPress(event, index) {
    if (event.key === "Enter") {
      if (index < inputs.current.length - 1) {
        inputs.current[index + 1].focus();
      } else {
        inputs.current[0].focus();
      }
      event.preventDefault();
    }
  }



  return (
    <div className={styles.TestContaniner}>
      <div className={styles.TestWidth}>
        {/********************Informacion********************/}
        <FormGroup className={styles.TestGroup}>
          <Label className={styles.TestLabel}>1-Información</Label>
          <Input
            className={styles.TestInput}
            placeholder="Directa"
            onKeyPress={(event) => handleKeyPress(event, 0)}
            innerRef={(el) => (inputs.current[0] = el)}
            type="number"
            onChange={(event) =>
              setVerbalTest({ ...verbalTest, informacion: event.target.value })
            }
            value={verbalTest.informacion}
          />
          <Input
            className={styles.TestInput}
            placeholder="Tipica"
            readOnly={true}
            disabled={true}
            type="number"
            style={{background:"#FFF"}}
            value={tipicaVerbal.informacion}
          />
        </FormGroup>

        {/********************Vocabulario********************/}
        <FormGroup className={styles.TestGroup}>
          <Label className={styles.TestLabel}>2-Vocabulario</Label>
          <Input
            className={styles.TestInput}
            placeholder="Directa"
            type="number"
            onKeyPress={(event) => handleKeyPress(event, 1)}
            innerRef={(el) => (inputs.current[1] = el)}
            value={verbalTest.vocabulario}
            onChange={(event) =>
              setVerbalTest({ ...verbalTest, vocabulario: event.target.value })
            }
          />
          <Input
            className={styles.TestInput}
            placeholder="Tipica"
            readOnly={true}
            disabled={true}
            type="number"
            style={{background:"#FFF"}}
            value={tipicaVerbal.vocabulario}
          />
        </FormGroup>

        {/********************Aritmética********************/}
        <FormGroup className={styles.TestGroup}>
          <Label className={styles.TestLabel}>3-Aritmética</Label>
          <Input
            className={styles.TestInput}
            placeholder="Directa"
            type="number"
            onKeyPress={(event) => handleKeyPress(event, 2)}
            innerRef={(el) => (inputs.current[2] = el)}
            value={verbalTest.aritmetica}
            onChange={(event) =>
              setVerbalTest({ ...verbalTest, aritmetica: event.target.value })
            }
          />
          <Input
            className={styles.TestInput}
            placeholder="Tipica"
            readOnly={true}
            disabled={true}
            type="number"
            style={{background:"#FFF"}}
            value={tipicaVerbal.aritmetica}
          />
        </FormGroup>
      </div>

      <div className={styles.TestWidth}>
        {/********************Semejanzas********************/}
        <FormGroup className={styles.TestGroup}>
          <Label className={styles.TestLabel}>4-Semejanzas</Label>
          <Input
            className={styles.TestInput}
            placeholder="Directa"
            type="number"
            onKeyPress={(event) => handleKeyPress(event, 3)}
            innerRef={(el) => (inputs.current[3] = el)}
            value={verbalTest.semejanzas}
            onChange={(event) =>
              setVerbalTest({ ...verbalTest, semejanzas: event.target.value })
            }
          />
          <Input
            className={styles.TestInput}
            placeholder="Tipica"
            readOnly={true}
            disabled={true}
            type="number"
            style={{background:"#FFF"}}
            value={tipicaVerbal.semejanzas}
          />
        </FormGroup>

        {/********************Comprensión********************/}
        <FormGroup className={styles.TestGroup}>
          <Label className={styles.TestLabel}>5-Comprensión</Label>
          <Input
            className={styles.TestInput}
            placeholder="Directa"
            type="number"
            onKeyPress={(event) => handleKeyPress(event, 4)}
            innerRef={(el) => (inputs.current[4] = el)}
            value={verbalTest.comprension}
            onChange={(event) =>
              setVerbalTest({ ...verbalTest, comprension: event.target.value })
            }
          />
          <Input
            className={styles.TestInput}
            placeholder="Tipica"
            readOnly={true}
            disabled={true}
            type="number"
            style={{background:"#FFF"}}
            value={tipicaVerbal.comprension}
          />
        </FormGroup>

        {/********************Dígitos********************/}
        <FormGroup className={styles.TestGroup}>
          <Label className={styles.TestLabel}>6-Dígitos</Label>
          <Input
            className={styles.TestInput}
            placeholder="Directa"
            type="number"
            onKeyPress={(event) => handleKeyPress(event, 5)}
            innerRef={(el) => (inputs.current[5] = el)}
            value={verbalTest.digitos}
            onChange={(event) =>
              setVerbalTest({ ...verbalTest, digitos: event.target.value })
            }
          />
          <Input
            className={styles.TestInput}
            placeholder="Tipica"
            readOnly={true}
            disabled={true}
            type="number"
            style={{background:"#FFF"}}
            value={tipicaVerbal.digitos}
          />
        </FormGroup>
      </div>
    </div>
  );
};

export default VerbalTest;
