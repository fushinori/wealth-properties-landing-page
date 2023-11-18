import SecondaryButton from "../Button/SecondaryButton";
import styles from "./Buttons.module.css";

export default function Buttons() {
  return (
    <div className={styles.buttons}>
      <SecondaryButton name="Login" />
      <SecondaryButton name="Get Started " />
    </div>
  );
}
