var hand0,hand1,hand2 ;
var secAngle,minAngle,hrsAngle;

function setup() {

    createCanvas(500,500);
  }
  
  function draw() {
  background(0);
    
  translate(200,200);
  rotate(90);

  var sec = second();
  var min = minute();
  var hrs = hour();

  secAngle = map(sec,0,60,0,360)
  minAngle = map(min,0,60,0,360)
  hrsAngle = map(hrs % 12,0,12,0,360)
   
  push();
  rotate(secAngle);
  stroke(255,0,0);
  strokeWeight(7);
  line(0,0,100,0);
  pop();

  push();
  rotate(minAngle);
  stroke(0,255,0);
  strokeWeight(7);
  line(0,0,100,0);
  pop();


  push();
  rotate(hrsAngle);
  stroke(0,0,255);
  strokeWeight(7);
  line(0,0,100,0);
  pop();
  
  stroke(255,0,0);
  point(0,0);

  //drawing the arc
  strokeWeight(10);
  noFill();

  //arcs
  //seconds
  stroke(255,0,0);
  arc(0,0,300,300,0,secAngle);
  
  //mins
  stroke(0,255,0);
  arc(0,0,320,320,0,minAngle);

  //hrs
  stroke(0,0,255);
  arc(0,0,340,340,0,hrsAngle);
  
}


  