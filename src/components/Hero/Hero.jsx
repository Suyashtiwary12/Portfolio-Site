import React from "react";

import styles from "./Hero.module.css";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Suyash</h1>
        <p className={styles.description}>
          I'm a full-stack developer seeking opportunities to
          leverage my skills in a dynamic and
          innovative environment.
        </p>
        <a href="mailto:suyash.studyhard@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src="/suyashpic.png"
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
