import React from "react";
import styled from "styled-components";

const Div = styled.div`
  flex: 1;
  min-width: 250px;
  border: 2px solid #fff;
  border-radius: 10px;
  padding: 10px;
  box-sizing: border-box;
  padding: 10px;
  margin: 10px;
`;

const Card = ({ ...props }) => {
  return <Div className={"card"} {...props}></Div>;
};

export default Card;
