import React from "react";
import styled from "styled-components";

const Div = styled.div`
  position: relative;
  width: 100%;
  padding: 10px;
  padding-bottom: 0;
  margin-bottom: -10px;
  box-sizing: border-box;
  grid-column: 2 / 6;
`;

const CountryContainer = ({ ...props }) => {
  return <Div {...props}></Div>;
};

export default CountryContainer;
