import NavbarProcess from "../navbarProcess.js";
import { createComponent } from "./index.js";

NavbarProcess()

/**
 * Componente de card com imagem de fundo e botão com link
 * @param {*} label - Nome do botão 
 * @param {*} imageSrc - Imagem de fundo
 * @param {*} link - Link de destino do botão
 * @returns 
 */
export default function BICard(props){
  return createComponent({
    component: `
      <div class="column mx-5">
        <div class="card bloco02">
          <div class="card-image">
            <figure class="image is-2by1">
              <img src="${props.imageSrc}" alt="Placeholder image">
              <a class="button button-config" href="${props.link}">${props.label}</a>
            </figure>
          </div>
        </div>
      </div>
    `, props
  })
}