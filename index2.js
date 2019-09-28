let today = new Date()
let formatDate = today.toDateString()
let selectElement = document.getElementById('date')
selectElement.innerHTML = formatDate




function changecolor() {
    var div1 =
        document.getElementById("div1");
    var div2 =
        document.getElementById("div2");
    div1.className =
        "blueback";
    div2.className =
        "crimsonback";


}

function changetext() {
    var divElement1 =
        document.getElementById("div1");
    var divElement2 =
        document.getElementById("div2");
    divElement1.innerHTML =
        "Thanks for visiting";
    divElement2.innerHTML =
        "Oops!! I've been changed";


}

function dolime() {
    var canvas =
        document.getElementById("d1");
    canvas.style.backgroundColor = "lime";
}

function doyellow() {
    var canvas =
        document.getElementById("d1");
    canvas.style.backgroundColor = "white";
    var context =
        canvas.getContext("2d");

    context.fillStyle = "yellow";

    context.fillRect(10, 10, 60, 60);

    context.fillRect(80, 10, 60, 60);


    context.fillStyle = "Crimson";

    context.font = "20px Arial";

    context.fillText("Whats Up", 20, 50);


}

function dosquare() {
    var dd2 = document.getElementById("d2");
    var sizeinput =
        document.getElementById("sldr");
    var size = sizeinput.value;
    var ctx = dd2.getContext("2d");
    ctx.clearRect(0, 0, dd2.width, dd2.height);
    ctx.fillStyle = "Red";
    ctx.fillRect(10, 10, size, size);
}

function docolor() {
    var dd2 = document.getElementById("d2");
    var colorinput =
        document.getElementById("clr");
    var color = colorinput.value;
    dd2.style.backgroundColor = color;
}

var image;

function upload() {
    var imgcanvas = document.getElementById("can");
    var fileinput = document.getElementById("finput");
    image = new SimpleImage(fileinput);
    image.drawTo(imgcanvas);
}

function makeGray() {
    for (var pixel of image.value()) {
        var avg = (pixel.getRed() + pixel.getGreen() + pixel.getBlue()) / 3;
        pixel.setRed(avg);
        pixel.setBlue(avg);
        pixel.setgreen(avg);
    }
    var imgcanvas1 = document.getElementById("gsac");
    image.drawTo(imgcanvas1);



}

var fgimage = null;

function loadforegroundimage() {
    var imgFile = document.getElementById("fgfile");
    fgimage = new SimpleImage(imgFile);
    var canvas = document.getElementById("fgcan");
    fgimage.drawTo(canvas);

}

function greenScreen() {
    if (fgimage == null || !fgimage.complete()) {
        alert("foreground not loaded")
    }
    if (bgimage == null || !bgimage.complete()) {
        alert("background not loaded")
    }
    clearCanvas();




}