var buttonContainer3 = document.getElementById("buttonContainer3");

var buttons = [
    { text: "Home", url: "index.html" },
    { text: "Examples", url: "https://twitter.com/HeroEyad_/status/1704444656140849251?t=-EeseU-yP3LBYEZJOXkJdA&s=19"},
    { text: "Socials", url: "socials.html" }
]

buttons.forEach(function(buttonInfo) {
    var button = document.createElement("button");
    
    button.textContent = buttonInfo.text;

    button.classList.add("custom-button");
    button.style.backgroundColor = buttonInfo.color;

    button.addEventListener("click", function() {
        window.location.href = buttonInfo.url;
    });

    button.style.margin = "10px";

    buttonContainer3.appendChild(button);
});