import Button from "../Button";
import styles from "./Buttons.module.css";

export default function Buttons() {
  return (
    <div className={styles.container}>
      <Button styles={styles.button} name="Login" />
      <Button styles={styles.button} name="Get Started " />
    </div>
  );
}
