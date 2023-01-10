import { createComponent } from "./index.js";

export function Test(props = {}){
  return createComponent(
    {
      component: `
        <div class="column has-text-centered mx-6">
          {children}
        </div>
      `,
      props
    }
  )
}

export function Text(props = {}){
  return createComponent(
    {
      component: `
        <h1>
          ${props.text}
          {children}
        </h1>
      `,
      props
    }
  )
}