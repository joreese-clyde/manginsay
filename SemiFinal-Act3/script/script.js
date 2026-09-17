
const gradeForm = document.getElementById("gradeForm");

gradeForm.addEventListener("submit", function (event) {
    const grades = [
        Number(document.getElementById("grade1").value),
        Number(document.getElementById("grade2").value),
        Number(document.getElementById("grade3").value)
    ];

    const validGrades = grades.every(grade => grade >= 0 && grade <= 100);

    if (!validGrades) {
        event.preventDefault();
        alert("Please enter grades between 0 and 100.");
    }
});