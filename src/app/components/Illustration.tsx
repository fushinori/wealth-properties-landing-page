import Image from "next/image";
import background from "../../../public/background.svg";
import styles from "./Illustration.module.css";

interface Props {
  // Source of the illustration
  illustration: string;
}

export default function Illustration({ illustration }: Props) {
  return (
    <div className={styles.container}>
      <Image
        src={illustration}
        alt=""
        aria-hidden="true"
        className={styles.illustration}
      />
      <Image
        src={background}
        alt=""
        aria-hidden="true"
        className={styles.background}
      />
    </div>
  );
}
