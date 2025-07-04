window.onload = function () {
    draw();
}

var s = 50; // scale

function getText() { // encode chars >127 for reader conformity
    return unescape(encodeURIComponent(username.value + "\t" + password.value + "\n")); // unicode to UTF-8
}
function draw() {
    draw_qr();
    draw_aztec();
}

function draw_qr() {
    var r = quickresponse(username.value + "\t" + password.value + "\n", "A", -3);
    qr.src = toGif(r, s, 0);
}
function draw_aztec() {
    var r = aztec(getText(), 23);  
    az.src = toGif(r, s, 0);
}