import Image from "next/image";
import styles from "./card.module.css";
import Link from "next/link";

const Card = ({ key, item }) => {
  return (
    <div className={styles.container} key={key}>
      <div className={styles.imageContainer}>
        <Image className={styles.image} src="/p1.jpeg" alt="" fill />
      </div>
      <div className={styles.textContainer}>
        <div className={styles.detail}>
          <span className={styles.date}>11.11.2023 - </span>
          <span className={styles.category}>CULTURE</span>
        </div>
        <Link href="/" className={styles}>
          <h1>{item.title}</h1>
        </Link>
        <p className={styles.description}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dictum
          mauris id tristique lobortis. Nullam ut ullamcorper metus. Sed
          efficitur viverra posuere. Etiam in erat nec elit volutpat congue et
          vitae risus. Maecenas mollis bibendum metus, sit amet luctus lorem
          semper ut.
        </p>
        <Link href="/" className={styles.link}>
          Read More
        </Link>
      </div>
    </div>
  );
};

export default Card;
