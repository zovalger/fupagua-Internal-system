import { useContext } from "react";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import styles from "../styles/form.module.css";
import { TestContext } from "../context/TestContext";


const DataPatient = () => {
  const { datos, setDatos } = useContext(TestContext)

  return (
    <>
      <FormGroup>
        <Label className={styles.label}>Nombres y Apellidos</Label>
        <Input
          type="Text"
          name="name"
          id="name"
          className={styles.input}
          placeholder="Nombres y apellidos"
          value={datos.nombres}
          onChange={(event) =>
            setDatos({ ...datos, nombres: event.target.value })
          }
        />
      </FormGroup>

      <FormGroup>
        <Label className={styles.label}>Sexo</Label>
        <Input
          type="Text"
          name="sex"
          id="sex"
          className={styles.input}
          placeholder="Sexo"
          value={datos.sexo}
          onChange={(event) =>
            setDatos({ ...datos, sexo: event.target.value })
          }
        />
      </FormGroup>

      <FormGroup>
        <Label className={styles.label}>Actividad</Label>
        <Input
          type="Text"
          name="activity"
          id="activity"
          className={styles.input}
          placeholder="Actividad"
          value={datos.actividad}
          onChange={(event) =>
            setDatos({ ...datos, actividad: event.target.value })
          }
        />
      </FormGroup>

      <FormGroup>
        <Label className={styles.label}>Curso</Label>
        <Input 
          type="Text" 
          name="course" 
          id="course" 
          className={styles.input} 
          placeholder="Curso"
          value={datos.curso}
          onChange={(event) =>
            setDatos({ ...datos, curso: event.target.value })
          }
          />
      </FormGroup>

      <FormGroup>
        <Label className={styles.label}>Centro</Label>
        <Input 
          type="Text" 
          name="center" 
          id="center" 
          className={styles.input} 
          placeholder="Centro"
          value={datos.centro}
          onChange={(event) =>
            setDatos({ ...datos, centro: event.target.value })
          }
          />
      </FormGroup>

      <FormGroup>
        <Label className={styles.label}>Residencia habitual</Label>
        <Input 
          type="Text" 
          name="habitual_residence" 
          id="habitual_residence" 
          className={styles.input} 
          placeholder="Residencia habitual"
          value={datos.residencia}
          onChange={(event) =>
            setDatos({ ...datos, residencia: event.target.value })
          }
          />
      </FormGroup>

      <FormGroup>
        <Label className={styles.label}>Lugar de nacimiento</Label>
        <Input 
          type="Text" 
          name="place_of_birth" 
          id="place_of_birth" 
          className={styles.input} 
          placeholder="Lugar de nacimiento" 
          value={datos.lugarNacimiento}
          onChange={(event) =>
            setDatos({ ...datos, lugarNacimiento: event.target.value })
          }
        />
      </FormGroup>

      <FormGroup>
        <Label className={styles.label}>Examinado por:</Label>
        <Input 
          type="Text" 
          name="examiner" 
          id="examiner" 
          className={styles.input} 
          placeholder="Examinado Por"
          value={datos.examinador}
          onChange={(event) =>
            setDatos({ ...datos, examinador: event.target.value })
          }
        />
      </FormGroup>
    </>
  );
};

export default DataPatient;
