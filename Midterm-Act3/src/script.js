// Calculates the average of 3 quiz scores
function calculateAverage(score1, score2, score3) {
  const total = score1 + score2 + score3;
  const average = total / 3;
  return average;
}

// Checks if the average is passing or failing
function getStatus(average) {
  const passingGrade = 75;

  if (average >= passingGrade) {
    return "Passed";
  } else {
    return "Failed";
  }
}

// Gets student details, computes the average, and displays the result
function startEvaluation() {
  const studentName = prompt("Enter the student's name:");

  // Make sure the student entered a name
  if (!studentName) {
    alert("Student name is required.");
    return;
  }

  // Get quiz scores from the user
  const quiz1 = parseFloat(prompt(`Enter ${studentName}'s Quiz 1 score:`));
  const quiz2 = parseFloat(prompt(`Enter ${studentName}'s Quiz 2 score:`));
  const quiz3 = parseFloat(prompt(`Enter ${studentName}'s Quiz 3 score:`));

  // Check if all scores are valid numbers
  if (isNaN(quiz1) || isNaN(quiz2) || isNaN(quiz3)) {
    alert("Please enter valid numeric scores only.");
    return;
  }

  // Calculate the average score
  const average = calculateAverage(quiz1, quiz2, quiz3);

  // Determine if the student passed or failed
  const status = getStatus(average);

  // Display the result on the webpage
  const resultDiv = document.getElementById("result");
  resultDiv.textContent =
    `Student Name: ${studentName}\n` +
    `Quiz Scores: ${quiz1}, ${quiz2}, ${quiz3}\n` +
    `Average Score: ${average.toFixed(2)}\n` +
    `Result: ${status}`;

  // Print the result in the browser console
  console.log(`Student Evaluation`);
  console.log(`Name: ${studentName}`);
  console.log(`Average: ${average.toFixed(2)}`);
  console.log(`Status: ${status}`);
}

// Displays the multiplication table of a given number
function showMultiplicationTable() {
  const inputValue = prompt("Enter a number to see its multiplication table (1-10):");
  const number = parseFloat(inputValue);

  // Check if the input is a valid number
  if (isNaN(number)) {
    alert("Please enter a valid number.");
    return;
  }

  // Print the multiplication table in the console
  console.log(`Multiplication Table for ${number}`);
  for (let i = 1; i <= 10; i++) {
    const product = number * i;
    console.log(`${number} x ${i} = ${product}`);
  }

  // Notify the user where to view the output
  alert(`Multiplication table for ${number} has been printed to the console (press F12 to view).`);
}