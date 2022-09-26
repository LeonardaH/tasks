const button = document.querySelector("button");

button.addEventListener("click", fetchApp);

const checkAuth = () =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve("Fetching user...");
    }, 200);
  });

const fetchUser = () =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve("Checking Auth...");
    }, 200);
  });

const print = () =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve("Lara");
    }, 200);
  });

async function fetchApp() {
  const checkAuthPrint = await checkAuth();
  const fetchUserPrint = await fetchUser();
  const printUser = await print();

  console.log(checkAuthPrint);
  console.log(fetchUserPrint);
  console.log(printUser);
}
