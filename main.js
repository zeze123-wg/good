function setup(){
    vidio = createCapture(VIDEO);
    vidio.size(500,423);
    vidio.position(100,100)
 canvas = createCanvas(400,400);
 canvas.position(1000,100);

//  posenet = ml5.poseNet(vidio,model_model);
//  posenet.on('anything',model_gotkid);
}

function model_model(){
    console.log("idk what to write, model is indagdad");
}