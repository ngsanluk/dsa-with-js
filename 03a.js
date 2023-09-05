endpoint1 = "https://jsonplaceholder.typicode.com/todos/";
endpoint2 = "https://jsonplaceholder.typicode.com/todos/1";
endpoint3 = "https://jsonplaceholder.typicode.com/users";
endpoint4 = "https://jsonplaceholder.typicode.com/users/1";

fetch(endpoint4)
  .then((response) => {
    return response.json();
  })
  .then((json) => {
    console.log(json);
  });
