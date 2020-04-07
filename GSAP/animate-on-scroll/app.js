const flightPath = {
    curviness : 1.25,
    autoRotate : true, 
    values : [
        {x: 100, y: -20}, 
        {x: 300, y : 10}, 
        {x : 500, y : 100}, 
        {x : 750, y : -100}, 
        {x : 350, y : -50},
        {x : 500, y : 100}, 
        {x : 800, y : 0},
        {x : window.innerWidth, y : -150}
    ]
};

const tween = new TimelineLite();

tween.add(
    TweenLite.to('.paper-plane', 1, {
        bezier : flightPath,
        x : window.innerWidth,
        ease : Power1.easeInOut,
    })
);

const controller =  new ScrolTlMagic.Controller();

const scene = new ScrollMagic.Scene({
    triggerElement : '.animation',
    duration : 1000,
    triggerHook : 0

})
.setTween(tween)
// helps visualize what is going on
.addIndicators()
// sticks the section in the same position so we can't scroll through it
.setPin('.animation')
// helps visualize what is going on
.addTo(controller);