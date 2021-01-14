import React from "react";

const HomeNews = () => {
  const [news, setNews] = React.useState(null);

  React.useEffect(() => {
    rss();
  }, []);

  async function rss() {
    const response = await fetch("https://noticias.r7.com/saude/feed.xml");

    const html = await response.text();

    const xml = html;
    const result1 = convert.xml2json(xml, { compact: true, spaces: 4 });
    // const result2 = convert.xml2json(xml, { compact: false, spaces: 4 });
    const res = JSON.parse(result1);
    // return res.feed.entry;
    setNews(res.feed.entry);

    if (news === null) return null;

    const newsCard = news.map((item, index) => {
      return (
        <section className={styles.pageNews}>
          <main className={styles.news}>
            <div className={styles.highlights}>
              <div className={styles.highlighted}>Em Destaque</div>
              <NewsBig dados={newsBig} />
            </div>

            <div className={styles.newsThumbs}>
              <div className={styles.latest}>Últimas Notícias</div>
              <List>{newsSmall}</List>
            </div>
          </main>
          <aside>
            <div className={styles.covid}>Covid-19</div>
            <Card />
          </aside>
        </section>
      );
    });
  }
};

export default HomeNews;
