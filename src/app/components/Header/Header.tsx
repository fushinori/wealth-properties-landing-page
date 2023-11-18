import Image from "next/image";

import NavBar, { LinkObject } from "./NavBar";

import logo from "../../../../public/wealth-properties-logo.svg";
import styles from "./Header.module.css";
import Buttons from "./Buttons";

const links: LinkObject[] = [
  { name: "Home", href: "/" },
  { name: "Profile", href: "/profile" },
  { name: "Reports", href: "/reports" },
  { name: "Insights", href: "/insights" },
];

export default function Header() {
  return (
    <header className={styles.header}>
      <Image src={logo} alt="Wealth Properties" />
      <NavBar links={links} />
      <Buttons />
    </header>
  );
}
