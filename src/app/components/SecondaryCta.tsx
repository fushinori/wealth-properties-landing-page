import Image from "next/image";

import Button from "./Button";
import styles from "./SecondaryCta.module.css";
import manOnSearchBar from "../../../public/man-on-searchbar.png";

export default function SecondaryCta() {
  return (
    <div className={styles.container}>
      <Image src={manOnSearchBar} alt="" aria-hidden="true" />
      <div className={styles.textContainer}>
        <h2 className={styles.heading}>
          Let Us Help You Find Your Ideal Buyer!
        </h2>
        <p className={styles.paragraph}>
          Interior brings 41 years of interior designs experience right to your
          home or office. Our design professionals are equipped to help you
          determine the products and design that work best for our customers.
        </p>
        <Button name="Register Now" styles={styles.cta} />
      </div>
    </div>
  );
}
