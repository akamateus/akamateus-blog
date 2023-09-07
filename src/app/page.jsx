import Link from "next/link";
import styles from "./homepage.module.css";
import { Featured } from "./components/featured/Featured";
import { CategoryList } from "./components/category-list/CategoryList";
import { CardList } from "./components/card-list/CardList";
import { Menu } from "./components/menu/Menu";

export default function Home() {
  return (
    <div className={styles.container}>
      <Featured />
      <CategoryList />
      <div className={styles.content}>
        <CardList />
        <Menu />
      </div>
    </div>
  );
}
