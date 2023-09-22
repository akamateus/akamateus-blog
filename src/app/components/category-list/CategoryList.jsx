import React from "react";
import styles from "./category-list.module.css";
import Image from "next/image";
import Link from "next/link";

import { GiLightBackpack } from "react-icons/gi";
import { GiClothes } from "react-icons/gi";
import { PiBowlFoodFill } from "react-icons/pi";
import { GiWorld } from "react-icons/gi";
import { FaPeopleRoof } from "react-icons/fa6";
import { GiLaptop } from "react-icons/gi";

export const CategoryList = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>My Articles</h1>
      <div className={styles.categories}>
        <Link
          href="/blog?cat=style"
          className={`${styles.category} ${styles.style}`}
        >
          {/* <Image
            src="/style.png"
            alt=""
            width={32}
            height={32}
            className={styles.image}
          /> */}
          <GiLightBackpack
            alt=""
            width={32}
            height={32}
            className={styles.image}
          />
          Style
        </Link>

        <Link
          href="/blog?cat=fashion"
          className={`${styles.category} ${styles.fashion}`}
        >
          <GiClothes alt="" width={32} height={32} className={styles.image} />
          Fashion
        </Link>

        <Link
          href="/blog?cat=food"
          className={`${styles.category} ${styles.food}`}
        >
          <PiBowlFoodFill
            alt=""
            width={32}
            height={32}
            className={styles.image}
          />
          Food
        </Link>

        <Link
          href="/blog?cat=travel"
          className={`${styles.category} ${styles.travel}`}
        >
          <GiWorld alt="" width={32} height={32} className={styles.image} />
          Travel
        </Link>

        <Link
          href="/blog?cat=culture"
          className={`${styles.category} ${styles.culture}`}
        >
          <FaPeopleRoof
            alt=""
            width={32}
            height={32}
            className={styles.image}
          />
          Culture
        </Link>

        <Link
          href="/blog?cat=coding"
          className={`${styles.category} ${styles.coding}`}
        >
          <GiLaptop alt="" width={32} height={32} className={styles.image} />
          Coding
        </Link>
      </div>
    </div>
  );
};
