import React from "react";
import Title from "../components/Title";
import styles from "../css/Coronavirus.module.css";

const Coronavirus = () => {
  return (
    <section className={styles.coronavirus}>
      <main className={styles.coronaMain}>
        <h1>Sobre a Doença</h1>

        <h2>O que é COVID-19</h2>

        <p>
          Os coronavírus são uma grande família de vírus comuns em muitas
          espécies diferentes de animais, incluindo camelos, gado, gatos e
          morcegos. Raramente, os coronavírus que infectam animais podem
          infectar pessoas, como exemplo do MERS-CoV e SARS-CoV. Recentemente,
          em dezembro de 2019, houve a transmissão de um novo coronavírus
          (SARS-CoV-2), o qual foi identificado em Wuhan na China e causou a
          COVID-19, sendo em seguida disseminada e transmitida pessoa a pessoa.
        </p>

        <p>
          A COVID-19 é uma doença causada pelo coronavírus, denominado
          SARS-CoV-2, que apresenta um espectro clínico variando de infecções
          assintomáticas a quadros graves. De acordo com a Organização Mundial
          de Saúde, a maioria (cerca de 80%) dos pacientes com COVID-19 podem
          ser assintomáticos ou oligossintomáticos (poucos sintomas), e
          aproximadamente 20% dos casos detectados requer atendimento hospitalar
          por apresentarem dificuldade respiratória, dos quais aproximadamente
          5% podem necessitar de suporte ventilatório.
        </p>

        <h3>Quais são os sintomas</h3>

        <p>
          Os sintomas da COVID-19 podem variar de um resfriado, a uma Síndrome
          Gripal-SG (presença de um quadro respiratório agudo, caracterizado
          por, pelo menos dois dos seguintes sintomas: sensação febril ou febre
          associada a dor de garganta, dor de cabeça, tosse, coriza) até uma
          pneumonia severa. Sendo os sintomas mais comuns:
        </p>
        <ul>
          <li>Tosse</li>
          <li>Febre</li>
          <li>Coriza</li>
          <li>Dor de garganta</li>
          <li>Dificuldade para respirar</li>
          <li>Perda de olfato (anosmia)</li>
          <li>Alteração do paladar (ageusia)</li>
          <li>Distúrbios gastrintestinais (náuseas/vômitos/diarreia)</li>
          <li>Cansaço (astenia)</li>
          <li>Diminuição do apetite (hiporexia)</li>
          <li>)</li>
        </ul>

        <h3>Como é transmitido</h3>
        <p>
          A transmissão acontece de uma pessoa doente para outra ou por contato
          próximo por meio de:
        </p>
        <ul>
          <li>Toque do aperto de mão contaminadas;</li>
          <li>Gotículas de saliva;</li>
          <li>Espirro;</li>
          <li>Tosse;</li>
          <li>Catarro;</li>
          <li>
            Objetos ou superfícies contaminadas, como celulares, mesas,
            talheres, maçanetas, brinquedos, teclados de computador etc.
          </li>
        </ul>

        <h3>Diagnóstico</h3>

        <p>
          O diagnóstico da COVID-19 pode ser realizado a partir de critérios
          como:
        </p>
        <ol>
          <li>
            O DIAGNÓSTICO CLÍNICO é realizado pelo médico atendente, que deve
            avaliar a possibilidade da doença, principalmente, em pacientes com
            a associação dos seguintes sinais e sintomas:
          </li>
          <p>
            Febre, que pode estar presente no momento do exame clínico ou
            referida pelo paciente (sensação febril) de ocorrência recente.
            Sintomas do trato respiratório (por exemplo, tosse, dispneia,
            coriza, dor de garganta) Outros sintomas consistentes incluindo,
            mialgias, distúrbios gastrointestinais (diarreia/náuseas/vômitos),
            perda ou diminuição do olfato (anosmia) ou perda ou diminuição do
            paladar (ageusia). Em crianças, além dos itens anteriores,
            considera-se também a obstrução nasal, a desidratação e a falta de
            apetite (inapetência), na ausência de outro diagnóstico específico.
            Em idosos, deve-se considerar também, critérios específicos de
            agravamento como: síncope (desmaio ou perda temporária de
            consciência), confusão mental, sonolência excessiva, irritabilidade
            e falta de apetite (inapetência). O diagnóstico clínico da doença,
            também deve ser considerado em pacientes com doença grave do trato
            respiratório inferior sem causa clara, como é o caso de pacientes
            que se apresentem em Síndrome Respiratória Aguda Grave (SRAG). Nesta
            síndrome o indivíduo apresenta-se em franca dispneia/desconforto
            respiratório/dificuldade para respirar com saturação de oxigênio
            (O2) menor do que 95% em ar ambiente ou coloração azulada dos lábios
            ou rosto (cianose) ou queixa de pressão persistente no tórax. Em
            crianças, a SRAG apresenta-se com os sinais e sintomas anteriores,
            devendo ser observados sinais característicos de esforço
            respiratório, tais como, os batimentos de asa de nariz, tiragem
            intercostal, e, por fim, alteração na coloração das extremidades que
            ficam azuladas (cianose).
          </p>
          <li>
            O DIAGNÓSTICO CLÍNICO-EPIDEMIOLÓGICO é realizado pelo médico
            atendente no qual considera-se:
          </li>
          <p>
            casos de paciente com a associação dos sinais e sintomas
            supracitados ou SRAG MAIS histórico de contato próximo ou
            domiciliar, nos últimos 14 dias antes do aparecimento dos sintomas,
            com caso confirmado laboratorialmente para COVID-19 e para o qual
            não foi possível realizar a investigação laboratorial específica.
          </p>
          <li>DIAGNÓSTICO CLÍNICO-IMAGEM:</li>
          <p>
            caso de sintomas respiratório mais febre ou SRAG ou óbito por SRAG
            que não foi possível confirmar ou descartar por critério
            laboratorial E que apresente alterações tomográficas.
          </p>
          <li>
            DIAGNÓSTICO LABORATORIAL - Caso o paciente apresente os sintomas
            respiratórios mais febre ou SRAG. O profissional de saúde poderá
            solicitar os seguintes exames laboratoriais:
          </li>
          <p>
            De biologia molecular, (RT-PCR em tempo real) que diagnostica tanto
            a COVID-19, a Influenza ou a presença de Vírus Sincicial
            Respiratório (VSR) normalmente até o oitavo dia de início de
            sintomas. Imunológico, que detecta, ou não, a presença de anticorpos
            em amostras coletadas a partir do oitavo dia de início dos sintomas.
            Sendo eles: Ensaio imunoenzimático (Enzyme-Linked Immunosorbent
            Assay - ELISA); Imunocromatografia (teste rápido) para detecção de
            anticorpos; Imunoensaio por Eletroquimioluminescência (ECLIA).
            Pesquisa de antígenos: resultado reagente para SARS-CoV-2 pelo
            método de Imunocromatografia para detecção de antígeno.
          </p>
          <li>
            DIAGNÓSTICO LABORATORIAL EM INDIVÍDUO ASSINTOMÁTICO (pessoa sem
            sintomas) que realizou:
          </li>
          <p>
            Exame de Biologia Molecular com resultado DETECTÁVEL para SARS-CoV-2
            realizado pelo método RT-PCR em tempo real. Exame de Imunológico com
            resultado REAGENTE para IgM e/ou IgA realizado pelos seguintes
            métodos: Ensaio imunoenzimático (ELISA) e Imunocromatografia (teste
            rápido) para detecção de anticorpos.
          </p>
        </ol>

        <h3>Como se proteger</h3>

        <h4>As recomendações de prevenção à COVID-19 são as seguintes:</h4>
        <ul>
          <li>
            Lave com frequência as mãos até a altura dos punhos, com água e
            sabão, ou então higienize com álcool em gel 70%. Essa frequência
            deve ser ampliada quando estiver em algum ambiente público
            (ambientes de trabalho, prédios e instalações comerciais, etc),
            quando utilizar estrutura de transporte público ou tocar superfícies
            e objetos de uso compartilhado.
          </li>
          <li>
            Ao tossir ou espirrar, cubra nariz e boca com lenço ou com a parte
            interna do cotovelo.
          </li>
          <li>
            Não tocar olhos, nariz, boca ou a máscara de proteção fácil com as
            mãos não higienizadas.
          </li>
          <li>
            Se tocar olhos, nariz, boca ou a máscara, higienize sempre as mãos
            como já indicado.
          </li>
          <li>
            Mantenha distância mínima de 1 (um) metro entre pessoas em lugares
            públicos e de convívio social. Evite abraços, beijos e apertos de
            mãos. Adote um comportamento amigável sem contato físico, mas sempre
            com um sorriso no rosto.
          </li>
          <li>
            Higienize com frequência o celular, brinquedos das crianças e outro
            objetos que são utilizados com frequência.
          </li>
          <li>
            Não compartilhe objetos de uso pessoal como talheres, toalhas,
            pratos e copos.
          </li>
          <li>Mantenha os ambientes limpos e bem ventilados.</li>
          <li>
            Se estiver doente, evite contato próximo com outras pessoas,
            principalmente idosos e doentes crônicos, busque orientação pelos
            canais on-line disponibilizados pelo SUS ou atendimento nos serviços
            de saúde e siga as recomendações do profissional de saúde.
          </li>
          <li>Durma bem e tenha uma alimentação saudável.</li>
          <li>
            Recomenda-se a utilização de máscaras em todos os ambientes. As
            máscaras de tecido (caseiras/artesanais), não são Equipamentos de
            Proteção Individual (EPI), mas podem funcionar como uma barreira
            física, em especial contra a saída de gotículas potencialmente
            contaminadas.
          </li>
        </ul>

        <a
          href="http://portal.anvisa.gov.br/documents/219201/4340788/NT+M%C3%A1scaras.pdf/bf430184-8550-42cb-a975-1d5e1c5a10f7"
          target="_blank"
        >
          Veja aqui como confeccionar e usar a máscara caseira.
        </a>

        <p>
          Estimule familiares, amigos e colegas de trabalho sobre a importância
          do uso de máscara e da higienização das mãos na prevenção da
          disseminação do vírus causador da doença COVID-19.
        </p>

        <h3>Dicas para viajantes:</h3>
        <p>
          Caso você precise viajar, avalie a real necessidade. Se for inevitável
          viajar, previna-se e siga as orientações das autoridades de saúde
          locais.
        </p>
        <h4>Ao voltar de viagens internacionais ou locais recomenda-se:</h4>

        <p>
          Reforçar os hábitos de higiene e proteção como a utilização de
          máscara, higienização das mãos com água e sabão ou com álcool em gel
          70 %. Caso apresente sintomas de gripe, busque atendimento nos
          serviços de saúde, e evite contato com outras pessoas
        </p>

        <h3>Se eu ficar doente</h3>
        <p>
          Se estiver doente, com sintomas compatíveis com a COVID-19, tais como
          febre, tosse, dor de garganta e/ou coriza, com ou sem falta de ar,
          evite contato físico com outras pessoas, incluindo os familiares,
          principalmente, idosos e doentes crônicos, Procure imediatamente os
          postos de triagem nas Unidades Básicas de Saúde / UPAS ou outras
          unidades de saúde. Após encaminhamento consulte-se com o médico. Uma
          vez diagnosticado pelo médico, receba as orientações e prescrição dos
          medicamentos que você deverá usar. O médico poderá solicitar exames
          complementares. Inicie o tratamento prescrito imediatamente. Mantenha
          seu médico sempre informado da evolução dos sintomas durante o
          tratamento e siga suas recomendações.
        </p>

        <h3>Utilize máscara o tempo todo.</h3>

        <p>
          Se for preciso cozinhar, use máscara de proteção, cobrindo boca e
          nariz todo o tempo.
        </p>
        <p>
          Depois de usar o banheiro, nunca deixe de lavar as mãos com água e
          sabão e sempre limpe vaso mantendo a tampa fechada, pia e demais
          superfícies com álcool, água sanitária ou outro produto recomendado
          pela Agência Nacional de Vigilância Sanitária – Anvisa - para
          desinfecção do ambiente.
        </p>
        <p>
          Separe toalhas de banho, garfos, facas, colheres, copos e outros
          objetos apenas para seu uso. O lixo produzido precisa ser separado e
          descartado.
        </p>

        <p>
          Evite compartilhar sofás e cadeiras e realize limpeza e desinfecção
          frequente com água sanitária ou álcool 70% ou outro produto
          recomendado pela Agência Nacional de Vigilância Sanitária – Anvisa.
        </p>
        <p>
          Mantenha a janela aberta para circulação de ar do ambiente usado para
          isolamento e a porta fechada, limpe a maçaneta frequentemente com
          álcool 70%, água sanitária, ou outro produto recomendado pela Agência
          Nacional de Vigilância Sanitária – Anvisa.
        </p>
        <p>
          Caso o paciente não more sozinho, recomenda-se que os demais moradores
          da residência durmam em outro cômodo, seguindo também as seguintes
          recomendações:
        </p>
        <p>
          Mantenha a distância mínima de 1 metro entre a pessoa infectada e os
          demais moradores.
        </p>
        <p>
          Limpe os móveis da casa frequentemente com água sanitária, álcool 70%
          ou outro produto recomendado pela Agência Nacional de Vigilância
          Sanitária – Anvisa.
        </p>
        <p>
          Se uma pessoa da casa tiver diagnóstico positivo, todos os moradores
          devem ficar em distanciamento conforme orientação médica.
        </p>

        <h3>Serviço de Saúde</h3>
        <p>
          Procure um serviço de saúde caso apresente sintomas de síndrome
          gripal.
        </p>
        <p>
          Lista de hospitais que prestam atendimento em seu estado/município.
        </p>
        <p>
          Lista dos postos de saúde que prestam atendimento em seu
          estado/município.
        </p>
        <p>Laboratórios públicos de referência de testagem para coronavírus</p>

        <a href="https://coronavirus.saude.gov.br/sobre-a-doenca">
          Retirados de Ministério da Saúde - Governo Federal
        </a>
      </main>
    </section>
  );
};

export default Coronavirus;
