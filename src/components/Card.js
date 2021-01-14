import React from "react";
import styled from "styled-components";

const Div = styled.div`
  width: 100%;
  border: 2px solid #fff;
  border-radius: 10px;
  box-sizing: border-box;
  ${"" /* padding: 10px; */}
  margin: 5px 0;
`;

const Card = ({ ...props }) => {
  return <Div className={"card"} {...props}></Div>;
};

export default Card;
