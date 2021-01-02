import React from "react";
import styled from "styled-components";

const Div = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;

  .atualizacao {
    margin: 5px 0;
    color: var(--text-yellow);
    font-size: 0.8rem;
  }

  p {
    display: flex;
    justify-content: space-between;
    margin: 0;
    font-size: 1rem;
  }
`;

const CardBottom = ({ ...props }) => {
  return <Div className={"cardBottom"} {...props}></Div>;
};

export default CardBottom;
