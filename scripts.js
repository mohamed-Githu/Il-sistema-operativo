const correctAnswers = ['A', 'B', 'A', 'B', 'A', 'A', 'A', 'B', 'B', 'B'];
const quiz = document.querySelector('.quiz');
const quistions = document.querySelectorAll('.quistion');
const board = document.querySelector('.header__board');

quiz.addEventListener('submit', e => {

    e.preventDefault();
    let score = 0;
    const userAnswers = [quiz.q1.value, quiz.q2.value, quiz.q3.value, quiz.q4.value, quiz.q5.value, quiz.q6.value, quiz.q7.value, quiz.q8.value, quiz.q9.value, quiz.q10.value];

    correctAnswers.forEach((answer, index) => {
        if (answer === userAnswers[index]) {
            score += 10;
            quistions[index].style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
        }
    })

    const result = document.querySelector('.header__score');
    let temp = 0;

    scrollTo(0,0);
    board.style.opacity = '1';

    const timer = setInterval(() => {
        if (temp >= score) {
            clearInterval(timer);
        } else {
            temp++;
        }
        result.textContent = `${temp}%`;
    }, 20);
});

