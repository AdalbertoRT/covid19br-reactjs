import React from "react";
import { NavLink } from "react-router-dom";
import styles from "../css/Header.module.css";
import List from "./List";
import ListItem from "./ListItem";

const Menu = () => {
  return (
    <div className={styles.menu}>
      <List className={styles.list}>
        <ListItem>
          <NavLink to="/" end>
            Início
          </NavLink>
        </ListItem>
        <ListItem>
          <NavLink to="/coronavirus">Coronavírus</NavLink>
        </ListItem>
        {/* <ListItem>
          <NavLink to="/noticias">Notícias</NavLink>
        </ListItem> */}
        <ListItem>
          <NavLink to="/sobre">Sobre</NavLink>
        </ListItem>
      </List>
    </div>
  );
};

export default Menu;
