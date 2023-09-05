endpoint =
  "https://data.weather.gov.hk/weatherAPI/opendata/weather.php?dataType=fnd&lang=tc";

fetch(endpoint)
  .then((response) => {
    return response.json();
  })
  .then((json) => {
    console.log("\n=== JSON Response ===");
    console.log(json);

    console.log("\n=== General Situation ===");
    console.log(json.generalSituation);
  });
