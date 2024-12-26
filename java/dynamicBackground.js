(function() {
    document.onmousemove = handleMouseMove;
    function handleMouseMove(event) {
        var eventDoc, doc, body;

        event = event || window.event; // IE-ism

        var winWidth = window.innerWidth;
        var winHeight = window.innerHeight;

        var mouseX = event.pageX;
        var mouseY = event.pageY;

        document.body.style.backgroundPositionX = (mouseX * 15) / winWidth + "px";
        document.body.style.backgroundPositionY = (mouseY * 10) / winHeight + "px";
    }
})();