import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/aboutImage.png")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
        <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>Education</h3>
              <p>
                I have completed my Bachelors in 2021 from ICFAI University and later pursued my Masters from Osmania University in 2023. 
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Role</h3>
              <p>
                I'm a Software Developer with experience in building web applications.I have experience developing in house web applications for companies. In the past, I used MERN full Stack multiple times for building applications. 
              </p>
            </div>
          </li>
          
          
        </ul>
      </div>
    </section>
  );
};
