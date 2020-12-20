import React from "react";
import styled from "styled-components";

const Div = styled.div`
  position: relative;
  width: 100%;
  padding: 10px;
  grid-column: 2 / 6;
  box-sizing: border-box;
`;

const StatesContainer = ({ ...props }) => {
  return <Div {...props}></Div>;
};

export default StatesContainer;
