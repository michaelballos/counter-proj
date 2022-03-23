/*
bet x = document.getElementById('num') = x;
  function add() {
document.getElementById('num').innerHTML = ++x;
}
  function sub() {
document.getElementById('num').innerHTML = --x;
};


const createBtn = (text = 'no text') => {
  const btn = document.createElement('button');
  btn.innerText = text;
  document.body.appendChild(btn);
  return btn;
};
createBtn();
  <button>Add</button>
etBtn();
  <button></button>

let z = x + y;

let x = function add() {
  x + 1;
};

function sub() {
  x - 1;
};

*/
let countnum = 0;
function add() {
  document.getElementById('num').innerHTML = 
  countnum += 1;
}
function sub() {
  document.getElementById('num').innerHTML = 
  countnum -= 1;
}






