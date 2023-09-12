// Using JavaScript filter() function
// filer() function visits each element in the array
// and performs certain condition checking on each element in the array
// if the element fulfills the condition, it remains in the result
// otherwise, it's got ride of

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

    // filter() function visits each element once
    // and evaluate if the element fulfill the specified contion
    // so as to stay in the result
    console.log("\n=== Days with Max Temperature Higher than 29 Degree ===");
    higherThan29 = nineDayForecast.filter(
      (item) => item.forecastMaxtemp.value > 29
    );
    console.log(higherThan29);
  });
