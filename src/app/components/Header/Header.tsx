import Image from "next/image";
import Link from "next/link";

import NavBar from "./NavBar";
import { LinkObject } from "@/app/types";

import logo from "../../../../public/wealth-properties-logo.svg";
import styles from "./Header.module.css";
import Buttons from "./Buttons";

export const headerLinks: LinkObject[] = [
  { name: "Home", href: "/" },
  { name: "Profile", href: "/profile" },
  { name: "Reports", href: "/reports" },
  { name: "Insights", href: "/insights" },
];

export default function Header() {
  return (
    <header className={styles.header}>
      <Link href="/">
        <Image src={logo} alt="Wealth Properties" />
      </Link>
      <NavBar links={headerLinks} />
      <Buttons />
    </header>
  );
}
