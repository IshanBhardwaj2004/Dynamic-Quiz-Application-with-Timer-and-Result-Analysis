<!DOCTYPE html>
<html>
<head>
    <title>Dynamic Quiz Application</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>

<div class="card">
<h1>Dynamic Quiz Application</h1>
<p class="subtitle">Read instructions carefully before starting</p>

<ul class="instructions">
    <li>Select a category and difficulty.</li>
    <li>Each question has <b>10 seconds</b>.</li>
    <li>Auto-submit when time expires.</li>
    <li>No back navigation allowed.</li>
</ul>

<form action="quiz.php" method="get">
    <label>Category</label>
    <select name="category" required>
        <option value="general">General Knowledge</option>
        <option value="tech">Technology</option>
        <option value="math">Mathematics</option>
    </select>

    <label>Difficulty</label>
    <select name="difficulty" required>
        <option value="easy">Easy</option>
        <option value="medium">Medium</option>
        <option value="hard">Hard</option>
    </select>

    <button class="primary-btn">Start Quiz</button>
</form>
</div>

</body>
</html>
