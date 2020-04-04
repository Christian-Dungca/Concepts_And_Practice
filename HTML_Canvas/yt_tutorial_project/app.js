console.log('application running')

var dom = {
    canvas : '.canvas'
}

// getting the canvas element from html file
var canvas = document.querySelector(dom.canvas);

// making the canvas element always equal to width of viewport/window
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// .getContext() method returns a drawing context on the canvas (c usually stands for context)
var c = canvas.getContext('2d'); 

// creates new object, position relative to canvas container
// c.fillRect(x, y, width, height) 

c.fillStyle = 'rgba(255, 0, 0, 0.5)';
c.fillRect(100, 100, 100, 100);
c.fillStyle = 'rgba(0, 255, 0, 0.5)';
c.fillRect(100, 300, 200, 200);
c.fillStyle = 'rgba(0, 0, 255, 0.5)';
c.fillRect(300, 100, 100, 100);

// creating a line
c.beginPath();

// c.moveTo(x, y); x and y is relative to window not previous line
// invisible until calls stroke method
c.moveTo(0, 0);
c.lineTo(400, 100);
c.lineTo(400, 300);
c.lineTo(600, 100);
c.lineTo(1000, 50);
c.strokeStyle = "orangered";
c.stroke();

// Arc / Circle 
// c.arc(x: Int, y: Int, r: Int, 
        // startAngle: Float, endAngle: Float, 
        // drawCounterClockwise: bool (false))

// c.beginPath();
// c.arc(300, 300, 30, 0, Math.PI * 2, false);
// c.strokeStyle = 'black';
// c.stroke();

for (var i = 0; i < 30; i++) {

    var x = Math.random() * window.innerWidth;
    var y = Math.random() * window.innerHeight;

    var circleColors = ['black', 'teal ', 'orange'];

    c.beginPath();
    c.arc(x, y, 30, 0, Math.PI * 2, false);
    c.strokeStyle = circleColors
        [Math.floor(Math.random() * circleColors.length)];
    c.stroke();
}

// c.fillStyle = 'rgba(255,106,106, .8)';
// c.fillRect(500, 500, 500, 500);

// c.beginPath();
// c.moveTo(0, 500);
// c.lineTo(250, 500);
// c.lineTo(250, 750);
// c.lineTo(500, 750);
// c.strokeStyle = 'red';
// c.stroke();

// c.beginPath();
// c.arc(800, 800, 150, 0, 2 * Math.PI, false);
// c.strokeStyle = "yellow";
// c.stroke();

// console.log(canvas);
// console.log(c);