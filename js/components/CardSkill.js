import { createComponent } from "./index.js";

/**
 * Componente de card com imagem, nome e descrição da skill
 * @param {String} title - Nome da skill 
 * @param {String} desc - Descrição da skill
 * @param {String} imageSrc - Imagem da skill
 * @returns 
 */
export default function cardSkill(props){
  return createComponent({
    component: `
      <div class="column has-text-centered mx-6">
        <div class="p-card py-5">
          <img class="icon-size" src="${props.imageSrc}">
          <p class="is-size-5">${props.title}</p>
          <p class="description">${props.desc}</p>
        </div>
      </div>
    `,
    props
  });
}