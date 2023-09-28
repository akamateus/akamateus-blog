import React from "react";
import styles from "./menu.module.css";
import Link from "next/link";
import Image from "next/image";
import MenuPosts from "../menu-posts/MenuPosts";
import MenuCategories from "../menu-categories/MenuCategories";

export const Menu = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.subtitle}>{"Best content"}</h2>
      <h1 className={styles.title}>Most Popular</h1>
      <MenuPosts withImage={false} />
      {/* Another section 🔦*/}

      <h2 className={styles.subtitle}>Discover by topic</h2>
      <h1 className={styles.title}>Categories</h1>
      <MenuCategories />

      {/* Another section 🔦*/}
      <h2 className={styles.subtitle}>Chosen by Matt</h2>
      <h1 className={styles.title}>Editors pick</h1>
      <MenuPosts withImage={true} />
    </div>
  );
};

export default Menu;
