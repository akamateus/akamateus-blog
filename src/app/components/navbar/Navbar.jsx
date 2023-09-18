import React from "react";
import styles from "./navbar.module.css";

import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";
import AuthLinks from "../Auth-links/AuthLinks";
import ThemeToggle from "../theme-toggle/ThemeToggle";

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.social}>
        <FaLinkedin alt="linkedin" width={24} height={24} />
        <FaFacebook alt="facebook" width={24} height={24} />
        <FaInstagram alt="instagram" width={24} height={24} />
        <FaGithub alt="github" width={24} height={24} />
      </div>
      <div className={styles.logo}>akaMateus</div>
      <div className={styles.links}>
        <ThemeToggle />

        <Link href="/">Homepage</Link>
        <Link href="/">Contact</Link>
        <Link href="/">About</Link>

        <AuthLinks />
      </div>
    </div>
  );
};

export default Navbar;
