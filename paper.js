class Paper {
    constructor(x,y,radius){

var options = {
    isStaticL:false,
    restitution:0.3,
    friction:0.5,
    density:1.2
    
}

this.body = Bodies.circle(x,y,radius,options)    ;
this.radius = radius;
World.add(world,this.body);

this.image= loadImage("paper.png");
 


 }

display(){
var pos = this.body.position;

push();

    fill("purple");
  //  circle(pos.x,pos.y,this.radius);
    imageMode(CENTER);
    image(this.image,pos.x,pos.y,this.radius*2,this.radius*2);
    pop();  
}








}   