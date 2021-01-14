import React from "react";

const About = () => {
  return (
    <section>
      <main>
        <h2>Introdução</h2>
        <p>
          Este site foi desenvolvido para ser o veículo informativo sobre a
          situação epidemiológica da COVID-19 no Brasil.
        </p>

        <h2>Atualizações</h2>
        <p>
          O processo de atualização dos dados sobre casos e óbitos confirmados
          por COVID-19 no Brasil é realizado a cada 2 horas, pel API
          "https://covid19-brazil-api.now.sh/api/report/v1". Os dados fornecidos
          pelos estados são consolidados e disponibilizados publicamente todos
          os dias, em torno das 19h.
        </p>
        <p>
          As notícias sobre saúde são atualizadas a todo instante, através do
          feed disponibilizado pelo Portal R7
          (https://noticias.r7.com/saude/feed.xml).{" "}
        </p>
      </main>
    </section>
  );
};
export default About;
