import { createComponent } from "./index.js";

/**
 * Componente para os dashboards do portfólio
 * @param {*} id - id para numerar os dashboards
 * @param {*} backgroundColor - Plano de fundo deve alterar entre cinza e branco (light ou white)
 * @param {*} title - Nome do Dashboard
 * @param {*} subtitle - De qual desafio ele é ou origem
 * @param {*} desc - Descrição do Dashboard
 * @param {*} resourcesUsed - Recursos e habilidades utilizadas no dashboard
 * @param {*} dateCreation - Data de criação do dashboard
 * @param {*} link - Link da view do dashboard
 * @returns 
 */

export default function DashboardProject(props) {
  return createComponent({
    component: `
      <!--Dash ${props.idNumber}-->
      <div class="notification is-${props.backgroundColor}">
        <div class="columns is-desktop">
          <div class="column">
            <h1 class="title has-text-centered">${props.title}</h1>
            <h2 class="subtitle has-text-centered">${props.subtitle}</h2>
            <p class="has-text-justified">${props.desc}</p>
            <br> <strong>Recursos Utilizados:</strong> ${props.resourcesUsed}
            <br> <strong>Criação:</strong> ${props.dateCreation}
            <br> <a class="button my-4 button-dash"
              href="${props.link}"
              target="_blank">
              <p class="my-4">Ver no Power BI</p>
            </a>
          </div>
          <div class="column">
            <figure class="image is-5by3">
              <iframe class="has-ratio" title="dash pokémon"
                src="${props.link}"
                frameborder="0" allowFullScreen="true"></iframe>
            </figure>
          </div>
        </div>
      </div>
      <!--end Dash ${props.idNumber}->
    `, props
  })
}