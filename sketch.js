const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world, stringen;
var bgImg;
var harry, harryImg, harryBody, hImg;
var symb1Img,
  symb2Img,
  symb3Img,
  symb4Img,
  symb5Img,
  symb6Img,
  symb7Img,
  symb8Img,
  symb9Img,
  symb10Img,
  symb11Img,
  symb18Img,
  symb19Img,
  symb20Img,
  symb21Img;
var symbGroup;
var symb;
var score;

function preload() {
  bgImg = loadImage("images/back1.png.jpg");
  harryImg = loadImage("images/Harry.png");
  hImg = loadImage("images/Ron.png");
  symb1Img = loadImage("images/1.png");
  symb2Img = loadImage("images/2.png");
  symb3Img = loadImage("images/3.png");
  symb4Img = loadImage("images/4.png");
  symb5Img = loadImage("images/5.png");
  symb6Img = loadImage("images/6.png");
  symb7Img = loadImage("images/7.png");
  symb8Img = loadImage("images/8.png");
  symb9Img = loadImage("images/9.png");
  symb10Img = loadImage("images/10.png");
  symb11Img = loadImage("images/11.png");
}
function setup() {
  createCanvas(displayWidth - 20, displayHeight - 150);

  engine = Engine.create();
  world = engine.world;

  harry = createSprite(100, 300);
  harry.addImage(harryImg);
  harry.scale = 0.25;

  var harryBody_options = {
    restitution: 0.8,
    friction: 1,
    density: 1,
  };

  harryBody = Bodies.rectangle(100, 300, 50, 50, harryBody_options);
  World.add(world, harryBody);

  string = new String(harryBody);
  console.log("string Body", string);
  symbGroup = new Group();
  spawnSymb();
}
function draw() {
  background(bgImg);

  harry.x = harryBody.position.x;
  harry.y = harryBody.position.y;

  /*if (harryBody.collide(symbGroup)) {
    //harry.position.x = 100;
    //harry.position.y = 300;
    harry.addImage(hImg);
  }
  console.log("touch", harryBody);*/

  drawSprites();
}

function spawnSymb() {
  var x = 100;
  for (var j = 0; j < 4; j++) {
    //console.log("inside outer loop", j, x);
    var y = 50;
    for (var i = 0; i < 5; i++) {
      //console.log("inside inner loop", i, y);

      var symb = createSprite(displayWidth - x, y, 30, 30);
      var rand = Math.round(random(1, 11));
      console.log("random number", rand);
      switch (rand) {
        case 1:
          symb.addImage(symb1Img);
          symb.scale = 0.5;
          break;
        case 2:
          symb.addImage(symb2Img);
          symb.scale = 0.5;
          break;
        case 3:
          symb.addImage(symb3Img);
          symb.scale = 0.5;
          break;
        case 4:
          symb.addImage(symb4Img);
          symb.scale = 0.5;
          break;
        case 5:
          symb.addImage(symb5Img);
          symb.scale = 0.08;
          break;
        case 6:
          symb.addImage(symb6Img);
          symb.scale = 0.02;
          break;
        case 7:
          symb.addImage(symb7Img);
          symb.scale = 0.5;
          break;
        case 8:
          symb.addImage(symb8Img);
          symb.scale = 0.5;
          break;
        case 9:
          symb.addImage(symb9Img);
          symb.scale = 0.08;
          break;
        case 10:
          symb.addImage(symb10Img);
          symb.scale = 0.5;
          break;
        case 11:
          symb.addImage(symb11Img);
          symb.scale = 0.5;
          break;

        default:
          symb.addImage(symb1Img);
          symb.scale = 0.5;
          break;
      }
      //symb.scale = 0.05;
      symbGroup.add(symb);

      y += 100;
    }
    x += 100;
  }
}

function mouseDragged() {
  Matter.Body.setPosition(harryBody, { x: mouseX, y: mouseY });
}
function mouseReleased() {
  console.log("inside mouseReleased", string);
  string.fly();
}
