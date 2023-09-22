import { useState, useRef, useContext } from "react";

import { TestContext } from "../context/TestContext";

import { Button, FormGroup, Input, Label } from "reactstrap";
import styles from "../styles/form.module.css";

const ManualTest = () => {

  const { manualTest, setManualTest, tipicaManual } = useContext(TestContext)

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
        {/********************Figuras Incompletas********************/}
        <FormGroup className={styles.TestGroup}>
          <Label className={styles.TestLabel}>1-Figuras incompletas</Label>
          <Input
            className={styles.TestInput}
            placeholder="Directa"
            type="number"
            onKeyPress={(event) => handleKeyPress(event, 0)}
            innerRef={(el) => (inputs.current[0] = el)}
            onChange={(event) =>
              setManualTest({ ...manualTest, figurasI: event.target.value })
            }
            value={manualTest.figurasI}
          />
          <Input
            className={styles.TestInput}
            placeholder="Tipica"
            readOnly={true}
            disabled={true}
            type="number"
            style={{ background: "#FFF" }}
            value={tipicaManual.figurasI}
          />
        </FormGroup>

        {/********************Historietas********************/}
        <FormGroup className={styles.TestGroup}>
          <Label className={styles.TestLabel}>2-Historietas</Label>
          <Input
            className={styles.TestInput}
            placeholder="Directa"
            type="number"
            onKeyPress={(event) => handleKeyPress(event, 1)}
            innerRef={(el) => (inputs.current[1] = el)}
            onChange={(event) =>
              setManualTest({ ...manualTest, historietas: event.target.value })
            }
            value={manualTest.historietas}
          />
          <Input
            className={styles.TestInput}
            placeholder="Tipica"
            readOnly={true}
            disabled={true}
            type="number"
            style={{ background: "#FFF" }}
            value={tipicaManual.historietas}
          />
        </FormGroup>

        {/********************Cubos********************/}
        <FormGroup className={styles.TestGroup}>
          <Label className={styles.TestLabel}>3-Cubos</Label>
          <Input
            className={styles.TestInput}
            placeholder="Directa"
            type="number"
            onKeyPress={(event) => handleKeyPress(event, 2)}
            innerRef={(el) => (inputs.current[2] = el)}
            onChange={(event) =>
              setManualTest({ ...manualTest, cubos: event.target.value })
            }
            value={manualTest.cubos}
          />
          <Input
            className={styles.TestInput}
            placeholder="Tipica"
            readOnly={true}
            disabled={true}
            type="number"
            style={{ background: "#FFF" }}
            value={tipicaManual.cubos}
          />
        </FormGroup>
      </div>
      <div className={styles.TestWidth}>
        {/********************Rompecabezas*******************/}
        <FormGroup className={styles.TestGroup}>
          <Label className={styles.TestLabel}>4-Rompecabezas</Label>
          <Input
            className={styles.TestInput}
            placeholder="Directa"
            type="number"
            onKeyPress={(event) => handleKeyPress(event, 3)}
            innerRef={(el) => (inputs.current[3] = el)}
            onChange={(event) =>
              setManualTest({ ...manualTest, rompeCabezas: event.target.value })
            }
            value={manualTest.rompeCabezas}
          />
          <Input
            className={styles.TestInput}
            placeholder="Tipica"
            readOnly={true}
            disabled={true}
            type="number"
            style={{ background: "#FFF" }}
            value={tipicaManual.rompeCabezas}
          />
        </FormGroup>

        {/********************Claves********************/}
        <FormGroup className={styles.TestGroup}>
          <Label className={styles.TestLabel}>5-Claves</Label>
          <Input
            className={styles.TestInput}
            placeholder="Directa"
            type="number"
            onKeyPress={(event) => handleKeyPress(event, 4)}
            innerRef={(el) => (inputs.current[4] = el)}
            onChange={(event) =>
              setManualTest({ ...manualTest, claves: event.target.value })
            }
            value={manualTest.claves}
          />
          <Input
            className={styles.TestInput}
            placeholder="Tipica"
            readOnly={true}
            disabled={true}
            type="number"
            style={{ background: "#FFF" }}
            value={tipicaManual.claves}
          />
        </FormGroup>

        {/******************** Laberintos ********************/}
        <FormGroup className={styles.TestGroup}>
          <Label className={styles.TestLabel}>6-Laberintos</Label>
          <Input
            className={styles.TestInput}
            placeholder="Directa"
            type="number"
            onKeyPress={(event) => handleKeyPress(event, 5)}
            innerRef={(el) => (inputs.current[5] = el)}
            onChange={(event) =>
              setManualTest({ ...manualTest, laberintos: event.target.value })
            }
            value={manualTest.laberintos}
          />
          <Input
            className={styles.TestInput}
            placeholder="Tipica"
            readOnly={true}
            disabled={true}
            type="number"
            style={{ background: "#FFF" }}
            value={tipicaManual.laberintos}
          />
        </FormGroup>
      </div>
    </div>
  );
};

export default ManualTest;
