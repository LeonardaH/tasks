// 1. Create a input field
// 2. Create a button and add the following functionalities to it:
// a. Throttling should be activated on the button (timeout should be variable) (Hint: you can copy the throttle function somewhere in the internet)
// b. If click is triggered, load the weather (use again https://openweathermap.org/api/one- call-3) of your current location (to get lat and long please have a look at https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API)
// c. Show the weather in the DOM (in any way)
// 3. Create another button called “Time Machine”
// a. If the user clicks the button, history weather information of your current location should be loaded (from a random date) and shown in the DOM

const weatherBtn = document.querySelector("#local");
const locationBtn = document.querySelector("#permission");
let lat;
let long;
const API_key = "68f60448f0ea793e27dda73e7ba552ba";

const getPosition = (options) => {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(resolve, reject, options);
  });
};

const getPermission = async () => {
  try {
    const currentPos = await getPosition();
    const {
      coords: { latitude, longitude },
    } = currentPos;
    console.log("latitude", latitude);
    console.log("longitude", longitude);
    weatherBtn.removeAttribute("disabled");
  } catch (error) {
    console.log(error);
  }
};

const throttleFunction = (func, delay) => {
  // Previously called time of the function
  let prev = 0;
  return (...args) => {
    // Current called time of the function
    let now = new Date().getTime();

    // Logging the difference between previously
    // called and current called timings
    console.log(now - prev, delay);

    // If difference is greater than delay call
    // the function again.
    if (now - prev > delay) {
      prev = now;

      // "..." is the spread operator here
      // returning the function with the
      // array of arguments
      return func(...args);
    }
  };
};

const getData = async () => {
  try {
    const localWeather = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${API_key}`
    );
    const data = await localWeather.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

weatherBtn.addEventListener("click", throttleFunction(getData, 1000));
locationBtn.addEventListener("click", getPermission);

// justa an example of geolocation

// geolocation

// const successClb = (position) => {
//   console.log(position);
// };
// const errorClb = (error) => {
//   console.log(error);
// };

// navigator.geolocation.getCurrentPosition(successClb, errorClb);

// const watchId = navigator.geolocation.watchPosition(successClb, errorClb);
