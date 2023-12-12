
const aboutMeButton = document.createElement("button");
aboutMeButton.textContent = "About Me";
document.body.appendChild(aboutMeButton);

const commissionsButton = document.createElement("button");
commissionsButton.textContent = "Commissions";
document.body.appendChild(commissionsButton);

aboutMeButton.addEventListener("click", () => {
  window.open("aboutme.html", "_blank");
});

commissionsButton.addEventListener("click", () => {
  window.open("commissions.html", "_blank");
});
