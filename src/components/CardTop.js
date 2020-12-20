import React from "react";
import styled from "styled-components";

const Div = styled.div`
  position: relative;
  width: 100%;
  height: 20%;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #fff;
  padding-bottom: 5px;
  box-sizing: border-box;
`;

const CardTop = ({ ...props }) => {
  return <Div className={"cardTop"} {...props}></Div>;
};

export default CardTop;
