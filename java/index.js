document.addEventListener("DOMContentLoaded", function() {
  var buttonContainer = document.getElementById("buttonContainer");

  var buttons = [
      { text: "Socials", url: "socials.html" }
  ];

  buttons.forEach(function(buttonInfo) {
      var button = document.createElement("button");
      
      button.textContent = buttonInfo.text;

      button.classList.add("custom-button");
      button.style.backgroundColor = buttonInfo.color;

      button.addEventListener("click", function() {
          window.location.href = buttonInfo.url;
      });

      buttonContainer.appendChild(button);
  });
});
