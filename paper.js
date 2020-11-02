class paper{
    constructor(x,y){
        var options={
            isStatic:false,
            restitution:0.3,
            friction:0.5,
            density: 1.2
        }
        this.body= Matter.Bodies.circle(x,y,60,options);
        this.image= loadImage("paper.png")
        
        World.add(world, this.body);
    }
    display(){
        
        //circle(this.body.position.x,this.body.position.y,70);
        image(this.image, this.body.position.x,this.body.position.y ,70,70);
        
    }
}