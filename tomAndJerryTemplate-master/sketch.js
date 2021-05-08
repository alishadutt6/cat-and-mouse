var cat;
var mouse;
var garden;

var cat1img, catsimg, cat4img;
var mouse1img, mouseimg, mouse4img;
var gardenimg;

function preload() {
    gardenimg = loadImage("images/garden.png")
  
  cat1img = loadImage("images/cat1.png");
  catsimg = loadAnimation("images/cat2.png","images/cat3.png");   
  cat4img = loadImage("images/cat4.png");
  
  mouse1img = loadImage("images/mouse1.png");
  mouseimg = loadAnimation("images/mouse2.png","images/mouse2.png")
  mouse4img = loadImage("images/mouse4.png")
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
  //garden = createSprite(200,200,200,200)
  //garden.addImage(gardenimg);
  
  cat = createSprite(800,600,20,20);
  cat.addImage(cat1img);
  cat.scale = 0.1;
  
  mouse = createSprite(200,600,20,20);
  mouse.addImage(mouse1img);
  mouse.scale = 0.1

}

function draw() {

    background(gardenimg);

 if(cat.x - mouse.x < (cat.width - mouse.width)/2){
  cat.addAnimation("catLastImage", cat4img);
  cat.changeAnimation("catLastImage");
  cat.scale = 0.1;
  cat.velocityX = 0;
  cat.x = 250

  mouse.addAnimation("spymouse", mouse4img);
  mouse.changeAnimation("spymouse");
  mouse.scale = 0.1;
 }
    drawSprites();
}


function keyPressed(){
    if(keyCode === LEFT_ARROW){
        cat.velocityX = -5;
        cat.addAnimation("catsRunning",catsimg);
        cat.changeAnimation("catsRunning")
        cat.scale = 0.1;
        
        mouse.addAnimation("mouseTeasing", mouseimg )
        mouse.changeAnimation("mouseTeasing")
        mouse.scale = 0.1;
        }
  

}
