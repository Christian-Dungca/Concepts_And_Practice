
const state = {
    textBox : []
}

const DOM = {
    'textBox' : document.querySelector('.text-box'),
    'symbol__weirdS' : document.querySelector('.symbol--§'),
    'num__1' : document.querySelector('.num--1'),
    'num__2' : document.querySelector('.num--2'),
    'num__3' : document.querySelector('.num--3'),
    'num__4' : document.querySelector('.num--4'),
    'num__5' : document.querySelector('.num--5'),
    'num__6' : document.querySelector('.num--6'),
    'num__7' : document.querySelector('.num--7'),
    'num__8' : document.querySelector('.num--8'),
    'num__9' : document.querySelector('.num--9'),
    'num__0' : document.querySelector('.num--0'),
    'symbol__minus' : document.querySelector('.symbol---'),
    'symbol__equal' : document.querySelector('.symbol--equal'),
    'command__back' : document.querySelector('.command--back'),
}

const changeText = () => {
    DOM.textBox.innerHTML = '';

    let newText = state.textBox.join(' ');
    DOM.textBox.insertAdjacentHTML('beforeend', 
    `<p classname="text-box__content">
        ${newText}
    </p> `);
}

const EventListeners = () => {
    
    DOM.symbol__weirdS.addEventListener('click', () => {
        state.textBox.push('§');
        changeText();
    });

    DOM.num__1.addEventListener('click', () => {
        state.textBox.push('1');
        changeText();
    });

    DOM.num__2.addEventListener('click', () => {
        state.textBox.push('2');
        changeText();
    });

    DOM.num__3.addEventListener('click', () => {
        state.textBox.push('3');
        changeText();
    });

    DOM.num__4.addEventListener('click', () => {
        state.textBox.push('4');
        changeText();
    });

    DOM.num__5.addEventListener('click', () => {
        state.textBox.push('5');
        changeText();
    });

    DOM.num__6.addEventListener('click', () => {
        state.textBox.push('6');
        changeText();
    });

    DOM.num__7.addEventListener('click', () => {
        state.textBox.push('7');
        changeText();
    });

    DOM.num__8.addEventListener('click', () => {
        state.textBox.push('8');
        changeText();
    });

    DOM.num__9.addEventListener('click', () => {
        state.textBox.push('9');
        changeText();
    });
    DOM.num__0.addEventListener('click', () => {
        state.textBox.push('0');
        changeText();
    });
    DOM.symbol__minus.addEventListener('click', () => {
        state.textBox.push('-');
        changeText();
    });

    DOM.symbol__equal.addEventListener('click', () => {
        state.textBox.push('=');
        changeText();
    });
    
    DOM.command__back.addEventListener('click', () => {
        if(state.textBox.length > 0){
            state.textBox.pop();
            changeText();
        } else {
            state.textBox.push('start typing...')
            changeText(); 
        }
    });
}

(
    Init = () => {
    console.log(`the keyboard project is working`)
    EventListeners();
    }
)()