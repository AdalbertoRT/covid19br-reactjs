import React from "react";
import styled from "styled-components";

const Div = styled.div`
  position: relative;
  max-height: 100%;
  box-sizing: border-box;
  padding: 0;
  transition: all 0.3s linear;
`;

const StatesContainer = ({ ...props }) => {
  return <Div {...props} className="statesContainer"></Div>;
};

export default StatesContainer;
