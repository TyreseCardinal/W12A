document.getElementById('apiButton').addEventListener('click', function () {
  let config = {
    method: 'get',
    maxBodyLength: Infinity,
    url: 'https://api.weatherstack.com/current?query=Edmonton&access_key=be93a4d5d7aa2772bda30df1488501c3',
  };

  axios.request(config)
    .then((response) => {
      const data = response.data;
      const output = `
        Location: ${data.location.name}, ${data.location.country}<br>
        Temperature: ${data.current.temperature}°C<br>
        Weather: ${data.current.weather_descriptions[0]}<br>
        Wind Speed: ${data.current.wind_speed} km/h
      `;
      document.getElementById('output').innerHTML = output;
    })
    .catch((error) => {
      console.log(error);
      document.getElementById('output').innerHTML = 'Error fetching data. Please try again.';
    });
});
