const getStarted = document.querySelector('#start');

const userNameInput = document.querySelector('#username');

const userName = document.querySelector('#Username');

const main = document.querySelector('.splash');

const quiz = document.querySelector('.quiz');

const b = document.querySelector('#icons');

const vU = document.querySelector('.vu');

const vD = document.querySelector('.vd');

const error = document.querySelector('.error');

const credit = document.querySelector('.credit');

getStarted.addEventListener('click', (e) => {
  e.stopPropagation();

  if (userNameInput.value !== '') {
    userName.innerText = userNameInput.value;

    userNameInput.value = '';

    main.classList.add('hide');

    quiz.classList.remove('hide');
  } else {
    error.classList.add('up');

    credit.classList.add('black');
  }
});
userNameInput.addEventListener('focus', () => {
  error.classList.remove('up');

  credit.classList.remove('black');
});

b.addEventListener('click', (e) => {
  e.stopPropagation();

  vU.classList.toggle('hide');

  vD.classList.toggle('hide');
});
