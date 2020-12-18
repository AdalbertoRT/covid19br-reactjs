import React from "react";
import styled from "styled-components";

const MenuItem = styled.li`
  margin: 0 1rem;
  font-size: 1.5rem;

  a {
    color: ${(props) => (props.active ? "palevioletred" : "white")};

    &:hover {
      text-shadow: ${(props) => (props.hover = "0 0 5px palevioletred")};
    }
  }
`;

const ListItem = ({ ...props }) => {
  return <MenuItem {...props}></MenuItem>;
};

export default ListItem;
