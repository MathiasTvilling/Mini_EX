var img = 400;

function preload(){
  img = loadImage('assets/salah.jpg');
}
function setup () {
  createCanvas (1000, 1000);

}
function draw(){
background(200, 0, 0);
textSize (50);
text ('SALAH', 400, 500);
text('GOOOOOLAAZOOOO', 260, 600);
fill ( (mouseX/width*0), (mouseY/height)* 250, 1, 100);
image (img, random ([0], [1000]), random ([0], [1000]), 200, 200);
}
