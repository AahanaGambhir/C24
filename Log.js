class Log{
    constructor(x,y, height, angle){
        //properties
        var options = {
        restitution:0.8, 
        friction:1.2,
        density:1.0
        }
    this.body = Bodies.rectangle(x,y,20,height, options);
    this.width = 20;
    this.height = height;
    Matter.Body.setAngle(this.body, angle);
    World.add(myWorld,this.body);
    }
    //function
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);
        fill("white");
        stroke("blue");
        stroke("5")
        rect(0,0,this.width,this.height);
        pop();
    }
}