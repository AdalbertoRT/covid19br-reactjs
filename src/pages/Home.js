import React from "react";
import List from "../components/List";
import StatesContainer from "../components/StatesContainer";
import CountryContainer from "../components/CountryContainer";
import { DataContext } from "../DataContext";
import styles from "../css/Home.module.css";
import Country from "../components/Country";
import States from "../components/States";
import { Link } from "react-router-dom";

const Home = () => {
  const dataContext = React.useContext(DataContext);

  //RETURN (RENDER)

  if (dataContext.states === null || dataContext.dataBrazil === null)
    return null;

  return (
    <section className={styles.home}>
      <main className={styles.homeMain}>
        <CountryContainer className={"countryContainer"}>
          <Country />
        </CountryContainer>

        <StatesContainer>
          <States />
        </StatesContainer>
      </main>
      <aside className={styles.homeAside}>
        <button className={styles.btnLatestNews}>
          <Link to="/noticias">Últimas Notícias</Link>
        </button>
      </aside>
    </section>
  );
};

export default Home;
