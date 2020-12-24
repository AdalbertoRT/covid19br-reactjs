import React from "react";
import styles from "../css/News.module.css";
import NewsBig from "../components/NewsBig";
import NewsSmall from "../components/NewsSmall";
import List from "../components/List";
import convert from "xml-js";

const News = () => {
  const [news, setNews] = React.useState(null);
  const [newsBig, setNewsBig] = React.useState(null);

  React.useEffect(() => {
    const feed = window.localStorage.getItem("feed");
    if (feed) {
      const data = JSON.parse(feed);

      setNews(data);
      setNewsBig(data[Math.floor(Math.random() * data.length)]);
      // console.log(data);
      // console.log(data.length);
    } else {
      rss();
    }
  }, []);

  async function rss() {
    const response = await fetch("https://noticias.r7.com/saude/feed.xml");
    const html = await response.text();

    // const xml = new DOMParser().parseFromString(html, "text/xml");

    // const tags = xml.getElementsByTagName("channel");
    // const convert = require("xml-js");
    const xml = html;
    const result1 = convert.xml2json(xml, { compact: true, spaces: 4 });
    // const result2 = convert.xml2json(xml, { compact: false, spaces: 4 });
    const res = JSON.parse(result1);
    // return res.feed.entry;
    setNews(res.feed.entry);
    setNewsBig(
      res.feed.entry[Math.floor(Math.random() * res.feed.entry.length)]
    );

    window.localStorage.setItem("feed", JSON.stringify(res.feed.entry));
    // console.log(typeof res);
    // console.log(res.feed.entry);
  }

  if (news === null) return null;
  // console.log(newsBig);
  const newsSmall = news.map((item, index) => {
    if (newsBig) {
      if (item.id._text !== newsBig.id._text)
        return <NewsSmall key={index} dados={item} />;
    }
  });

  return (
    <section className={styles.news}>
      <div className={styles.highlights}>
        <div className={styles.highlighted}>Em Destaque</div>
        <NewsBig dados={newsBig} />
      </div>

      <div className={styles.newsThumbs}>
        <div className={styles.latest}>Últimas Notícias</div>
        <List>{newsSmall}</List>
      </div>
    </section>
  );
};

export default News;
