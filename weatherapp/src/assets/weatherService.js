const API_KEY = "cef692cea24819bd63ef9e1c45ad8cbe";

const getFormattedWeatherData = async (city, unit = "metric") => {
  const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=${units}`;

  const data = await fetch(URL)
    .then((res) => res.json())
    .then((data) => data);

  console.log(data);
};

export { getFormattedWeatherData };
