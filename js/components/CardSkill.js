/**
 * Componente de card com imagem, nome e descrição da skill
 * @param {*} title - Nome da skill 
 * @param {*} desc - Descrição da skill
 * @param {*} imageSrc - Imagem da skill
 * @returns 
 */
export default function cardSkill(title, desc, imageSrc){
  return `
    <div class="column has-text-centered mx-6">
      <div class="p-card py-5">
        <img class="icon-size" src="${imageSrc}">
        <p class="is-size-5">${title}</p>
        <p class="description">${desc}</p>
      </div>
    </div>
  `;
}