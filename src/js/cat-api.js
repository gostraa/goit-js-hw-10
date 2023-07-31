const refs = {
    selectElem: document.querySelector(".breed-select"),
    loader: document.querySelector(".loader"),
    error: document.querySelector(".error"),
    displayElem: document.querySelector(".cat-info"),

};



function fetchBreeds() {
    return fetch("https://api.thecatapi.com/v1/breeds").then(res => {
        if (!res.ok) throw new Error(res.status)
        return res.json()
    })
};

fetchBreeds().then((array) => {
    const markup = array.map(cat => `<option value="${cat.id}">${cat.name}</option>`);
    refs.selectElem.innerHTML = markup;
}).catch(error => console.log(error));



refs.selectElem.addEventListener("change", event => {
    const breedId = event.target.value;
    fetchCatByBreed(breedId)
   
});


function fetchCatByBreed(breedId) {
    return fetch(`https://api.thecatapi.com/v1/breeds/${breedId}`).then(res => res.json()).then(({ name, description, temperament,reference_image_id }) => {
   const markup = `<img src="${reference_image_id}" alt="${name}">
      <h2>${name}</h2>
      <p>${description}</p>
      <p>${temperament}</p>`
    
   refs.displayElem.innerHTML = markup;
})
}






