import { Engine, World,Composites, Body, Bodies, Constraint,Render,Composite,Runner,Mouse,MouseConstraint } from 'matter-js';
var Example = Example || {};


export const chains = function() {

    // create engine
    var engine = Engine.create({ gravity: {y:0} }),
        world = engine.world;

    // create renderer
    var render = Render.create({
        element: document.body,
        engine: engine,
        options: {
            width: 800,
            height: 600,
            showAngleIndicator: true,
            showCollisions: true,
            showVelocity: true
        }
    });




    Render.run(render);

    // create runner
    var runner = Runner.create();
    Runner.run(runner, engine);


    Composite.add(world, [
        // walls
        Bodies.rectangle(400, 0, 800, 50, { isStatic: true }),
        Bodies.rectangle(400, 200, 800, 50, { isStatic: true }),
        Bodies.rectangle(800, 300, 50, 600, { isStatic: true }),
        Bodies.rectangle(0, 300, 50, 600, { isStatic: true })
    ]);


    // add bodies
    var group = Body.nextGroup(true);
        
    group = Body.nextGroup(true);
    

    const fingerWidth = 100;
    const handPositionX= 350;

    var ropeB = Composites.stack(handPositionX, 50, 1, 5, 10, 10, function(x, y) {
        const newBody = Bodies.rectangle(x, y, fingerWidth, 20, { collisionFilter: {  }, density: 0.1, stiffness: 0.1})
        Body.setMass(newBody, 1)
        return newBody;
    });




    // var ropeB2 = Composites.stack(350, 50, 4, 1, 10, 10, function(x, y) {
    //     const newBody = Bodies.rectangle(x, y, 100, 20, { collisionFilter: { group: group }, density: 0.1, stiffness: 0.1})
    //     Body.setMass(newBody, 1)
    //     return newBody;
    // });
    
    
    Composites.chain(ropeB, 0, 0, 0, 0, { stiffness: 1, length: 20, render: { type: 'line' } });
    const handWidth = 100;
    const hand = Bodies.rectangle(handPositionX + fingerWidth + handWidth/2, 120, handWidth, handWidth, { collisionFilter: { group: group }, stiffness: 1,});
    Body.setDensity(hand, 1000)
    Composite.add(ropeB, hand)
    // const lastBody = ropeB.bodies[ropeB.bodies.length-1]
    // Composite.add(ropeB, Constraint.create({ 
    //     bodyB: lastBody,
    //     pointA: { x: lastBody.position.x + 20, y: lastBody.position.y },
    //     stiffness: 0.7,

    // }));
const middleFinger = ropeB.bodies[2];

ropeB.bodies.forEach(element => {
    
    Composite.add(ropeB, Constraint.create({ 
    bodyB: element,
    bodyA: hand,
    stiffness: 0.7,

}));
});
    
    group = Body.nextGroup(true);


    
    Composite.add(world, [
        ropeB,
        // Bodies.rectangle(400, 600, 1200, 50.5, { isStatic: true })
    ]);

    // add mouse control
    var mouse = Mouse.create(render.canvas),
        mouseConstraint = MouseConstraint.create(engine, {
            mouse: mouse,
            constraint: {
                stiffness: 0.1,
                render: {
                    anchors: true,
                    visible: true
                }
            }
        });

    Composite.add(world, mouseConstraint);

    // keep the mouse in sync with rendering
    render.mouse = mouse;

    // fit the render viewport to the scene
    Render.lookAt(render, {
        min: { x: 0, y: 0 },
        max: { x: 700, y: 600 }
    });

    // context for MatterTools.Demo
    return {
        engine: engine,
        runner: runner,
        render: render,
        canvas: render.canvas,
        stop: function() {
            Render.stop(render);
            Runner.stop(runner);
        }
    };
};

