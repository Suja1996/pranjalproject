
var cat,catRunning,park,parkImage,cat,
jerry,jerryAnimation


function preload() {
cat1Animation=loadAnimation("images/cat1.png");
parkImage=loadImage("images/garden.png");
cat2Animation=loadAnimation("images/cat2.png","images/cat3.png"); 
cat3Image = loadAnimation("images/cat4.png")
jerry1Animation=loadAnimation("images/mouse1.png")
jerry2Animation=loadAnimation("images/mouse2.png","images/mouse3.png")
jerry3Image=loadAnimation("images/mouse4.png")

}

function setup(){
    createCanvas(700,400);
  
    cat=createSprite(600,320,10,10) 
    cat.addAnimation("catsleeping",cat1Animation)
    cat.addAnimation("running",cat1Animation)
    cat.scale=0.1
    
    jerry=createSprite(100,300,10,10) 
    jerry.addAnimation("jerryhappy",jerry1Animation)
    jerry.addAnimation("jerryteasing",jerry2Animation)
    jerry.scale=0.1
    
    //cat=createSprite(600,320,10,10)
    cat.addAnimation("catLastImage",cat3Image) 
    cat.scale=0.1

    //jerry=createSprite(100,300,10,10)
    jerry.addAnimation("jerryLastImage",jerry3Image)
    jerry.scale=0.1 

}

function draw() {

 background(parkImage);
    
 if(cat.x - jerry.x < (cat.width - jerry.width/2)){
    cat.velocityX=0 
    cat.addAnimation("catLastImage",cat3Image)
    cat.changeAnimation("catLastImage")

    jerry.velocityX=0
    jerry.addAnimation("jerryLastImage",jerry3Image)
    jerry.changeAnimation("jerryLastImage")
    
    cat.x=180
    cat.y=300
     
 }

    drawSprites();
    
}


function keyPressed(){
  
 if(keyCode === LEFT_ARROW){
    cat.velocityX = -5;
    cat.addAnimation("running",cat2Animation);
    cat.changeAnimation("running")
    //jerry1.velocityX = -5;
    //jerry.addAnimation("jerryteasing",jerryAnimation);
    jerry.changeAnimation("jerryteasing")
}

}

