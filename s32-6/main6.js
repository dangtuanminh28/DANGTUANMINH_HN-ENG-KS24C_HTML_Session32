let p = document.getElementById("p");
let sizeIncrease = document.getElementById("sizeIncrease");
let sizeReduce = document.getElementById("sizeReduce");

let size = 20;

p.style.fontSize = size + 'px';

sizeIncrease.onclick = function () {
    size += 2;
    p.style.fontSize = size + 'px';
};

sizeReduce.onclick = function () {
    size -= 2;
    p.style.fontSize = size + 'px';
};