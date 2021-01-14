import React from "react";
import { NavLink } from "react-router-dom";
import styles from "../css/Header.module.css";

import List from "./List";
import ListItem from "./ListItem";
// import styled from "styled-components"

// const MenuMobile = styled.div`
//   grid-column: 2/3;
// `;

const MenuMobile = ({ onclick }) => {
  return (
    <div className={`${styles.menuMobile + " menuMobile"}`}>
      <List className={`${styles.listMobile + " listMobile"}`}>
        <ListItem>
          <NavLink to="/" end onClick={onclick}>
            Início
          </NavLink>
        </ListItem>
        <ListItem>
          <NavLink to="/coronavirus" onClick={onclick}>
            Coronavírus
          </NavLink>
        </ListItem>
        {/* <ListItem>
          <NavLink to="/noticias" onClick={onclick}>
            Notícias
          </NavLink>
        </ListItem> */}
        <ListItem>
          <NavLink to="/sobre" onClick={onclick}>
            Sobre
          </NavLink>
        </ListItem>
      </List>
    </div>
  );
};

export default MenuMobile;
