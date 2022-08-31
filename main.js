import countries from './countries.json'
//$ -> no es Jquery
// Es una función de nombre -> $
const $ = selector => document.querySelector(selector)

const spainInfo = countries.find(country => country.country_code === 'ES')

$('form').addEventListener('submit', (event) => {
    event.preventDefault()
    //Convertir lo que obtenemos del FormData en un objeto JSON
    const data = Object.fromEntries(new window.FormData(event.target))
    console.log(data)

})