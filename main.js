import countries from './countries.json'

//Function -> Create querySelector for multiple uses
const $ = selector => document.querySelector(selector)

function changeTimeZone(date, timeZone) {

  const dateToUse = typeof date === 'string'
    ? new Date(date)
    : date

  const localDate = dateToUse.toLocaleString('es-ES', {
    hour12: false,
    hour: 'numeric', 
    minute: 'numeric',
    timeZone
  })

  return localDate
    .replace(':00', ' Hrs.')
}

const transformDateTostring = date => {
  
}

const [principalCountry, ...restOfCountries] = countries

//Recover form datas
$('form').addEventListener('submit', (event) => {
  event.preventDefault()
  //Object (JSON) from Array[arrays]
  const { date } = Object.fromEntries(new window.FormData(event.target))

  const mainDate = new Date(date)

  const html = countries.map(country => {
    const { timezones, emoji } = country
    const [timezone] = timezones
    const dateTimeZone = changeTimeZone(mainDate, timezone)

    return `${emoji} ${dateTimeZone}`
  }).join('\n')

  $('textarea').value = html

})
