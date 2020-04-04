console.log('app running');

// gets the cursor element and all the nav links
let mouseCursor = document.querySelector('.cursor');
let navLinks = document.querySelectorAll('.nav-links li');
let section = document.querySelector('.section');

// adds an event listener to the window, tracks when mouse moves run the function cursor 
window.addEventListener('mousemove', cursor);

// cursor gives position of mouse relative to the window 
function cursor (e) {
    mouseCursor.style.top = e.pageY + 'px';
    mouseCursor.style.left = e.pageX + 'px';
}

// for each link in nav, add an event listener to run a function on hover which adds or removes a class, creating a stylish animation 

navLinks.forEach(link => {
    link.addEventListener("mouseover", () => {
        mouseCursor.classList.add("link-grow");
        link.classList.add("hovered-link");
    });
    link.addEventListener("mouseleave", () => {
        mouseCursor.classList.remove("link-grow");
        link.classList.remove("hovered-link");
    });
});

// adds a backdrop-effect to the background while hovered
section.addEventListener('mouseover', () => {
    mouseCursor.classList.add("background-blur");
})

section.addEventListener('mouseleave', () => {
    mouseCursor.classList.remove("background-blur");
})
