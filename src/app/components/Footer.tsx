import Link from "next/link";
import Image from "next/image";

import styles from "./Footer.module.css";
import logo from "../../../public/wealth-properties-logo.svg";
import fb from "../../../public/socials/facebook.svg";
import twitter from "../../../public/socials/twitter.svg";
import instagram from "../../../public/socials/instagram.svg";
import linkedin from "../../../public/socials/linkedin.svg";
import { LinkObject } from "../types";
import { headerLinks } from "./Header/Header";

const links: LinkObject[] = [
  { name: "Information Center", href: "infocentre" },
  { name: "Terms and Conditions", href: "tandc" },
  { name: "Privacy Policy", href: "privacy" },
];

interface Social {
  name: string;
  href: string;
  icon: string;
}

const socials: Social[] = [
  {
    name: "Facebook",
    href: "facebook.com/wealthproperties",
    icon: fb,
  },
  {
    name: "Instagram",
    href: "instagram.com/wealthproperties",
    icon: instagram,
  },
  {
    name: "Twitter",
    href: "twitter.com/wealthproperties",
    icon: twitter,
  },
  {
    name: "LinkedIn",
    href: "linkedin.com/wealthproperties",
    icon: linkedin,
  },
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.navContainer}>
        {/* Logo */}
        <Link href="/">
          <Image src={logo} alt="Wealth Properties" />
        </Link>

        {/* Navigation */}
        <nav>
          <ul className={styles.nav}>
            <div className={styles.linkList}>
              {headerLinks.map(({ name, href }) => (
                <li key={name}>
                  <Link href={href} className={styles.link}>
                    {name}
                  </Link>
                </li>
              ))}
            </div>
            <div className={styles.linkList}>
              {links.map(({ name, href }) => (
                <li key={name}>
                  <Link href={href} className={styles.link}>
                    {name}
                  </Link>
                </li>
              ))}
            </div>
          </ul>
        </nav>
      </div>

      <div className={styles.socialsContainer}>
        {/* Socials */}
        <div className={styles.socials}>
          {socials.map((social) => (
            <a key={social.name} href={`https://${social.href}`}>
              <Image src={social.icon} alt={social.name} />
            </a>
          ))}
        </div>

        {/* Copyright Notice */}
        <p>
          <small className={styles.copyright}>©2022 wealth properties.</small>
        </p>
      </div>
    </footer>
  );
}
