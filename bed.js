status = "";
img = " ";
total = [];

function preload(){
    img = loadImage("MOCA-Betterhomeindia-min.jpeg");
}

function setup(){
    canvas = createCanvas(600, 500);
    canvas.position(350, 350);

    objectDetector = ml5.objectDetector("cocossd", modelLoaded);
    document.getElementById("status").innerHTML = "Status = Detecting Objects";
}

function modelLoaded(){
    console.log("model loaded!!!!!!!!!");
    status = true;
    objectDetector.detect(img, gotResults);
}

function draw(){
    if(status != undefined){
        image(img, 0, 0, 600, 500);
        for(i = 0; i < total.length; i++){
            percent = floor(total[i].confidence * 100);
            stroke("#FF0000");
            fill("#FF0000");
            text(total[i].label, total[i].x + 15, total[i].y - 2);
            noFill();
            stroke("#FF0000");
            rect(total[i].x, total[i].y, total[i].width, total[i].height);
        }
    }
}

function gotResults(error, results){
    if(error){
        console.log(error);
    }
    console.log(results);
    total = results;
}