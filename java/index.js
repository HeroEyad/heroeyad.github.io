document.addEventListener("DOMContentLoaded", function() {
  var audioButton = document.getElementById("me")
  var audioPlay = document.getElementById("audio")
  var buttonContainer = document.getElementById("buttonContainer");

  var buttons = [
      { text: "Socials", url: "socials.html" }
  ];

  function createKofiWidget() {
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

    return kofiScript;
  }

  audioButton.addEventListener("click", function() {
    if(audioPlay.paused) {
        audioPlay.play();
    } else {
        audioPlay.pause();
    }
  })

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

  var kofiButton = createKofiWidget();
  buttonContainer.appendChild(kofiButton);
});
