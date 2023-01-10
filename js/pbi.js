/**
 * Precisa importar o arquivo onde está a função
 */
import { addComponents } from "./components/index.js";
import CardSkill from "./components/CardSkill.js";
import DashboardProject from "./components/DashboardProject.js";
import BICard from "./components/BICard.js";
/** 
 * Lista sobre as habilidades utilizadas na ferramenta
 * Lista com título, descrição e link da imagem
 */
addComponents("cards-skills", [
  CardSkill("DAX", "Descrição DAX", "icon/dax2.png"),
  CardSkill("Linguagem M", "Descrição M", "icon/M.png"),
  CardSkill("Visualização de Dados", "Descrição DataViz", "icon/dataviz.png"),
  CardSkill("Inteligência de Negócios", "Descrição BI", "icon/BI.png")
])

/** 
 * Lista com meus dashboards de portfólio
 * Lista com título, subtítulo, descrição e link do dashboard
 */
addComponents("dashboardsProjects", [
  DashboardProject(
    "1",
    "light",
    "Dashboard Pokémon",
    "Desafio DataB",
    `Dashboard de análise dos principais status de pokémons. O objetivo
    desse dashboard é trazer o detalhamento de informações de cada pokémon, como status, status
    especiais, tipo, evoluções e suas variações. O modelo desse dashboard fugiu do padrão de análise
    de dados comum, tendo como principal foco a identidade visual que se assemelhe ao padrão de
    Pokémon e a interação com o dashboard, de modo que o usuário tenha a liberdade de explorar e
    saber as principais informações sobre seus pokémons favoritos.`,
    "Dax", "10/2022",
    "https://app.powerbi.com/view?r=eyJrIjoiNzgzNzg5ODMtOGQ2Ni00N2U5LTk3YWUtMzgyNWU5OTdiMjExIiwidCI6ImM0YzEwNjgzLWRkYzgtNDM5My1hN2U1LWMyZWUwZjQzM2Q2MSJ9"
  ),
  DashboardProject(
    "2",
    "white",
    "Dashboard Copa do Mundo 2022",
    "Desafio Copa dos Dashboards - Minhas Planilhas",
    `Análise do histórico de Copas do Mundo(1930 - 2018). Esse dashboard é
    uma análise geral do histórico das Copas do Mundo, nele contém análises de quantidade de gols,
    melhores seleções e jogadores, média de gols por seleção, melhores e piores seleções baseadas em
    pontos e quantidade de gols, além das maiores audiências por estádio nas finais e o histórico do
    Brasil no ranking mundial. Tudo isso permite a análise e uma visão de como a nossa seleção está
    em comparação com os outros países e para acrescentar também é exibida a bandeira do país-sede e
    o cartaz promocional da copa no respectivo ano.`,
    "DAX",
    "09/2022",
    "https://app.powerbi.com/view?r=eyJrIjoiMmMxNjg1NzUtZTE2Yi00MzVhLTgwNmItMjcxNDA2YmNjODZiIiwidCI6ImM0YzEwNjgzLWRkYzgtNDM5My1hN2U1LWMyZWUwZjQzM2Q2MSJ9"
  ),
  DashboardProject(
    "3",
    "light",
    "Dashboard Copa do Mundo 2022",
    "Desafio DataB",
    `Análise do histórico de Copas do Mundo(1930 - 2018). Esse dashboard
    contém as análises de audiência, países participantes, países campeões entre outras análises que dão
    uma visão geral dos países, podendo verificar se há padrões no torneio, melhores seleções ou
    jogadores. No dashboard também são exibidas as bandeiras dos países a fim de gerar a identificação
    com o país de origem e promover o conhecimento de outras bandeiras.`,
    "DAX",
    "10/2022",
    "https://app.powerbi.com/view?r=eyJrIjoiNzVjNWI5ZDMtMzY5Yi00OTJkLWFkOTItOWFlMjFjZGYyOWQ2IiwidCI6ImM0YzEwNjgzLWRkYzgtNDM5My1hN2U1LWMyZWUwZjQzM2Q2MSJ9&pageName=ReportSection75c6c6009dd3eb0dd415"
  ),
  DashboardProject(
    "4",
    "white",
    "Dashboard de Clientes",
    "",
		`Dashboard de Análise de Performance de Clientes com dados fictícios.
		As análises trazem informações de receita, ticket médio e outros insights que auxiliam na tomada de
		decisão do negócio e facilitam a visualização de clientes fiéis ou que precisam ser desenvolvidos
		como exemplificado na Matriz de Ação.`,
		"",
		"08/2022",
		"https://app.powerbi.com/view?r=eyJrIjoiZWYxNTZmMDMtYzk2ZS00M2E4LTljZDQtY2QxMWUxOWE2NjZlIiwidCI6ImM0YzEwNjgzLWRkYzgtNDM5My1hN2U1LWMyZWUwZjQzM2Q2MSJ9&pageName=ReportSection"
					
  ),
  DashboardProject(
    "5",
    "light",
    "Report Colaboradores",
		"",
    "",
		"",
    "03/2022",
		"https://app.powerbi.com/view?r=eyJrIjoiYWUxNTZjNGItOWFhYi00MDFhLWJmNTYtNGVlZDVjZjRiZDk4IiwidCI6ImM0YzEwNjgzLWRkYzgtNDM5My1hN2U1LWMyZWUwZjQzM2Q2MSJ9&pageName=ReportSection90fe854a9eb8d4888de0"
  )
		/** Refazer capa e inserir descrição do dashboard */		
])
/**
 * Lista das ferramentas de Business Intelligence utilizadas
 * Lista com nome do botão, src da imagem de fundo e link de destino do botão
 */
addComponents("bicards", [
  BICard(
    "Power BI",
    "images/img_pbi.png",
    "#"
  ),
  BICard(
    "Metabase",
    "images/inc-mb.png",
    "under_construction.html"
  ),
  BICard(
    "Tableau",
    "images/inc-tb.png",
    "under_construction.html"
  ),
  BICard(
    "Python",
    "images/inc-py.png",
    "under_construction.html"
  ),
])