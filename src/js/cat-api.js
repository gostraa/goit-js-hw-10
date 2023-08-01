export const refs = {
    selectElem: document.querySelector(".breed-select"),
    loader: document.querySelector(".loader"),
    error: document.querySelector(".error"),
    displayElem: document.querySelector(".cat-info"),

};

export function createOptions(response) {
    let optionMarkup = response.map(({ id, name }) =>
        `<option value="${id}">${name}</option>`);
    refs.selectElem.innerHTML = optionMarkup.join('');
}



 export function findCatById(id) {
      return  fetch(`https://api.thecatapi.com/v1/images/${id}`).then(response => response.json())
}


 export function updateDisplay(object) {
    const markup = `
        <img src= "${object.url}"alt="${object.breeds[0].name}" width=300>
        <h2>${object.breeds[0].name}</h2>
        <p>Temperament:${object.breeds[0].temperament}</p>
        <p>${object.breeds[0].description}</p>
    `;
   refs.displayElem.innerHTML = markup;
}