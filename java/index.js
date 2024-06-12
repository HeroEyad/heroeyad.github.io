document.addEventListener("DOMContentLoaded", function() {
  var audioPlay = document.getElementById("audio");
  var audioButton = document.getElementById("me");
  var buttonContainer = document.getElementById("buttonContainer");
  var overlay = document.getElementById("overlay");
  var startButton = document.getElementById("startButton");
  var loadingOverlay = document.getElementById("loadingOverlay");

  var buttons = [
      { text: "Socials", url: "socials.html" },
      { text: "Examples", url: "https://twitter.com/HeroEyad_/status/1704444656140849251?t=-EeseU-yP3LBYEZJOXkJdA&s=19"},
      { text: "My OC", url: "oc.html"}
  ];

  setTimeout(function() {
    loadingOverlay.style.display = "none";
    overlay.style.display = "flex";
}, 5000);

  startButton.addEventListener("click", function() {
      overlay.style.display = "none";
      audioPlay.play().catch(function(error) {
          console.log("Autoplay was prevented. User interaction is required.");
      });
  });

  audioButton.addEventListener("click", function() {
      if(audioPlay.paused) {
          audioPlay.play();
      } else {
          audioPlay.pause();
      }
  });

  buttons.forEach(function(buttonInfo) {
      var button = document.createElement("button");
      button.textContent = buttonInfo.text;
      button.classList.add("custom-button");

      button.addEventListener("click", function() {
          window.location.href = buttonInfo.url;
      });

      buttonContainer.appendChild(button);
  });

  var kofiScript = document.createElement("script");
  kofiScript.src = 'https://storage.ko-fi.com/cdn/scripts/overlay-widget.js';
  kofiScript.async = true;

  kofiScript.onload = function() {
      kofiWidgetOverlay.draw('heroeyad', {
          'type': 'floating-chat',
          'floating-chat.donateButton.text': 'Support me',
          'floating-chat.donateButton.background-color': '#323842',
          'floating-chat.donateButton.text-color': '#fff'
      });
  };

  buttonContainer.appendChild(kofiScript);
});