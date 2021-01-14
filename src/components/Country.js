import React from "react";
import Card from "./Card";
import CardBottom from "./CardBottom";
import CardTop from "./CardTop";
import Image from "./Image";
import Brasil from "../images/brazil.png";
import { DataContext } from "../DataContext";
import styles from "../css/Home.module.css";

const Country = () => {
  const country = React.useContext(DataContext);

  if (country.brazil === null) return null;

  return (
    <Card className={styles.card}>
      <div className={styles.cardContent}>
        <CardTop className={styles.cardTop}>
          <Image src={Brasil} alt={"Brasil"} />
          <h3>Brasil</h3>
        </CardTop>
        <CardBottom className={styles.cardBottom}>
          <p className={"atualizacao"}>
            <span>Atualização:</span>
            <span>{country.brUpdate}</span>
          </p>
          <p>
            <span>Casos: </span>
            <span>{country.brazil.confirmed}</span>
          </p>
          <p>
            <span>Mortes: </span>
            <span>{country.brazil.deaths}</span>
          </p>
          <p>
            <span>Recuperados: </span>
            <span>{country.brazil.recovered}</span>
          </p>
        </CardBottom>
      </div>
    </Card>
  );
};

export default Country;
