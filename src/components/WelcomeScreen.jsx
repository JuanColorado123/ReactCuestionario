import { Link } from "react-router-dom";
import styles from "./WelcomeScreen.module.scss";

export default function WelcomeScreen() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Bienvenid@ al Formulario</h1>
      <p className={styles.text}>Presiona el botón para comenzar con las preguntas.</p>
      <Link to="/formulario" className={styles.button}>
        Ir al formulario
      </Link>
    </div>
  );
}
