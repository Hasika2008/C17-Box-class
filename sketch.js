var box 
function setup() 
{
  createCanvas(400, 400);
  box = new Box(200,150,50,40,2,3)
}

function draw() 
{
  background(220);
box.show()
box.moveUp()
}

