const QUIZ_STATE = { text: 0, image: 0, video: 0 };
const REQUIRED_SCORE = 3;

function checkAnswer(btn, isCorrect, moduleName) {
    const parent = btn.parentElement;
    const feedback = parent.querySelector('.feedback');

    if (isCorrect) {
        btn.style.backgroundColor = '#22c55e';
        feedback.innerText = "Correct!";
        QUIZ_STATE[moduleName]++;
    } else {
        btn.style.backgroundColor = '#ef4444';
        feedback.innerText = "Try again.";
    }

    if (QUIZ_STATE[moduleName] >= REQUIRED_SCORE) {
        completeModule(moduleName);
    }
}