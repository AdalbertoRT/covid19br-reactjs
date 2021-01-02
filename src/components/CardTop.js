import React from "react";
import styled from "styled-components";

const Div = styled.div`
  position: relative;
  width: 100%;
  padding-bottom: 5px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #fff;
  box-sizing: border-box;
`;

const CardTop = ({ ...props }) => {
  return <Div className={"cardTop"} {...props}></Div>;
};

export default CardTop;
