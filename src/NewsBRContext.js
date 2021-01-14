import React from "react";
import convert from "xml-js";

export const NewsBRContext = React.createContext();

export const NewsBRStorage = ({ children }) => {
  const [news, setNews] = React.useState(null);

  React.useEffect(() => {
    rss();
  }, []);

  async function rss() {
    try {
      const response = await fetch("https://noticias.r7.com/saude/feed.xml");

      const html = await response.text();

      const xml = html;
      const result1 = convert.xml2json(xml, { compact: true, spaces: 4 });
      // const result2 = convert.xml2json(xml, { compact: false, spaces: 4 });
      const res = JSON.parse(result1);
      // return res.feed.entry;
      setNews(res.feed.entry);
    } catch (err) {
      console.log("Erro: " + err);
    }
  }

  return (
    <NewsBRContext.Provider value={{ news }}>{children}</NewsBRContext.Provider>
  );
};
