import React from "react";
import styles from "./singlePage.module.css";
import Menu from "../components/menu/Menu";
import Image from "next/image";

const SinglePage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.textContainer}>
          <h1> loren papa dhdu wubk caca pipuro mamagito ainda fhsu.</h1>
          <div className={styles.user}>
            <div className={styles.imageContainer}>
              <Image src="/p1.jpeg" alt="" fill className={styles.image} />
            </div>
            <div className={styles.userTextContainer}>
              <span className={styles.userName}> John Doe</span>
              <span className={styles.date}> 01.01.2023</span>
            </div>
          </div>
        </div>

        <div className={styles.imageContainer}>
          <Image src="" alt="" fill className={styles.image} />
        </div>
      </div>

      <div className={styles.content}>
        x<div className={styles.post}></div>
        <Menu />
      </div>
    </div>
  );
};

export default SinglePage;
