import React from "react";
import styled from "styled-components";

const Div = styled.div`
  position: relative;
  max-height: 100%;
  box-sizing: border-box;
  transition: all 0.3s linear;
`;

const CountryContainer = ({ ...props }) => {
  return <Div {...props} className="countryContainer"></Div>;
};

export default CountryContainer;
