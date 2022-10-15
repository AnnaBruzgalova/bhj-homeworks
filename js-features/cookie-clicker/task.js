const image = document.getElementById('cookie');
const counter = document.getElementById('clicker__counter');
const speed = document.getElementById('clicker__speed');
let oldDate = Date.now();

function clickAction() {
    counter.textContent++;
    if (counter.textContent % 2 != 0) {
        image.width = 250;
    } else {
        image.width = 200;
    }

    if (counter.textContent == 35) {
        counter.textContent = 1;
    }
    speed.textContent = (1000 / (Date.now() - oldDate)).toFixed(2);
    oldDate = Date.now();
}
image.onclick = clickAction;