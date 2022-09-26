// - API: https://reqres.in/api/login
// - credentials:
// 	- email: eve.holt@reqres.in
// 	- password: cityslicka
// - make login function
// - function sends data to server and in return gets token
// - after getting token, print it in the console
// - use async/await & fetch
// - fetch(url, options)
// 	- options have to have 'method', 'body' (json credentials) & 'headers'
// 		headers: {
//   			'Accept': 'application/json',
//   			'Content-Type': 'application/json'
// 		}

const credentials = {
  email: "eve.holt@reqres.in",
  password: "cityslicka",
};

const options = {
  method: "POST",
  body: JSON.stringify(credentials),
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
};

const login = async () => {
  const request = await fetch("https://reqres.in/api/login", options);

  if (request.status !== 200) {
    const message = `An error has occured: ${response.status}`;
    throw new Error(message);
  }

  const data = await response.json();
  console.log(data);
};

login();
