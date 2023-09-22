import { useState, useContext } from "react";

import { Button, FormGroup, Input, Label } from "reactstrap";
import styles from "../styles/form.module.css";
import { TestContext } from "../context/TestContext";


const DateCalculation = () => {

  const { age, setAge } = useContext(TestContext)

  const [birthdate, setBirthdate] = useState("");
  const [currentdate, setCurrentDate] = useState("");
  

  function calculateAge() {
    const birthDate = new Date(birthdate);
    const currentDate = new Date(currentdate);

    let years = currentDate.getFullYear() - birthDate.getFullYear();
    let months = currentDate.getMonth() - birthDate.getMonth();
    let days = currentDate.getDate() - birthDate.getDate();

    // Ajustar meses y días si la fecha actual es anterior al cumpleaños
    if (months < 0 || (months === 0 && days < 0)) {
      years--;
      months += 12;
      if (days < 0) {
        months--;
        days += new Date(
          currentDate.getFullYear(),
          currentDate.getMonth(),
          0
        ).getDate();
      }
    }

    setAge({ years, months, days });
  }

  return (
    <div className={styles.formDate}>

      <FormGroup>
        <Label>Fecha del Examen</Label>
        <Input
          type="date"
          value={currentdate}
          onChange={(event) => setCurrentDate(event.target.value)}
          className={styles.inputDate}
        />
      </FormGroup>

      <FormGroup>
        <Label>Fecha de Nacimiento</Label>
        <Input
          type="date"
          value={birthdate}
          onChange={(event) => setBirthdate(event.target.value)}
          className={styles.inputDate}
        />
      </FormGroup>

      <FormGroup className={styles.containerInputDate}>
                  {/* Edad */}
        <div>
          <Label>Edad:</Label>
          <Input
            type="text"
            value={age.years}
            readOnly={true}
            disabled={true}
            style={{ background: "#FFF" }}
            className={styles.inputDate}
          />
        </div>
               {/* Meses*/}
        <div>
          <Label>Mes:</Label>
          <Input
            type="text"
            value={age.months}
            readOnly={true}
            disabled={true}
            style={{ background: "#FFF" }}
            className={styles.inputDate}
          />
   
        </div>
               {/* dias*/}
        <div >
          <Label>Días:</Label>
          <Input
            type="text"
            value={age.days}
            readOnly={true}
            disabled={true}
            style={{ background: "#FFF" }}
            className={styles.inputDate}
          />
        </div>
      </FormGroup>

      <Button onClick={calculateAge} className={styles.BtnDate}>
        Calcular Edad
      </Button>
    </div>
  );
};

export default DateCalculation;
