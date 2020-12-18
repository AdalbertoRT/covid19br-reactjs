import React from "react";
import styled from "styled-components";

const Div = styled.div`
  position: relative;
  width: 100%;
  height: 80%;
`;

const CardBottom = ({ ...props }) => {
  return <Div className={"cardBottom"} {...props}></Div>;
};

export default CardBottom;
