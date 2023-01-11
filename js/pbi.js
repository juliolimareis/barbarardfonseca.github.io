/**
 * Precisa importar o arquivo onde está a função
 */
import addComponent from "./components/index.js";
import CardSkill from "./components/CardSkill.js";
import DashboardProject from "./components/DashboardProject.js";
import BICard from "./components/BICard.js";

/** 
 * Lista sobre as habilidades utilizadas na ferramenta
 * Lista com título, descrição e link da imagem
 */
addComponent("cards-skills", [
  CardSkill({
    title: "DAX",
    desc: "Descrição DAX",
    imageSrc: "icon/dax2.png"
  }),
  CardSkill({
    title: "Linguagem M",
    desc: "Descrição M",
    imageSrc: "icon/m.png"
  }),
  CardSkill({
    title: "Visualização de Dados",
    desc: "Descrição DataViz",
    imageSrc: "icon/dataviz.png"
  }),
  CardSkill({
    title: "Inteligência de Negócios",
    desc: "Descrição BI",
    imageSrc: "icon/BI.png"
  }),
])

/** 
 * Lista com meus dashboards de portfólio
 * Lista com título, subtítulo, descrição e link do dashboard
 */
addComponent("dashboardsProjects", [
  DashboardProject({
    id: "1",
    backgroundColor: "light",
    title: "Dashboard Pokémon",
    subtitle: "Desafio DataB",
    desc: `Dashboard de análise dos principais status de pokémons. O objetivo
    desse dashboard é trazer o detalhamento de informações de cada pokémon, como status, status
    especiais, tipo, evoluções e suas variações. O modelo desse dashboard fugiu do padrão de análise
    de dados comum, tendo como principal foco a identidade visual que se assemelhe ao padrão de
    Pokémon e a interação com o dashboard, de modo que o usuário tenha a liberdade de explorar e
    saber as principais informações sobre seus pokémons favoritos.`,
    resourcesUsed: "Dax",
    dateCreation: "10/2022",
    link: "https://app.powerbi.com/view?r=eyJrIjoiNzgzNzg5ODMtOGQ2Ni00N2U5LTk3YWUtMzgyNWU5OTdiMjExIiwidCI6ImM0YzEwNjgzLWRkYzgtNDM5My1hN2U1LWMyZWUwZjQzM2Q2MSJ9"
  }),
  DashboardProject({
    id: "2",
    backgroundColor: "white",
    title: "Dashboard Copa do Mundo 2022",
    subtitle: "Desafio Copa dos Dashboards - Minhas Planilhas",
    desc: `Análise do histórico de Copas do Mundo(1930 - 2018). Esse dashboard é
    uma análise geral do histórico das Copas do Mundo, nele contém análises de quantidade de gols,
    melhores seleções e jogadores, média de gols por seleção, melhores e piores seleções baseadas em
    pontos e quantidade de gols, além das maiores audiências por estádio nas finais e o histórico do
    Brasil no ranking mundial. Tudo isso permite a análise e uma visão de como a nossa seleção está
    em comparação com os outros países e para acrescentar também é exibida a bandeira do país-sede e
    o cartaz promocional da copa no respectivo ano.`,
    resourcesUsed: "DAX",
    dateCreation: "09/2022",
    link: "https://app.powerbi.com/view?r=eyJrIjoiMmMxNjg1NzUtZTE2Yi00MzVhLTgwNmItMjcxNDA2YmNjODZiIiwidCI6ImM0YzEwNjgzLWRkYzgtNDM5My1hN2U1LWMyZWUwZjQzM2Q2MSJ9"
  }),
  DashboardProject({
    id: "3",
    backgroundColor: "light",
    title: "Dashboard Copa do Mundo 2022",
    subtitle: "Desafio DataB",
    desc: `Análise do histórico de Copas do Mundo(1930 - 2018). Esse dashboard
    contém as análises de audiência, países participantes, países campeões entre outras análises que dão
    uma visão geral dos países, podendo verificar se há padrões no torneio, melhores seleções ou
    jogadores. No dashboard também são exibidas as bandeiras dos países a fim de gerar a identificação
    com o país de origem e promover o conhecimento de outras bandeiras.`,
    resourcesUsed: "DAX",
    dateCreation: "10/2022",
    link: "https://app.powerbi.com/view?r=eyJrIjoiNzVjNWI5ZDMtMzY5Yi00OTJkLWFkOTItOWFlMjFjZGYyOWQ2IiwidCI6ImM0YzEwNjgzLWRkYzgtNDM5My1hN2U1LWMyZWUwZjQzM2Q2MSJ9&pageName=ReportSection75c6c6009dd3eb0dd415"
  }),
  DashboardProject({
    id: "4",
    backgroundColor: "white",
    title: "Dashboard de Clientes",
    subtitle: "",
		desc: `Dashboard de Análise de Performance de Clientes com dados fictícios.
		As análises trazem informações de receita, ticket médio e outros insights que auxiliam na tomada de
		decisão do negócio e facilitam a visualização de clientes fiéis ou que precisam ser desenvolvidos
		como exemplificado na Matriz de Ação.`,
		resourcesUsed: "",
		dateCreation: "08/2022",
		link: "https://app.powerbi.com/view?r=eyJrIjoiZWYxNTZmMDMtYzk2ZS00M2E4LTljZDQtY2QxMWUxOWE2NjZlIiwidCI6ImM0YzEwNjgzLWRkYzgtNDM5My1hN2U1LWMyZWUwZjQzM2Q2MSJ9&pageName=ReportSection"			
  }),
  DashboardProject({
    id: "5",
    backgroundColor: "light",
    title: "Report Colaboradores",
		subtitle: "",
    desc: "",
		resourcesUsed: "",
    dateCreation: "03/2022",
		link: "https://app.powerbi.com/view?r=eyJrIjoiYWUxNTZjNGItOWFhYi00MDFhLWJmNTYtNGVlZDVjZjRiZDk4IiwidCI6ImM0YzEwNjgzLWRkYzgtNDM5My1hN2U1LWMyZWUwZjQzM2Q2MSJ9&pageName=ReportSection90fe854a9eb8d4888de0"
  })
		/** Refazer capa e inserir descrição do dashboard */		
])
/**
 * Lista das ferramentas de Business Intelligence utilizadas
 * Lista com nome do botão, src da imagem de fundo e link de destino do botão
 */
addComponent("bicards", [
  BICard({
    label: "Power BI",
    imageSrc: "images/img_pbi.png",
    link: "#"
  }),
  // BICard({
  //   label: "Metabase",
  //   imageSrc: "images/inc-mb.png",
  //   link: "under_construction.html",
  //   className: "Agora posso receber minhas classes aqui 🥳",
  //   children: [
  //     BICard({
  //       label: "Eu posso ser renderizado dentro do BICard 😱",
  //       imageSrc: "images/inc-mb.png",
  //       link: "under_construction.html",
  //       className: "Filho tbm pode! porque não? 😁",
  //       children: "Eu sou neto! 🫢 loop infinito? 🤔"
  //     })
  //   ]
  // }),
  BICard({
    label: "Metabase",
    imageSrc: "images/inc-mb.png",
    link: "under_construction.html"
  }),
  BICard({
    label: "Tableau",
    imageSrc: "images/inc-tb.png",
    link: "under_construction.html"
  }),
  BICard({
    label: "Python",
    imageSrc: "images/inc-py.png",
    link: "under_construction.html"
  }),
])