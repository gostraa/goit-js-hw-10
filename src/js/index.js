
import { refs, createOptions, findCatById, updateDisplay,fetchBreeds } from "./cat-api"
import SlimSelect from 'slim-select'
import '/node_modules/slim-select/dist/slimselect.css'




refs.selectElem.addEventListener("change", onSelectChange);


fetchBreeds().then(response => { createOptions(response);
                new SlimSelect({
  select: '#selectElement'
})
            })
        .catch(error =>
            refs.error.classList.remove("is-hidden")
         )   




function onSelectChange(e) {
   
    refs.loader.classList.remove("is-hidden");
 
    const breedId = e.target.value;
    fetchCatByBreed(breedId).then(response => {
        const id = response[0].id
      
        findCatById(id).then(response => {
          
            updateDisplay(response);
            refs.loader.classList.add("is-hidden");
             
            
        }).catch(error => {
            refs.error.classList.remove("is-hidden");
            
          })
    }).catch(error => {
        refs.loader.classList.add("is-hidden");
        refs.displayElem.classList.add("is-hidden");
        refs.error.classList.remove("is-hidden")});

}


function fetchCatByBreed(breedId) {
    return fetch(`https://api.thecatapi.com/v1/images/search?breed_ids=${breedId}`)
        .then(response => response.json())
       
}














 

 







