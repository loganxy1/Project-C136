video = "";
status = "";

function preload(){
    video = createVideo("video.mp4");
    video.hide();
}

function setup(){
    canvas = createCanvas(600, 450);
    canvas.center();
}

function draw(){
    image(video, 0, 0, 600, 450);

}

function start(){
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
}

function modelLoaded(){
    console.log("model is loaded");
    document.getElementById("status").innerHTML = "Status: Detecting Objects";
    status = true;
    video.loop();
    video.speed(1.5);
    video.volume(2);
}