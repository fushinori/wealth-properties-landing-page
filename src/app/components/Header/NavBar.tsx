"use client";

import Link from "next/link";
import { LinkObject } from "@/app/types";
import { usePathname } from "next/navigation";
import styles from "./NavBar.module.css";

interface Props {
  links: LinkObject[];
}

export default function NavBar({ links }: Props) {
  const pathname = usePathname();
  return (
    <nav>
      <ul className={styles.navbar}>
        {links.map(({ name, href }) => (
          <li key={name}>
            <Link
              className={`${styles.link} ${
                pathname === href ? styles.active : ""
              }`}
              href={href}
            >
              {name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
