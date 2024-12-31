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
const sec = document.querySelector('#tS');
const nextQuestion = document.querySelector('.next');
const question = document.querySelector('#question');
const questionNumber = document.querySelector('#qN');
const options = document.querySelectorAll('.options');
let seconds = 30;
let timerStop;
let questionsCount = 1;
sec.innerText = seconds;
function countDown() {
  timerStop = setInterval(() => {
    nextQuestion.classList.remove('see');
    seconds--;
    if (seconds < 10) {
      sec.innerText = '0' + seconds;
    } else {
      sec.innerText = seconds;
    }
    if (seconds === 0) {
      clearInterval(timerStop);
      nextQuestion.classList.add('see');
    }
  }, 1000);
}
function questions() {
  question.innerText = questionsAndAnswers.q1.q;
  options.forEach((o, i) => {
    o.innerText = questionsAndAnswers.q1.o[i];
  });
  questionNumber.innerText = questionsCount;
  questionsCount++;
}

options.forEach((o, i) => {
  o.addEventListener('click', (element) => {
    clearInterval(timerStop);
    if (element.target.innerText === questionsAndAnswers.q1.a) {
      element.target.parentElement.classList.add('right');
    } else {
      element.target.parentElement.classList.add('wrong');
      close();
    }
    nextQuestion.classList.add('see');
  });
});
function close() {
  options.forEach((e) => {
    e.parentElement.classList.add('close');
  });
}
nextQuestion.addEventListener('click', (e) => {
  e.stopPropagation();
  questions();
  seconds = 31;
  countDown();
});

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
  countDown();
  questions();
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
