import styles from "./themeToggle.module.css";

import { RiMoonClearLine } from "react-icons/ri";

import { RiSunFoggyLine } from "react-icons/ri";

const ThemeToggle = () => {
  return (
    <div className={styles.container}>
      <RiMoonClearLine width={14} height={14} />
      <div className={styles.ball}></div>
      <RiSunFoggyLine width={14} height={14} />
    </div>
  );
};

export default ThemeToggle;
