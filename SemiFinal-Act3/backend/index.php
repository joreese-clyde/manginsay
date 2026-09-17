
<?php

if ($_SERVER["REQUEST_METHOD"] !== "POST") {
    exit("Invalid request.");
}

$studentName = trim($_POST["student_name"] ?? "");
$studentId = trim($_POST["student_id"] ?? "");

$grade1 = filter_input(INPUT_POST, "grade1", FILTER_VALIDATE_FLOAT);
$grade2 = filter_input(INPUT_POST, "grade2", FILTER_VALIDATE_FLOAT);
$grade3 = filter_input(INPUT_POST, "grade3", FILTER_VALIDATE_FLOAT);

if (
    $studentName === "" ||
    $studentId === "" ||
    $grade1 === false ||
    $grade2 === false ||
    $grade3 === false ||
    $grade1 === null ||
    $grade2 === null ||
    $grade3 === null ||
    $grade1 < 0 || $grade1 > 100 ||
    $grade2 < 0 || $grade2 > 100 ||
    $grade3 < 0 || $grade3 > 100
) {
    exit("Please enter valid student information and grades.");
}

$average = ($grade1 + $grade2 + $grade3) / 3;

$status = $average >= 75 ? "Passed" : "Failed";

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Student Final Result</title>
</head>
<body>

    <h1>Student Final Result</h1>

    <p><strong>Student Name:</strong> <?= htmlspecialchars($studentName) ?></p>
    <p><strong>Student ID:</strong> <?= htmlspecialchars($studentId) ?></p>

    <p><strong>Grade 1:</strong> <?= $grade1 ?></p>
    <p><strong>Grade 2:</strong> <?= $grade2 ?></p>
    <p><strong>Grade 3:</strong> <?= $grade3 ?></p>

    <p><strong>Final Average:</strong> <?= number_format($average, 2) ?></p>
    <p><strong>Status:</strong> <?= $status ?></p>

    <a href="../index.html">Back to Calculator</a>

</body>
</html>