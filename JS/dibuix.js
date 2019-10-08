let ampladaquadrat = 100;
let mic;


function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  noStroke();
    mic = new p5.AudioIn();
    mic.start();
}

function draw() {
  var boca_w = width/1.2;
  micLevel = mic.getLevel();
    mov= map(micLevel, 0, 1, 10, 900);
  
  noStroke();
  push();
    background(0);
  translate(width/2, height/2);
  rectMode(CENTER);
  
    //coll
    
    fill('blue');
   ellipse(-160,350,450+mov,400+mov);
    //cap
    fill('blue')
    ellipse(0,10,500,600+mov);
    
   fill('orange');
  ellipse(0,80,350+mov,80+mov);
  //llengua
  fill('yellow');
  ellipse(0,50,400,90+mov);
    
 pop();
  //ull esquerre
 
  fill('0');
  ellipse( width*0.37, height/2.5,90+mov);
  fill('lightblue');
  ellipse(width*0.39, height/2.5,30+mov);
    fill('green');
  ellipse(width*0.39, height/2.5,20+mov);
  
  //ull dret
  fill('0');
  ellipse( width*0.63, height/2.5,85+mov);
    fill('lightblue');
  ellipse(width*0.61, height/2.5,30+mov);

  fill('green');
  ellipse(width*0.61, height/2.5,20+mov);

  
}


function touchStarted(){
    getAudioContext().resume();
}