window.onload = function () {
    draw();
}

var s = 50; // scale

function getText() { // encode chars >127 for reader conformity
    return unescape(encodeURIComponent(username.value + "\t" + password.value + "\n")); // unicode to UTF-8
}
function draw() {

    (async () => {
        console.log('1')
        await getHtml()  
        console.log('2')
    })();

    draw_qr();
    draw_aztec();
    draw_dotcode();
    draw_hanxin();
}

async function draw_qr() {
    var r = quickresponse(username.value + "\t" + password.value + "\n", "A", -3);
    qr.src = toGif(r, s, 0);
    return Promise.
}
async function draw_aztec() {
    var r = aztec(getText(), 23);  
    az.src = toGif(r, s, 0);
}
async function draw_dotcode() {
    let canvas = document.createElement('canvas');
    bwipjs.toCanvas(canvas, {
        bcid:        'dotcode',       // Barcode type
        text:        username.value + "\t" + password.value + "\n",    // Text to encode
        scale:       30,               // 3x scaling factor
    });
    dc.src = canvas.toDataURL('image/png');
}
async function draw_hanxin() {
    let canvas = document.createElement('canvas');
    bwipjs.toCanvas(canvas, {
        bcid:        'hanxin',       // Barcode type
        text:        username.value + "\t" + password.value + "\n",    // Text to encode
        scale:       30,               // 3x scaling factor
    });
    hx.src = canvas.toDataURL('image/png');
}