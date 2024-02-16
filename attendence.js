let h2 = document.querySelector('h2');
let h1 = document.querySelector('h1');
let add = document.querySelectorAll('button');
let submit = document.querySelector('#s1');
let p = document.querySelector('p');

let count = 0;

add[0].addEventListener('click', () => {
  count = count + 1;
  h1.innerHTML = count;
});

submit.addEventListener('click', () => {
  p.innerHTML += ' ' + count + '';
  count = 0;
  h1.innerHTML = count;
});
