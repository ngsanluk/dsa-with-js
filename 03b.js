endpoint = "https://jsonplaceholder.typicode.com/users";

fetch(endpoint)
  .then((response) => {
    return response.json();
  })
  .then((json) => {
    // un-comment following statements
    // one-group a time to experience retrieving json attributes/sub-attributes
    //console.log(json);
    //console.log(json[0]); // retrieve the first user in the users list
    //console.log(json[0].username); // retrieve user name of the first user in the users list
    //console.log(json[0].address); // retrieve address of the first user in the users list
    //console.log(json[0].address.geo); // retrieve geo info of the first user in the users list
    // console.log(json[0].address.geo.lat); // retrieve latitude info of the first user in the users list
  });
