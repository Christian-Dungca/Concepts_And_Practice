

const navButton = document.querySelector('.nav-button');
// removed pointer events and opacity
const navOpen = document.querySelector('.nav-open');

// define the object we want to move around
// const tween TweenLite.to(Object, time, {animate/styles})

// const tween = TweenLite.to('.cover', 1, {
//     width: '40%'
// });

// use TimelineLite for multiple animations
// will automatically animate, except if we say paused : true, reversed: true allows you to click the first time when page is loaded

const t1 = new TimelineLite({paused : true, reversed: true});

t1.to('.cover', 1, {
    width: '60%',
    ease: Power2.easeOut
})
.to('nav', 1, {
    height: '100%',
    ease: Power2.easeOut
}, '-= 0.5'
)
.fromTo('.nav-open', 0.5, {
    opacity: 0,
    x: 50,
    ease: Power2.easeOut
}, {
    opacity: 1,
    x: 0,
    onComplete : function(){
        navOpen.style.pointerEvents = 'auto';
        console.log('done');
    }
});

// event listener
navButton.addEventListener('click', (e) => {

    
    // prevents animation from going multiple times
    if(t1.isActive()){
        e.preventDefault();
        e.stopImmediatePropagation();
        return false;
    }
    // t1.play()
    toggleTween(t1)
});

// checks if the time line is reversed or not, if true then tween.play, else reverse
function toggleTween(tween){
    tween.reversed() ? tween.play() : tween.reverse();
}

// using TweenLite to change the color of something during an animation
var btn = document.querySelector(".nav-button");

// btn.addEventListener('click', () => {
//     TweenLite.to('nav', 1, {backgroundColor:"#a0a0a", color:"white"});
// })

