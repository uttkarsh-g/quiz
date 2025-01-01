const questionsAndAnswers = {
  q1: {
    q: 'What is the full form of HTML? ',
    o: [
      'Hypertext markup language',
      'Hellotrue metro language',
      'Hypertrue metro language',
      'Hypertext makeup lanuage',
    ],
    a: 'Hypertext markup language',
  },
  q2: {
    q: 'Choose the correct HTML element to define important text',
    o: ['<i>', '<important>', '<b>', '<strong>'],
    a: '<strong>',
  },
  q3: {
    q: 'What does CSS stand for?',
    o: [
      'Creative Style Sheets',
      'Colorful Style Sheets',
      'Cascading Style Sheets',
      'Computer Style Sheets',
    ],
    a: 'Cascading Style Sheets',
  },
  q4: {
    q: 'Which HTML tag is used to define an internal style sheet?',
    o: ['<css>', '<script>', '<style>', 'link'],
    a: '<style>',
  },
  q5: {
    q: '',
    o: [, , , ,],
    a: '',
  },
  q6: {
    q: '',
    o: [, , , ,],
    a: '',
  },
  q7: {
    q: '',
    o: [, , , ,],
    a: '',
  },
  q8: {
    q: '',
    o: [, , , ,],
    a: '',
  },
  q9: {
    q: 'What are the different types of errors in JavaScript?',
    o: [
      'Load time errors',
      'Run time errors',
      'Logical errors',
      'All of the above',
    ],
    a: 'Run time errors',
  },
  q10: {
    q: 'What are the different types of Pop up boxes available in JavaScript?',
    o: ['Alert', 'Prompt', 'Confirm', 'All of the above'],
    a: 'All of the above',
  },
  q11: {
    q: 'Which one of the following is not a keyword:',
    o: ['if', 'with', 'debugger', 'use strict'],
    a: 'use strict',
  },
  q12: {
    q: 'Which of the following is not a framework?',
    o: ['JavaScript .NET', 'JavaScript', 'Cocoa JS', 'jQuery'],
    a: 'JavaScript',
  },
  q13: {
    q: 'The "function" and " var" are known as',
    o: ['Keywords', 'Prototypes', 'Declaration statements'],
    a: 'Declaration statements',
  },
  q14: {
    q: 'Which of the following scoping type does JavaScript use?',
    o: ['Sequential', 'Segmental', 'Lexical', 'Literal'],
    a: 'Lexical',
  },
  q15: {
    q: 'Which one of the following is an ternary operator:',
    o: ['?', ':', '-', '+'],
    a: '?',
  },
};

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
let result = 0;

function countDown() {
  timerStop = setInterval(() => {
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
const questionList = Object.keys(questionsAndAnswers);
let questionChange = 0;
let qS;
function questions() {
  const q = questionList[questionChange];
  qS = questionsAndAnswers[q];
  question.innerText = qS.q;
  options.forEach((o, i) => {
    o.innerText = qS.o[i];
  });
  questionNumber.innerText = questionsCount;
  questionsCount++;
}

options.forEach((o, i) => {
  o.addEventListener('click', (element) => {
    clearInterval(timerStop);
    if (element.target.innerText === qS.a) {
      element.target.parentElement.classList.add('right');
      result++;
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
  questionChange = (questionChange + 1) % questionList.length;
  questions();
  seconds = 30;
  countDown();
  options.forEach((e) => {
    e.parentElement.classList.remove('right', 'wrong', 'close');
  });
  nextQuestion.classList.remove('see');
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
