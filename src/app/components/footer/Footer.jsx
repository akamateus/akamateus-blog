import React from "react";
import styles from "./footer.module.css";
import Image from "next/image";
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa6";
import Link from "next/link";

export const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <div className={styles.logo}>
          <Image src="/logo.png" alt="akamateus blog" width={50} height={50} />
          <h1 className={styles.logoText}>akaMateus Blog</h1>
        </div>
        <p className={styles.description}>
          At vero eos et accusamus et iusto odio dignissimos ducimus qui
          blanditiis praesentium voluptatum deleniti atque corrupti quos dolores
          et quas molestias excepturi sint occaecati.
        </p>
        <div className={styles.icons}>
          <FaLinkedin alt="linkedin" width={24} height={24} />
          <FaFacebook alt="facebook" width={24} height={24} />
          <FaInstagram alt="instagram" width={24} height={24} />
          <FaGithub alt="github" width={24} height={24} />
        </div>
      </div>
      <div className={styles.links}>
        <div className={styles.list}>
          <span className={styles.listTitle}> Links</span>
          <Link href="/">Homepage</Link>
          <Link href="/">Blog</Link>
          <Link href="/">About</Link>
          <Link href="/">Contact</Link>
        </div>

        <div className={styles.list}>
          <span className={styles.listTitle}> Tags</span>
          <Link href="/">Style</Link>
          <Link href="/">Fashion</Link>
          <Link href="/">Coding</Link>
          <Link href="/">Travel</Link>
        </div>

        <div className={styles.list}>
          <span className={styles.listTitle}> Social</span>
          <Link href="/">Instagram</Link>
          <Link href="/">Linkedin</Link>
          <Link href="/">Github</Link>
          <Link href="/">Facebook</Link>
        </div>
      </div>
    </div>
  );
};
