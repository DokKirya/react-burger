const burgerUrl = "https://norma.nomoreparties.space/api";

const checkRes = (res) => {
  return res.ok ? res.json() : res.json().then(err => Promise.reject(err))
}

function getIngredients() {
  
  return fetch(`${burgerUrl}/ingredients`)
  .then(checkRes)
    
};

export default getIngredients;