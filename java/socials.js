var buttonContainer2 = document.getElementById("buttonContainer2");

var buttons = [
    { text: "Home", url: "index.html" }
];

var button1 = document.getElementById("button1");
var button2 = document.getElementById("button2");
var button3 = document.getElementById("button3");

button1.addEventListener("click", function() {
    window.location.href = "https://twitter.com/HeroEyad_"
});

button2.addEventListener("click", function() {
    window.location.href = "https://github.com/HeroEyad"
})

button3.addEventListener("click", function() {
    window.location.href = "https://www.youtube.com/c/HeroEyad"
})

buttons.forEach(function(buttonInfo) {
    var button = document.createElement("button");
    
    button.textContent = buttonInfo.text;

    button.classList.add("custom-button");
    button.style.backgroundColor = buttonInfo.color;

    button.addEventListener("click", function() {
        window.location.href = buttonInfo.url;
    });

    buttonContainer2.appendChild(button);
});