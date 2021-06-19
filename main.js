function setup(){
canvas=createCanvas(500,500);
canvas.position(800,150);
video=createCapture(VIDEO);
video.size(500,500);
video.position(30,100);
pn=ml5.poseNet(video,modelLoaded);
pn.on('pose',gotPoses);


}

function draw(){
    background("#969A97");

}

function gotPoses(results){
if(results.length>0){
console.log(results);
}

}



function modelLoaded(){
console.log("modelLoaded");

}