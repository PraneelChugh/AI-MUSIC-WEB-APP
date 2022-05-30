song= ""
leftWristY = 0;
leftWristX = 0;

rightWristY = 0;
rightWristX = 0;

scoreLeftWrist = 0;

leftWrist = 0;
rightWrist  = 0;

function preload(){
   song = loadSound("music.mp3", "music2.mp3");
   if(rightWrist == "music.mp3", leftWrist == "music2.mp3"){

   }
}

function setup(){
    canvas = createCanvas(600,500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();
    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        scoreLeftWrist = results[0].pose.keypoints[9].score;
        console.log("scoreLeftWrist = " + scoreLeftWrist);

        leftWristX = results[0].pose.leftWrist.x;
        leftWristY = results[0].pose.leftWrist.y;
        console.log("leftWristx = " + leftWristX + "leftWristY = " + leftWristY );

        rightWristX = results[0].pose.rightWrist.x;
        ;rightWristY= results[0].pose.rightWrist.y;
        console.log("rightWristx = " + rightWristX + "rightWristY = " + rightWristY );
    }
}

function modelLoaded(){
    console.log('PoseNet is Initialised');
}

function draw(){
    image(video,0,0,600,500);
    fill('#FF0000');
    stroke('#FF0000');
    circle(leftWristX,leftWristY,20);
}

function play(){
    song.play();
}