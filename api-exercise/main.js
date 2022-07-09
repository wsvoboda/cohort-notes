// const searchInput = document.querySelector('.search')
const button = document.querySelector('.btn')
const cityName = document.querySelector('.city-name')
const currentWeather = document.querySelector('.current-weather')

// .then() method for API calls
const getWeather = () => {
  fetch('https://api.openweathermap.org/data/2.5/weather?zip=761sdf14,us&appid=3f13f8ca2ba61051250b3c015ae9067a&units=imperial')
    .then((response) => response.json())
    .then((data) => {
      console.log(data)
      const location = data.name
      const temperature = data.main.temp.toFixed(0)
      cityName.innerText = location
      currentWeather.innerText = temperature
    })
}

// async await method for API calls
// const getWeather = async () => {
//   const zipCode = searchInput.value

//   const dataFromApi = await fetch(`https://api.openweathermap.org/data/2.5/weather?zip=${zipCode},us&appid=3f13f8ca2ba61051250b3c015ae9067a&units=imperial`)
//   const data = await dataFromApi.json()

//   const location = data.name
//   const temperature = data.main.temp.toFixed(0)
//   cityName.innerText = location
//   currentWeather.innerText = temperature
// }

button.addEventListener('click', getWeather)