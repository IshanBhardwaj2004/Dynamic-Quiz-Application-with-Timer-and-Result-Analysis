<?php 
$category = $_GET['category'] ?? 'general';
$difficulty = $_GET['difficulty'] ?? 'easy';
?>

<!DOCTYPE html>
<html>
<head>
    <title>Quiz</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>

<div class="card quiz-card">

    <div class="top-bar">
        <span id="qno"></span>
        <span id="timer">10</span>
    </div>

    <h3 id="question"></h3>

    <div id="options"></div>

    <!-- Bottom-right button -->
    <div class="nav-bar">
        <button
            id="nextBtn"
            class="primary-btn"
            onclick="nextQuestion()"
            disabled
        >
            Next
        </button>
    </div>

</div>

<script>
const CATEGORY = "<?= htmlspecialchars($category) ?>";
const DIFFICULTY = "<?= htmlspecialchars($difficulty) ?>";
</script>

<script src="script.js"></script>
</body>
</html>
