// Using JavaScript reduce() function
// reduce() function perform aggregate function
// such as summation or average value
// for a collection of items

endpoint =
  "https://data.weather.gov.hk/weatherAPI/opendata/weather.php?dataType=fnd&lang=tc";

fetch(endpoint)
  .then((response) => {
    return response.json();
  })
  .then((json) => {
    console.log("\n=== 9-Day Forecast Array ===");
    nineDayForecast = json.weatherForecast; // nineDayForecast is an array
    console.log(nineDayForecast);

    // reduce() function accumulateively perform certain operaton
    // e.g. the total value of all elements
    console.log("\n=== Average Temperature for coming 9-day ===");
    totalMaxTemp = nineDayForecast.reduce(
      (accumulator, day) => accumulator + day.forecastMaxtemp.value,
      0
    );
    console.log(totalMaxTemp / nineDayForecast.length);
  });
