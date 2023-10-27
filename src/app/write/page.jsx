"use client";
import Image from "next/image";
import styles from "./writePage.module.css";
import { useState } from "react";
import { HiOutlineSquaresPlus } from "react-icons/hi2";
import {
  HiOutlinePhotograph,
  HiOutlineExternalLink,
  HiOutlineVideoCamera,
} from "react-icons/hi";

import ReactQuill from "react-quill";
import "react-quill/dist/quill.bubble.css";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

const WritePage = () => {
  const { status } = useSession();

  const router = useRouter();

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");

  if (status === "loading") {
    return <div className={styles.loading}> Loading... </div>;
  }

  if (status === "authenticated") {
    router.push("/");
  }

  return (
    <div className={styles.container}>
      <input type="text" placeholder="Title" className={styles.input} />
      <div className={styles.editor}>
        <button className={styles.button} onClick={() => setOpen(!open)}>
          <HiOutlineSquaresPlus alt="" height={16} width={16} />
        </button>

        {open && (
          <div className={styles.add}>
            <button className={styles.addButton}>
              <HiOutlinePhotograph alt="" height={16} width={16} />
            </button>
            <button className={styles.addButton}>
              <HiOutlineExternalLink alt="" height={16} width={16} />
            </button>
            <button className={styles.addButton}>
              <HiOutlineVideoCamera
                src="/video.png"
                alt=""
                height={16}
                width={16}
              />
            </button>
          </div>
        )}
        <ReactQuill
          className={styles.textArea}
          theme="bubble"
          value={value}
          onChange={setValue}
          placeholder="You write here... ✍🏽"
        />
      </div>
      <button className={styles.postButton}>Post</button>
    </div>
  );
};

export default WritePage;
