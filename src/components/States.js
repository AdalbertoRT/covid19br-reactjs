import React from "react";
import Card from "./Card";
import CardTop from "./CardTop";
import ListItem from "./ListItem";
import Image from "./Image";
import CardBottom from "./CardBottom";
import styles from "../css/Home.module.css";
import List from "./List";
import { DataContext } from "../DataContext";

const States = () => {
  const dataContext = React.useContext(DataContext);

  if (dataContext.states === null) return null;

  const listStates = dataContext.states.map((item) => {
    return (
      <ListItem key={item.uid}>
        <Card key={item.uid} className={styles.card}>
          <CardTop className={styles.cardTop}>
            <Image
              src={`https://devarthurribeiro.github.io/covid19-brazil-api/static/flags/${item.uf}.png`}
              alt={item.uf}
              key={item.uid}
            />
            <h3>{item.state}</h3>
          </CardTop>
          <CardBottom className={styles.cardBottom}>
            <p className={"atualizacao"}>
              <span>Atualização:</span>
              <span>{dataContext.ufUpdate}</span>
            </p>
            <p>
              <span>Casos:</span>
              <span>{item.cases}</span>
            </p>
            <p>
              <span>Mortes:</span>
              <span>{item.deaths}</span>
            </p>
            <p>
              <span>Suspeitos:</span>
              <span>{item.suspects}</span>
            </p>
            <p>
              <span>Descartados:</span>
              <span>{item.refuses}</span>
            </p>
          </CardBottom>
        </Card>
      </ListItem>
    );
  });

  return <List className={styles.listStates}>{listStates}</List>;
};

export default States;
