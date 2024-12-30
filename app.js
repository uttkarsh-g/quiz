const vU = document.querySelector('.vu');
const b = document.querySelector('#icons');
const vD = document.querySelector('.vd');
b.addEventListener('click', (e) => {
  e.stopPropagation();
  vU.classList.toggle('hide');
  vD.classList.toggle('hide');
});
