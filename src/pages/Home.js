import React from "react";
import List from "../components/List";
import ListItem from "../components/ListItem";
import Image from "../components/Image";
import Card from "../components/Card";
import StatesContainer from "../components/StatesContainer";
import CardTop from "../components/CardTop";
import CardBottom from "../components/CardBottom";
import Brasil from "../images/brazil.png";
import CountryContainer from "../components/CountryContainer";

const Home = () => {
  const [data, setData] = React.useState(null);
  const [lastUpdate, setLastUpdate] = React.useState(null);
  const [lastUpdateBR, setLastUpdateBR] = React.useState(null);
  const [dataBrazil, setDataBrazil] = React.useState(null);

  React.useEffect(() => {
    //STATES
    initStates();

    //BRAZIL
    initBrazil();
  }, []);

  // Busca os dados da covid nos ESTADOS no localStorage ou faz fetch na API
  function initStates() {
    const storage = localStorage.getItem("timestampUF");
    const verify = timestampVerify(storage);
    const localData = localStorage.getItem("dadosStates");

    if (storage) {
      if (verify >= 2) {
        getData();
      } else {
        setData(JSON.parse(localData));
        const datetime = JSON.parse(localData)[0].datetime;
        formatDate(datetime);
      }
    } else {
      getData();
    }
  }

  // Busca os dados da covid no BRASIL no localStorage ou faz fetch na API
  function initBrazil() {
    const storage = localStorage.getItem("timestampBR");
    const verify = timestampVerify(storage);
    const localData = localStorage.getItem("dadosBrazil");

    if (storage) {
      if (verify >= 2) {
        getDataBrazil();
      } else {
        setDataBrazil(JSON.parse(localData));
        const datetime = JSON.parse(localData).updated_at;
        formatDateBR(datetime);
      }
    } else {
      getDataBrazil();
    }
    console.log(dataBrazil);
  }
  // Verifica a diferenca de horas da ultima atualizacao
  function timestampVerify(storage) {
    const now = new Date().getTime();
    const last_update = storage;
    const timeDiff = Math.trunc((now - last_update) / 3600 / 1000);

    return timeDiff;
  }

  // Fetch dos dados da covid nos estados
  async function getData() {
    try {
      const response = await fetch(
        "https://covid19-brazil-api.now.sh/api/report/v1"
      );
      const json = await response.json();
      const states = json.data.sort(function (a, b) {
        let sort = a.state > b.state ? 1 : b.state > a.state ? -1 : 0;
        return sort;
      });

      setData(states);
      //Remover dados do localStorage
      localStorage.removeItem("dadosStates");
      localStorage.removeItem("timestampUF");
      //Inserir dados no localStorage
      localStorage.setItem("dadosStates", JSON.stringify(json.data));
      //Inserir no localStorage a data que foi inserido os dados
      let timestamp = new Date().getTime();
      localStorage.setItem("timestampUF", timestamp);

      formatDate(json.data[0].datetime);
    } catch (err) {
      console.log("erro: " + err);
    }
  }

  // Fetch dos dados da covid no Brasil
  async function getDataBrazil() {
    try {
      const response = await fetch(
        "https://covid19-brazil-api.now.sh/api/report/v1/brazil"
      );
      const json = await response.json();
      setDataBrazil(json.data);
      //Remover dados do localStorage
      localStorage.removeItem("dadosBrazil");
      localStorage.removeItem("timestampBR");
      //Inserir dados no localStorage
      localStorage.setItem("dadosBrazil", JSON.stringify(json.data));
      //Inserir no localStorage a data que foi inserido os dados
      let timestamp = new Date().getTime();
      localStorage.setItem("timestampBR", timestamp);

      formatDateBR(json.data.updated_at);
    } catch (err) {
      console.log("Erro: " + err);
    }
  }

  function formatDate(date) {
    const string = date.replace(".", "T");
    const strings = string.split("T");
    strings.pop();
    const array = strings;
    let day = array[0].split("-");
    day = day.reverse().join("/");
    const hour = array[1];
    const newDate = day + " às " + hour;

    setLastUpdate(newDate);
  }
  function formatDateBR(date) {
    const string = date.replace(".", "T");
    const strings = string.split("T");
    strings.pop();
    const array = strings;
    let day = array[0].split("-");
    day = day.reverse().join("/");
    const hour = array[1];
    const newDate = day + " às " + hour;

    setLastUpdateBR(newDate);
  }
  //RETURN (RENDER)

  if (data === null || dataBrazil === null) return null;

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
            <p className={"atualizacao"}>
              <span>Atualização:</span>
              <span>{lastUpdate}</span>
            </p>
            <p>
              <span>Confirmados:</span>
              <span>{item.cases}</span>
            </p>
            <p>
              <span>Mortes:</span>
              <span>{item.deaths}</span>
            </p>
            <p>
              <span>Suspeitos:</span>
              <span>{item.suspects}</span>
            </p>
            <p>
              <span>Descartados:</span>
              <span>{item.refuses}</span>
            </p>
          </CardBottom>
        </Card>
      </ListItem>
    );
  });
  return (
    <section className={"homeContent"}>
      <CountryContainer className={"countryContainer"}>
        <Card>
          <CardTop>
            <Image src={Brasil} alt={"Brasil"} />
            <h3>Brasil</h3>
          </CardTop>
          <CardBottom>
            <p className={"atualizacao"}>
              <span>Atualização:</span>
              <span>{lastUpdateBR}</span>
            </p>
            <p>
              <span>Total de Casos: </span>
              <span>{dataBrazil.cases}</span>
            </p>
            <p>
              <span>Total de Mortes: </span>
              <span>{dataBrazil.deaths}</span>
            </p>
            <p>
              <span>Total de Casos Confirmados: </span>
              <span>{dataBrazil.confirmed}</span>
            </p>
            <p>
              <span>Total de Recuperados: </span>
              <span>{dataBrazil.recovered}</span>
            </p>
          </CardBottom>
        </Card>
      </CountryContainer>

      <StatesContainer>
        <List className={"listStates"} display={"flex"}>
          {listStates}
        </List>
      </StatesContainer>
    </section>
  );
};

export default Home;
