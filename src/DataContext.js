import React from "react";

export const DataContext = React.createContext();

export const DataStorage = ({ children }) => {
  const [states, setStates] = React.useState(null);
  const [brazil, setBrazil] = React.useState(null);
  const [ufUpdate, setUFUpdate] = React.useState(null);
  const [brUpdate, setBRUpdate] = React.useState(null);

  React.useEffect(() => {
    initDataCovid();
  }, []);

  // Busca os dados da covid nos ESTADOS no localStorage ou faz fetch na API
  function initDataCovid() {
    const timestamp = localStorage.getItem("timestamp");
    const verify = timestampVerify(timestamp);
    const dataStates = localStorage.getItem("dataStates");
    const dataBrazil = localStorage.getItem("dataBrazil");

    if (timestamp) {
      if (verify >= 2) {
        getDataCovid();
      } else {
        const timeUF = JSON.parse(dataStates)[0].datetime;
        const timeBR = JSON.parse(dataBrazil).updated_at;
        setUFUpdate(formatDate(timeUF));
        setBRUpdate(formatDate(timeBR));

        setStates(JSON.parse(dataStates));
        setBrazil(JSON.parse(dataBrazil));
      }
    } else {
      getDataCovid();
    }
  }

  // }
  // Verifica a diferenca de horas da ultima atualizacao
  function timestampVerify(storage) {
    const now = new Date().getTime();
    const timeDiff = (new Date(now) - new Date(storage)) / 3600 / 1000;

    return timeDiff.toFixed(2);
  }

  // Fetch dos dados da covid nos estados
  async function getDataCovid() {
    try {
      // FETCH STATES
      const statesResponse = await fetch(
        "https://covid19-brazil-api.now.sh/api/report/v1"
      );
      const jsonStates = await statesResponse.json();
      const sortStates = jsonStates.data.sort(function (a, b) {
        let sort = a.state > b.state ? 1 : b.state > a.state ? -1 : 0;
        return sort;
      });

      // FETCH BRAZIL
      const brazilResponse = await fetch(
        "https://covid19-brazil-api.now.sh/api/report/v1/brazil"
      );
      const jsonBrazil = await brazilResponse.json();

      setStates(sortStates);
      setBrazil(jsonBrazil);
      //Remover dados do localStorage
      localStorage.removeItem("dataStates");
      localStorage.removeItem("dataBrazil");
      localStorage.removeItem("timestamp");
      //Inserir dados no localStorage
      localStorage.setItem("dataStates", JSON.stringify(jsonStates.data));
      localStorage.setItem("dataBrazil", JSON.stringify(jsonBrazil.data));
      //Inserir no localStorage a data que foi inserido os dados
      const timestamp = new Date().getTime();
      localStorage.setItem("timestamp", timestamp);

      setUFUpdate(formatDate(jsonStates.data[0].datetime));
      setBRUpdate(formatDate(jsonBrazil.data.updated_at));
      console.log(typeof jsonBrazil.data);
      console.log(jsonBrazil.data);
    } catch (err) {
      console.log("erro: " + err);
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

    return newDate;
  }

  return (
    <DataContext.Provider value={{ states, ufUpdate, brUpdate, brazil }}>
      {children}
    </DataContext.Provider>
  );
};
