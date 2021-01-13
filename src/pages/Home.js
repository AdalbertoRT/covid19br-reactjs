import React from "react";
import List from "../components/List";
import StatesContainer from "../components/StatesContainer";
import CountryContainer from "../components/CountryContainer";
import { DataContext } from "../DataContext";
import styles from "../css/Home.module.css";
import Country from "../components/Country";
import States from "../components/States";
import Title from "../components/Title";

const Home = () => {
  const dataContext = React.useContext(DataContext);

  //RETURN (RENDER)

  if (dataContext.states === null || dataContext.dataBrazil === null)
    return null;

  return (
    <section className={styles.home}>
      <main className={styles.homeMain}>
        <Title text="Covid-19 Brasil" rotate="rotate" id="covidBR" />
        <div className={`${styles.mainContent + " mainContent"}`}>
          <CountryContainer>
            <Country className={styles.country} />
          </CountryContainer>

          <StatesContainer className={"statesContainer"}>
            <States className={styles.states} />
          </StatesContainer>
        </div>
      </main>
      <aside className={styles.homeAside}>
        <Title text="Últimas Notícias" id="latestNews" />
      </aside>
    </section>
  );
};

export default Home;
