import React from "react";
import styles from "./menu.module.css";
import Link from "next/link";
import Image from "next/image";
import MenuPosts from "../menu-posts/MenuPosts";

export const Menu = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.subtitle}>{"Best content"}</h2>
      <h1 className={styles.title}>Most Popular</h1>
      <MenuPosts withImage={false} />
      {/* Another section 🔦🔦🔦🔦🔦*/}

      <h2 className={styles.subtitle}>Discover by topic</h2>
      <h1 className={styles.title}>Categories</h1>
      <div className={styles.categoryList}>
        <Link
          href="/blog?cat=style"
          className={`${styles.categoryItem} ${styles.style}`}
        >
          Style
        </Link>

        <Link
          href="/blog?cat=style"
          className={`${styles.categoryItem} ${styles.food}`}
        >
          Food
        </Link>

        <Link
          href="/blog?cat=style"
          className={`${styles.categoryItem} ${styles.travel}`}
        >
          Travel
        </Link>

        <Link
          href="/blog?cat=style"
          className={`${styles.categoryItem} ${styles.culture}`}
        >
          Culture
        </Link>

        <Link
          href="/blog?cat=style"
          className={`${styles.categoryItem} ${styles.fashion}`}
        >
          Fashion
        </Link>

        <Link
          href="/blog?cat=style"
          className={`${styles.categoryItem} ${styles.coding}`}
        >
          Coding
        </Link>
      </div>

      {/* Another section 🔦🔦🔦🔦🔦*/}
      <h2 className={styles.subtitle}>Chosen by Matt</h2>
      <h1 className={styles.title}>Editors pick</h1>
      <MenuPosts withImage={true} />
    </div>
  );
};

export default Menu;
