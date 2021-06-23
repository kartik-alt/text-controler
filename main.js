nosex=0;
nosey=0;
rightwristx=0;
leftwristx=0;
diffrence=0;
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
    fill("red")
    text("kartik",nosex, nosey);
    textSize(diffrence);
}

function gotPoses(results){
if(results.length>0){
console.log(results);
nosex=results[0].pose.nose.x;
      nosey=results[0].pose.nose.y;
      console.log("nosex= "+nosex+"nosey= "+nosey);
      rightwristx= results[0].pose.rightWrist.x;
      leftwristx= results[0].pose.leftWrist.x;
      diffrence= floor(leftwristx-rightwristx);
      console.log(" leftwrist= "+leftwristx+"rightwristx= "+rightwristx+"diffrence= "+diffrence);
}

}



function modelLoaded(){
console.log("modelLoaded");

}
