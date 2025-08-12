// QUIZ DATA (8 Questions)
const quizData = [
    { question: "Which language is used for styling web pages?", options: ["HTML", "CSS", "JavaScript"], answer: "CSS" },
    { question: "Which tag is used for the largest heading in HTML?", options: ["h6", "h1", "h3"], answer: "h1" },
    { question: "Which keyword is used to declare variables in JavaScript?", options: ["var", "int", "let"], answer: "var" },
    { question: "Which company developed JavaScript?", options: ["Netscape", "Google", "Microsoft"], answer: "Netscape" },
    { question: "Which property changes the text color in CSS?", options: ["font-color", "text-color", "color"], answer: "color" },
    { question: "What does API stand for?", options: ["Application Programming Interface", "Applied Program Internet", "Application Process Integration"], answer: "Application Programming Interface" },
    { question: "Which symbol is used for comments in CSS?", options: ["//", "/* */", "#"], answer: "/* */" },
    { question: "Which HTML tag is used to link JavaScript file?", options: ["script", "js", "javascript"], answer: "script" }
];

let currentQuestion = 0;
let score = 0;
let isAnswered = false; // phase tracker

const quizContainer = document.getElementById("quiz-container");
const nextBtn = document.getElementById("next-btn");
const scoreDisplay = document.getElementById("score");

function loadQuestion() {
    const q = quizData[currentQuestion];
    quizContainer.innerHTML = `
        <h3>${q.question}</h3>
        ${q.options.map(opt => `
            <label>
                <input type="radio" name="answer" value="${opt}"> ${opt}
            </label><br>
        `).join("")}
        <p id="feedback" style="font-weight:bold; margin-top:10px;"></p>
    `;
    nextBtn.textContent = "Submit";
    isAnswered = false; // reset phase
}

nextBtn.addEventListener("click", () => {
    const feedback = document.getElementById("feedback");

    // SUBMIT PHASE
    if (!isAnswered) {
        const selected = document.querySelector("input[name='answer']:checked");
        if (!selected) {
            alert("Please select an answer!");
            return;
        }

        if (selected.value === quizData[currentQuestion].answer) {
            score++;
            feedback.style.color = "green";
            feedback.textContent = "✅ Correct!";
        } else {
            feedback.style.color = "red";
            feedback.textContent = `❌ Wrong! Correct answer: ${quizData[currentQuestion].answer}`;
        }

        // disable all options
        document.querySelectorAll("input[name='answer']").forEach(opt => opt.disabled = true);

        nextBtn.textContent = "Next";
        isAnswered = true; // switch phase
    }
    // NEXT PHASE
    else {
        currentQuestion++;
        if (currentQuestion < quizData.length) {
            loadQuestion();
        } else {
            quizContainer.innerHTML = "<h3>🎯 Quiz Completed!</h3>";
            scoreDisplay.textContent = `Your Score: ${score}/${quizData.length}`;
            nextBtn.style.display = "none";
        }
    }
});

// load first question
loadQuestion();


// API FETCH FUNCTIONALITY
document.getElementById("fetch-joke").addEventListener("click", async () => {
    const res = await fetch("https://official-joke-api.appspot.com/random_joke");
    const data = await res.json();
    document.getElementById("joke").textContent = `${data.setup} - ${data.punchline}`;
});
