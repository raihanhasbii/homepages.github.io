// JavaScript untuk mengatur efek parallax saat melakukan scroll
window.addEventListener("scroll", function () {
    var scrolledHeight = window.pageYOffset;
    var parallaxElements = document.getElementsByClassName("parallax-bg");

    for (var i = 0; i < parallaxElements.length; i++) {
        var scrollSpeed = parallaxElements[i].getAttribute("data-scroll-speed");
        var yPos = -(scrolledHeight * scrollSpeed / 100);
        parallaxElements[i].style.transform = "translate3d(0px, " + yPos + "px, 0px)";
    }
});