const popUp = document.getElementById("bg");
const button = document.getElementById("submit_button");

popUp.addEventListener("click", close);
button.addEventListener("click", open);

function open() {
  popUp.classList.add("active");
}

function close() {
  popUp.classList.remove("active");
}
