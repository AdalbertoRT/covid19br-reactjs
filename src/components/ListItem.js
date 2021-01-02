import React from "react";
import styled, { keyframes } from "styled-components";

const Li = styled.li`
  font-size: 1.5rem;
  box-sizing: border-box;

  a {
    color: white;

    &:hover {
      text-shadow: ${(props) => (props.hover = "0 0 5px var(--text-yellow)")};
    }
  }
  a.active {
    color: var(--text-green);
  }
`;

const ListItem = ({ ...props }) => {
  return <Li {...props}></Li>;
};

export default ListItem;
