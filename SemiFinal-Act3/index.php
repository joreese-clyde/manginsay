
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Student Grade Calculator</title>
</head>
<body>

    <h1>Student Grade Calculator</h1>

    <form action="backend/index.php" method="POST" id="gradeForm">

        <label for="student_name">Student Name:</label>
        <input type="text" id="student_name" name="student_name" required>
        <br><br>
        <label for="student_id">Student ID:</label>
        <input type="text" id="student_id" name="student_id" required>
        <br><br>
        <label for="grade1">Grade 1:</label>
        <input type="number" id="grade1" name="grade1" min="0" max="100" step="0.01" required>
        <br><br>
        <label for="grade2">Grade 2:</label>
        <input type="number" id="grade2" name="grade2" min="0" max="100" step="0.01" required>
        <br><br>
        <label for="grade3">Grade 3:</label>
        <input type="number" id="grade3" name="grade3" min="0" max="100" step="0.01" required>
        <br><br>
        <button type="submit">Calculate Grade</button>

    </form>

    <script src="script/script.js"></script>

</body>
</html>