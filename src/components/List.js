import React from "react";
import styled from "styled-components";

const Ul = styled.ul`
  /* display: ${(props) => props.display || "block"};
  flex-direction: ${(props) => props.flexDirection || "row"};
  flex-wrap: ${(props) => props.flexWrap || "wrap"}; */
  list-style: none;
  margin: 0;
  padding: 0;
`;

const List = ({ ...props }) => {
  return <Ul {...props}></Ul>;
};

export default List;
