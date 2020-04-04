console.log('application running')

var dom;

dom = {
    circle : '.shapes__element--circle',
    square : '.shapes__element--square',
    btn_circle : '.shapes__btn-change--circle',
    btn_square : '.shapes__btn-change--square',
}

var changeCircleColor = function() {

    document.querySelector(dom.circle).setAttribute('style', 'borderRadius: 5px; background: yellow;')

    console.log('inside circle function');
}

document.querySelector(dom.btn_circle).addEventListener('click', changeCircleColor);

var changeSquareColor = function() {

    document.querySelector(dom.square).style.background = "yellow";

    console.log('inside square function');
}

document.querySelector(dom.btn_square).addEventListener('click', changeSquareColor);