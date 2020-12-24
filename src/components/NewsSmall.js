import React from "react";
import Image from "./Image";
import styles from "../css/NewsSmall.module.css";

const NewsSmall = ({ dados, onclick }) => {
  return (
    <div className={styles.newsSmall} onClick={onclick}>
      <div className={styles.newsImg}>
        {dados && <Image key={dados.id._text} src={dados.mediaurl._text} />}
      </div>
      <div className={styles.newsTitle}>
        <p>{dados && dados.title._text}</p>
      </div>
    </div>
  );
};

export default NewsSmall;
