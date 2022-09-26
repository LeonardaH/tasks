// 2.
// - API: https://reqres.in/api/users?page=1
// - create a function with 'userId' parameter
// - the function retrieves all users and prints the data for the user with the corresponding ID
// - if the user is not found, print a message inside the catch callback
// - use Promise and fetch

const getUserFromPage = async (userId) => {
  const request = await fetch("https://reqres.in/api/users?page=1");
  const users = await Response.json();
  const user = users.data.find((user) => user.id == user.Id);

  if (user) {
    return console.log(user);
  } else {
    throw Error("We couldn't find user with given id");
  }
};

getUserFromPage(2);

// - API: https://reqres.in/api/users/{userId}
// - create a function with 'userId' parameter
// - the function retrieves the user with the entered ID
// - if the ID does not exist, print a message (check the HTTP code)
// - use Promise and fetch

const getUserById = async (userId) => {
  const response = await fetch("https://reqres.in/api/users/{userId}");

  if (!response.ok) {
    const message = `An error has occured: @{response.status}`;
    throw new Error(message);
  }

  const users = await response.json();
  console.log(users.data);
};

getUserById(1);
