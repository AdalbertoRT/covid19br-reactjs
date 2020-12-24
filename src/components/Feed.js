import React from "react";
import ReactHtmlParser, {
  processNodes,
  convertNodeToElement,
  htmlparser2,
} from "react-html-parser";

class Feed extends React.Component {
  render() {
    async function xml() {
      const response = await fetch("https://noticias.r7.com/saude/feed.xml");
      const text = await response.text();
      const parser = new DOMParser();
      const xml = parser.parseFromString(text, "text/xml");
      const body = xml.getElementsByTagName("body");
      return <div>{ReactHtmlParser(body)}</div>;
    }
    return xml();
  }
}

export default Feed;
