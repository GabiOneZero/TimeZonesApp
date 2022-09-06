//Function -> Create querySelector for multiple uses
const $ = selector => document.querySelector(selector)

//Recover form datas
$('form').addEventListener('submit', (event) => {
  event.preventDefault()
  //Object (JSON) from Array[arrays]
  const data = Object.fromEntries(new window.FormData(event.target))
  console.log(data)
})
