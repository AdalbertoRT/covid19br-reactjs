import React from "react";
import List from "../components/List";
import ListItem from "../components/ListItem";
import Image from "../components/Image";
import Card from "../components/Card";
import StatesContainer from "../components/StatesContainer";
import CardTop from "../components/CardTop";
import CardBottom from "../components/CardBottom";

const Home = () => {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    const storage = localStorage.getItem("timestamp");
    const verify = timestampVerify();
    const localData = localStorage.getItem("dadosCovidBR");
    if (storage) {
      if (verify >= 5 || storage === 22) {
        getData();
        if (storage === 22) {
          localStorage.setItem("timestamp", 22.1);
        }
      } else {
        setData(JSON.parse(localData));
      }
    } else {
      getData();
    }
  }, []);

  function timestampVerify() {
    const time = new Date().getHours();
    const timestamp = localStorage.getItem("timestamp");

    return time - timestamp;
    // console.log(time);
    // console.log(timestamp);
    // console.log(time - timestamp);
    // console.log(timestamp - time);
  }

  async function getData() {
    try {
      const response = await fetch(
        "https://covid19-brazil-api.now.sh/api/report/v1"
      );
      const json = await response.json();
      setData(json.data);
      //Remover dados do localStorage
      localStorage.removeItem("dadosCovidBR");
      localStorage.removeItem("timestamp");
      //Inserir dados no localStorage
      localStorage.setItem("dadosCovidBR", JSON.stringify(json.data));
      //Inserir no localStorage a data que foi inserido os dados
      let timestamp = new Date().getHours();
      localStorage.setItem("timestamp", JSON.stringify(timestamp));
    } catch (err) {
      console.log("erro: " + err);
    }
  }

  if (data === null) return null;

  const listStates = data.map((item) => {
    return (
      <ListItem key={item.uid}>
        <Card key={item.uid}>
          <CardTop>
            <Image
              src={`https://devarthurribeiro.github.io/covid19-brazil-api/static/flags/${item.uf}.png`}
              alt={item.uf}
              key={item.uid}
            />
            <h3>{item.state}</h3>
          </CardTop>
          <CardBottom>
            <span>Atualização: {item.datetime}</span>
            <span>Confirmados: {item.cases}</span>
            <span>Mortes: {item.deaths}</span>
            <span>Suspeitos: {item.suspects}</span>
            <span>Descartados: {item.refuses}</span>
          </CardBottom>
        </Card>
      </ListItem>
    );
  });
  return (
    <section className={"homeContent"}>
      <StatesContainer>
        <List className={"listStates"} display={"flex"}>
          {listStates}
        </List>
      </StatesContainer>
    </section>
  );
};

export default Home;
