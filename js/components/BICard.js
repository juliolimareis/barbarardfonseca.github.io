/**
 * Componente de card com imagem de fundo e botão com link
 * @param {*} label - Nome do botão 
 * @param {*} imageSrc - Imagem de fundo
 * @param {*} link - Link de destino do botão
 * @returns 
 */
export default function BICard(
  label = "",
  imageSrc = "",
  link = ""
){
  return `
  <div class="column mx-5">
    <div class="card bloco02">
      <div class="card-image">
        <figure class="image is-2by1">
          <img src="${imageSrc}" alt="Placeholder image">
          <a class="button button-config" href="${link}">${label}</a>
        </figure>
      </div>
    </div>
  </div>
`
}