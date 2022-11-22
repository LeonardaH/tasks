// build a small search app where the user can type in the city and submit
// it. After the submit the suer can see the city name, temperature and the weather description

const enter = document.getElementById("submit");
const input = document.getElementById("city");
const description = document.querySelector(".info");
const api_key = "68f60448f0ea793e27dda73e7ba552ba";

const getWeather = async () => {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${input.value}&appid=${api_key}&units=metric`;
  const response = await fetch(url);
  const data = await response.json();
  try{
    refresh();
    showData(data);
  }catch{
    description.innerHTML = "City is not found"
  }
};

const showData = (data) => {
  const template = `
    <p>City: ${data.name}</p>
    <p>Temperature: ${data.main.temp} °C</p>
    <p>Min temp: ${data.main.temp_min}</p>
    <p>Max temp: ${data.main.temp_max}</p>
  `;
  description.insertAdjacentHTML("beforeend", template);
};

const refresh = () => {
  input.value = "";
  description.innerHTML = "";
}

enter.addEventListener("click", getWeather);
