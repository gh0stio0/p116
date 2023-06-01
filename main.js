nosex=0
nosey=0
function preload(){
    mustache_image=loadImage('https://i.postimg.cc/3x3QzSGq/m.png ')
}
function setup(){
    canvas=createCanvas(300,300);
    canvas.center()
video=createCapture(VIDEO)
video.size(300,300)
video.hide()
   posenet=ml5.poseNet(video,modelLoaded)
   posenet.on('pose',gotPoses)
}


function draw(){
    image(video,0,0,300,300)
    
    image(mustache_image,nosex,nosey,30,30)
}
function modelLoaded(){
    console.log("model is loaded")
}
function gotPoses(results){
if(results.length>0){
    console.log(results)
    console.log("nosex= "+results[0].pose.nose.x)
    console.log("nosey= "+results[0].pose.nose.y)
    nosex=results[0].pose.nose.x-15
    nosey=results[0].pose.nose.y-15
}
}
function take_snapshot(){
    save('shreshta.png')
}