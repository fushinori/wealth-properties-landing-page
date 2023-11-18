import styles from "./SecondaryButton.module.css";

interface Props {
  name: string;
  onClick?: () => void;
}

export default function SecondaryButton({ name, onClick }: Props) {
  return (
    <button className={styles.button} onClick={onClick} type="button">
      {name}
    </button>
  );
}
