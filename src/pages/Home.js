import React from "react";
import List from "../components/List";
import StatesContainer from "../components/StatesContainer";
import CountryContainer from "../components/CountryContainer";
import { DataContext } from "../DataContext";
import styles from "../css/Home.module.css";
import Country from "../components/Country";
import States from "../components/States";
import Title from "../components/Title";
import { NewsBRContext } from "../NewsBRContext";
import Card from "../components/Card";
import ListItem from "../components/ListItem";
import CardTop from "../components/CardTop";
import Image from "../components/Image";
import CardBottom from "../components/CardBottom";

const Home = () => {
  const dataContext = React.useContext(DataContext);
  const newsContext = React.useContext(NewsBRContext);

  //RETURN (RENDER)

  if (
    dataContext.states === null ||
    dataContext.dataBrazil === null ||
    newsContext.news === null
  )
    return null;

  const news = newsContext.news.map((item) => {
    return (
      <ListItem key={item.id._text}>
        <Card className={styles.card}>
          <div>
            <a href={item.url._text} target="_blank">
              <Image src={item.mediaurl._text} />
              <h3>{item.title._text}</h3>
            </a>
          </div>
        </Card>
      </ListItem>
    );
    console.log(item);
  });

  const listNews = [...new Set(news)];

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

        <List className={styles.listNews}>{listNews}</List>
      </aside>
    </section>
  );
};

export default Home;
