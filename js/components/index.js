export function addComponent(idElement, strComponent){
  const cardsSkills = document.getElementById(idElement);
  
  cardsSkills.insertAdjacentHTML("beforeend", strComponent);
}

export function addComponents(idElement, arrComponent){
  if(Array.isArray(arrComponent)){
    arrComponent.forEach(component => {
      addComponent(idElement, component)
    });
  }
}

