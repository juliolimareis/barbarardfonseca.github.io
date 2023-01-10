/**
 * Componente para os dashboards do portfólio
 * @param {*} idNumber - id para numerar os dashboards
 * @param {*} backgroundColor - Plano de fundo deve alterar entre cinza e branco (light ou white)
 * @param {*} title - Nome do Dashboard
 * @param {*} subtitle - De qual desafio ele é ou origem
 * @param {*} desc - Descrição do Dashboard
 * @param {*} resourcesUsed - Recursos e habilidades utilizadas no dashboard
 * @param {*} dateCreation - Data de criação do dashboard
 * @param {*} link - Link da view do dashboard
 * @returns 
 */

export default function DashboardProject(
  idNumber,
  backgroundColor,
  title = "",
  subtitle,
  desc,
  resourcesUsed,
  dateCreation,
  link 
) {
  return `
    <!--Dash ${idNumber}-->
    <div class="notification is-${backgroundColor}">
      <div class="columns is-desktop">
        <div class="column">
          <h1 class="title has-text-centered">${title}</h1>
          <h2 class="subtitle has-text-centered">${subtitle}</h2>
          <p class="has-text-justified">${desc}</p>
          <br> <strong>Recursos Utilizados:</strong> ${resourcesUsed}
          <br> <strong>Criação:</strong> ${dateCreation}
          <br> <a class="button my-4 button-dash"
            href="${link}"
            target="_blank">
            <p class="my-4">Ver no Power BI</p>
          </a>
        </div>
        <div class="column">
          <figure class="image is-5by3">
            <iframe class="has-ratio" title="dash pokemon"
              src="${link}"
              frameborder="0" allowFullScreen="true"></iframe>
          </figure>
        </div>
      </div>
    </div>
    <!--end Dash ${idNumber}->
  `
}