import React from "react";
import styled from "styled-components";

const Menu = styled.ul`
  display: ${(props) => props.display || "block"};
  flex-direction: ${(props) => props.flexDirection || "row"};
  flex-wrap: ${(props) => props.flexWrap || "wrap"};
  align-items: center;
  list-style: none;
  margin: 0;
  padding: 0;
`;

const List = ({ ...props }) => {
  return <Menu {...props}></Menu>;
};

export default List;
