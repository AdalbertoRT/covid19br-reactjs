import React from "react";
import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";
import styles from "../css/Header.module.css";
import MenuMobile from "./MenuMobile";
import icon from "../images/menu.png";
import Menu from "./Menu";

const Cabecalho = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Hamburger = () => {
  function handleMenu({ target }) {
    console.log(target);
    target.classList.toggle(styles.rotate);
    document.querySelector(".menuMobile").classList.toggle(styles.active);
  }

  return (
    <div className={`${styles.iconContainer + " iconContainer"}`}>
      <img src={icon} alt="menu" onClick={handleMenu} className="iconMenu" />
    </div>
  );
};

const Brand = styled.div`
  grid-column: 2 / 3;
  align-self: center;
  justify-self: center;
  font-size: 1rem;
  transform: scale(1, 3.5);
`;

function Header() {
  function offMenu() {
    document.querySelector(".iconMenu").classList.toggle(styles.rotate);
    document.querySelector(".menuMobile").classList.toggle(styles.active);
  }
  return (
    <header className={styles.header}>
      <Cabecalho className={styles.cabecalho}>
        <Brand>
          <Link to="/">
            Covid-19 <span className={"green"}>B</span>
            <span className={"yellow"}>R</span>
          </Link>
        </Brand>
        <Hamburger />
        <MenuMobile onclick={offMenu} />
        <Menu />
      </Cabecalho>
    </header>
  );
}

export default Header;
