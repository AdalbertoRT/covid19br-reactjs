import React from "react";
import styled from "styled-components";

const Div = styled.div`
  position: relative;
  width: 100%;
  height: 80%;
  display: flex;
  flex-direction: column;

  .atualizacao {
    margin: 5px 0;
    color: var(--text-yellow);
  }

  p {
    display: flex;
    justify-content: space-between;
    margin: 0;
  }
`;

const CardBottom = ({ ...props }) => {
  return <Div className={"cardBottom"} {...props}></Div>;
};

export default CardBottom;
