
const BASE_URL = "https://api.thecatapi.com";

export function fetchBreeds() {
    return fetch(`${BASE_URL}/v1/breeds`)
        .then(response => {
            if (!response.ok) throw new Error(response.status);
            return response.json()
        })
}




 export function findCatById(id) {
     return fetch(`${BASE_URL}/v1/images/${id}`).then(response =>
       { if (!response.ok) throw new Error(response.status);
         return response.json()
     })
}




  export function fetchCatByBreed(breedId) {
    return fetch(`${BASE_URL}/v1/images/search?breed_ids=${breedId}`)
        .then(response => {
             if (!response.ok) throw new Error(response.status);
            return response.json()
        })
       
}

