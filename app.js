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
    o: ['<css>', '<script>', '<style>', '<link>'],
    a: '<style>',
  },
  q5: {
    q: 'What is the recommended file format for a favicon in HTML?',
    o: ['.ico', '.png', '.gif', '.webp'],
    a: '.ico',
  },
  q6: {
    q: 'Which of the following is not the property of the CSS box model?',
    o: ['margin', 'color', 'width', 'height'],
    a: 'color',
  },
  q7: {
    q: 'Which of the following selector is used to selects siblings?',
    o: ['::after', 'E ~ F', ':checked', 'E[attr^=value]'],
    a: 'E ~ F',
  },
  q8: {
    q: ' Which of the following Module is not available in CSS3.',
    o: ['DOMs', 'Fonts', 'Backgrounds and Borders', 'Color'],
    a: 'DOMs',
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

const welcomeScreen = document.querySelector('.splash');
const quizScreen = document.querySelector('.quiz');
const resultScreen = document.querySelector('.result');
const getStartedButton = document.querySelector('#start');
const nextQuestionButton = document.querySelector('.next');
const resultButton = document.querySelector('.finish');
const usernameTnput = document.querySelector('#username');
const usernameValue = document.querySelector('#Username');
const welcomeError = document.querySelector('.error');
const musicIcon = document.querySelector('#icons');
const volumeDown = document.querySelector('.vd');
const volumeUp = document.querySelector('.vu');
const timeSec = document.querySelector('#tS');
const questionCount = document.querySelector('#qN');
const currentQuestion = document.querySelector('#question');
const allOptions = document.querySelectorAll('.options');

let timer = 30;
let stop;
timeSec.innerText = timer;
const questionKey = Object.keys(questionsAndAnswers);
let questions;
let questionNumber = 0;
let quizResult = 0;

//  Splash screen
getStartedButton.addEventListener('click', (e) => {
  e.stopPropagation();
  if (usernameTnput.value !== '') {
    usernameValue.innerText = usernameTnput.value;
    usernameTnput.value = '';
    welcomeScreen.classList.add('hide');
    quizScreen.classList.remove('hide');
  } else {
    welcomeError.classList.add('errorvisible');
  }
  countdown();
  questionsUpdate();
});
usernameTnput.addEventListener('focus', () => {
  welcomeError.classList.remove('errorvisible');
});

// Quiz screen

musicIcon.addEventListener('click', (e) => {
  e.stopPropagation();
  volumeUp.classList.toggle('hide');
  volumeDown.classList.toggle('hide');
});

function countdown() {
  stop = setInterval(() => {
    timer--;
    if (timer > 9) {
      timeSec.innerText = timer;
    } else {
      timeSec.innerText = '0' + timer;
    }
    if (timer === 0) {
      clearInterval(stop);
      allOptions.forEach((option) => {
        if (option.innerText === questions.a) {
          option.classList.add('right');
          close();
        }
      });
      if (questionNumber === 15) {
        resultButton.classList.remove('hide');
        nextQuestionButton.classList.add('hide');
      } else {
        nextQuestionButton.classList.remove('hide');
      }
    }
  }, 1000);
}
function questionsUpdate() {
  const qN = questionKey[questionNumber];
  questions = questionsAndAnswers[qN];
  currentQuestion.innerText = questions.q;
  allOptions.forEach((options, index) => {
    options.innerText = questions.o[index];
  });
  questionNumber++;
  questionCount.innerText = questionNumber;
}

allOptions.forEach((optionsCheck) => {
  optionsCheck.addEventListener('click', (element) => {
    element.stopPropagation();
    if (element.target.innerText === questions.a) {
      element.target.parentElement.classList.add('right');
      quizResult++;
    } else {
      element.target.parentElement.classList.add('wrong');
    }
    close();
    clearInterval(stop);
    if (questionNumber === 15) {
      resultButton.classList.remove('hide');
      nextQuestionButton.classList.add('hide');
    } else {
      nextQuestionButton.classList.remove('hide');
    }
  });
});

function close() {
  allOptions.forEach((element) => {
    element.parentElement.classList.add('close');
  });
}

nextQuestionButton.addEventListener('click', (e) => {
  e.stopPropagation();
  timer = 30;
  countdown();
  questions = questions + 1;
  questionsUpdate();
  allOptions.forEach((e) => {
    e.parentElement.classList.remove('right', 'wrong', 'close');
  });
  nextQuestionButton.classList.remove('see');
  nextQuestionButton.classList.add('hide');
});

resultButton.addEventListener('click', (e) => {
  e.stopPropagation();
  quizScreen.classList.add('hide');
  resultScreen.classList.remove('hide');
});
