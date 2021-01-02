import React from "react";
import styled from "styled-components";

const Div = styled.div`
  position: relative;
  width: 100%;
  box-sizing: border-box;
`;

const CountryContainer = ({ ...props }) => {
  return <Div {...props}></Div>;
};

export default CountryContainer;
