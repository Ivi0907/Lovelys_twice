noseX = 0;
noseY = 0;
ear0 = "";
ear1 = "";
ear2 = "";
function preload() {
  ear0 = loadImage("Jeongyeon.png")
  ear1 = loadImage("nayeon.png")
  ear2 = loadImage("mina.png")
}

function setup() {
  canvas = createCanvas(400, 400);
  canvas.center();
  video = createCapture(VIDEO)
  video.hide();

  poseNet = ml5.poseNet(video, modelLoaded);
  poseNet.on('pose',gotPoses);
}

function modelLoaded(){
  console.log("El modelo ya se cargó mija ;)")
}

function gotPoses(results){
  console.log(results)
 

  if(results.length > 0){
  noseX = results[0].pose.nose.x-220;
  noseY = results[0].pose.nose.y-250;
  }
}

function draw() {
  //num = Math.floor(Math.random()*3);
  image(video, 0, 0, 400, 400);
  image(ear0, noseX, noseY, 200, 230);
}

function take_snapshot(){    
  save('Nayeon_cachetitos.png');
}

