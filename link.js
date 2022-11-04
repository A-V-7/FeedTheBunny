class Link{
    constructor(body_a,body_b){
        var lastLink = body_a.body.bodies.length-2;
        this.link = Constraint.create({
            bodyA:body_a.body.bodies[lastLink],
            pointA:{x:0,y:0},
            bodyB:body_b,
            pointB:{x:0,y:0},
            length:-10,
            stiffness: 0.01
        })

        World.add(world,this.link);
    }

    break(){
        World.remove(world,this.link);
    }
}