import React from "react";
import { Link } from "react-router-dom";
import Image from "./Image";
import styles from "../css/NewsBig.module.css";
import XmlToReact from "react-html-parser";
import R7 from "../images/r7-logo.png";

const NewsBig = ({ dados }) => {
  if (dados === null) return null;

  let content = "";
  let credits = "noticias.r7.com";
  if (dados) {
    const xml = new DOMParser().parseFromString(
      dados.content._text,
      "text/xml"
    );
    const tags = xml.querySelectorAll(".credit_box");
    if (tags[0]) credits = tags[0].innerHTML;

    content = XmlToReact(dados.content._text);

    content.shift();
  }

  return (
    <div className={styles.newsBig}>
      <div className={styles.newsTop}>
        <div className={styles.newsImg}>
          {dados && <Image key={dados.id._text} src={dados.mediaurl._text} />}
          <p>{dados && dados.title._text}</p>
        </div>
        <div className={styles.newsTitle}>
          <Link to={`/noticias/${dados.description._text}`} className="title">
            {dados && dados.description._text}
          </Link>
        </div>
      </div>
      <div className={styles.newsDescription}>
        <p className={styles.credits}>Crédito: {credits}</p>
        <a className={styles.source} href={dados.url._text} target="_blank">
          Fonte: <Image src={R7} alt="r7.com" title="r7.com" />
        </a>
        {/* <div className={styles.content}>{content}</div> */}
      </div>
    </div>
  );
};

export default NewsBig;
