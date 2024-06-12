document.addEventListener("DOMContentLoaded", function() {
    var buttonContainer2 = document.getElementById("buttonContainer2");

    var buttons = [
        { text: "Home", url: "index.html" },
        { text: "My OC", url: "oc.html"},
        { text: "Examples", url: "https://twitter.com/HeroEyad_/status/1704444656140849251?t=-EeseU-yP3LBYEZJOXkJdA&s=19"}
    ];

    var button1 = document.getElementById("button1");
    var button2 = document.getElementById("button2");
    var button3 = document.getElementById("button3");
    var button4 = doucment.getElementById("button4")
    var button5 = document.getElementById("button5")

    button1.addEventListener("click", function() {
        window.location.href = "https://twitter.com/HeroEyad_";
    });

    button2.addEventListener("click", function() {
        window.location.href = "https://github.com/HeroEyad";
    });

    button3.addEventListener("click", function() {
        window.location.href = "https://www.youtube.com/c/HeroEyad";
    });

    button4.addEventListener("click", function() {
        window.location.href = "https://gamebanana.com/members/1826250"
    });

    button5.addEventListener("click", function() {
        window.location.href = "https://steamcommunity.com/id/heroeyad8/"
    });

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
});
