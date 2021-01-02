import React from "react";
import styled from "styled-components";
import styles from "../css/Home.module.css";

const Div = styled.div`
  position: relative;
  width: 100%;
  box-sizing: border-box;
  padding: 0;
`;

const StatesContainer = ({ ...props }) => {
  return <Div {...props} className={styles.statesContainer}></Div>;
};

export default StatesContainer;
