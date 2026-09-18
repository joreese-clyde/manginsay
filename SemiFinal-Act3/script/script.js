const toggleResult = document.getElementById("toggleResult");
const resultCard = document.getElementById("resultCard");

if (toggleResult && resultCard) {
    toggleResult.addEventListener("click", function () {
        if (resultCard.style.display === "none") {
            resultCard.style.display = "block";
            toggleResult.textContent = "Hide Result";
        } else {
            resultCard.style.display = "none";
            toggleResult.textContent = "Show Result";
        }
    });
}
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