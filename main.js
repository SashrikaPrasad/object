function draw() {
    image(img, 0, 0, 640, 420);
    fill("#FF0000");
text("Dog", 45, 75);
nofill();
stroke("#FF0000");
rect(30, 60, 450, 350);


fill("#FF0000");
text("Cat", 45, 75);
nofill();
stroke("#FF0000");
rect(300, 90, 270, 320);
}


function setup() {
    canvas = createCanvas(600, 500);
    canvas.center();

    ObjectDetector = ml5.ObjectDetector('cocossd', modelLoaded);
document.getElementById("#status").innerHTML = " Status = Detecting Objects " ;
}

img =""
status =""

function preload() {
    img = loadImage("dog_cat.jpg");
}

function modelLoaded() { 
    console.log( ' ModelLoaded' ) ; 
    status = true;
    ObjectDetector.detect(img, gotResult);
}

function gotResult(error, results) {
    if(error) {
        console.log(error);
    }
    console.log(results);
}