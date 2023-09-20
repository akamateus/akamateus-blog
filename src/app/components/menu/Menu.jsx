import React from "react";
import styles from "./menu.module.css";
import Link from "next/link";
import Image from "next/image";

export const Menu = () => {
  return (
    <div className={styles.container}>
      <h2>{"Best content"}</h2>
      <h1>Most Popular</h1>
      <div className={styles.items}>
        <Link href="/" className={styles.item}>
          <div className={styles.imageContainer}>
            <Image src="/p1.jpeg" alt="" fill className={styles.image} />
          </div>
          <div className={styles.textContainer}>
            <span className={`${styles.category} ${styles.travel}`}>
              Travel
            </span>
            <h3>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem.
            </h3>
            <div className={styles.detail}>
              <span className={styles.username}>Matt Oliver</span>
              <span className={styles.date}>10.12.2023</span>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};
