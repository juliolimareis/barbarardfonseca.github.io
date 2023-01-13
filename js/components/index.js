const propsPublicKeys = ["className", "children", "style"];

function insertComponent(
  { 
    targetElement, 
    component: { 
      className = "",
      textComponent = "", 
      style,
      attr = {},
      children = ""
    } 
  }
){
  if(textComponent && targetElement){
    textComponent = textComponent.replace("{children}", "<span class=\"@children_scoped\"></span>");
    
    targetElement.insertAdjacentHTML("beforeend", textComponent);
    const component = targetElement.lastElementChild;

    if(component){
      if(Object.keys(attr).length)
        Object.keys(attr).forEach(
          key => component[key] = attr[key]
        );
      if(className)
        component.classList.add(className);
      if(style)
        if(Object.keys(style).length)
          Object.keys(style).forEach(
            key => component.style[key] = style[key]
          );
        else component.setAttribute("style", style);
      
      // children process
      if(children){
        const strChildren = [];
        const componentChildren = [];
    
        if(Array.isArray(children)){
          children.map(child => {
            if(typeof child === "string")
              strChildren.push(child);
            else if (typeof child === "object") 
              componentChildren.push(child)
          })
        }else{
          if(typeof children === "string")
            strChildren.push(children);
          else if (typeof children === "object") 
            componentChildren.push(children)
        }
        
        const childrenScope = component
          .getElementsByClassName("@children_scoped");

        if(childrenScope.length){
          strChildren.forEach(strChild => {
            childrenScope[0].insertAdjacentHTML("beforeend", strChild)
            // childrenScope[0].insertAdjacentHTML("afterend", strChild)
          });

          componentChildren.forEach(compChildren => {
            insertComponent({ 
              targetElement: childrenScope[0],
              component: compChildren
            })
          });
        }
      }
    }
  }
}

export function removeAllChildren(){
	const childrenNodes = document.getElementsByClassName("@children_scoped");
	Array.from(childrenNodes).forEach((node) => node.replaceWith(...node.childNodes));
}

/**
 * @param {String} id -Id elemento para inserir 
 * @param {String | String[]} element
 */
export default function addComponent(id = "", element){
  let targetElement;
  
  if(id[0] === ".")
    targetElement = document.getElementsByClassName(id.replace(".", ""))[0];
  else if(id[0] === "#")
    targetElement = document.getElementById(id.replace("#", ""));
  else if(id[0] === "@")
    targetElement = document.getElementsByTagName(id.replace("@", ""));
  else
    targetElement = document.getElementById(id);

  if(targetElement && element){
    if(Array.isArray(element)){
      element.forEach(component => {
        insertComponent({ targetElement, component });
      });
    }else{
      insertComponent({ targetElement, component: element });
    }
  }
}

/**
 * @param {String} textComponent - Component em formato de texto com {keysWords} 
 * @param {Array} propsConf - Nome dos parâmetros
 * @param {Object} props - props do objeto
 */
export function createComponent({ component = "", props={} }){
  return {
    textComponent: component,
    ...props
  }
}