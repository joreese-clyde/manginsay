<?php
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $student_name = $_POST['student_name'];
    $student_id = $_POST['student_id'];
    $grade1 = $_POST['grade1'];
    $grade2 = $_POST['grade2'];
    $grade3 = $_POST['grade3'];

    $total = $grade1 + $grade2 + $grade3;
    $average = $total / 3;
    $average = round($average, 2);

    if ($average >= 90) {
        $letter = "A";
    } else if ($average >= 80) {
        $letter = "B";
    } else if ($average >= 70) {
        $letter = "C";
    } else if ($average >= 60) {
        $letter = "D";
    } else {
        $letter = "F";
    }

    if ($average >= 75) {
        $status = "Passed";
    } else {
        $status = "Failed";
    }
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Student Grade Calculator</title>
    <link rel="stylesheet" href="css/main.css">
</head>
<body>

    <div class="page">

        <div class="header">
            <h1>Grade Calculator</h1>
            <p>Enter three grades to get the final average.</p>
        </div>

        <div class="card">
            <form action="index.php" method="POST" id="gradeForm">

                <div class="field">
                    <label for="student_name">Student Name</label>
                    <input type="text" id="student_name" name="student_name" required>
                </div>

                <div class="field">
                    <label for="student_id">Student ID</label>
                    <input type="text" id="student_id" name="student_id" required>
                </div>

                <div class="field">
                    <label for="grade1">Grade 1</label>
                    <input type="number" id="grade1" name="grade1" min="0" max="100" step="0.01" required>
                </div>

                <div class="field">
                    <label for="grade2">Grade 2</label>
                    <input type="number" id="grade2" name="grade2" min="0" max="100" step="0.01" required>
                </div>

                <div class="field">
                    <label for="grade3">Grade 3</label>
                    <input type="number" id="grade3" name="grade3" min="0" max="100" step="0.01" required>
                </div>

                <button type="submit" class="btn">Calculate Grade</button>

            </form>
        </div>

        <?php if ($_SERVER['REQUEST_METHOD'] == 'POST') { ?>
        <div class="card">
            <p><strong>Student Name:</strong> <?php echo $student_name; ?></p>
            <p><strong>Student ID:</strong> <?php echo $student_id; ?></p>
            <p><strong>Grade 1:</strong> <?php echo $grade1; ?></p>
            <p><strong>Grade 2:</strong> <?php echo $grade2; ?></p>
            <p><strong>Grade 3:</strong> <?php echo $grade3; ?></p>
            <p><strong>Average:</strong> <?php echo $average; ?></p>
            <p><strong>Letter Grade:</strong> <?php echo $letter; ?></p>
            <p><strong>Status:</strong> <?php echo $status; ?></p>
        </div>
        <?php } ?>

    </div>

    <script src="script/script.js"></script>

</body>
</html>