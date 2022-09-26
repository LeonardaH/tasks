// Find which key on the keyboard in pressed and show it on the screen. Fon instance, if key "a" is clicked on the screen it should stand: You pressed a

document.body.addEventListener(
  "keyup",
  (event) =>
    (document.querySelector("p").textContent = `You pressed ${event.key}`)
);
