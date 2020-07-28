var dog,happyDog;
var database
var foodS,foodStock;
var Image_dog
var foodStock=20




function preload() {
   
 Image_dog=loadImage("images/dogImg.png")
happyDog=loadImage("images/dogImg1.png")
}
function setup(){
    var canvas = createCanvas(500,500);
   

    database=firebase.database()
   
    
    dog = createSprite(250,250,10,10);
   dog.addImage("image",Image_dog)

   dog.scale=0.3;
 foodStock =database.ref("food")
 foodStock.on("value",readStock)
  
}

function draw(){
    background(43,139,87);

if(keyWentDown(UP_ARROW)){
  writeStock(foodS);
  dog.addImage("second",happyDog)
}
drawSprites();
textSize(35)
fill("red")
text("food Left"+foodS,100,100)

  
   
}
function readStock(data){
    foodS=data.val();
}

function writeStock(x){
    if(x<=0){
        x=0;
    }else{
        x=x-1;
    }
    database.ref('/').update({
        food:x
      })
    }