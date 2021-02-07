// All the DOM selectors stored as short variables
const shortDescription = document.getElementById("shortDescription")
const body = document.getElementById("body")
const temperature = document.getElementById("temperature")
const sunrise = document.getElementById("sunrise")
const sunset = document.getElementById("sunset")
const description = document.getElementById("description")
const forecast = document.getElementById("forecast")
const icon = document.getElementById("icon")

// Global variables
const API_KEY = "6853abe54e26c738d55edee26624374d"
const BASE_URL = "http://api.openweathermap.org/data/2.5/weather"
let city = "Stockholm"

const URL = `${BASE_URL}?q=${city}&units=metric&APPID=${API_KEY}`

fetch(URL)
    .then(response => response.json())
    .then(data => console.log(data.main.temp))