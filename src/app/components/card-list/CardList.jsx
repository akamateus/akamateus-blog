import React from "react";
import styles from "./card-list.module.css";
import { Pagination } from "../pagination/Pagination";

export const CardList = () => {
  return (
    <div className={styles.container}>
      CardList
      <Pagination />
    </div>
  );
};
