import Illustration from "./Illustration";
import Button from "./Button";
import styles from "./Service.module.css";

interface Props {
  illustration: string;
  title: string;
  // Order in which illustration and text show
  orientation: "normal" | "reverse";
}

export default function Service({ illustration, title, orientation }: Props) {
  return (
    <div className={styles.container}>
      {/* Show illustration first */}
      {orientation === "normal" && <Illustration illustration={illustration} />}
      <div className={styles.textContainer}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.text}>
          Interior brings 41 years of interior designs experience right to your
          home or office. Our design professionals are equipped to help you
          determine the products and design that work best for our customers.
        </p>
        <ul className={styles.text}>
          <li>Create folders and files</li>
          <li>Set up an internet connection</li>
          <li>Connect your computer</li>
          <li>Navigate all of the programs</li>
          <li>Operating system</li>
        </ul>
        <Button name="Get Started" styles={styles.button} />
      </div>
      {/* Otherwise, show illustration last */}
      {orientation === "reverse" && (
        <Illustration illustration={illustration} />
      )}
    </div>
  );
}
