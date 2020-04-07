
console.log('app is running')

/* IMPORTANT NOTES
    - to create a tween use gsap object then gsap.to() method
    - gsap.to(target, {variables})
    - default duration for 3 seconds
    - for performance animate css transforms + opacity ex. x, y, rotation, scale, skew
    - gsap can animate any numeric property
    - if animating top and left, position must be set to relative, fixed, absolute
    - hyphenated css properties are camelCase
*/

/* gsap.to()
gsap.to(".fred", {x:400, y:200, scale:3, rotation: 360, duration:3}); 
*/

/* gsap.fromTo
gsap.fromTo(".fred", {x: 700, y:400, opacity: 0},{x:400, y:200, scale: 3, opacity:1, duration:3}); 
*/

/* SPECIAL PROPERTIES
    -duration
    -repeat (repeat: -1 creates an infinite loop)
    -yoyo makes animation start -> end -> start
*/

// gsap.to('.fred', {duration:2, x: 600,yoyo:true})

/* Easing 
    - default ease: easeOut 
    - "linear, easeOut, elastic, back, bounce or (bounce.in/.inOut)"
    - in, inOut, out is implied
    - eases can be functions 
    - use ease visualizer tool 
    - steep curve = fast rate of change
    - flat curve = slow rate of change
    - Ease dictates the direction of change 
*/

/* STAGGER 

gsap.to("div img", {y: 100, stagger: {
    amount: 1,
    // each: 0.1,
    // from: 'edges'
}})

*/

/* Tween Control */

var tween = gsap.to('.fred', {
    duration: 3, 
    x: 600, 
    ease: "linear",
    paused: true
});

document.getElementById('play').onclick = () => tween.play();
document.getElementById('pause').onclick = () => tween.pause();
document.getElementById('reverse').onclick = () => tween.reverse();
document.getElementById('restart').onclick = () => tween.restart();