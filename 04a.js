// Using JavaScript map() function
// map() function repetitively perform processing
// to each items in an array

endpoint =
  "https://data.weather.gov.hk/weatherAPI/opendata/weather.php?dataType=fnd&lang=tc";

fetch(endpoint)
  .then((response) => {
    return response.json();
  })
  .then((json) => {
    console.log("\n=== 9-Day Forecast Array ===");
    nineDayForecast = json.weatherForecast; // nineDayForecast is an array of object
    console.log(nineDayForecast);

    // map() function visits each element once
    // and perform required processing on each element
    console.log("\n=== Max Temperature for coming 9-day (°C) ===");
    // use map function to retrieve the max temperature value of each object
    maxTemp = nineDayForecast.map((item) => item.forecastMaxtemp.value);
    console.log(maxTemp); // output an array of max temperature for the past 9 days

    // The following codes take max temperature for each day
    // and aplly simple calculation that coverts degree in Celius to Fahrenheit
    console.log("\n=== Max Temperature for coming 9-day (°F) ===");
    maxTempF = nineDayForecast.map(
      (item) => (item.forecastMaxtemp.value * 9) / 5 + 32
    );
    console.log(maxTempF); // this output an array of max temperature in Fahrenheit
  });
