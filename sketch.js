const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var ground, stand;

var b1, b2, b3, b4, b5;
var b6, b7, b8, b9, b10;
var b11, b12, b13, b14, b15, b16;

var b17, b18, b19, b20, b21;
var b22, b23, b24, b25;

var polygon, polygonImage

function preload() {
polygonImage=loadImage("polygon.png")
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    stand = new Ground(390,300,250,10);
    stand2 = new Ground(700,200,200,10);

    b1 = new Box (300, 275);
    b2 = new Box (330, 275);
    b3 = new Box (360, 275);
    b4 = new Box (390, 275);
    b5 = new Box (420, 275);
    b6 = new Box (450, 275);
    b7 = new Box (480, 275);

    b8 = new Box (330, 235);
    b9 = new Box (360, 235);
    b10 = new Box (390, 235);
    b11 = new Box (420, 235);
    b12 = new Box (450, 235);

    b13 = new Box (360, 195);
    b14 = new Box (390, 195);
    b15 = new Box (420, 195);

    b16 = new Box (390, 155);

    //stand 2 boxes
    b17 = new Box (640, 175);
    b18 = new Box (670, 175);
    b19 = new Box (700, 175);
    b20 = new Box (730, 175);
    b21 = new Box (760, 175);

    b22 = new Box (670, 135);
    b23 = new Box (700, 135);
    b24 = new Box (730, 135);

    b25 = new Box (700, 95);
polygon = Bodies.circle(100,200,30)
World.add(world,polygon)
    slingshot = new SlingShot(polygon,{x:100, y:200});

}

function draw(){
    background("black");

    ground.display();

    fill(200);
    stand.display();
    stand2.display();
    
    fill("lightBlue")
    b1.display();
    b2.display();
    b3.display();
    b4.display();
    b5.display();
    b6.display();
    b7.display();

    fill("lightGreen")
    b8.display();
    b9.display();
    b10.display();
    b11.display();
    b12.display();

    fill("pink")
    b13.display();
    b14.display();
    b15.display();

    fill("lightOrange")
    b16.display();

    fill("lightGreen")
    b17.display();
    b18.display();
    b19.display();
    b20.display();
    b21.display();

    fill("pink")
    b22.display();
    b23.display();
    b24.display();

    fill("lightOrange")
    b25.display();
    image(polygonImage, polygon.position.x, polygon.position.y, 30, 30);
    slingshot.display();
    
    // fill("white");
    // noStroke();
    // textSize(25);
    // text("Score: "+ score, width - 200, 50);
    Engine.update(engine);
    // slingshot.display();    
}

function mouseDragged(){
    //if (gameState!=="launched"){
        Matter.Body.setPosition(polygon, {x: mouseX , y: mouseY});
    //}
}


function mouseReleased(){
    slingshot.fly();
}

function keyPressed(){
    if(keyCode === 32){
 slingshot.attach(polygon);
 Matter.Body.setPosition(polygon,{x:200, y:50})
    }
}