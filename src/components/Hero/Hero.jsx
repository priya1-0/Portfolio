import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Vishnupriya</h1>
        <p className={styles.description}>
          I'm a full-stack developer with around 2 years of internship experience in Web Development. 
        </p>
        {/* <a href="mailto:priyavishnu8008@email.com" className={styles.contactBtn}>
          Contact Me
        </a> */}
      </div>
      <img
        src={getImageUrl("hero/heroImage.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
