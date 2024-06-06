import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <div>
      <section className={styles.wholeWebBg}>
        <div class="flex flex-col sm:flex-row sm:justify-center sm:my-3">
          <div class="sm:mx-1 flex justify-center my-2">© Copyright 2024 -</div>
          <div class="sm:mx-1 flex justify-center my-2">Developed by Mohammad Wazahat Ali Rza.</div>
          <div class="sm:mx-1 flex justify-center my-2"> All right reserved.</div>
        </div>
      </section>
    </div>
  );
};

export default Footer;
