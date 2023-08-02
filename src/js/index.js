
import { findCatById,fetchBreeds,fetchCatByBreed} from "./cat-api"
import SlimSelect from 'slim-select'
import '/node_modules/slim-select/dist/slimselect.css'

 const refs = {
    selectElem: document.querySelector(".breed-select"),
    loader: document.querySelector(".loader"),
    error: document.querySelector(".error"),
    displayElem: document.querySelector(".cat-info"),

};




refs.selectElem.addEventListener("change", onSelectChange);
document.addEventListener("DOMContentLoaded", renderPage);


function renderPage() {
   refs.loader.classList.remove("is-hidden");

    fetchBreeds()
    .then(response => {
        
        createOptions(response);
  new SlimSelect({
  select: '#selectElement'
  })
        refs.selectElem.classList.remove("is-hidden");
})
    .catch(error =>
        refs.error.classList.remove("is-hidden"))
    .finally(() => {
        refs.loader.classList.add("is-hidden");
    }
                
            ) 
}




function onSelectChange(e) {
   
    refs.loader.classList.remove("is-hidden");
    refs.displayElem.classList.add("is-hidden");
    
 
    const breedId = e.target.value;
    fetchCatByBreed(breedId).then(response => {
        const id = response[0].id
      
        findCatById(id).then(response => {
          
            updateDisplay(response)
           
            refs.loader.classList.add("is-hidden");
            refs.displayElem.classList.remove("is-hidden");
             
            
        }).catch(error => {
            refs.error.classList.remove("is-hidden");
            refs.selectElem.classList.add("is-hidden");
            
          })
    }).catch(error => {
        refs.error.classList.remove("is-hidden");
        refs.loader.classList.add("is-hidden");
        refs.selectElem.classList.add("is-hidden");
        refs.displayElem.classList.add("is-hidden");
    }).finally(() => {
        refs.loader.classList.add("is-hidden");
    });
    
    

}





export function createOptions(response) {
    let optionMarkup = response.map(({ id, name }) =>
        `<option value="${id}">${name}</option>`);
    refs.selectElem.innerHTML = optionMarkup.join('');
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













 

 







