import Button from "./components/Button";
import Service from "./components/Service";
import Features from "./features";
import SecondaryCta from "./components/SecondaryCta";
import Image from "next/image";
import woman from "../../public/woman-hero-section.svg";
import building from "../../public/hero-buildings.png";
import manLaptop from "../../public/man-laptop.svg";
import graph from "../../public/graph.svg";
import trends from "../../public/trends.svg";
import manageAccounts from "../../public/manage-accounts.svg";
import leadManagement from "../../public/lead-management.svg";
import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      {/* Gradients */}
      <div className={`${styles.gradient} ${styles.gradientTop}`}></div>
      <div className={`${styles.gradient} ${styles.gradientLeft}`}></div>
      <div className={`${styles.gradient} ${styles.gradientRight}`}></div>

      {/* Max width container */}
      <div className={styles.maxWidth}>
        {/* Hero Section */}
        <div className={styles.hero}>
          <div className={styles.heroInfo}>
            <h1 className={styles.mainHeading}>
              Buy your <span className={styles.bold}>dream home</span> in Kyiv!
            </h1>
            <Button name="Get Started" styles={styles.cta} />
          </div>

          {/* Illustration */}
          <div className={styles.heroIllustration}>
            <Image
              src={woman}
              alt=""
              aria-hidden="true"
              className={styles.woman}
              height={270}
              width={245}
            />
            <Image
              src={building}
              alt=""
              aria-hidden="true"
              className={styles.building}
            />
          </div>
        </div>
        <div className={styles.textBlock}>
          <h2 className={styles.secondHeading}>
            Selling a property can be quite challenging if you don&apos;t have
            the right tools at your disposals.
          </h2>
          <p className={styles.paragraph}>
            We help our clients sell, buy or rent properties hassle free. Due to
            our unparalleled results, expertise and dedication, we rank amongst
            the top 6 agencies in Kyiv.We are very proud of the service we
            provide and what our guests have to say about us.
          </p>
        </div>

        {/* Services */}
        <section className={styles.servicesContainer}>
          <h2 className={styles.servicesHeading}>
            We offer a complete spectrum of services for your real estate needs
          </h2>

          <Service
            illustration={manLaptop}
            title="Create Attractive Profiles"
            orientation="normal"
          />

          <Service
            illustration={graph}
            title="Real-Time Insightful Reporting"
            orientation="reverse"
          />

          <Service
            illustration={trends}
            title="Target the Right Trends"
            orientation="normal"
          />

          <Service
            illustration={manageAccounts}
            title="Manage the Account"
            orientation="reverse"
          />

          <Service
            illustration={leadManagement}
            title="Lead Management System"
            orientation="normal"
          />
        </section>
      </div>

      <div className={styles.blackBg}>
        {/* Features */}
        <div className={styles.maxWidth}>
          <Features />
        </div>

        {/* Divider */}
        <div className={styles.divider} />

        {/* Next CTA */}
        <div className={styles.maxWidth}>
          <SecondaryCta />
        </div>
      </div>
    </>
  );
}
