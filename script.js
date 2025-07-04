window.onload = function () {
    draw();
}

var s = 50; // scale

function getText() { // encode chars >127 for reader conformity
    return unescape(encodeURIComponent(username.value + "\t" + password.value + "\n")); // unicode to UTF-8
}
function draw() { // create rectangle Data Matrix as SVG path and squared as SVG squares
    draw_qr();
    draw_aztec();
}

function draw_qr() { // create QR barcode as GIF image
    var r = quickresponse(username.value + "\t" + password.value + "\n", "A", -3);
    gif.src = toGif(r, s, 0); // BG transparent/white
    gif.title = "Content: " + getText();
}
function draw_aztec() { // create Aztec barcode as canvas
    var r = aztec(getText(), 23); // setCell of array
    
    png.src = toGif(r, s, 0); // set barcode image
    png.title = "Content: " + getText();
}