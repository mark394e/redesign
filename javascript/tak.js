const popUp = document.getElementById("bg");
const button = document.getElementById("submit_button");
const closeButton = document.getElementById("close_button");

closeButton.addEventListener("click", close);
button.addEventListener("click", open);

function open() {
  popUp.classList.add("active"); //tilføjer attribut class="active" og får et pop-up vindue til at dukke op
}

function close() {
  popUp.classList.remove("active"); //fjerner attribut class="active" og lukker pop-up vinduet
}
