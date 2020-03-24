class Raindrop{
  constructor() {
    var options = {
        'restitution':0.8,
        'friction':0.3,
        'density':1.0
    }
    this.body = Bodies.rectangle(this.x, this.y, this.width, this.height, options);
    this.width = 5;
    this.height = 5;
    
    this.x = random(0,width) 
    this.y = random(0,height) 
    World.add(world, this.body);
  
 
  
  this.display = function(){
    var pos =this.body.position;
    var angle = this.body.angle;
    push ();
    translate (pos.x, pos.y);
    rotate (angle);
    rectMode(CENTER);
    fill("green");
    rect( this.x, this.y, this.width, this.height);
    pop();
  }

this.move = function() {
  this.x = this.x+1
  this.y = this.y+1
}
}
}