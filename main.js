leftWristX = 0
rightWristX = 0
noseX = 0
noseY = 0
distance = 0
function preload(){

}
function setup(){
video = createCapture(VIDEO)
video.size(550, 500)
canvas = createCanvas(800, 450)
canvas.position(570, 288)
poseNet = ml5.poseNet(video, modelLoaded)
poseNet.on('pose', gotResult)
}
function modelLoaded(){
    console.log("PoseNet is initialized!")
}
function gotResult(results){
   if(results.length > 0){
console.log(results)
leftWristX = results[0].pose.leftWrist.x
rightWristX = results[0].pose.rightWrist.x
distance = floor(leftWristX - rightWristX)
console.log("Left Wrist X - " + leftWristX + " | Right Wrist X - " + rightWristX + " | Difference / distance = " + distance)
noseX = results[0].pose.nose.x
noseY = results[0].pose.nose.y
console.log("Nose X - " + noseX + " | Nose Y - " + noseY)
document.getElementById("size").innerHTML = "The Size of the Text is now: " + distance
   }
}
function draw(){
background('#949494')
textSize(distance)
text(document.getElementById("input_text").value, noseX, noseY)
}
