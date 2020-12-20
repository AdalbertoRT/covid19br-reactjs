import React from "react";
import styled from "styled-components";

const Div = styled.div`
  flex: 1;
  min-width: 250px;
  border: 1px solid #fff;
  border-radius: 10px;
  padding: 10px;
`;

const Card = ({ ...props }) => {
  return <Div className={"card"} {...props}></Div>;
};

export default Card;
