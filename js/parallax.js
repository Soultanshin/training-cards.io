(function() {

    document.addEventListener("mousemove", parallax);
    const elem = document.querySelector("#parallax");

    function parallax(e) {
        let _w = window.innerWidth/2;

        let _mouseX = e.clientX;
        let _mouseY = e.clientY;
        let _depth2 = `${100 - (_mouseX - _w) * 0.002}%`;
        let _depth3 = `${100 - (_mouseX - _w) * 0.002}%`;
        // console.log(x);
        elem.style.backgroundPosition = `${_depth3}, ${_depth2}`;
    }
})();