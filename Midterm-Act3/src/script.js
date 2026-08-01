function calculateAverage(score1, score2, score3) {
  const total = score1 + score2 + score3;
  const average = total / 3;
  return average;
}

function getStatus(average) {
  const passingGrade = 75;

  if (average >= passingGrade) {
    return "Passed";
  } else {
    return "Failed";
  }
}

function startEvaluation() {
  const studentName = prompt("Enter the student's name:");

  if (!studentName) {
    alert("Student name is required.");
    return; 
  }

  const quiz1 = parseFloat(prompt(`Enter ${studentName}'s Quiz 1 score:`));
  const quiz2 = parseFloat(prompt(`Enter ${studentName}'s Quiz 2 score:`));
  const quiz3 = parseFloat(prompt(`Enter ${studentName}'s Quiz 3 score:`));

  if (isNaN(quiz1) || isNaN(quiz2) || isNaN(quiz3)) {
    alert("Please enter valid numeric scores only.");
    return;
  }

  const average = calculateAverage(quiz1, quiz2, quiz3);

  const status = getStatus(average);

  const resultDiv = document.getElementById("result");
  resultDiv.textContent =
    `Student Name: ${studentName}\n` +
    `Quiz Scores: ${quiz1}, ${quiz2}, ${quiz3}\n` +
    `Average Score: ${average.toFixed(2)}\n` +
    `Result: ${status}`;

  console.log(`--- Student Evaluation ---`);
  console.log(`Name: ${studentName}`);
  console.log(`Average: ${average.toFixed(2)}`);
  console.log(`Status: ${status}`);
}

function showMultiplicationTable() {
  const inputValue = prompt("Enter a number to see its multiplication table (1-10):");
  const number = parseFloat(inputValue);

  // Validate the input
  if (isNaN(number)) {
    alert("Please enter a valid number.");
    return;
  }

  console.log(`--- Multiplication Table for ${number} ---`);
  for (let i = 1; i <= 10; i++) {
    const product = number * i; 
    console.log(`${number} x ${i} = ${product}`);
  }

  alert(`Multiplication table for ${number} has been printed to the console (press F12 to view).`);
}