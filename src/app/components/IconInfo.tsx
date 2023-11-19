import Image from "next/image";
import styles from "./IconInfo.module.css";

interface Props {
  icon: string;
  text: string;
}

export default function IconInfo({ icon, text }: Props) {
  return (
    <div className={styles.container}>
      <Image src={icon} alt="" aria-hidden="true" height={76} width={76} />
      <p className={styles.text}>{text}</p>
    </div>
  );
}
