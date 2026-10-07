const form = document.getElementById("resultForm");
const resultBox = document.getElementById("result");
const totalElement = document.getElementById("total");
const percentageElement = document.getElementById("percentage");
const gradeElement = document.getElementById("grade");
const messageElement = document.getElementById("message");
const statusBadge = document.getElementById("statusBadge");
const resetBtn = document.getElementById("resetBtn");

// Grade calculation function
function calculateGrade(percentage) {
    if (percentage >= 90) return "A+";
    if (percentage >= 80) return "A";
    if (percentage >= 70) return "B";
    if (percentage >= 60) return "C";
    if (percentage >= 50) return "D";
    if (percentage >= 40) return "E";
    return "F";
}

// Main result calculation function
function calculateResult() {
    const marks = [
        Number(document.getElementById("entrepreneurship").value),
        Number(document.getElementById("mathematics").value),
        Number(document.getElementById("cao").value),
        Number(document.getElementById("programming").value),
        Number(document.getElementById("web").value),
        Number(document.getElementById("environmental").value)
    ];

    const total = marks.reduce((sum, mark) => sum + mark, 0);
    const percentage = (total / 600) * 100;
    const grade = calculateGrade(percentage);
    const passed = percentage >= 40;

    totalElement.textContent = `${total} / 600`;
    percentageElement.textContent = `${percentage.toFixed(2)}%`;
    gradeElement.textContent = grade;

    statusBadge.textContent = passed ? "PASS" : "FAIL";
    statusBadge.className = `status ${passed ? "pass" : "fail"}`;

    messageElement.textContent = passed
        ? "Congratulations! You have successfully passed."
        : "You need to improve your performance.";

    resultBox.classList.remove("hidden");
}

form.addEventListener("submit", function(event) {
    event.preventDefault();
    calculateResult();
});

resetBtn.addEventListener("click", function() {
    form.reset();
    resultBox.classList.add("hidden");
});
