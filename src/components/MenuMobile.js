import React from "react";
import { NavLink } from "react-router-dom";
import styles from "../css/Header.module.css";

import List from "./List";
import ListItem from "./ListItem";
// import styled from "styled-components"

// const MenuMobile = styled.div`
//   grid-column: 2/3;
// `;

const MenuMobile = () => {
  return (
    <div className={`${styles.menuMobile + " menuMobile"}`}>
      <List className={`${styles.listMobile + " listMobile"}`}>
        <ListItem>
          <NavLink to="/" end>
            Início
          </NavLink>
        </ListItem>
        <ListItem>
          <NavLink to="/coronavirus">Coronavírus</NavLink>
        </ListItem>
        <ListItem>
          <NavLink to="/noticias">Notícias</NavLink>
        </ListItem>
        <ListItem>
          <NavLink to="/sobre">Sobre</NavLink>
        </ListItem>
      </List>
    </div>
  );
};

export default MenuMobile;
