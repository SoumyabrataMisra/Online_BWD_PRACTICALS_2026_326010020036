document.getElementById("eligibilityForm").addEventListener("submit", function (event) {
    event.preventDefault();

    const age = Number(document.getElementById("age").value);
    const attendance = Number(document.getElementById("attendance").value);
    const marks = Number(document.getElementById("marks").value);

    if (
        !Number.isFinite(age) ||
        !Number.isFinite(attendance) ||
        !Number.isFinite(marks) ||
        age <= 0 ||
        attendance < 0 ||
        attendance > 100 ||
        marks < 0 ||
        marks > 100
    ) {
        alert("Please enter valid values.");
        return;
    }

    if (age >= 18 && attendance >= 75 && marks >= 40) {
        alert(
            "ELIGIBLE\n\n" +
            "The student is eligible for the examination/admission.\n\n" +
            "Age: " + age + " years\n" +
            "Attendance: " + attendance + "%\n" +
            "Marks: " + marks + "%"
        );
    } else {
        let reasons = [];

        if (age < 18) {
            reasons.push("Age must be 18 years or above.");
        }

        if (attendance < 75) {
            reasons.push("Attendance must be 75% or above.");
        }

        if (marks < 40) {
            reasons.push("Marks must be 40% or above.");
        }

        alert(
            "NOT ELIGIBLE\n\n" +
            "The student is not eligible for the examination/admission.\n\n" +
            "Reason(s):\n• " + reasons.join("\n• ")
        );
    }
});
