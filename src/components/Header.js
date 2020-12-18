import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import List from "./List";
import ListItem from "./ListItem";

const Cabecalho = styled.header`
  width: 100%;
  height: 50px;
  background-color: rgba(255, 255, 255, 0.3);
  justify-content: center;
  display: grid;
  grid-template-columns: repeat(2, 1fr) repeat(2, 3fr) repeat(2, 1fr);
  align-items: center;
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
      <Nav>
        <List display="flex">
          <ListItem active>
            <Link to="/">Início</Link>
          </ListItem>
          <ListItem>
            <Link to="/coronavirus">Sobre o Coronavírus</Link>
          </ListItem>
          <ListItem>
            <Link to="/noticias">Últimas Notícias</Link>
          </ListItem>
          <ListItem>
            <Link to="/sobre">Sobre</Link>
          </ListItem>
        </List>
      </Nav>
    </Cabecalho>
  );
}

export default Header;
