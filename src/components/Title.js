import React from "react";
import styled from "styled-components";

const Titles = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  background-image: linear-gradient(to left, yellow, transparent 90%);
  background-size: 100%;
  background-repeat: no-repeat;
  font-weight: bold;
  box-sizing: border-box;
  text-transform: uppercase;
  margin: 10px 0 20px 0;

  .seta {
    text-align: right;
    color: #000;
    font-size: 1.3rem;
    margin-right: 10px;
    cursor: pointer;
    transition: all 0.3s linear;

    @media only screen and (min-width: 600px) {
      display: none;
    }
  }
  .seta.rotate {
    transform: rotate(90deg);
    transition: all 0.3s linear;
  }
`;

const Title = ({ text, id, rotate = "" }) => {
  function handleClick({ target }) {
    target.classList.toggle("rotate");
    if (target.parentElement.getAttribute("id") === "covidBR") {
      document.querySelector(".mainContent").classList.toggle("hide");
      document.querySelector(".countryContainer").classList.toggle("off");
      document.querySelector(".statesContainer").classList.toggle("off");
    }
  }

  return (
    <Titles id={id}>
      <span>{text}</span>
      <span className={`${"seta " + rotate}`} onClick={handleClick}>
        &#11162;
      </span>
    </Titles>
  );
};

export default Title;
