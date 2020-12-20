import React from "react";
import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";
import List from "./List";
import ListItem from "./ListItem";

const Cabecalho = styled.header`
  width: 100%;
  height: 50px;
  background-color: #5a5a5a;
  justify-content: center;
  display: grid;
  grid-template-columns: repeat(2, 1fr) repeat(2, 3fr) repeat(2, 1fr);
  align-items: center;
  position: fixed;
  z-index: 90;
`;

const Brand = styled.div`
  grid-column: 2 / 3;
  align-self: center;
  justify-self: center;
  font-size: 1rem;
  transform: scale(1, 3.5);
`;

const Nav = styled.nav`
  grid-column: 3 / 6;
  justify-self: flex-end;
`;

function Header() {
  return (
    <Cabecalho>
      <Brand>
        <Link to="/">
          Covid-19 <span className={"green"}>B</span>
          <span className={"yellow"}>R</span>
        </Link>
      </Brand>
      <Nav className={"menu"}>
        <List display="flex">
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
      </Nav>
    </Cabecalho>
  );
}

export default Header;
